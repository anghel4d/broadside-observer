---
title: "A Frequency Analysis of Light Transport"
authors:
  - "Frédo Durand"
  - "Nicolas Holzschuch"
  - "Cyril Soler"
  - "Eric Chan"
  - "François X. Sillion"
year: 2005
venue: "ACM Transactions on Graphics 24(3), SIGGRAPH 2005, pp. 1115–1126"
arxiv: null
doi: "10.1145/1073204.1073320"
source: "https://people.csail.mit.edu/fredo/PUBLI/Fourier/Fourier.pdf"
topics:
  - light-transport
  - fourier-analysis
  - sampling
  - light-fields
  - global-illumination
seed_rank: 2461
seed_batch: "archive-2026-10-30"
reviewed: "2026-10-30"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
see:
  - 005-radiance-cascades-a-novel-approach-to-calculating-global-ill
  - 1112-radiance-cascades-building-real-time-global-illumination
  - 1442-lightweight-multidimensional-adaptive-sampling-for-gpu-ray-tracing
cites:
  - title: "A Frequency Analysis of Light Transport"
    url: "https://doi.org/10.1145/1073204.1073320"
    year: 2005
    doi: "10.1145/1073204.1073320"
---

# A Frequency Analysis of Light Transport

## One-sentence takeaway

Durand and colleagues describe how each step of light transport changes the local space-angle spectrum of radiance around a ray: free-space travel shears it, occlusion convolves it with the blocker's spectrum, curved surfaces shear it along the angular axis, and BRDF reflection multiplies it, which together predict how many samples a rendering needs and where.

## Why it matters here

Radiance cascades rest on the observation that far-field radiance needs more angular and less spatial resolution; this paper is the formal version of that trade, since propagation is literally a shear that moves frequency content between the spatial and angular axes. It's the right lens for choosing cascade spacing and probe counts in Anoptic, and for judging the FMM-style multipole radiance idea, where the question is exactly how band-limited far-field light is after occlusion.

## Key ideas

- **Local light field.** Analysis is in the neighbourhood of a central ray, using a 2D slice (one spatial, one angular dimension) for clarity, and the paper argues the observations carry to 3D because only local neighbourhoods are involved.
- **Transport is a shear.** Radiance is constant along rays, so travelling distance d reparameterizes the light field and shears its spectrum, converting spatial frequencies into angular ones.
- **Occlusion is a convolution.** Multiplying by the blockers' visibility function in the primal convolves the spectrum with the blocker spectrum, adding high frequencies; further transport then shears those into the angular dimension. This explains why the shadows of small features vanish with distance.
- **Shading.** Curvature shears along the angular axis, the cosine and Fresnel terms are mostly low-frequency, and the BRDF acts as a low-pass multiplication, extending Ramamoorthi and Hanrahan's signal-processing view with spatial variation and receiver curvature.
- **Sampling application.** A proof-of-concept estimates a per-pixel bandwidth from curvature and the harmonic-mean distance to occluders, then places samples with a blue-noise method, concentrating work where the predicted spectrum is wide.

## Caveats

Everything is first-order and local: Taylor expansions for curvature, small-angle remapping, and an uncertainty-principle limit on how small a window can resolve low frequencies. Real scenes are non-stationary, so predictions are per-neighbourhood bounds rather than global guarantees. The sampling application is a proof of concept rather than a production renderer.

## Links

- Paper (PDF, MIT): https://people.csail.mit.edu/fredo/PUBLI/Fourier/Fourier.pdf
- Paper (PDF, HAL): https://inria.hal.science/inria-00379363/PDF/fourier.pdf
- Paper (DOI, SIGGRAPH 2005): https://doi.org/10.1145/1073204.1073320
