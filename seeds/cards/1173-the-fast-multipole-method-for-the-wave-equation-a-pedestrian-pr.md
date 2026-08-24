---
title: "The Fast Multipole Method for the Wave Equation: A Pedestrian Prescription"
authors:
  - "Ronald Coifman"
  - "Vladimir Rokhlin"
  - "Stephen Wandzura"
year: 1993
venue: "IEEE Antennas and Propagation Magazine"
arxiv: null
doi: "10.1109/74.250128"
source: "https://doi.org/10.1109/74.250128"
topics:
  - "fmm"
  - "helmholtz"
  - "mlfmm"
  - "wave-equation"
seed_rank: 1173
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 9
lineage: fast-multipole
cites:
  - title: "Rapid Solution of Integral Equations of Scattering Theory in Two Dimensions"
    url: "https://doi.org/10.1016/0021-9991(90)90107-c"
    year: 1990
    arxiv: null
    doi: "10.1016/0021-9991(90)90107-c"
  - title: "Diagonal Forms of Translation Operators for the Helmholtz Equation in Three Dimensions"
    url: "https://doi.org/10.1006/acha.1993.1006"
    year: 1993
    arxiv: null
    doi: "10.1006/acha.1993.1006"
  - title: "Multilevel Fast-Multipole Algorithm for Solving Combined Field Integral Equations of Electromagnetic Scattering"
    url: "https://doi.org/10.1002/mop.4650100107"
    year: 1995
    arxiv: null
    doi: "10.1002/mop.4650100107"
see:
  - "1171-rapid-solution-of-integral-equations-of-scattering-theory-in-tw"
  - "1172-diagonal-forms-of-translation-operators-for-the-helmholtz-equat"
  - "1174-multilevel-fast-multipole-algorithm-for-solving-combined-field"
---

# The Fast Multipole Method for the Wave Equation: A Pedestrian Prescription

## One-sentence takeaway

The readable Helmholtz-FMM recipe for electromagnetic scattering: what a CEM engineer actually implements, sitting on Rokhlin's diagonal translators.

## Problem

ACHA 1993 is harmonic analysis. IEEE AP needed a pedestrian prescription: boxes, outgoing/incoming patterns, aggregation/disaggregation, and the multilevel walk, without the full proof spine.

## Design

Magazine-length algorithm for the wave equation FMM: far-field signatures, diagonal translation, multilevel aggregation. Aimed at combined-field EFIE/MFIE practitioners. The 1993 APS symposium abstract is the same idea — do not remint.

## Evidence

IEEE Antennas and Propagation Magazine 35(3):7–12, June 1993, DOI 10.1109/74.250128.

## Limitations

Prescription, not a complexity-optimal 3D production code. Song–Chew 1995 MLFMA is the multilevel algorithm that became the CEM standard.

## Implications for Broadside

Cite this when someone asks what MLFMM is in one sitting. Do not mint the thousand later AP-S we-meshed-a-new-jet papers.

## Bottom line

Mint Coifman–Rokhlin–Wandzura 1993 as the Helmholtz pedestrian paper.

## Links

- DOI: [10.1109/74.250128](https://doi.org/10.1109/74.250128)
