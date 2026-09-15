# SAA-C03 Exam Room

Six full-length AWS Certified Solutions Architect – Associate (SAA-C03) practice
papers, built to the published exam guide, plus a browser exam simulator that
times you and marks the result by domain.

## What is here

| Path | What it holds |
|---|---|
| [`exams/`](exams/) | The six papers as markdown, each with its own answer key |
| [`app/exam-room.html`](app/exam-room.html) | The simulator — one self-contained file, open it in any browser |
| [`app/exam-room.src.html`](app/exam-room.src.html) | The same page before the question bank is inlined |
| [`build/`](build/) | The pipeline that turns the source dump into papers |
| `data/` | Parsed, classified and assembled question data |

## How each paper matches the real exam

| Property | Real exam | These papers |
|---|---|---|
| Questions | 65 (50 scored, 15 unscored) | 65, all scored |
| Time | 130 minutes | 130 minutes |
| Passing score | 720 of 1000 scaled | 720, estimated at 72% correct |
| Question types | multiple choice and multiple response | 57 single, 7 choose-two, 1 choose-three |
| Ordering | domains interleaved | never more than two in a row from one domain or service family |

Domain counts come straight from the exam guide weights:

| Domain | Weight | Per paper |
|---|---:|---:|
| 1. Design Secure Architectures | 30% | 19 |
| 2. Design Resilient Architectures | 26% | 17 |
| 3. Design High-Performing Architectures | 24% | 16 |
| 4. Design Cost-Optimized Architectures | 20% | 13 |

Difficulty is drawn from how strongly the community agreed on each answer, split
37 straightforward, 20 moderate and 8 contested on every paper, so scores are
comparable across all six. The 390 questions used never repeat between papers.

## The most likely paper

A seventh paper, `exams/most-likely.md` and the first card in the simulator,
holds the 65 most recently reported questions, still at 19/17/16/13 with 7
choose-two and 1 choose-three. The dump has no dates, so recency comes from the
ExamTopics discussion id on each question, which rises in posting order; a
scenario reported again later takes the newer id. It leans toward the part of
the bank least likely to have been retired. It does not predict any one sitting.

## Rebuilding

The source PDF is deliberately not committed. Point the first step at your own
copy, then run the rest in order.

```bash
pip install pypdf
python build/extract.py "path/to/SAA-C03 dump.pdf"   # -> data/questions.json
python build/classify.py                             # -> data/classified.json
python build/assemble.py                             # -> data/exams.json
python build/likely.py                               # -> data/exams.json (most-likely paper)
python build/render.py                               # -> exams/*.md
python build/bundle.py                               # -> app/exam-room.html
```

`extract.py` parses the dump, drops the handful of questions whose options only
exist as images, and repairs a few typos in the source. `classify.py` labels each
question with a domain from the qualifier in the asked sentence, the requirement
phrases in the scenario, and the services named in the correct answer.
`assemble.py` deals questions to all six papers at once so scarce topics are
shared evenly, then orders each paper so domains and service families keep
rotating.

## Caveats

The bank is a community question dump, not official AWS material. Every answer is
the one the community voted for, and the percentage beside it in the answer key
is how strongly they agreed. Anything under 70 per cent is genuinely disputed —
read the linked discussion rather than memorising the key.

Domain labels are inferred from each question's wording, not assigned by AWS. A
hand-check of 28 questions put the labelling at roughly 90 per cent, with the
misses on genuinely ambiguous items. The counts reproduce the blueprint's shape;
they are not a certified mapping.
