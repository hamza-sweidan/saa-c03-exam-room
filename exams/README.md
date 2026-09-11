# SAA-C03 practice exam set

Six full-length papers built from a 1004-question bank, each one shaped to the
published AWS Certified Solutions Architect - Associate (SAA-C03) exam guide.

## What each paper matches

| Property | Real exam | These papers |
|---|---|---|
| Questions | 65 (50 scored, 15 unscored) | 65, all scored |
| Time | 130 minutes | 130 minutes |
| Passing score | 720 / 1000 scaled | ~36 of 65 correct |
| Question types | multiple choice and multiple response | 57 single, 7 choose-two, 1 choose-three |
| Domain mix | 30 / 26 / 24 / 20 | 19 / 17 / 16 / 13 questions |
| Ordering | domains interleaved | never more than 2 in a row per domain or service family |

## Domain weights

| Domain | Weight | Questions per paper |
|---|---:|---:|
| 1. Design Secure Architectures | 29% | 19 |
| 2. Design Resilient Architectures | 26% | 17 |
| 3. Design High-Performing Architectures | 25% | 16 |
| 4. Design Cost-Optimized Architectures | 20% | 13 |
| **Total** | **100%** | **65** |

## Difficulty mix

Difficulty comes from how strongly the ExamTopics community agreed on the answer.
Each paper carries the same spread, so scores are comparable across papers.

| Band | Community agreement | Per paper |
|---|---|---:|
| Straightforward | 90% or more | 37 |
| Moderate | 70-89% | 20 |
| Contested | under 70% | 8 |

Contested questions are flagged with a warning sign in the answer key. Read the
linked discussion on those rather than memorising the key.

## Papers

- [Practice Exam 1](exam-01.md)
- [Practice Exam 2](exam-02.md)
- [Practice Exam 3](exam-03.md)
- [Practice Exam 4](exam-04.md)
- [Practice Exam 5](exam-05.md)
- [Practice Exam 6](exam-06.md)

## Rebuilding

```bash
python build/extract.py    # PDF -> data/questions.json
python build/classify.py   # add domain labels -> data/classified.json
python build/assemble.py   # pick and order the papers -> data/exams.json
python build/render.py     # write exams/*.md
```

## A caveat worth reading

The question bank is a community dump, not official AWS material. Answers are the
community's, and the domain label on each question is inferred from its wording,
not assigned by AWS. Treat the domain counts as a faithful reproduction of the
blueprint's shape rather than a certified mapping.
