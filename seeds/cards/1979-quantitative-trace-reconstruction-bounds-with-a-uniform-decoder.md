---
title: "Quantitative trace-reconstruction bounds with a uniform decoder"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 122; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Uniform-quasipolynomial-time-trace-reconstruction-October-5-2026/uniform-trace-reconstruction.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1979
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Uniform quasipolynomial-time trace reconstruction"
    url: "https://github.com/openai/math/blob/main/preprints/Uniform-quasipolynomial-time-trace-reconstruction-October-5-2026/uniform-trace-reconstruction.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A latest-anchor induction with spectrally compact masks for worst-case trace reconstruction"
    url: "https://github.com/openai/math/blob/main/preprints/A-latest-anchor-induction-with-spectrally-compact-masks-for-worst-case-trace-reconstruction-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Quantitative lower bounds for trace reconstruction"
    url: "https://github.com/openai/math/blob/main/preprints/quantitative-lower-bounds-for-trace-reconstruction-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Quantitative trace-reconstruction bounds with a uniform decoder

## One-sentence takeaway

OpenAI's result family 122 (Theoretical computer science) claims: At every fixed deletion probability in $(0,1)$, reconstructing an arbitrary length-n binary string requires $n^{\Omega(\log\log n)}$ independent traces, ruling out polynomial-sample reconstruction.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): A uniform decoder achieves quasipolynomial sample and running-time bounds for known fixed rational retention probabilities. When the deletion probability is at most $n^{-\varepsilon}$ for fixed ε > 0, both bounds become polynomial in the input and parameter encoding.
- *Uniform quasipolynomial-time trace reconstruction*: We give a uniform algorithm that reconstructs every binary string from independent deletion traces when its length and rational retention probability are known. For each fixed retention probability, both the number of traces and the bit complexity are quasipolynomial in the string length. More generally, we give an explicit sample bound uniform over all rational retention probabilities, with running time polynomial in the sample budget and the binary input length.
- *A latest-anchor induction with spectrally compact masks for worst-case trace reconstruction*: We give an improved worst-case sample bound for reconstructing a string from independent deletion traces, with its length and retention probability known. For each fixed retention probability, the number of traces is quasipolynomial: the logarithm of the sample budget is $O((\log n)^3(1+\log\log(2n))^6)$. If the deletion probability is at most $n^{-\varepsilon}$ for fixed ε > 0, polynomially many traces suffice.
- *Quantitative lower bounds for trace reconstruction*: Exact worst-case reconstruction of a binary word from independent deletion traces requires $n^{\Omega(\log\log n)}$ samples for every fixed deletion probability $q\in(0,1)$, even with unrestricted computation and any fixed positive success probability. This gives a negative answer to the polynomial-sample question for binary trace reconstruction. More generally, when $q^3\log n\to\infty$, we prove a lower bound of $n^{c\log(q^3\log n)}$ samples for every fixed $0\lt c\lt 1/(4\log2)$.
- Lean scope (lean/docs/122.md): The formalization proves superpolynomial sample lower bounds for exact worst-case reconstruction of binary words from independent deletion traces, with unrestricted computation and any fixed positive success probability. For every fixed deletion probability $q\in(0,1)$, sample complexity grows faster than every fixed power of the word length; the minimum total-variation distance between two one-trace laws decays faster than every inverse power.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Uniform quasipolynomial-time trace reconstruction](https://github.com/openai/math/blob/main/preprints/Uniform-quasipolynomial-time-trace-reconstruction-October-5-2026/uniform-trace-reconstruction.pdf)
- Manuscript: [A latest-anchor induction with spectrally compact masks for worst-case trace reconstruction](https://github.com/openai/math/blob/main/preprints/A-latest-anchor-induction-with-spectrally-compact-masks-for-worst-case-trace-reconstruction-October-5-2026/paper.pdf)
- Manuscript: [Quantitative lower bounds for trace reconstruction](https://github.com/openai/math/blob/main/preprints/quantitative-lower-bounds-for-trace-reconstruction-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/122.md
- Comparator statement (Quantitative and superpolynomial sample lower bounds for trace reconstruction): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TraceReconstruction.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
