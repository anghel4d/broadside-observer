---
title: "Life at low Reynolds number"
authors: ["E. M. Purcell"]
year: 1977
venue: "Am. J. Phys."
arxiv: null
doi: "10.1119/1.10903"
source: "https://doi.org/10.1119/1.10903"
topics: [curiosity]
seed_rank: 1089
seed_batch: "curiosity-2026-08-19"
reviewed: "2026-08-19"
pool: "biology"
relevance_score: 9
lineage: low-reynolds-locomotion
cites:
  - title: "Analysis of the swimming of microscopic organisms"
    url: "https://doi.org/10.1098/rspa.1951.0218"
    year: 1951
    arxiv: null
    doi: "10.1098/rspa.1951.0218"
  - title: "A study of the mechanism of swimming of microorganisms by high-speed cinematography"
    url: "https://doi.org/10.1098/rspb.1960.0095"
    year: 1960
    arxiv: null
    doi: "10.1098/rspb.1960.0095"
  - title: "Bacteria swim by rotating their flagellar filaments"
    url: "https://doi.org/10.1038/245380a0"
    year: 1973
    arxiv: null
    doi: "10.1038/245380a0"
  - title: "Discrete mechanics and variational integrators"
    url: "https://doi.org/10.1017/S096249290100006X"
    year: 2001
    arxiv: null
    doi: "10.1017/S096249290100006X"
see:
  - "415-the-algorithmic-beauty-of-plants-l-systems"
  - "018-physics-topology-logic-and-computation-a-rosetta-stone"
  - "1028-discrete-exterior-calculus"
---

# Life at low Reynolds number

## One-sentence takeaway

At bacterial Reynolds numbers the Stokes equation is linear and instantaneously reversible, so any reciprocal shape cycle — the scallop's one-hinge clap — nets zero displacement; corkscrew and flexible-oar gaits are the ones that work.

## Why it matters here

Why you might love this: a forty-minute physics-colloquium transcript that installs a *geometric* constraint on locomotion. Time does not exist in the Stokes world except as a parameter along a loop in shape space; propulsion is the holonomy of that loop, and a reciprocal loop is a null holonomy. Purcell draws the scallop, the three-link "Purcell swimmer", and the corkscrewing flagellum with the same cheerful economy he used on NMR. Bridge: Anoptic already has rigid-body and rod primitives; low-Re locomotion is the regime where variational integrators (1088) plus a shape-space connection (the "gauge theory of the falling cat") become the whole physics, and where a unit's gait is a loop, not a force.

## Key ideas

- Reynolds number \(\mathrm{Re}=\rho v a/\eta\): a bacterium lives at \(10^{-4}\)–\(10^{-5}\). Inertia is gone; the Stokes equation \(0=-\nabla p+\eta\nabla^2 v\) plus incompressibility is the law, linear in \(v\) and invariant under \(t\mapsto -t\).
- Scallop theorem: a time-reversible (reciprocal) sequence of shapes produces equal-and-opposite displacements. One degree of freedom is not enough. Two strategies survive — a corkscrew (rotating helical flagellum) and a flexible oar (an undulating filament whose shape is *not* reciprocal).
- The "Purcell swimmer": three links, two hinges, a non-reciprocal cycle in a two-dimensional shape space, net translation.
- Order-of-magnitude biology: how fast a cell can swim, how far it can coast (\(10^{-10}\,\mathrm{s}\) stopping time), why stirring at low Re is surprisingly hard.

## Caveats

- Colloquium style, not a theorem-paper: the scallop theorem is stated and used, not proved in modern geometric-mechanics language (that came later: Shapere–Wilczek, Marsden, etc.).
- No arXiv. American Journal of Physics 45 (1977) 3–11; widely reprinted. Do not confuse with Purcell's NMR work.
- Not morphogenesis / Lenia / CRN gimmick biology; this is classical continuum mechanics of a living machine.

## Links

- Journal: [Am. J. Phys. 45 (1977) 3–11](https://doi.org/10.1119/1.10903)
