---
title: "Causal graph rewriting"
authors:
  - "Pablo Arrighi"
  - "Marin Costes"
  - "Luidnel Maignan"
year: 2026
venue: "arXiv preprint (cs.FL)"
arxiv: "2609.25188"
doi: null
source: "https://arxiv.org/abs/2609.25188"
topics:
  - "graph-rewriting"
  - "cellular-automata"
  - "asynchronous-computation"
  - "causal-graph-dynamics"
seed_rank: 2484
seed_batch: "craft-2026-11-01"
reviewed: "2026-11-01"
pool: "languages"
lineage: foundations-of-computing
relevance_score: 7
cites:
  - title: "Causal graph rewriting"
    url: "https://arxiv.org/abs/2609.25188"
    year: 2026
    arxiv: "2609.25188"
    doi: null
see: ["1807-probabilistic-cellular-automata-for-granular-media-in-video-games", "1027-a-critical-pair-enumeration-algorithm-for-string-diagram-rewriting"]
---

# Causal graph rewriting

## One-sentence takeaway

Local rewrite rules applied asynchronously to a directed acyclic graph whose edges are both data dependencies and locality constraints, and which the rules may themselves rewrite, give a deterministic model of computation in which locality provably survives any valid sequence of rewrites and any 1D cellular automaton can be simulated.

## Why it matters here

ano's standing rules (する/なる) and the RTS sim both want rules that fire without a global tick, only waiting on what they depend on. This paper gives the semantics for that: the dependency DAG is the schedule, and a rewrite touching only its local region can run whenever its inputs are ready, with the same result as a synchronous step. It is a principled backing for 'asynchronous by dependency' rule execution, and the particle-system example is close to falling-sand style simulation.

## Key ideas

- Computation is a sequence of local rewrites on a DAG; oriented edges discipline the nondeterminism of asynchrony.
- Induced subgraphs and graph composition isolate the region a rewrite touches and glue it back, preserving positions, borders and context.
- Main result: locality extends from single rule applications to arbitrary valid sequences; any local rule is automatically *-local and *-extensive.
- Formal simulation of any one-dimensional cellular automaton, building on block decompositions of reversible cellular automata.
- Worked examples: a particle system and a time-dilation example in which the graph's geometry itself changes.

## Caveats

Read abstract, introduction and the statements of the main theorems (45-page theory paper); proofs not checked. There is no implementation or performance work, so turning it into an executor is our job. The value here is semantics, not speed.

## Links

- [arXiv abstract](https://arxiv.org/abs/2609.25188)
- [PDF](https://arxiv.org/pdf/2609.25188)
