---
title: "A Clustering Algorithm for Radiosity in Complex Environments"
authors: ["Brian Smits", "James Arvo", "Donald P. Greenberg"]
year: 1994
venue: "SIGGRAPH 1994"
arxiv: null
doi: "10.1145/192161.192277"
source: "https://doi.org/10.1145/192161.192277"
topics: [hierarchical-radiosity]
seed_rank: 1242
seed_batch: "craft-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: hierarchical-radiosity
cites:
  - title: "A Rapid Hierarchical Radiosity Algorithm"
    url: "https://doi.org/10.1145/122718.122740"
    year: 1991
    arxiv: null
    doi: "10.1145/122718.122740"
  - title: "Wavelet Radiosity"
    url: "https://doi.org/10.1145/166117.166146"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166146"
  - title: "An Importance-Driven Radiosity Algorithm"
    url: "https://doi.org/10.1145/133994.134080"
    year: 1992
    arxiv: null
    doi: "10.1145/133994.134080"
  - title: "Lightcuts: A Scalable Approach to Illumination"
    url: "https://doi.org/10.1145/1073204.1073218"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073218"
see:
  - "1068-a-rapid-hierarchical-radiosity-algorithm"
  - "1042-lightcuts-a-scalable-approach-to-illumination"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "1166-a-fast-algorithm-for-particle-simulations"
---

# A Clustering Algorithm for Radiosity in Complex Environments

## One-sentence takeaway

Group objects into a hierarchy and bound energy between *clusters* so hierarchical radiosity's initial links drop from O(s²) to O(s log s) / O(s) — the interaction-list analog of FMM boxes.

## Problem

Hanrahan hierarchical radiosity (1068) subdivides surfaces but cannot group existing objects. Initial linking is O(s²) and is the thing that actually blows up in a game-sized scene. FMM+RC 3D GI this week is the same bet: far-field between groups, near-field exact. 1068 is already in the library; the missing recipe is how the groups form and how you bound a cluster-to-cluster transfer.

## Design

Estimate energy transfer between collections of objects with two error bounds (cheap vs tighter). Links live between clusters, not every pair of patches. Refinement still subdivides when the bound is too loose. Complexities: O(s log s) and O(s) for the initial link, two orders of magnitude faster on moderate scenes. Cite 1068 as the founding HR walk — already minted, do not remint. Cite Wavelet Radiosity (Gortler–Schröder–Cohen–Hanrahan 1993, `10.1145/166117.166146`) as the basis leftover — do not mint. Cite importance-driven radiosity (Smits 1992) and Lightcuts 1042 as the later cluster-of-lights cousins — 1042 already minted, skip. Sillion 1995 unified volumes+clusters is a sequel; cite, do not mint.

## Evidence

SIGGRAPH 1994, pages 435–442, DOI `10.1145/192161.192277`. Authors: Brian Smits, James Arvo, Donald P. Greenberg (Cornell). Speedups of ~100× vs unclustered HR at comparable error.

## Limitations

Diffuse-only, like 1068. Cluster bounds are conservative; glossy / RC directional lobes need a different kernel. Not a GPU paper — the data structure (object hierarchy + bounded links) is the this-week transfer to FMM interaction lists / RC cascades, not the 1994 CPU timings.

## Implications for Broadside

User is building FMM+RC as 3D GI. 1068 is the HR walk; this is the *grouping* that makes the walk scale — clusters are FMM boxes, links are M2L. Pair with Hu 1243 (how to *build* those lists on GPU) and Karras 1240 (how to *build* the tree). Do not remint Lightcuts 1042 or Split RC 208.

## Bottom line

Mint the clustering leftover of 1068. Cite wavelet radiosity and Lightcuts; do not remint them.

## Links

- DOI: [10.1145/192161.192277](https://doi.org/10.1145/192161.192277)
- PDF: http://luthuli.cs.uiuc.edu/~daf/courses/Rendering/Papers/Smits_B__A%20Clustering_Algorithm_for_Radiosity_in_Complex_Environments.pdf
