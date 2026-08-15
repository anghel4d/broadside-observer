---
title: "Rank and Uniformity"
authors: ["Roger K. W. Hui"]
year: 1995
venue: "APL95 / APL Quote Quad"
arxiv: null
doi: "10.1145/206944.206968"
source: "https://doi.org/10.1145/206944.206968"
topics: [rank-polymorphism, integrated-rank-support, j-language, array-languages]
seed_rank: 1045
seed_batch: "archive-2026-08-16"
reviewed: "2026-08-16"
pool: "languages"
relevance_score: 10
lineage: rank-polymorphism
cites:
  - title: "The Semantics of Rank Polymorphism"
    url: "https://arxiv.org/abs/1801.04512"
    year: 2019
    arxiv: "1801.04512"
    doi: null
  - title: "APL/?"
    url: "https://doi.org/10.1145/97811.97845"
    year: 1990
    arxiv: null
    doi: "10.1145/97811.97845"
  - title: "Operators"
    url: "https://doi.org/10.1145/359060.359068"
    year: 1979
    arxiv: null
    doi: "10.1145/359060.359068"
  - title: "An Implementation of J"
    url: "https://www.jsoftware.com/ioj/ioj.htm"
    year: 1992
    arxiv: null
    doi: null
see:
  - "926-the-semantics-of-rank-polymorphism"
  - "156-operators"
  - "045-notation-as-a-tool-of-thought"
  - "091-apl-since-1978"
  - "122-a-conversation-with-arthur-whitney"
---

# Rank and Uniformity

## One-sentence takeaway

Verb rank is a complete model (frames, cells, prefix agreement, permissive assembly); *integrated rank support* plus a calculus of uniform verbs is how an interpreter runs `v"r` at native speed instead of boxing every cell.

## Why it matters here

ano's BQN twins live and die by rank. 926 is the 2019 *semantics*; this 1995 APL95 paper is the missing implementation gem — Hui's executable J model of rank, IRS (don't build the cells), and uniform verbs (result shape is a function of argument shape, so empty frames and fusion have a closed form). Whitney's prefix agreement (Kiln Farm 1992) is in here.

## Key ideas

- A rank `r` splits shape into frame and cell; `v"r` maps `v` over cells after agreement, then assembles.
- Three agreement designs (scalar / suffix / prefix); J takes prefix agreement on Whitney's advice, generalising APL\\360 scalar extension.
- IRS: specialised code inside each primitive strides the array instead of constructing boxed cells. `{."1` is O(1) per row, not O(row length).
- Uniform verb: result rank/shape depend only on argument rank/shape. A rank calculus then composes calculators through `@` / `&` / `"` so empty frames and fusion don't call the verb on fill cells.
- Tables of which J primitives are uniform, with explicit rank and shape calculators.

## Caveats

- This is an interpreter paper for J, not a compiler IR. SAC with-loops and Futhark fusion are the compiled dual.
- Permissive assembly (pad to a common cell shape) is a design choice; ano may want the strict version.
- Do not remint *An Implementation of J* (1992 book) or Iverson's *Dictionary of APL* this cycle; they are cites.

## Links

- DOI: [10.1145/206944.206968](https://doi.org/10.1145/206944.206968)
- Author HTML: https://www.jsoftware.com/papers/rank.htm
