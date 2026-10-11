---
title: "Masking Judder in Foveated Rendering with Phase-Shifted Noise"
authors:
  - "Ville Cantory"
  - "Danhua Zhang"
  - "Victoria Interrante"
  - "Piotr Didyk"
year: 2026
venue: "arXiv"
arxiv: "2610.10811"
doi: null
source: "https://arxiv.org/abs/2610.10811"
topics:
  - "vulkan-realtime-rendering"
  - "perception"
seed_rank: 2265
seed_batch: "craft-2026-10-11"
reviewed: "2026-10-11"
pool: "graphics"
relevance_score: 6
lineage: procedural-noise
cites:
  - title: "Masking Judder in Foveated Rendering with Phase-Shifted Noise"
    url: "https://arxiv.org/abs/2610.10811"
    year: 2026
    arxiv: "2610.10811"
    doi: null
see:
  - "1436-wavelet-noise"
  - "2251-tabula-rasa-monte-carlo-estimation-of-unit-variance-noise-with-cont"
---

# Masking Judder in Foveated Rendering with Phase-Shifted Noise

## One-sentence takeaway

When the periphery is rendered at a lower frame rate, phase-shifting a band-limited Gabor noise layer each display frame restores the perception of smooth motion and masks judder without rerendering the noise.

## Why it matters here

Temporal decimation (rendering parts of the frame or distant units less often) is a cheap win for an RTS with many moving units; this gives a perceptual recipe, with a formula for picking the noise band from angular velocity and render rate, to hide the resulting stutter.

## Key ideas

- **Judder as aliasing.** Low temporal rate aliases in the spatiotemporal frequency domain; blur fixes it but costs detail and compute.
- **Phase trick.** Translating a Gabor kernel is a phase shift, so motion can be synthesized per display frame cheaply.
- **Band selection.** Given on-screen angular velocity and temporal rendering rate, choose a spatial frequency band that masks judder without introducing its own motion aliasing.
- **User study.** Expands the range of angular velocities that look smooth at reduced temporal resolution.

## Caveats

Validated in foveated (peripheral) viewing; in foveal vision added noise may be objectionable. Requires per-region velocity estimates. Preprint, 2026-10-07.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.10811
- PDF: https://arxiv.org/pdf/2610.10811
