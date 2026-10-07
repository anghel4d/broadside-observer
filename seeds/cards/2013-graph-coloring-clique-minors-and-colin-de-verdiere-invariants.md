---
title: "Graph coloring, clique minors, and Colin de Verdière invariants"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 157; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Hadwigers-conjecture-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2013
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A counterexample to Hadwiger's conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Hadwigers-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A counterexample to the Colin de Verdière chromatic conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-the-Colin-de-Verdiere-chromatic-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A linear list-coloring bound in terms of the Hadwiger number"
    url: "https://github.com/openai/math/blob/main/preprints/A-linear-list-coloring-bound-in-terms-of-the-Hadwiger-number-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Graph coloring, clique minors, and Colin de Verdière invariants

## One-sentence takeaway

OpenAI's result family 157 (Combinatorics) claims: Disproves Hadwiger's conjecture even for fractional coloring: arbitrarily large finite simple graphs with independence number at most two satisfy $\chi_f(G)\gt h(G)$, where $h(G)$ is the largest clique-minor order.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Also disproves the fractional Colin de Verdière chromatic bound $\chi_f(G)\le\mu(G)+1$. In the positive direction, every finite nonempty graph satisfies $\chi_{\mathrm{list}}(G)\le C h(G)$ for a universal constant C.
- *A counterexample to Hadwiger's conjecture*: We disprove Hadwiger's conjecture by constructing arbitrarily large graphs whose chromatic number exceeds their Hadwiger number. The examples have independence number at most two, and even their ordinary fractional chromatic number exceeds their Hadwiger number. Thus they also disprove the fractional-coloring weakening discussed by Reed and Seymour.
- *A counterexample to the Colin de Verdière chromatic conjecture*: We disprove the Colin de Verdière chromatic conjecture by constructing graphs whose chromatic number exceeds their Colin de Verdière invariant by more than one. The examples have independence number at most two. In fact, their ordinary fractional chromatic number also exceeds their Colin de Verdière invariant by more than one.
- *A linear list-coloring bound in terms of the Hadwiger number*: We prove that every finite nonempty graph G satisfies $\chi_{\mathrm{list}}(G)\le C h(G)$ for an absolute integer C, where $h(G)$ is the largest order of a clique minor. This resolves the Linear List Hadwiger conjecture affirmatively.
- Lean scope (lean/docs/157.md): The Linear List Hadwiger conjecture asks for a universal linear bound on list chromatic number in terms of clique-minor size. The formalization proves that there is one integer $C\ge1$ such that every finite nonempty simple graph $G$ satisfies $\chi_{\mathrm{list}}(G)\le C h(G)$, where $h(G)$ is the largest order of a clique minor.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A counterexample to Hadwiger's conjecture](https://github.com/openai/math/blob/main/preprints/A-counterexample-to-Hadwigers-conjecture-September-23-2026/paper.pdf)
- Manuscript: [A counterexample to the Colin de Verdière chromatic conjecture](https://github.com/openai/math/blob/main/preprints/A-counterexample-to-the-Colin-de-Verdiere-chromatic-conjecture-September-23-2026/paper.pdf)
- Manuscript: [A linear list-coloring bound in terms of the Hadwiger number](https://github.com/openai/math/blob/main/preprints/A-linear-list-coloring-bound-in-terms-of-the-Hadwiger-number-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/157.md
- Comparator statement (Linear list-coloring bound in the Hadwiger number): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ListHadwiger.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
