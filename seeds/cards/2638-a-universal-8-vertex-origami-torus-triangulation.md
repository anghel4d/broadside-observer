---
title: "A Universal 8-Vertex Origami Torus Triangulation"
authors:
  - "Peter Doyle"
  - "Fabian Lander"
  - "Richard Evan Schwartz"
  - "Steve Trettel"
year: 2026
venue: "arXiv preprint (math.MG)"
arxiv: "2611.21909"
doi: null
source: "https://arxiv.org/abs/2611.21909"
version_reviewed: "v1"
topics:
  - "origami"
  - "flat-tori"
  - "polyhedral-embeddings"
  - "triangulations"
  - "experimental-mathematics"
seed_rank: 2638
seed_batch: "curiosity-2026-11-19"
reviewed: "2026-11-18"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "A Universal 8-Vertex Origami Torus Triangulation"
    url: "https://arxiv.org/abs/2611.21909"
    year: 2026
    arxiv: "2611.21909"
    doi: null
  - title: "Vertex-Minimal Paper Tori"
    url: "https://arxiv.org/abs/2507.14998"
    year: 2025
    arxiv: "2507.14998"
    doi: null
  - title: "Collapsibility and Near Universality for Vertex Minimal Paper Tori"
    url: "https://arxiv.org/abs/2510.12623"
    year: 2025
    arxiv: "2510.12623"
    doi: null
  - title: "The two most symmetric flat tori as eight-vertex paper tori"
    url: "https://arxiv.org/abs/2609.10703"
    year: 2026
    arxiv: "2609.10703"
    doi: null
  - title: "A Universal Triangulation for Flat Tori"
    url: "https://doi.org/10.1007/s00454-023-00598-7"
    year: 2023
    arxiv: null
    doi: "10.1007/s00454-023-00598-7"
  - title: "On origami embeddings of flat tori"
    url: "https://arxiv.org/abs/2007.03434"
    year: 2020
    arxiv: "2007.03434"
    doi: null
---

# A Universal 8-Vertex Origami Torus Triangulation

## One-sentence takeaway

A single 8-vertex torus triangulation, with vertex degrees 4,6,6,6,6,6,7,7, can be folded from flat paper triangles into an embedded torus in R³ for every flat torus shape. Seven-vertex origami tori do not exist, so 8 vertices is the minimum.

## Why it's lovely

A flat torus is a wrap-around video game screen, and it looks impossible to build in 3D without stretching. Nash–Kuiper gets around this with infinitely fine C¹ corrugations. Origami tori instead do it exactly, with a finite set of rigid paper triangles meeting at vertices whose angles sum to 2π. The record has fallen fast: Lazarus and Tallerie gave a 1217-vertex universal triangulation in 2023, Schwartz built 8-vertex 'pup tents' in 2025 and proved 7 is impossible, and now one 8-vertex pattern (Euler's formula makes that 16 triangles) realizes every lattice. The result began with software experiments for a poster at Schwartz's birthday conference, where a folding found for the hexagonal lattice turned out to be very robust. As a bridge, any wrap-around RTS map is a flat torus, and this says it can be shown as a real paper-model object with 16 triangles and no distortion.

## Key ideas

- **Definition.** An origami torus is a piecewise-affine isometric embedding of a flat torus R²/Λ into R³. It is built from triangles, with a total angle of 2π at every vertex.
- **Universality theorem.** The combinatorial type T(46666677) realizes every lattice Λ. There are seven combinatorial types of 8-vertex torus triangulations.
- **Method.** The construction starts on the boundary of the space of origami tori, where faces collapse together and fix many choices. The most collapsed examples lie flat in a plane; they are found first and then pushed back into embedded tori.
- **Coverage.** Two continuous families of 8-vertex tori together realize all shapes. It is open whether one family is enough.
- **History.** Burago–Zalgaller gave the first construction (1960) and showed every lattice is realized by some triangulation (1995). Tsuboi's diplotori (2020) need infinitely many combinatorial types. Doyle–Schwartz (2025) realized every lattice except the rectangular and sharp rhombic ones with symmetric pup tents.

## Caveats

I read the abstract and introduction of v1 (Monday 16 Nov 2026); the paper is not refereed. The tori are proved to exist by construction and computation and are not given in closed form. 'Every flat torus' means every lattice shape up to similarity, realized as an embedding; it says nothing about how far the paper can be folded and unfolded in practice.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.21909
- PDF: https://arxiv.org/pdf/2611.21909
- Schwartz, Vertex-Minimal Paper Tori: https://arxiv.org/abs/2507.14998
