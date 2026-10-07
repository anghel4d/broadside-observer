---
title: "Subset Sum in $O(2^{0.49n})$ time"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 138; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Subset-Sum-in-Time-2-power-0-49n-October-4-2026/subset-sum.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "unformalized"
seed_rank: 1994
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Subset Sum in Time $O(2^{0.49n})$"
    url: "https://github.com/openai/math/blob/main/preprints/Subset-Sum-in-Time-2-power-0-49n-October-4-2026/subset-sum.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Low-Space Algorithm for Worst-Case Subset Sum"
    url: "https://github.com/openai/math/blob/main/preprints/A-Low-Space-Algorithm-for-Worst-Case-Subset-Sum-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Subset Sum in $O(2^{0.49n})$ time

## One-sentence takeaway

OpenAI's result family 138 (Theoretical computer science) claims: Gives a uniform randomized classical algorithm for worst-case Subset Sum in ordinary $O(2^{0.49n})$ word-RAM time on polynomial-bit inputs, where n counts the integers.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): The time bound holds on every execution and success probability is at least 2/3 on every input. Inputs may repeat positive integers; words have $O(n+b)$ bits for maximum input bit length b.
- *Subset Sum in Time $O(2^{0.49n})$*: We give a uniform randomized classical algorithm for Subset Sum with bounded error and worst-case running time $O(2^{0.49n})$ on polynomial-bit inputs in a word-RAM model, where n is the number of input integers. The time bound holds on every random execution.
- *A Low-Space Algorithm for Worst-Case Subset Sum*: We give a uniform classical randomized decision algorithm for worst-case Subset Sum. Under every fixed polynomial bound on input-integer bit length, it uses $\mathop{\mathrm{poly}}\nolimits (n)2^{n/2}$ time and ordinary $O(2^{n/5})$ writable words of $O(n+b)$ bits, where b is the largest input bit length. Both resource bounds hold on every execution.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Subset Sum in Time $O(2^{0.49n})$](https://github.com/openai/math/blob/main/preprints/Subset-Sum-in-Time-2-power-0-49n-October-4-2026/subset-sum.pdf)
- Manuscript: [A Low-Space Algorithm for Worst-Case Subset Sum](https://github.com/openai/math/blob/main/preprints/A-Low-Space-Algorithm-for-Worst-Case-Subset-Sum-September-26-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
