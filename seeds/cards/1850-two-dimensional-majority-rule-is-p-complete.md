---
title: "The Two-Dimensional Majority Rule is P-Complete"
authors:
  - "Pedro Montealegre"
  - "Martín Ríos-Wilson"
year: 2026
venue: "arXiv:cs.DM"
arxiv: "2610.04311"
doi: null
source: "https://arxiv.org/abs/2610.04311"
topics:
  - "curiosity"
  - "cellular-automata"
  - "computational-complexity"
  - "circuit-gadgets"
seed_rank: 1850
seed_batch: "curiosity-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 10
lineage: cellular-automata-complexity
cites:
  - title: "The Two-Dimensional Majority Rule is P-Complete"
    url: "https://arxiv.org/abs/2610.04311"
    year: 2026
    arxiv: "2610.04311"
    doi: null
see:
  - "1843-gliders-on-aperiodic-monotilings-hat-and-spectre"
  - "727-computers-and-intractability-a-guide-to-the-theory-of-np-com"
---

# The Two-Dimensional Majority Rule is P-Complete

## One-sentence takeaway

Predicting the synchronous 2D majority-vote cellular automaton (each cell copies the majority of its four neighbours, keeping its state on ties) is P-complete, settling a problem open since Moore's 1997 conjecture that the planar case should be efficiently parallelizable.

## Why it's lovely

Why you might love this: it is a CTF-style gadget build inside the most boring-looking rule imaginable. Majority is monotone, homogeneous and diffusive: it wants everyone to agree, which is exactly why crossing two independent wires in the plane seemed impossible. The trick is to encode Boolean values in time: both 0 and 1 make activity, but they are told apart by when the signal arrives. That yields a crossover that preserves both values, which composes with wires, fan-out, AND and OR into arbitrary monotone circuits. "A rule that favours agreement can still carry, combine and cross independent information in two dimensions" is a lovely sentence to keep in mind for any grid sim (see the hat/spectre gliders, 1843).

## Key ideas

- Setting: n x n torus, von Neumann neighbourhood (four nearest neighbours), synchronous majority, ties keep current state.
- Prediction (is a designated cell +1 at time T?) is P-complete under logspace many-one reductions; Moore (1997) had dimension 3 and higher.
- Central obstacle: making independent information streams cross in the plane under a monotone, diffusive local rule.
- Temporal encoding: values distinguished by signal arrival times, giving a value-preserving crossover; composes with wires, duplication, AND and OR to simulate monotone Boolean circuits.
- Also P-complete: whether a designated cell ever reaches +1 (no time horizon); prediction extends to every uniform symmetric signed majority rule on the same neighbourhood, including the minority rule.

## Caveats

P-completeness is about (lack of) efficient parallel prediction; sequential simulation remains polynomial. The construction is specific to the four-neighbour synchronous rule family studied. Fresh preprint.

## Links

- arXiv abs: https://arxiv.org/abs/2610.04311
- PDF: https://arxiv.org/pdf/2610.04311
