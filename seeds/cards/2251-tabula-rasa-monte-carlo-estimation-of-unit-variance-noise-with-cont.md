---
title: "Tabula Rasa: Monte Carlo estimation of unit-variance noise with controlled spatio-temporal correlation"
authors:
  - "Tobias Ritschel"
  - "Yang Zhou"
  - "Nick Milef"
  - "Mikhail Dereviannykh"
  - "Chen Liu"
  - "Christophe Hery"
  - "Carl Marshall"
year: 2026
venue: "arXiv"
arxiv: "2610.11653"
doi: null
source: "https://arxiv.org/abs/2610.11653"
topics:
  - "vulkan-realtime-rendering"
seed_rank: 2251
seed_batch: "craft-2026-10-09"
reviewed: "2026-10-09"
pool: "graphics"
relevance_score: 7
lineage: noise
cites:
  - title: "Tabula Rasa: Monte Carlo estimation of unit-variance noise with controlled spatio-temporal correlation"
    url: "https://arxiv.org/abs/2610.11653"
    year: 2026
    arxiv: "2610.11653"
    doi: null
see:
  - "1436-wavelet-noise"
  - "1389-spatiotemporal-variance-guided-filtering-real-time-reconstructio"
---

# Tabula Rasa: Monte Carlo estimation of unit-variance noise with controlled spatio-temporal correlation

## One-sentence takeaway

Time-varying Gaussian noise with exact unit variance and a chosen temporal correlation can be produced by treating it as a joint Monte Carlo estimate of a pixel value and its variance, using database-style sketching, with simpler and faster code than earlier methods.

## Why it matters here

Temporally coherent noise drives stochastic transparency, dithering, procedural animation and temporal-accumulation stability in Anoptic's renderer. Getting both the variance and the frame-to-frame correlation right without a heavy precomputed texture set is directly useful for TAA-friendly sampling and for animated procedural effects.

## Key ideas

- **Problem.** Naively blending noise over time shrinks variance; renormalising needs the variance, which is itself an estimate.
- **Core trick.** Estimate the reconstruction and its variance jointly, using sketching from the database literature, then normalise to unit variance.
- **Control.** Temporal correlation is a parameter, so the same code gives anything from white-in-time to slowly drifting noise.
- **Use.** Demonstrated on several downstream temporal-control and coherence tasks.

## Caveats

Fresh preprint (2026-10-08), not yet peer reviewed. Gaussian marginals; blue-noise-style spatial spectra are a separate concern. Check the GPU cost against plain precomputed spatiotemporal blue-noise textures before adopting.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.11653
- PDF: https://arxiv.org/pdf/2610.11653
