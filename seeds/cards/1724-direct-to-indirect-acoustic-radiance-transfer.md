---
title: "Direct-to-Indirect Acoustic Radiance Transfer"
authors: ["Lakulish Antani", "Anish Chandak", "Micah Taylor", "Dinesh Manocha"]
year: 2011
venue: "ACM Symposium on Interactive 3D Graphics and Games (I3D)"
arxiv: null
doi: "10.1145/1940685.1940690"
source: "https://doi.org/10.1145/1940685.1940690"
topics: [radiance-transfer, precompute, interactive]
seed_rank: 1724
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 9
lineage: interactive-sound-propagation
cites:
  - title: "The Room Acoustic Rendering Equation"
    url: "https://doi.org/10.1121/1.2766781"
    year: 2007
    arxiv: null
    doi: "10.1121/1.2766781"
see:
  - "1677-the-room-acoustic-rendering-equation"
  - "1707-interactive-sound-propagation-using-compact-acoustic-transfer-operators"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Direct-to-Indirect Acoustic Radiance Transfer

## One-sentence takeaway

Direct-to-indirect acoustic radiance transfer (I3D 2011): precompute a bounce operator so diffuse multi-bounce is a matrix-vector, like PRT for sound.

## Why it matters here

Graphics people already know PRT. Antani/Chandak/Taylor/Manocha I3D 2011 is acoustic PRT: direct lighting analog + indirect bounce operator. Anoptic if you already bake surfels for GI — reuse the mesh parameterization for ART.

## Key ideas

- **Direct vs indirect split.** Cheap direct + baked indirect operator.
- **I3D 2011.** Precompute, interactive playback.
- **Radiance-transfer family.** Siltanen 2007 equation → this compact form → 2012 TOG operators.
- **Diffuse-ish surfaces.** Specular still GA paths.

## Caveats

PRT assumptions (static geo, linearized materials). Frequency bins explode memory. Not RC 005 (visual). Not wave.

## Links

- DOI: https://doi.org/10.1145/1940685.1940690
