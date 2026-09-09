---
title: "Pre-Computing Geometry-Based Reverberation Effects for Games"
authors: ["Nicolas Tsingos"]
year: 2009
venue: "AES 35th International Conference: Audio for Games"
arxiv: null
doi: null
source: "https://www.aes.org/e-lib/browse.cfm?elib=15164"
topics: [games, reverb, precompute, aes]
seed_rank: 1723
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "engines"
relevance_score: 9
lineage: artificial-reverberation
cites:
  - title: "Fifty Years of Artificial Reverberation"
    url: "https://doi.org/10.1109/TASL.2012.2189567"
    year: 2012
    arxiv: null
    doi: "10.1109/TASL.2012.2189567"
see:
  - "1686-fifty-years-of-artificial-reverberation"
  - "1676-simulation-of-the-transient-and-steady-state-sound-propagation-in-rooms"
---

# Pre-Computing Geometry-Based Reverberation Effects for Games

## One-sentence takeaway

Tsingos AES 2009: precompute geometry-based reverberation *for games* — bake late energy from the level, play it as a send.

## Why it matters here

Designers will not run FDTD. This AES Audio for Games talk is the 'precompute a reverb volume from the mesh' recipe (Crytek/Tsingos-era thinking). Anoptic: baked late tail + runtime early GA/wave, same split as Vorländer 1989.

## Key ideas

- **Geometry → reverb params/IRs** at design time.
- **AES 35th Audio for Games 2009.** elib 15164; no DOI in harvest.
- **Game-audio.** Not a JASA theory paper.
- **Late field emphasis.** Early reflections may still be runtime.

## Caveats

AES paywall-ish e-lib. Precompute ≠ dynamic destruction. Not FDN (cheap recursive) and not Triton wave (different bake).

## Links

- HTML: https://www.aes.org/e-lib/browse.cfm?elib=15164
