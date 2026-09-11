"""Extract and parse ExamTopics SAA-C03 dump PDF into structured JSON."""
import re, json, io, sys, os
from pypdf import PdfReader

SRC = sys.argv[1] if len(sys.argv) > 1 else r"C:\Users\h.sweidan\Downloads\Amazon AWS Certified Solutions Architect Associate SAA-C03 Exam.pdf"
OUT = os.path.join(os.path.dirname(__file__), "..", "data", "questions.json")

def pdf_text(path):
    r = PdfReader(path)
    return "\n".join((p.extract_text() or "") for p in r.pages)

# ---- source-level corrections (typos in the ExamTopics dump itself) ----
SOURCE_FIXES = [
    ("AW'S Regions", "AWS Regions"),
    ("Auto Sealing", "Auto Scaling"),
    ("Amazon ample Notification Service", "Amazon Simple Notification Service"),
    ("\u0415", "E"),      # Cyrillic homoglyph
]
# questions whose options/stem live in an image and cannot be reconstructed
DROP = {96, 423, 429, 477, 868}
# question 302: dump says "(Choose two.)" but lists a single suggested answer;
# community split is A 54% / C 44% -> the two-answer key is A and C.
ANSWER_FIXES = {302: "AC"}
# question 756: dump mislabels its third option as a second "B."
RELABEL = {756: [("B. Create a web application", "C. Create a web application")]}

OPT_RE = re.compile(r"^([A-H])\.\s+(.*)$")

def parse(raw):
    for a, b in SOURCE_FIXES:
        raw = raw.replace(a, b)
    raw = re.sub(r"^Exam question from Amazon's AWS Certified Solutions Architect - Associate SAA-C03\s*$", "", raw, flags=re.M)
    raw = re.sub(r"^\[All AWS Certified Solutions Architect - Associate SAA-C03 Questions\]\s*$", "", raw, flags=re.M)

    parts = re.split(r"^Question #:\s*(\d+)\s*$", raw, flags=re.M)
    out = []
    for i in range(1, len(parts) - 1, 2):
        num, body = int(parts[i]), parts[i + 1]
        if num in DROP:
            continue
        for old, new in RELABEL.get(num, []):
            body = body.replace(old, new)

        lines = [l.strip() for l in body.split("\n")]
        lines = [l for l in lines if l and not re.match(r"^Topic #:\s*\d+$", l)]

        stem, opts, cur, state = [], [], None, "stem"
        suggested = vote = discussion = None
        for s in lines:
            m = re.match(r"^Suggested Answer:\s*([A-H ,]+)$", s)
            if m:
                if cur: opts.append(cur); cur = None
                suggested = re.sub(r"[^A-H]", "", m.group(1)); state = "post"; continue
            if s == "Community vote distribution":
                state = "vote"; continue
            if s.startswith("Discussion:"):
                discussion = re.sub(r"\s+\d{1,4}$", "", s[len("Discussion:"):].strip())
                state = "done"; continue
            if state == "vote":
                vote = vote or s; continue
            if state in ("post", "done"):
                continue
            m = OPT_RE.match(s)
            if m:
                last = cur[0] if cur else (opts[-1][0] if opts else None)
                if m.group(1) == (chr(ord(last) + 1) if last else "A"):
                    if cur: opts.append(cur)
                    cur = [m.group(1), m.group(2)]; state = "opts"; continue
            if state == "opts" and cur:
                cur[1] += " " + s
            else:
                stem.append(s)
        if cur: opts.append(cur)

        options, most_voted = {}, []
        for letter, text in opts:
            if "Most Voted" in text:
                most_voted.append(letter)
                text = text.replace("Most Voted", " ")
            options[letter] = re.sub(r"\s+", " ", text).strip()

        stem_txt = re.sub(r"\s+", " ", " ".join(stem)).strip()
        stem_txt = re.sub(r"(?<=[.?!])\s+\d{1,4}$", "", stem_txt)

        nsel = 3 if re.search(r"\(Choose three\.?\)", stem_txt, re.I) else \
               2 if re.search(r"\(Choose two\.?\)", stem_txt, re.I) else 1
        answer = ANSWER_FIXES.get(num, suggested)

        pct = None
        if vote:
            mv = re.match(r"^[A-H]{1,4}\s*\((\d+)%\)", vote)
            if mv: pct = int(mv.group(1))

        if not (stem_txt and len(options) >= 4 and answer and len(answer) == nsel):
            print(f"  ! skipping malformed Q{num}", file=sys.stderr)
            continue

        out.append(dict(id=num, stem=stem_txt, options=options, answer=answer,
                        nsel=nsel, confidence=pct, vote=vote, discussion=discussion))
    return out

if __name__ == "__main__":
    qs = parse(pdf_text(SRC))
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    json.dump(qs, io.open(OUT, "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    print(f"parsed {len(qs)} questions -> {OUT}")
    print("select-N:", {n: sum(1 for q in qs if q['nsel'] == n) for n in (1, 2, 3)})
