---
title: "Wait-free approximate agreement on graphs"
authors:
  - "Dan Alistarh"
  - "Faith Ellen"
  - "Joel Rybicki"
year: 2021
venue: "arXiv:cs.DC"
arxiv: "2103.08949"
doi: null
source: "https://arxiv.org/abs/2103.08949"
topics:
  - lockfree
seed_rank: 249
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Impossibility of distributed consensus with one faulty process"
    url: "https://doi.org/10.1145/3149.214121"
    year: 1985
    arxiv: null
    doi: "10.1145/3149.214121"
  - title: "Reaching approximate agreement in the presence of faults"
    url: "https://doi.org/10.1145/5925.5931"
    year: 1986
    arxiv: null
    doi: "10.1145/5925.5931"
  - title: "The topological structure of asynchronous computability"
    url: "https://doi.org/10.1145/331524.331529"
    year: 1999
    arxiv: null
    doi: "10.1145/331524.331529"
see: []
---

# Wait-free approximate agreement on graphs

## One-sentence takeaway

Approximate agreement generalizes from the line to an arbitrary connected graph: outputs must sit within distance 1 of each other and on a shortest path between inputs — impossible wait-free on cycles of length ≥ 4, solvable on a class strictly larger than chordal graphs.

## Why it matters here

Anoptic multi-agent coordination that cannot solve consensus can still try to meet "nearby on the roadmap"; this paper tells you on which graphs that wait-free meeting point exists.

## Key ideas

- Each process inputs a vertex; non-faulty outputs must be pairwise distance ≤ 1 and lie on some shortest path between two inputs.
- A new Sperner-style lemma for convex polygons gives a direct impossibility on cycles C≥4, complementing the Castañeda et al. reduction from 2-set agreement.
- That reduction extends to a larger family of graphs, so the unsolvable set is bigger than just cycles.
- Extension-based proofs cannot establish the impossibility in the nonuniform iterated-snapshot model — combinatorial arguments are necessary.
- Positive result: a wait-free algorithm for a graph class that properly contains the chordal graphs.

## Caveats

## Links

- arXiv: [2103.08949](https://arxiv.org/abs/2103.08949)
- PDF: https://arxiv.org/pdf/2103.08949
