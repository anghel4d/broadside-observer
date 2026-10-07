---
title: "Critical percolation on every quasi-transitive graph"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 213; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Critical-bond-and-site-percolation-on-the-cubic-lattice-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2068
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Critical bond and site percolation on the cubic lattice"
    url: "https://github.com/openai/math/blob/main/preprints/Critical-bond-and-site-percolation-on-the-cubic-lattice-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "No percolation at criticality on quasi-transitive graphs"
    url: "https://github.com/openai/math/blob/main/preprints/No-percolation-at-criticality-on-quasi-transitive-graphs-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Critical percolation on every quasi-transitive graph

## One-sentence takeaway

OpenAI's result family 213 (Probability and statistical mechanics) claims: Resolves the Benjamini–Schramm criticality conjecture for bond percolation on every infinite connected locally finite quasi-transitive graph with $p_c\lt 1$: at the critical probability, there is almost surely no infinite cluster.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The family also establishes this conclusion for both nearest-neighbor bond and site percolation on ℤ3.
- *Critical bond and site percolation on the cubic lattice*: We prove that nearest-neighbor Bernoulli bond and site percolation on ℤ3 have no infinite cluster at their respective critical parameters. The proof combines a finite connection inequality for independent hyperedges with a finite-scale extension estimate and an adaptive exploration.
- *No percolation at criticality on quasi-transitive graphs*: We prove that critical Bernoulli bond percolation has no infinite cluster on any infinite connected locally finite quasi-transitive graph with critical probability less than one. This resolves the bond form of the criticality conjecture of Benjamini and Schramm.
- Lean scope (lean/docs/213.md): The critical-percolation question asks whether an infinite cluster can remain at the threshold. The formalized result proves that, at their respective critical probabilities, nearest-neighbor bond and site percolation on $\mathbb Z^3$ almost surely have no infinite cluster.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Critical bond and site percolation on the cubic lattice](https://github.com/openai/math/blob/main/preprints/Critical-bond-and-site-percolation-on-the-cubic-lattice-September-24-2026/paper.pdf)
- Manuscript: [No percolation at criticality on quasi-transitive graphs](https://github.com/openai/math/blob/main/preprints/No-percolation-at-criticality-on-quasi-transitive-graphs-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/213.md
- Comparator statement (No infinite critical clusters on $\mathbb Z^3$): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CriticalZ3.lean
- Comparator statement (No infinite cluster at the critical probability): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CriticalPercolation.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
