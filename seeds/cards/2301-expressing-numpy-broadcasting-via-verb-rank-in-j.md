---
title: "Expressing NumPy Broadcasting via Verb Rank in J"
authors:
  - "Marcin Żołek"
year: 2026
venue: "arXiv"
arxiv: "2609.16064"
doi: null
source: "https://arxiv.org/abs/2609.16064"
topics:
  - "array-languages"
  - "rank-polymorphism"
  - "j-language"
  - "numpy"
seed_rank: 2301
seed_batch: "craft-2026-10-15"
reviewed: "2026-10-15"
pool: "languages"
relevance_score: 8
lineage: rank-polymorphism
cites:
  - title: "Expressing NumPy Broadcasting via Verb Rank in J"
    url: "https://arxiv.org/abs/2609.16064"
    year: 2026
    arxiv: "2609.16064"
    doi: null
  - title: "Rank and Uniformity"
    url: "https://doi.org/10.1145/206944.206968"
    year: 1995
    arxiv: null
    doi: "10.1145/206944.206968"
  - title: "The NumPy array: a structure for efficient numerical computation"
    url: "https://arxiv.org/abs/1102.1523"
    year: 2011
    arxiv: "1102.1523"
    doi: "10.1109/MCSE.2011.37"
see:
  - "1045-rank-and-uniformity"
  - "1497-an-array-oriented-language-with-static-rank-polymorphism"
  - "1046-apl-question-hui-iverson-mcdonnell-whitney"
---

# Expressing NumPy Broadcasting via Verb Rank in J

## One-sentence takeaway

NumPy broadcasting (stretch length-1 axes, align shapes from the right) and J verb rank (split shapes into frame + k-cells, agree frames by prefix) are formally related, and broadcasting can be implemented as a J adverb, `Broadcastly`, that inserts the right sequence of rank conjunctions from the operand shapes.

## Why it matters here

Anyone designing an array layer (an ano/BQN-flavoured DSL, a shader-side batch language, or ECS column ops) must choose between broadcasting and rank/frame agreement as the "lifting" rule. This gives the precise translation, including gufunc signatures like `matmul (n?,k),(k,m?)`, so you can support NumPy-style semantics on top of a rank-based core, or explain where the two disagree.

## Key ideas

- **Shared vocabulary.** Array rank, shape, k-cell (subarray whose shape is a suffix) and frame (the prefix before the cells).
- **J verb rank.** A verb with dyadic rank `l r` works on l-cells of the left and r-cells of the right argument; frames must agree by *prefix*, the shorter frame is logically replicated. The rank conjunction `"` re-ranks any verb (e.g. `+"1`, `+"0 _`).
- **NumPy broadcasting.** ufuncs with a core signature (`(),()->()`, `(n),(n)->()`, `(n?,k),(k,m?)->(n?,m?)`) align loop dimensions from the *right* and expand length-1 dimensions.
- **Correspondence.** ufunc signature ↔ verb dyadic rank (`*"0 0`, `+/@:*"1 1`, `+/ .*"2 2`); the gap is suffix-vs-prefix agreement and length-1 stretching.
- **`Broadcastly` algorithm.** From the operand shapes, determine NumPy's broadcast dimensions, strip them, and build a verb by applying a sequence of rank conjunctions so that `x u Broadcastly y` equals `u(x, y)` in NumPy. Runnable in the Juno web IDE; usable from Python via J's NumPy bridge.

## Caveats

Short semantic paper rather than a performance study; no treatment of NumPy's optional-dimension corner cases beyond the shown signatures, nor of BQN/Dyalog leading-axis conventions. Author is at Jsoftware. Preprint (v2 2026-09-16).

## Links

- arXiv abstract: https://arxiv.org/abs/2609.16064
- PDF: https://arxiv.org/pdf/2609.16064
- Live demo (Juno IDE): https://jsoftware.github.io/juno/app/?s=broadcastly
