---
title: "Directional sources and listeners in interactive sound propagation using reciprocal wave field coding"
authors: ["Chakravarty R. Alla Chaitanya", "Nikunj Raghuvanshi", "Keith W. Godin", "Zechen Zhang", "Derek Nowrouzezahrai", "John M. Snyder"]
year: 2020
venue: "ACM Transactions on Graphics"
arxiv: null
doi: "10.1145/3386569.3392459"
source: "https://doi.org/10.1145/3386569.3392459"
topics: [interactive]
seed_rank: 1725
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 8
lineage: wave-based-acoustics
cites:
  - title: "Parametric Directional Coding for Precomputed Sound Propagation"
    url: "https://doi.org/10.1145/3197517.3201339"
    year: 2018
    arxiv: null
    doi: "10.1145/3197517.3201339"
  - title: "Parametric Wave Field Coding for Precomputed Sound Propagation"
    url: "https://doi.org/10.1145/2601097.2601184"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601184"
  - title: "Source and Listener Directivity for Interactive Wave-Based Sound Propagation"
    url: "https://doi.org/10.1109/TVCG.2014.2306990"
    year: 2014
    arxiv: null
    doi: "10.1109/TVCG.2014.2306990"
see:
  - "1663-parametric-directional-coding-for-precomputed-sound-propagation"
  - "1662-parametric-wave-field-coding-for-precomputed-sound-propagation"
  - "1702-source-and-listener-directivity-for-interactive-wave-based-sound"
---

# Directional sources and listeners in interactive sound propagation using reciprocal wave field coding

## One-sentence takeaway

Reciprocal wave-field coding: encode directional *sources and listeners* using reciprocity so one bake serves oriented emitters and HRTF-like receivers (Chaitanya/Raghuvanshi/Snyder TOG 2020).

## Why it matters here

2018 directional coding was a step; 2020 adds reciprocity so you don't bake every gun orientation. Microsoft Project Acoustics line. Anoptic weapons + head pose on a Triton-like volume.

## Key ideas

- **Reciprocity.** Swap source/listener in the wave field to reuse codes.
- **Directional both ends.** Harvest interactive; ACM TOG 2020 (SIGGRAPH).
- **Parametric coding lineage.** 2010 → 2014 → 2018 → 2020.
- **Static geometry bake.**

## Caveats

Cite count 9 in harvest — newer than 2018. Still a bake. Near-field factorization limits. Not MagLS (different directional problem).

## Links

- DOI: https://doi.org/10.1145/3386569.3392459
