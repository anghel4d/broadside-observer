---
title: "The sharp exponential scale of edit-distance distortion"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 099; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Edit-Distance-in-l1-Matching-Bounds-up-to-Constants-in-the-Exponent-September-27-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "convex-and-metric-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1956
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Edit Distance in l1: Matching Bounds up to Constants in the Exponent"
    url: "https://github.com/openai/math/blob/main/preprints/Edit-Distance-in-l1-Matching-Bounds-up-to-Constants-in-the-Exponent-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Finite-Circle Obstructions, Binary Codes, and Histogram Embeddings for Edit Distance"
    url: "https://github.com/openai/math/blob/main/preprints/Finite-Circle-Obstructions-Binary-Codes-and-Histogram-Embeddings-for-Edit-Distance-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Tree Constructions for the l1 Distortion of Binary Edit Distance"
    url: "https://github.com/openai/math/blob/main/preprints/Tree-Constructions-for-the-l1-Distortion-of-Binary-Edit-Distance-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The sharp exponential scale of edit-distance distortion

## One-sentence takeaway

OpenAI's result family 099 (Convex and metric geometry) claims: Determines the least distortion of embedding edit distance on words of length at most d into real ℓ1: it is $\exp(\Theta(\sqrt{\log d\,\log\log d}))$.

## Why it matters here

Convex and metric geometry underlies collision, packing, embedding and spatial data-structure work. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Insertions, deletions and substitutions have unit cost. The constants are uniform over all finite alphabets with at least two symbols, even when the alphabet grows with d; binary words already force the lower bound.
- *Edit Distance in l1: Matching Bounds up to Constants in the Exponent*: We determine the exponential scale of the least ℓ1 distortion of unit-cost edit distance on all strings of length at most d. For every sufficiently large d, uniformly over finite alphabets of size at least two, the distortion lies between $\exp(c\sqrt{\log d\,\log\log d})$ and $\exp(C\sqrt{\log d\,\log\log d})$ for absolute constants $c,C\gt 0$. The lower bound already holds on binary strings of one common length.
- *Finite-Circle Obstructions, Binary Codes, and Histogram Embeddings for Edit Distance*: We give two finite-circle constructions of binary strings whose least ℓ1 distortion is $\exp(\Omega(\sqrt{\log d\,\log\log d}))$, where d bounds their length. Both constructions supply words of one common length for every sufficiently large cap. Two direct binary coding arguments transfer the constructions with absolute distortion and logarithmic block width.
- *Tree Constructions for the l1 Distortion of Binary Edit Distance*: We give two independent constructions of binary words of one length at most d whose ordinary edit-distance metrics require ℓ1 distortion $\exp(\Omega(\sqrt{\log d\,\log\log d}))$ for every sufficiently large d. We also prove a constant-distortion binary conversion for one prescribed input length. Together with the companion upper embedding theorem, these lower bounds determine the order of logarithmic distortion uniformly over finite alphabets with at least two symbols.
- Lean scope (lean/docs/099.md): The formalization determines the exponential scale of the least $\ell_1$ distortion of unit-cost edit distance on strings of length at most $d$. For every sufficiently large $d$, uniformly over finite alphabets with at least two symbols, the distortion lies between $\exp(c\sqrt{\log d\,\log\log d})$ and $\exp(C\sqrt{\log d\,\log\log d})$ for absolute constants $c,C>0$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 4 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The selected statements are the binary lower bounds. The paper's constant-distortion binary conversion and the companion upper embedding theorem are outside them.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Edit Distance in l1: Matching Bounds up to Constants in the Exponent](https://github.com/openai/math/blob/main/preprints/Edit-Distance-in-l1-Matching-Bounds-up-to-Constants-in-the-Exponent-September-27-2026/paper.pdf)
- Manuscript: [Finite-Circle Obstructions, Binary Codes, and Histogram Embeddings for Edit Distance](https://github.com/openai/math/blob/main/preprints/Finite-Circle-Obstructions-Binary-Codes-and-Histogram-Embeddings-for-Edit-Distance-September-27-2026/paper.pdf)
- Manuscript: [Tree Constructions for the l1 Distortion of Binary Edit Distance](https://github.com/openai/math/blob/main/preprints/Tree-Constructions-for-the-l1-Distortion-of-Binary-Edit-Distance-September-27-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/099.md
- Comparator statement (Matching exponential-scale bounds for edit-distance distortion): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/EditDistance.lean
- Comparator statement (Finite-circle obstructions and histogram embeddings for edit distance): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/FiniteCircle.lean
- Comparator statement (Binary edit-distance distortion lower bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BinaryEditLower.lean
- Comparator statement (Tree-based binary edit-distance distortion lower bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TreeEdit.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
