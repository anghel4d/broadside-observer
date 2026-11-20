---
title: "Sharp topological overlap in every dimension"
authors:
  - "Sergey Norin"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2611.26229"
doi: null
source: "https://arxiv.org/abs/2611.26229"
version_reviewed: "v1"
topics:
  - "topological-combinatorics"
  - "first-selection-lemma"
  - "gromov-overlap"
  - "discrete-geometry"
  - "lean4"
  - "ai-assisted-mathematics"
seed_rank: 2667
seed_batch: "curiosity-2026-11-21"
reviewed: "2026-11-20"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Sharp topological overlap in every dimension"
    url: "https://arxiv.org/abs/2611.26229"
    year: 2026
    arxiv: "2611.26229"
    doi: null
  - title: "Stabbing Simplices by Points and Flats"
    url: "https://doi.org/10.1007/s00454-008-9124-4"
    year: 2010
    arxiv: null
    doi: "10.1007/s00454-008-9124-4"
  - title: "Singularities, Expanders and Topology of Maps. Part 2: from Combinatorics to Topology Via Algebraic Isoperimetry"
    url: "https://doi.org/10.1007/s00039-010-0073-8"
    year: 2010
    arxiv: null
    doi: "10.1007/s00039-010-0073-8"
  - title: "SharpTopologicalOverlap (Lean formalization)"
    url: "https://github.com/snorin239/SharpTopologicalOverlap"
    year: 2026
    arxiv: null
    doi: null
see: []
---

# Sharp topological overlap in every dimension

## One-sentence takeaway

For any continuous map of a huge simplex into R^d, some point is covered by at least a (d+1)!/(d+1)^{d+1} fraction of the images of the d-dimensional faces. That matches the Bukh–Matoušek–Nivasch construction, so the affine and topological overlap constants are equal and known exactly in every dimension. The proof was found by GPT-6 Astra under the author's direction and is formalized in Lean.

## Why it's lovely

Take n points in the plane. Some point lies inside at least 2/9 of all the triangles they span (Boros–Füredi, 1984), and 2/9 is sharp. Gromov showed in 2010 that the same holds for any continuous drawing, not just straight ones, which turned a geometry fact into a topological one. The constants in higher dimensions stayed stubborn for decades: Bárány's (d+1)^{−d}, Wagner's improvement, and Gromov's topological bound all sat below the conjectured θ_d = (d+1)!/(d+1)^{d+1}. Norin settles it for every d, for affine and continuous maps alike, using Morse theory and an index bound. The provenance is also striking. Norin had a 'bramble lemma' that recovered the sharp 2D bound, and a harder joint argument with Dvořák that reached suboptimal 3D bounds. He asked Astra to strengthen both. When nudged to 'abandon numerical optimization and prioritize elegant conceptual approaches', Astra found the sharp 3D proof, which extended at once to all d. This is a clear example of the harness mattering as much as the model, and of a centrepoint-style statement relevant to spatial queries.

## Key ideas

- **Definitions.** ov(f) is the largest number of d-faces of Δⁿ whose images under f share a point. c_d^top and c_d^aff are the liminf of ov(f)/C(n+1, d+1) over continuous or affine f.
- **Theorem.** c_d^top = c_d^aff = θ_d = (d+1)!/(d+1)^{d+1}, so θ₂ = 2/9 and θ₃ = 3/32. The upper bound comes from the Bukh–Matoušek–Nivasch point-set construction, which is in general position.
- **Method.** A weighted-density version of the overlap bound is reduced to a filling theorem, which is proved with an index bound and Morse theory. It builds on Gromov's approach and the high-dimensional bramble lemma.
- **Formalization.** GPT-6.1 Sol produced a Lean formalization of the main theorem and a strengthening of the second theorem, from an earlier draft.

## Caveats

I read the abstract, introduction, previous-work section and AI disclosure of v1 (19 Nov 2026); it is not refereed. Norin rewrote the proof, and Claude Opus-5.5 helped at points, including the figure. I did not check the Lean repository. The result is asymptotic (n → ∞) and gives no algorithm for finding the deep point.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.26229
- PDF: https://arxiv.org/pdf/2611.26229
- Lean formalization: https://github.com/snorin239/SharpTopologicalOverlap
- Bukh, Matoušek & Nivasch, Stabbing simplices by points and flats: https://doi.org/10.1007/s00454-008-9124-4
- Gromov, Singularities, expanders and topology of maps II: https://doi.org/10.1007/s00039-010-0073-8
