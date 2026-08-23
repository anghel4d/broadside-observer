---
title: "egg: Fast and Extensible Equality Saturation"
authors: ["Max Willsey", "Chandrakana Nandi", "Yisu Remy Wang", "Oliver Flatt", "Zachary Tatlock", "Pavel Panchekha"]
year: 2021
venue: "PACMPL / POPL 2021"
arxiv: "2004.03082"
doi: "10.1145/3434304"
source: "https://arxiv.org/abs/2004.03082"
topics: [array-languages, compilers]
seed_rank: 1152
seed_batch: "craft-2026-08-23"
reviewed: "2026-08-23"
pool: "languages"
relevance_score: 10
lineage: array-languages
cites:
  - title: "Equality Saturation: a New Approach to Optimization"
    url: "https://doi.org/10.1145/1480881.1480915"
    year: 2009
    arxiv: null
    doi: "10.1145/1480881.1480915"
  - title: "Better Together: Unifying Datalog and Equality Saturation"
    url: "https://arxiv.org/abs/2304.04332"
    year: 2023
    arxiv: "2304.04332"
    doi: "10.1145/3591239"
  - title: "Latent Idiom Recognition for a Minimalist Functional Array Language using Equality Saturation"
    url: "https://arxiv.org/abs/2408.02290"
    year: 2024
    arxiv: "2408.02290"
    doi: null
  - title: "Redundant Array Computation Elimination"
    url: "https://arxiv.org/abs/2506.21960"
    year: 2026
    arxiv: "2506.21960"
    doi: "10.1145/3808327"
see:
  - "927-latent-idiom-recognition-for-a-minimalist-functional-array"
  - "1133-redundant-array-computation-elimination"
  - "1062-refined-remora-constraining-array-shapes"
  - "1002-futhark-purely-functional-gpu-programming"
---

# egg: Fast and Extensible Equality Saturation

## One-sentence takeaway

Rebuild congruence once per equality-saturation iteration and attach semilattice facts to e-classes: e-graphs become a library (egg) instead of a custom pass, so ano rewrites do not have to pick a phase order.

## Problem

ano lowering is a soup of rewrites (fusion, CSE, strength-reduction, idiom recognition). Destructive rewriting forgets the LHS and recreates the phase-ordering mess. 1133 is linear-time array CSE across loop nests; 927 is one equality-saturation *application*. Neither is the engine. Building a third ad-hoc e-graph for ano would repeat Herbie/Spores/Szalinski's pre-egg tax.

## Design

E-graph = union-find + hashcons + parent lists. Traditional ATP restores congruence after every merge (backtracking). Equality saturation does not backtrack: split each iteration into ematch (read) then add/merge (write), then **rebuild** — drain a worklist of dirty e-classes, canonicalize parents, merge newly-congruent parents. Worklist dedup coalesces overlapping upward-merge paths (~88× congruence in their tests). **E-class analyses** hang a join-semilattice fact on each class (constant, free vars, tensor shape); `make`/`join`/`modify` ride the same rebuild. Conditional/dynamic rewrites read those facts (e.g. `x/x → 1` only if analysis says ≠0). Extraction is itself an analysis when the cost is local.

## Evidence

POPL 2021 PACMPL 5(POPL) article 23, DOI `10.1145/3434304`, arXiv `2004.03082`. Open-source `egraphs-good/egg`. Case studies: Herbie backend ~3000× vs the old Racket e-graph; Spores derives SystemML sum-product rules; Szalinski CAD rerolling. egglog (PLDI 2023, `2304.04332`) unifies this with Datalog — cite, do not mint (last Craft already kept WGLog/Pusharoo).

## Limitations

Binding/alpha is not free (their λ example uses explicit subst). Extraction for non-local costs needs ILP/SAT, not the greedy analysis. Rebuild-once-per-iteration means mid-iteration matches can miss merges until the next round. Not Remora shapes (1062), not Futhark hashmaps (1033), not RACE CSE (1133).

## Implications for Broadside

ano's rewrite pipeline should be an egg e-graph with an array-shape e-class analysis, not a pass list. 927 shows the payoff (idiom recognition); this is the library to actually build against this week. Do not pull in egglog — that is the Datalog slice already shipped.

## Bottom line

Mint the founding egg paper. Cite Tate'09, egglog, 927, 1133; do not remint them.

## Links

- arXiv: [2004.03082](https://arxiv.org/abs/2004.03082)
- DOI: [10.1145/3434304](https://doi.org/10.1145/3434304)
- Repo: https://github.com/egraphs-good/egg
- egglog (cite): https://arxiv.org/abs/2304.04332
