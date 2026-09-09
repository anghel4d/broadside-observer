---
title: "Modeling Acoustics in Virtual Environments Using the Uniform Theory of Diffraction"
authors: ["Nicolas Tsingos", "Thomas Funkhouser", "Addy Ngan", "Ingrid Carlbom"]
year: 2001
venue: "ACM SIGGRAPH"
arxiv: null
doi: "10.1145/383259.383323"
source: "https://doi.org/10.1145/383259.383323"
topics: [diffraction-utd, beam-tracing, interactive, diffraction, utd, geometric]
seed_rank: 1660
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "A Beam Tracing Approach to Acoustic Modeling for Interactive Virtual Environments"
    url: "https://doi.org/10.1145/280814.280818"
    year: 1998
    arxiv: null
    doi: "10.1145/280814.280818"
see:
  - "1659-a-beam-tracing-approach-to-acoustic-modeling-for-interactive-virtual"
---

# Modeling Acoustics in Virtual Environments Using the Uniform Theory of Diffraction

## One-sentence takeaway

Add Keller Uniform Theory of Diffraction (UTD) to beam tracing so sound bends around wedges — the classic interactive-VE diffraction paper.

## Why it matters here

Games leak sound around doorframes and building corners. Specular beams (1659) go silent in shadow; UTD supplies a frequency-dependent diffracted path from each visible edge. This is the diffraction sibling of Funkhouser 1998, not Biot–Tolstoy–Medwin time-domain (1665).

## Key ideas

- **UTD on silhouette edges.** Keller cones from wedges; attenuation vs angle and frequency, valid in the high-frequency (geometric) limit.
- **Coupled to the beam tree.** Diffracted beams are spawned from edges already in the specular beam data structure.
- **Realtime auralization demo.** SIGGRAPH 2001 with Tsingos/Funkhouser/Carlbom; dynamic sources in architectural scenes.
- **High-frequency assumption.** Wavelengths ≪ edge length; bass around a doorway needs BTM or a wave solver.

## Caveats

UTD is an asymptotic high-frequency approximation (forced geometric), not a wave solution. Fails at grazing, low frequency, and thick/finite-impedance edges. Do not remint Svensson BTM 1665 as if it were this paper.

## Links

- DOI: https://doi.org/10.1145/383259.383323
