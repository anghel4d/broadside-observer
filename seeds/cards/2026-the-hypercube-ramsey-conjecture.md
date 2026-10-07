---
title: "The hypercube Ramsey conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 171; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-hypercube-Ramsey-number-has-linear-order-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "unformalized"
seed_rank: 2026
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "The hypercube Ramsey number has linear order"
    url: "https://github.com/openai/math/blob/main/preprints/The-hypercube-Ramsey-number-has-linear-order-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The hypercube Ramsey conjecture

## One-sentence takeaway

OpenAI's result family 171 (Combinatorics) claims: Resolves the Burr–Erdős hypercube Ramsey conjecture: the two-color Ramsey number of the n-dimensional cube is $\Theta(2^n)$.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): Thus every red-blue coloring of a complete graph on a universal constant times the cube's number of vertices contains a monochromatic copy of the cube.
- *The hypercube Ramsey number has linear order*: We prove that the two-color Ramsey number of the n-dimensional binary cube is at most $C2^n$, where C is an absolute constant. This resolves positively the hypercube Ramsey conjecture of Burr and Erdős.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [The hypercube Ramsey number has linear order](https://github.com/openai/math/blob/main/preprints/The-hypercube-Ramsey-number-has-linear-order-September-23-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
