---
title: "How symmetry and complexity shape three-dimensional programmable self-assembly"
authors:
  - "Prarthana Agrawal"
  - "Joakim Bohlin"
  - "Ard A. Louis"
year: 2026
venue: "arXiv preprint (cond-mat.soft, physics.bio-ph)"
arxiv: "2611.05301"
doi: null
source: "https://arxiv.org/abs/2611.05301"
topics:
  - "self-assembly"
  - "simplicity-bias"
  - "algorithmic-information"
  - "polycubes"
seed_rank: 2519
seed_batch: "curiosity-2026-11-05"
reviewed: "2026-11-05"
pool: "maths"
relevance_score: 7
cites:
  - title: "How symmetry and complexity shape three-dimensional programmable self-assembly"
    url: "https://arxiv.org/abs/2611.05301"
    year: 2026
    arxiv: "2611.05301"
    doi: null
see:
  - "2260-tiling-3d-by-translates-of-a-single-polycube-is-undecidable"
---

# How symmetry and complexity shape three-dimensional programmable self-assembly

## One-sentence takeaway

Sampling a billion random rule sets for cube tiles with programmable sticky faces shows that the chance a shape appears falls roughly exponentially with its assembly complexity (the fewest bits of local rules that build it), so highly symmetric shapes dominate, yet shapes with the same symmetry can need very different amounts of rule information depending on whether local growth can reuse that symmetry.

## Why it's lovely

It is algorithmic probability made physical: as with a random program on a universal machine, a random set of local binding rules overwhelmingly produces simple outputs, but here complexity is computable because it is defined by the assembly process itself. That gives a principled answer to why viral capsids and protein complexes are so symmetric without needing selection to prefer symmetry, since they are simply easier to stumble on. For ano and Anoptic's rule systems, it is a sharp reminder that random or evolved local rules are biased toward outputs that reuse rules, and that what makes a structure cheap to specify is whether local rules can exploit its symmetry, not the symmetry group alone.

## Key ideas

- **Polycube model.** A kit of \(s\) cube tile species, each face carrying one of \(c\) interface types with a fixed pairing matrix; tiles attach at random open faces until none remain, seeded or unseeded.
- **Classifying rule sets.** Repeated stochastic runs sort rule sets into bounded-and-deterministic (always the same finite shape) versus unbounded or non-deterministic; 3D gives fewer deterministic sets than 2D because each tile has more growth faces.
- **Assembly rule probability.** The fraction of random rule sets producing a shape, estimated from \(10^9\) samples because even \(s=2, c=4\) gives more than \(10^{14}\) rule sets.
- **Simplicity bias.** That probability drops about exponentially with assembly complexity, extending the 2D polyomino result to 3D; the most probable shapes are a tiny, highly symmetric subset.
- **Symmetry is not enough.** A four-cube rod and a four-cube square share a symmetry group yet differ in rule cost, because the rod's symmetry is easier for local growth rules to reuse.

## Caveats

One idealised lattice model with deterministic pairing and no thermodynamics or kinetics beyond random attachment order; sampling covers only small kits and modest sizes. The link to biological evolution is argued by analogy, not measured. I read the abstract, introduction and model sections (49 pages).

## Links

- arXiv abstract: https://arxiv.org/abs/2611.05301
- PDF: https://arxiv.org/pdf/2611.05301
