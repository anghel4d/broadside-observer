---
title: "Optimal-order randomized k-server on arbitrary metrics"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 110; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Squared-logarithmic-randomized-k-server-on-arbitrary-metrics-September-24-2026/Squared-logarithmic-randomized-k-server-on-arbitrary-metrics-September-24-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1967
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Squared-logarithmic randomized k-server on arbitrary metrics"
    url: "https://github.com/openai/math/blob/main/preprints/Squared-logarithmic-randomized-k-server-on-arbitrary-metrics-September-24-2026/Squared-logarithmic-randomized-k-server-on-arbitrary-metrics-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Uniform computation of the squared-logarithmic k-server bound"
    url: "https://github.com/openai/math/blob/main/preprints/Uniform-computation-of-the-squared-logarithmic-k-server-bound-September-24-2026/Uniform-computation-of-the-squared-logarithmic-k-server-bound-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Optimal-order randomized k-server on arbitrary metrics

## One-sentence takeaway

OpenAI's result family 110 (Theoretical computer science) claims: Establishes a randomized competitive ratio $O(\log^2(k+1))$ for k-server on every metric space, matching the worst-case lower-bound order.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): One policy serves every finite oblivious request sequence, including on infinite unbounded metrics. On finite rational metrics, a uniform implementation has polynomial preprocessing and per-request bit cost in the input length and $\log(t+1)$ at request t, with a finite instance-dependent additive movement constant.
- *Squared-logarithmic randomized k-server on arbitrary metrics*: We prove that randomized k-server has competitive ratio $O((\log(k+1))^2)$ on every metric space against oblivious request sequences, matching the known worst-case lower bound. For each metric and initial configuration, one policy works for all finite request sequences, including on infinite and unbounded spaces. When the initial server positions are distinct, no additive term is needed.
- *Uniform computation of the squared-logarithmic k-server bound*: We construct a uniform randomized k-server algorithm on finite rational metrics with competitive ratio $O(\log^2(k+1))$ against oblivious request sequences. Preprocessing is polynomial in the input length, and per-request bit complexity is polynomial in that length and the binary request-counter length. The additive movement constant is finite and instance-dependent, but may be enormous.
- Lean scope (lean/docs/110.md): The formalization proves an $O((\log(k+1))^2)$ competitive ratio for randomized $k$-server against oblivious finite request sequences. For every $k\ge2$, every metric space containing at least $k+1$ points, and every initial configuration, one policy works for all request sequences, including in infinite and unbounded spaces.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Squared-logarithmic randomized k-server on arbitrary metrics](https://github.com/openai/math/blob/main/preprints/Squared-logarithmic-randomized-k-server-on-arbitrary-metrics-September-24-2026/Squared-logarithmic-randomized-k-server-on-arbitrary-metrics-September-24-2026.pdf)
- Manuscript: [Uniform computation of the squared-logarithmic k-server bound](https://github.com/openai/math/blob/main/preprints/Uniform-computation-of-the-squared-logarithmic-k-server-bound-September-24-2026/Uniform-computation-of-the-squared-logarithmic-k-server-bound-September-24-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/110.md
- Comparator statement (Squared-logarithmic randomized $k$-server on arbitrary metrics): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/KServer.lean
- Comparator statement (Uniform bit algorithm for the squared-logarithmic $k$-server bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/UniformKServer.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
