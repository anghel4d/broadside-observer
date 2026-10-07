---
title: "One-tape time simulation in two-fifths-power space"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 137; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Simulating-One-Tape-Time-in-Two-Fifths-Power-Space-September-25-2026/article.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "unformalized"
seed_rank: 1993
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Simulating One-Tape Time in Two-Fifths-Power Space"
    url: "https://github.com/openai/math/blob/main/preprints/Simulating-One-Tape-Time-in-Two-Fifths-Power-Space-September-25-2026/article.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# One-tape time simulation in two-fifths-power space

## One-sentence takeaway

OpenAI's result family 137 (Theoretical computer science) claims: Determines the halting and finite-control outcome of a fixed deterministic one-writable-tape machine up to time T using $O(T^{2/5}\log^C(T+2))$ space, improving the square-root exponent.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): Heads move at most one cell per step; finitely many read-only input heads are allowed. Initial contents are independent of T, and contents and input symbols have polylogarithmic-space access. Simulation time is unrestricted.
- *Simulating One-Tape Time in Two-Fifths-Power Space*: We show that a fixed deterministic Turing machine with one writable tape and head can be simulated in $O(T^{2/5}\mathop{\mathrm{polylog}}\nolimits (T+2))$ work-space bits when a binary time cap T ≥ 2 is supplied. The simulator computes the finite-control and halting outcome by time T; its running time is unrestricted. The result allows a fixed number of read-only input heads and requires a fixed accessor that supplies every initial writable and read-only symbol within distance T of the relevant head origin in polylogarithmic space.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Simulating One-Tape Time in Two-Fifths-Power Space](https://github.com/openai/math/blob/main/preprints/Simulating-One-Tape-Time-in-Two-Fifths-Power-Space-September-25-2026/article.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
