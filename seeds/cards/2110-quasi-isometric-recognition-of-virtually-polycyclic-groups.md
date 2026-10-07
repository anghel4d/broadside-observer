---
title: "Quasi-isometric recognition of virtually polycyclic groups"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 255; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/quasi-isometric-recognition-of-virtually-polycyclic-groups-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "group-theory"
  - "lean4"
  - "formalized"
seed_rank: 2110
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Quasi-isometric recognition of virtually polycyclic groups"
    url: "https://github.com/openai/math/blob/main/preprints/quasi-isometric-recognition-of-virtually-polycyclic-groups-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Quasi-isometric recognition of virtually polycyclic groups

## One-sentence takeaway

OpenAI's result family 255 (Group theory) claims: Proves that every finitely generated group quasi-isometric to a finitely generated virtually polycyclic group is virtually polycyclic, resolving the Eskin–Fisher–Whyte lattice-recognition conjecture.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Equivalently, a group quasi-isometric to a lattice in a connected simply connected solvable Lie group is virtually a uniform lattice in some such Lie group, possibly a different one.
- *Quasi-isometric recognition of virtually polycyclic groups*: We prove that every finitely generated group quasi-isometric to a finitely generated virtually polycyclic group is virtually polycyclic. This resolves the lattice-recognition conjecture of Eskin, Fisher and Whyte, which allows the ambient solvable Lie group in the conclusion to differ from the one in the hypothesis.
- Lean scope (lean/docs/255.md): The formalization proves quasi-isometric recognition of virtually polycyclic groups: every finitely generated group quasi-isometric to a finitely generated virtually polycyclic group is itself virtually polycyclic. It also realizes a finite-index subgroup of the recognized group as a uniform lattice in a simply connected solvable Lie group, which may differ from the original ambient group.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Quasi-isometric recognition of virtually polycyclic groups](https://github.com/openai/math/blob/main/preprints/quasi-isometric-recognition-of-virtually-polycyclic-groups-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/255.md
- Comparator statement (Quasi-isometric recognition of virtually polycyclic groups and solvable lattices): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PolycyclicRecognition.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
