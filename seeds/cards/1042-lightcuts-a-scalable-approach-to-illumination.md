---
title: "Lightcuts: A Scalable Approach to Illumination"
authors: ["Bruce Walter", "Sebastian Fernandez", "Adam Arbree", "Kavita Bala", "Michael Donikian", "Donald P. Greenberg"]
year: 2005
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/1073204.1073318"
source: "https://doi.org/10.1145/1073204.1073318"
topics: [many-lights, lightcuts, hierarchical-illumination]
seed_rank: 1042
seed_batch: "archive-2026-08-16"
reviewed: "2026-08-16"
pool: "graphics"
relevance_score: 9
lineage: lightcuts
cites:
  - title: "Global Illumination using Photon Maps"
    url: "https://doi.org/10.1007/978-3-642-28670-4_13"
    year: 1996
    arxiv: null
    doi: null
  - title: "Instant Radiosity"
    url: "https://doi.org/10.1145/258734.258769"
    year: 1997
    arxiv: null
    doi: "10.1145/258734.258769"
  - title: "Multidimensional Lightcuts"
    url: "https://doi.org/10.1145/1141911.1141997"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141997"
see:
  - "374-global-illumination-using-photon-maps"
  - "450-instant-radiosity"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "152-the-rendering-equation"
---

# Lightcuts: A Scalable Approach to Illumination

## One-sentence takeaway

Cluster hundreds of thousands of point lights in a binary light tree and pick a perceptual cut so a few hundred shadow rays approximate the sum, with a bounded error.

## Why it matters here

Anoptic's GI is radiance cascades, not a many-lights CPU ray tracer — but Lightcuts is the 2005 paper that made "too many lights" a tree-cut problem, the same shape as cascade interval merging. Instant radiosity (450) and photon maps (374) dump VPL clouds; this is how you *shade* them sublinearly. Missing from the shelf, and it slipped past modern real-time feeds.

## Key ideas

- Convert area lights, HDR env maps, sun/sky, and indirect illumination to point lights; build a binary light tree.
- A cluster is cheaply approximated (representative light + conservative error bound). A perceptual metric decides where to cut the tree per shading point.
- Reconstruction cuts exploit spatial coherence so neighbouring pixels share work; anti-aliased images drop to tens of shadow rays.
- Demonstrated on scenes with 10⁵–10⁶ lights using a few hundred shadow rays.
- Follow-ons (multidimensional 2006, bidirectional 2012) extend materials and product integrals — cites, not remints.

## Caveats

- Original algorithm is offline ray tracing with a CPU tree; not a Vulkan probe grid.
- Error bounds assume the cluster approximation; glossy transport needs the later bidirectional paper.
- Many-lights research after 2010 (virtual ray lights, stochastic lightcuts) is a different cycle.

## Links

- DOI: [10.1145/1073204.1073318](https://doi.org/10.1145/1073204.1073318)
- Author PDF: https://www.cs.cornell.edu/~kb/publications/SIG05lightcuts.pdf
- Project: https://www.cs.cornell.edu/~kb/projects/lightcuts/
