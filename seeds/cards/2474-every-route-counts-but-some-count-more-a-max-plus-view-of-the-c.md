---
title: "Every route counts, but some count more: a max-plus view of the C. elegans brain"
authors:
  - "Emma Reyner-Fuentes"
  - "Sebastian Rudolph"
  - "Carmen Peláez-Moreno"
  - "Francisco J. Valverde-Albacete"
year: 2026
venue: "arXiv preprint (q-bio.NC)"
arxiv: "2610.37587"
doi: null
source: "https://arxiv.org/abs/2610.37587"
topics:
  - "connectomics"
  - "max-plus-algebra"
  - "tropical-algebra"
  - "array-languages"
seed_rank: 2474
seed_batch: "curiosity-2026-10-31"
reviewed: "2026-10-31"
pool: "maths"
relevance_score: 7
cites:
  - title: "Every route counts, but some count more: a max-plus view of the C. elegans brain"
    url: "https://arxiv.org/abs/2610.37587"
    year: 2026
    arxiv: "2610.37587"
    doi: null
see: ["2321-simple-faster-min-plus-matrix-multiplication-and-apsp", "2268-a-connectome-test-of-the-fly-hashing-algorithm", "1472-quantales-as-formal-concept-lattices"]
---

# Every route counts, but some count more: a max-plus view of the C. elegans brain

## One-sentence takeaway

Reyner-Fuentes et al. model the multilayer C. elegans connectome (gap junctions, synapses, monoamines, neuropeptides, hormones) in max-plus algebra, where a signal is the strongest route rather than the sum over all paths. Each of five networks collapses onto a few dominant feedback loops (max-plus eigen-structure) that recover known circuits and suggest new ones.

## Why it's lovely

Usual connectome analysis is linear algebra: add up every path, take eigenvectors in Euclidean space. Swap (+, ×) for (max, +) and the same adjacency matrix answers a different question: which single route dominates. The "eigenvectors" become critical cycles, the feedback loops that can sustain a brain state, and those keep their biological meaning. It is the same semiring swap as min-plus shortest paths and APSP (card 2321), the semiring-generic inner product an array language gets for free (+.× versus ⌈.+ in APL), and the lattice-valued view of formal concept analysis. It is a lovely case of one operator change turning a matrix into a circuit diagram.

## Key ideas

- **Routing, not diffusion.** Signals accumulate additively along a path (log-weights), and the strongest path wins (max).
- **Layers by timescale.** Electrical (fastest), chemical synaptic (milliseconds), monoaminergic (seconds to minutes), neuropeptidergic and hormonal (minutes or longer) are combined in a time-varying functional connectome.
- **Spectral analogue.** The max-plus spectral theory of the weighted matrices (critical graph, cycle means) reduces each network to a handful of dominant feedback loops.
- **Result.** The loops recover well-characterized C. elegans circuits and point to new candidates for experiments.
- **Thesis.** Brain states live in ordered lattices rather than Euclidean spaces.

## Caveats

This is a modeling and interpretation paper with no new behavioral or electrophysiological data. How to weight and combine the layers is a modeling choice, and dominant-loop findings are only candidates until tested. I read the abstract and the introduction.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.37587
- PDF: https://arxiv.org/pdf/2610.37587
