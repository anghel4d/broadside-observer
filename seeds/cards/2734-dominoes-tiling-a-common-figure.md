---
title: "Dominoes tiling a common figure"
authors:
  - "Peter Keevash"
  - "Jeck Lim"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2611.33154"
doi: null
source: "https://arxiv.org/abs/2611.33154"
version_reviewed: "v1"
topics:
  - "tilings"
  - "dominoes"
  - "absorption-method"
  - "perfect-matchings"
  - "additive-combinatorics"
seed_rank: 2734
seed_batch: "curiosity-2026-11-27"
reviewed: "2026-11-27"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "Dominoes tiling a common figure"
    url: "https://arxiv.org/abs/2611.33154"
    year: 2026
    arxiv: "2611.33154"
    doi: null
see: []
---

# Dominoes tiling a common figure

## One-sentence takeaway

Given any finite set of "dominoes" (two-cell subsets of Z², not necessarily adjacent), there is a finite non-empty figure that each one of them can tile on its own by translation. More generally the same holds for arithmetic progressions of any length.

## Why it's lovely

Sagdeev's question sounds like a puzzle-book page. For the two standard dominoes a 2×2 square works. Add the two diagonal dominoes and Sagdeev found a stranger common figure. Add a horizontal domino with a gap and the problem gets hard: a SAT solver (Tikhomirov) found a 416-cell solution, minimal in the sense that nothing with a smaller bounding box works. Keevash and Lim show a common figure always exists, whatever finite list you pick. The proof is not a construction you could draw. It is a new *absorption mechanism for perfect matchings in algebraically defined hypergraphs*, the same probabilistic-combinatorics machinery used for designs, now aimed at a picture you can hold in your head. For an engine or RTS mind it is a pleasing statement about shapes on grids: no matter how many incompatible "stamps" you have, there is a region every stamp can fill exactly. The contrast between the SAT search and the existence proof is a nice lesson too.

## Key ideas

- **Theorem 1.2.** For any arithmetic progressions D₁, …, D_k ⊂ Z² (sets a, a+v, …, a+(d−1)v), there is a finite non-empty B ⊂ Z² tileable by every D_i. Dominoes are APs of length 2.
- **Equivalence.** Sagdeev showed the AP version and the domino version are equivalent. The authors work with APs directly because they are easier to handle.
- **Reductions.** APs with the same direction merge into one. Non-primitive directions become longer APs with a primitive direction. All lengths can be equalized to a common multiple.
- **Absorption.** The core is a new absorption mechanism for perfect matchings in algebraically defined hypergraphs (I did not read how it is built).
- **Scale.** The paper is 42 pages. The proof gives existence, not small figures.

## Caveats

This is a v1 preprint (24 Nov 2026), not refereed. I read the abstract, the introduction and the opening of the proof overview. Nothing here bounds the size of B, and the 416-cell example shows real figures can be large. The AI-use statement says GPT versions were used for figures, proofreading and editing, with no changes to the main arguments.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.33154
- PDF: https://arxiv.org/pdf/2611.33154
