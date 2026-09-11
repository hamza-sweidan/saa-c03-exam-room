# -*- coding: utf-8 -*-
"""Bundle the question bank into the exam simulator page.

Reads app/exam-room.src.html (the page, with a __DATA__ placeholder) and
data/exams.json, and writes app/exam-room.html with the bank inlined.
"""
import json, io, os

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..")
SRC = os.path.join(ROOT, "app", "exam-room.src.html")
OUT = os.path.join(ROOT, "app", "exam-room.html")


def bank():
    meta = json.load(io.open(os.path.join(ROOT, "data", "exams.json"), encoding="utf-8"))
    compact = [{
        "i": q["id"], "s": q["stem"], "o": q["options"], "a": q["answer"],
        "n": q["nsel"], "c": q["confidence"], "d": q["domain"],
        "f": q["family"], "x": q["difficulty"], "u": q.get("discussion"),
    } for q in meta["pool"]]
    return {"e": [e["question_ids"] for e in meta["exams"]], "q": compact}


def main():
    shell = io.open(SRC, encoding="utf-8").read()
    if "__DATA__" not in shell:
        raise SystemExit("app/exam-room.src.html has no __DATA__ placeholder")
    data = json.dumps(bank(), separators=(",", ":"), ensure_ascii=False)
    # a literal </script> inside the JSON would close the tag early
    page = shell.replace("__DATA__", data.replace("</script>", "<\\/script>"))
    io.open(OUT, "w", encoding="utf-8").write(page)
    print("wrote %s (%.2f MB, %d questions)"
          % (OUT, len(page.encode("utf-8")) / 1048576, len(bank()["q"])))


if __name__ == "__main__":
    main()
