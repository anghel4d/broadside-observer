---
title: "A quasilinear PCP theorem for PPAD"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 136; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-PCP-for-PPAD-conjecture-a-quasilinear-reduction-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "unformalized"
seed_rank: 1992
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The PCP-for-PPAD conjecture: a quasilinear reduction"
    url: "https://github.com/openai/math/blob/main/preprints/The-PCP-for-PPAD-conjecture-a-quasilinear-reduction-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A quasilinear PCP theorem for PPAD

## One-sentence takeaway

OpenAI's result family 136 (Theoretical computer science) claims: Resolves the quasilinear PCP-for-PPAD conjecture.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): An End-of-Line instance of length N reduces to numerical circuit constraints of total length $N(\log N)^{O(1)}$ such that any polynomially encoded rational assignment satisfying all but a fixed fraction to fixed accuracy yields an endpoint solution. Such assignments always exist, giving robust local verification with only quasilinear size overhead.
- *The PCP-for-PPAD conjecture: a quasilinear reduction*: We prove the quasilinear-size PCP-for-PPAD conjecture of Babichenko, Papadimitriou, and Rubinstein. There are fixed positive rational constants ε and δ and a deterministic polynomial-time reduction that transforms an End-of-Line instance of binary length N into a generalized circuit of total binary length $N(\log N)^{O(1)}$. From any rational assignment of polynomial encoding length that ε-satisfies all but a δ fraction of the gates, a solution to the original End-of-Line instance can be recovered in polynomial time, regardless of which gates fail.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [The PCP-for-PPAD conjecture: a quasilinear reduction](https://github.com/openai/math/blob/main/preprints/The-PCP-for-PPAD-conjecture-a-quasilinear-reduction-September-25-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
