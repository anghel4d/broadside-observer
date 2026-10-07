---
title: "Approximate counting of common integer polymatroid bases"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 114; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-FPRAS-for-Common-Integer-Polymatroid-Bases-with-Binary-Capacities-October-5-2026/polymatroid-fpras.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1971
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "An FPRAS for Common Integer Polymatroid Bases with Binary Capacities"
    url: "https://github.com/openai/math/blob/main/preprints/An-FPRAS-for-Common-Integer-Polymatroid-Bases-with-Binary-Capacities-October-5-2026/polymatroid-fpras.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Approximate counting of common bases of two matroids"
    url: "https://github.com/openai/math/blob/main/preprints/Approximate-counting-of-common-bases-of-two-matroids-September-23-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Approximate counting of common integer polymatroid bases

## One-sentence takeaway

OpenAI's result family 114 (Theoretical computer science) claims: Gives a fully polynomial randomized approximation scheme for counting common integer bases of two integral polymatroids of equal total rank, supplied by exact rank-value oracles.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Capacities are binary-encoded, each integer vector counts once, and oracle calls and bit operations outside the oracles are polynomial on every execution. For matroids presented by independence oracles, the results also cover common independent sets of prescribed, unrestricted, or maximum cardinality, even when the ranks differ.
- *An FPRAS for Common Integer Polymatroid Bases with Binary Capacities*: We give a fully polynomial randomized approximation scheme for counting common integer bases of two polymatroids with the same total rank, supplied by exact rank-value oracles. The total rank and capacities are encoded in binary, and each integer vector is counted once. On every execution, the number of oracle calls and the bit work outside the oracles are bounded by a fixed polynomial in the ground-set size, the binary input length, the inverse relative-error tolerance, and the logarithm of the inverse failure probability.
- *Approximate counting of common bases of two matroids*: We give a fully polynomial randomized approximation scheme for counting the common bases of two arbitrary matroids of the same rank, supplied by independence oracles. The algorithm requires no explicit representation of either matroid and has polynomial bounds on both oracle calls and bit operations on every execution.
- Lean scope (lean/docs/114.md): The formalized result gives a fully polynomial randomized approximation scheme for the number of common bases of two equal-rank matroids on an enumerated finite ground set, using independence oracles. For rational $0<\varepsilon,\delta<1$, the nonnegative rational output has relative error at most $\varepsilon$ with probability at least $1-\delta$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [An FPRAS for Common Integer Polymatroid Bases with Binary Capacities](https://github.com/openai/math/blob/main/preprints/An-FPRAS-for-Common-Integer-Polymatroid-Bases-with-Binary-Capacities-October-5-2026/polymatroid-fpras.pdf)
- Manuscript: [Approximate counting of common bases of two matroids](https://github.com/openai/math/blob/main/preprints/Approximate-counting-of-common-bases-of-two-matroids-September-23-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/114.md
- Comparator statement (FPRAS for common matroid bases): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CommonBasesFPRAS.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
