---
title: "A Critical Pair Enumeration Algorithm for String Diagram Rewriting"
authors: ["Anna Matsui", "Innocent Obi", "Guillaume Sabbagh", "Leo Torres", "Diana Kessler", "Juan F. Meleiro", "Koko Muroya"]
year: 2026
venue: "arXiv"
arxiv: "2603.09433"
doi: null
source: "https://arxiv.org/abs/2603.09433"
topics: [curiosity]
seed_rank: 1027
seed_batch: "curiosity-2026-08-15"
reviewed: "2026-08-15"
pool: "languages"
relevance_score: 8
lineage: string-diagrams
cites:
  - title: "String Diagram Rewrite Theory I: Rewriting with Frobenius Structure"
    url: "https://arxiv.org/abs/2012.01847"
    year: 2022
    arxiv: "2012.01847"
    doi: "10.1145/3502719"
  - title: "String diagram rewrite theory II: Rewriting with symmetric monoidal structure"
    url: "https://arxiv.org/abs/2104.14686"
    year: 2022
    arxiv: "2104.14686"
    doi: "10.1017/S0960129522000317"
  - title: "String diagram rewrite theory III: Confluence with and without Frobenius"
    url: "https://arxiv.org/abs/2107.06141"
    year: 2022
    arxiv: "2107.06141"
    doi: "10.1017/S0960129522000123"
  - title: "The Geometry of Tensor Calculus, I"
    url: "https://doi.org/10.1016/0001-8708(91)90003-P"
    year: 1991
    arxiv: null
    doi: "10.1016/0001-8708(91)90003-P"
  - title: "A Survey of Graphical Languages for Monoidal Categories"
    url: "https://arxiv.org/abs/0908.3347"
    year: 2011
    arxiv: "0908.3347"
    doi: "10.1007/978-3-642-12821-9_4"
see:
  - "951-an-introduction-to-string-diagrams-for-computer-scientists"
  - "948-the-geometry-of-tensor-calculus-i"
  - "117-a-survey-of-graphical-languages-for-monoidal-categories"
  - "147-interaction-nets"
  - "933-weaves-wires-and-morphisms-algebra-of-deep-learning"
---

# A Critical Pair Enumeration Algorithm for String Diagram Rewriting

## One-sentence takeaway

Bonchi et al. proved that critical-pair analysis decides local confluence for convex DPOI string-diagram rewriting; this paper turns that theorem into an algorithm that enumerates the pairs by two-fold hypergraph gluing, with a Haskell proof-of-concept.

## Why it matters here

Why you might love this: interaction nets (147) and Weaves already treat graphs as the term language; confluence is the standing-rule question "does rewrite order matter?" The technique is concrete — independent edge sets on the complete bipartite graph of equally labelled hyperedges, then coequalisers in Hyp_Σ — not a rewriting survey. Bridge: this is the Knuth–Bendix layer under the string-diagram cards already on main.

## Key ideas

- Left-connected convex DPOI rules: a critical pair is uniquely a cp-cospan L₁ + L₂ ↠ S ← I+O with the left leg epi given by two mono matches.
- Enumeration = glue at least one pair of hyperedges from L₁ and L₂, then (optionally) glue inputs of one to outputs of the other, rejecting cyclic/non-monogamous results.
- Correctness and exhaustiveness (Thm 3.9). Optimised Algo. 4 drops the node-gluing pass: hyperedge-only gluings suffice to decide local confluence.
- PoC: https://github.com/GuiSab/hypergraphrewriting — non-commutative bimonoids emit 58 pairs vs 22 up to iso (no hypergraph-iso filter yet).

## Caveats


## Links

- arXiv: [2603.09433](https://arxiv.org/abs/2603.09433)
- Implementation: https://github.com/GuiSab/hypergraphrewriting
