---
title: "TREAT: A Better Match Algorithm for AI Production Systems"
authors: ["Daniel P. Miranker"]
year: 1987
venue: "AAAI"
arxiv: null
doi: null
source: "https://aaai.org/papers/00042-aaai87-008-treat-a-better-match-algorithm-for-ai-production-systems/"
topics: [production-systems, rete, pattern-matching]
seed_rank: 1004
seed_batch: "archive-2026-08-14"
reviewed: "2026-08-14"
pool: "languages"
relevance_score: 9
lineage: production-systems
cites:
  - title: "Rete: A Fast Algorithm for the Many Pattern/Many Object Pattern Match Problem"
    url: "https://doi.org/10.1016/0004-3702(82)90020-0"
    year: 1982
    arxiv: null
    doi: "10.1016/0004-3702(82)90020-0"
  - title: "OPS5 User's Manual"
    url: "https://doi.org/10.1184/R1/6608303.v1"
    year: 1981
    arxiv: null
    doi: null
see:
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
  - "155-ops5-user-s-manual"
---

# TREAT: A Better Match Algorithm for AI Production Systems

## One-sentence takeaway

Conflict-set support — keep the conflict set across production-system cycles instead of Rete's β-memories — and TREAT beats Rete on real OPS5 programs, often by more than 50%.

## Why it matters here

GRID COMMAND's NL soldier orders and ano's trigger/production layer sit on Forgy's Rete (042) and the OPS5 manual (155). TREAT is the 1987 result that the library never minted: Rete's condition-element support can be the wrong state to save, and a cheaper matcher is the one you actually want in a frame-budget engine.

## Key ideas

- Rete saves partial matches in β-memories (condition-element support). Those memories are redundant: the same tokens reappear deeper in the network.
- TREAT instead retains the conflict set itself across cycles (conflict-set support) and uses it to bound the search for consistent variable bindings.
- On five OPS5 programs, TREAT needed fewer binding comparisons than Rete in every case; two programs needed less than half.
- This empirically supports McDermott/Newell/Moore's conjecture that Rete-style state saving may not be worthwhile.
- Negated condition elements and the usual OPS5 WM-change protocol are handled; TREAT is a drop-in matcher, not a new language.

## Caveats


## Links

- AAAI page: https://aaai.org/papers/00042-aaai87-008-treat-a-better-match-algorithm-for-ai-production-systems/
- PDF: https://cdn.aaai.org/AAAI/1987/AAAI87-008.pdf
