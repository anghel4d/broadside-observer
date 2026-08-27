---
title: "Lightweight Multidimensional Adaptive Sampling for GPU Ray Tracing"
authors: ["Daniel Meister", "Toshiya Hachisuka"]
year: 2022
venue: "Journal of Computer Graphics Techniques (JCGT) vol. 11, no. 3, pp. 43–64"
arxiv: null
doi: null
source: "https://jcgt.org/published/0011/03/03/"
topics: [vulkan-realtime-rendering, adaptive-sampling, ray-tracing]
seed_rank: 1442
seed_batch: "user-jcgt-vmv-2026-08-28"
reviewed: "2026-08-28"
pool: "graphics"
relevance_score: 10
lineage: adaptive-sampling
cites:
  - title: "Multidimensional Adaptive Sampling and Reconstruction for Ray Tracing"
    url: "https://doi.org/10.1145/1360612.1360632"
    year: 2008
    arxiv: null
    doi: "10.1145/1360612.1360632"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15886.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15886.15902"
  - title: "Recent Advances in Adaptive Sampling and Reconstruction for Monte Carlo Rendering"
    url: "https://doi.org/10.1111/cgf.12592"
    year: 2015
    arxiv: null
    doi: "10.1111/cgf.12592"
see:
  - "1374-spatiotemporal-reservoir-resampling-for-real-time-ray-tracing-wi"
  - "1383-progressive-photon-mapping"
  - "1042-lightcuts-a-scalable-approach-to-illumination"
  - "1382-importance-sampling-of-many-lights-with-adaptive-tree-splitting"
  - "152-the-rendering-equation"
---

# Lightweight Multidimensional Adaptive Sampling for GPU Ray Tracing

## One-sentence takeaway

Reformulate Hachisuka 2008 multidimensional adaptive sampling for GPUs: Morton-grid initial samples, no priority queue, splat reconstruction — up to 83% lower RelMSE than Halton in a few tens of milliseconds on RTX.

## Why it matters here

Anoptic's real-time path is radiance cascades + ReSTIR (1374), not an offline KD-tree over path space. This JCGT paper is the missing *interactive* leftover of Hachisuka's 2008 product-space sampler: motion blur, DoF, area lights, and a few-bounce path tracer, running in OptiX on an RTX 3080 Ti. PPM (1383) is Hachisuka's density estimate; Lightcuts (1042) and adaptive tree splitting (1382) cut light trees. This one adaptively samples the *integral domain* (image × time/lens/light/direction) under a hard millisecond budget.

## Key ideas

- **Product-space integrand.** Pixel value is the integral of f(x, y, u) over extra dimensions u (time, lens, area light, bounce directions). Partition I × U into hyperrectangles, assign each leaf the mean of its samples, integrate by a Riemann sum over leaves that project onto the pixel (with antialiasing via leaf ∩ pixel area).
- **No stored KD-tree.** Initial samples land on a uniform Morton grid (extra bits on image axes so pixels are sampled denser than time/lens). Only leaves are kept. Adaptive iterations pick many leaves in parallel: sample leaf Nk iff (ENk / Emax)^α ≥ ξ (Mitchell/Hachisuka contrast × hypervolume); always keep the max-error leaf. Best-candidate insertion; object-median split on overflow.
- **Splat, don't gather.** Project each leaf AABB onto the image and atomically add mean × intersection hypervolume. Gathering needed the tree and lost.
- **Evidence.** JCGT 11(3):43–64, published 2022-08-15, ISSN 2331-7418. CUDA 11.5 + OptiX 7.2. Chess DoF: 8.12 spp / 10 ms / RelMSE 3.94e–3 vs Halton 11 spp / 8 ms / 4.50e–3. Cornell PT: 83% RelMSE drop at 21 ms. Code: `meistdan/pmdas`.

## Caveats

Pays off only when a raw sample is expensive — Dragon area-light is a failure case (52% *higher* RelMSE than Halton) because one cheap light sample + overhead loses. Practical at 3–6D; axis scaling is a hack when some dimensions collapse (background, Russian roulette). 72–108 bytes/sample limits spp on GPU. OptiX denoiser (trained on uncorrelated MC) does almost nothing to these correlated estimates. Not ReSTIR and not a remint of Hachisuka 2008 (offline, priority queue, bounding-sphere spill, gradient reconstruction).

## Links

- JCGT: https://jcgt.org/published/0011/03/03/
- PDF: https://jcgt.org/published/0011/03/03/paper-lowres.pdf
- Full PDF: https://jcgt.org/published/0011/03/03/paper.pdf
- Code: https://github.com/meistdan/pmdas
- ISSN: 2331-7418
