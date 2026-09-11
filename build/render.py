# -*- coding: utf-8 -*-
"""Render assembled exams as printable markdown papers plus answer keys."""
import json, io, os, collections

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "..", "data")
EXAMS = os.path.join(HERE, "..", "exams")

LETTERS = "ABCDEFGH"


def render_exam(spec, pool, meta):
    n = spec["number"]
    qs = [pool[i] for i in spec["question_ids"]]
    dn, dnum = meta["domain_names"], meta["domain_num"]
    dist = collections.Counter(q["domain"] for q in qs)

    L = []
    L.append("# SAA-C03 Practice Exam %d" % n)
    L.append("")
    L.append("%d questions | %d minutes | passing score 720 of 1000 (about 36 of 65 correct)"
             % (len(qs), meta["time_limit_min"]))
    L.append("")
    L.append("Answer every question. There is no penalty for a wrong answer. Questions marked")
    L.append("*(Choose two.)* or *(Choose three.)* need exactly that many selections.")
    L.append("")
    L.append("| Domain | This paper | Real exam |")
    L.append("|---|---:|---:|")
    for d in ["SEC", "REL", "PERF", "COST"]:
        L.append("| %d. %s | %d | %d%% |" % (dnum[d], dn[d], dist[d], round(dist[d] / len(qs) * 100)))
    L.append("")
    L.append("---")
    L.append("")

    for i, q in enumerate(qs, 1):
        L.append("**%d.** %s" % (i, q["stem"]))
        L.append("")
        for letter in LETTERS:
            if letter in q["options"]:
                L.append("- **%s.** %s" % (letter, q["options"][letter]))
        L.append("")

    L.append("---")
    L.append("")
    L.append("## Answer key -- Exam %d" % n)
    L.append("")
    L.append("`Consensus` is the share of ExamTopics voters choosing that answer. Anything")
    L.append("below 70% is genuinely contested -- open the discussion link before trusting it.")
    L.append("")
    L.append("| # | Answer | Domain | Consensus | Source |")
    L.append("|---:|---|---|---:|---|")
    for i, q in enumerate(qs, 1):
        conf = "%d%%" % q["confidence"] if q.get("confidence") is not None else "n/a"
        flag = " ⚠" if q["difficulty"] == "hard" else ""
        src = "[Q%d](%s)" % (q["id"], q["discussion"]) if q.get("discussion") else "Q%d" % q["id"]
        L.append("| %d | **%s** | %d. %s | %s%s | %s |"
                 % (i, " ".join(q["answer"]), dnum[q["domain"]], dn[q["domain"]], conf, flag, src))
    L.append("")
    return "\n".join(L)


def render_readme(meta, pool, exams):
    dn, dnum = meta["domain_names"], meta["domain_num"]
    L = []
    L.append("# SAA-C03 practice exam set")
    L.append("")
    L.append("Six full-length papers built from a %d-question bank, each one shaped to the"
             % len(pool))
    L.append("published AWS Certified Solutions Architect - Associate (SAA-C03) exam guide.")
    L.append("")
    L.append("## What each paper matches")
    L.append("")
    L.append("| Property | Real exam | These papers |")
    L.append("|---|---|---|")
    L.append("| Questions | 65 (50 scored, 15 unscored) | 65, all scored |")
    L.append("| Time | 130 minutes | 130 minutes |")
    L.append("| Passing score | 720 / 1000 scaled | ~36 of 65 correct |")
    L.append("| Question types | multiple choice and multiple response | 57 single, 7 choose-two, 1 choose-three |")
    L.append("| Domain mix | 30 / 26 / 24 / 20 | 19 / 17 / 16 / 13 questions |")
    L.append("| Ordering | domains interleaved | never more than 2 in a row per domain or service family |")
    L.append("")
    L.append("## Domain weights")
    L.append("")
    L.append("| Domain | Weight | Questions per paper |")
    L.append("|---|---:|---:|")
    for d in ["SEC", "REL", "PERF", "COST"]:
        L.append("| %d. %s | %d%% | %d |"
                 % (dnum[d], dn[d], round(meta["blueprint"][d] / 65 * 100), meta["blueprint"][d]))
    L.append("| **Total** | **100%** | **65** |")
    L.append("")
    L.append("## Difficulty mix")
    L.append("")
    L.append("Difficulty comes from how strongly the ExamTopics community agreed on the answer.")
    L.append("Each paper carries the same spread, so scores are comparable across papers.")
    L.append("")
    L.append("| Band | Community agreement | Per paper |")
    L.append("|---|---|---:|")
    L.append("| Straightforward | 90% or more | 37 |")
    L.append("| Moderate | 70-89% | 20 |")
    L.append("| Contested | under 70% | 8 |")
    L.append("")
    L.append("Contested questions are flagged with a warning sign in the answer key. Read the")
    L.append("linked discussion on those rather than memorising the key.")
    L.append("")
    L.append("## Papers")
    L.append("")
    for e in exams:
        L.append("- [Practice Exam %d](exam-%02d.md)" % (e["number"], e["number"]))
    L.append("")
    L.append("## Rebuilding")
    L.append("")
    L.append("```bash")
    L.append("python build/extract.py    # PDF -> data/questions.json")
    L.append("python build/classify.py   # add domain labels -> data/classified.json")
    L.append("python build/assemble.py   # pick and order the papers -> data/exams.json")
    L.append("python build/render.py     # write exams/*.md")
    L.append("```")
    L.append("")
    L.append("## A caveat worth reading")
    L.append("")
    L.append("The question bank is a community dump, not official AWS material. Answers are the")
    L.append("community's, and the domain label on each question is inferred from its wording,")
    L.append("not assigned by AWS. Treat the domain counts as a faithful reproduction of the")
    L.append("blueprint's shape rather than a certified mapping.")
    L.append("")
    return "\n".join(L)


def main():
    meta = json.load(io.open(os.path.join(DATA, "exams.json"), encoding="utf-8"))
    pool = {q["id"]: q for q in meta["pool"]}
    os.makedirs(EXAMS, exist_ok=True)
    for spec in meta["exams"]:
        path = os.path.join(EXAMS, "exam-%02d.md" % spec["number"])
        io.open(path, "w", encoding="utf-8").write(render_exam(spec, pool, meta))
        print("wrote", path)
    readme = os.path.join(EXAMS, "README.md")
    io.open(readme, "w", encoding="utf-8").write(render_readme(meta, meta["pool"], meta["exams"]))
    print("wrote", readme)


if __name__ == "__main__":
    main()
