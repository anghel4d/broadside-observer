---
title: "Radiance Caching for Efficient Global Illumination Computation"
authors:
  - "Jaroslav Křivánek"
  - "Pascal Gautron"
  - "Sumanta Pattanaik"
  - "Kadi Bouatouch"
year: 2005
venue: "IEEE Transactions on Visualization and Computer Graphics 11(5)"
arxiv: null
doi: "10.1109/TVCG.2005.83"
source: "https://cgg.mff.cuni.cz/~jaroslav/papers/tvcg2005/krivanek05radiance_caching.pdf"
version_reviewed: "TVCG 2005 author PDF"
topics:
  - "radiance-caching"
  - "irradiance-caching"
  - "global-illumination"
  - "spherical-harmonics"
  - "glossy-reflection"
  - "illumination-gradients"
seed_rank: 2676
seed_batch: "archive-2026-11-22"
reviewed: "2026-11-22"
pool: "graphics"
relevance_score: 8
lineage: irradiance-cache
see:
  - "1041-a-ray-tracing-solution-for-diffuse-interreflection"
  - "366-precomputed-radiance-transfer"
cites:
  - title: "Radiance Caching for Efficient Global Illumination Computation"
    url: "https://doi.org/10.1109/TVCG.2005.83"
    year: 2005
    arxiv: null
    doi: "10.1109/TVCG.2005.83"
  - title: "A Ray Tracing Solution for Diffuse Interreflection"
    url: "https://doi.org/10.1145/54852.378490"
    year: 1988
    arxiv: null
    doi: "10.1145/54852.378490"
---

# Radiance Caching for Efficient Global Illumination Computation

## One-sentence takeaway

Extends Ward's irradiance cache from diffuse to low-frequency glossy surfaces: cache the full directional incoming radiance at sparse points as a (hemi)spherical-harmonic coefficient vector plus translational gradients, rotate and blend nearby records, and shade with one dot product against the BRDF's coefficients.

## Why it matters here

A radiance-cascade probe is a regular-grid cache of directional radiance. This paper is the sparse, adaptive version: records exist only where the visible surfaces need them, each carries its own validity radius, and reuse is controlled by one accuracy knob. That is the shape M2L+RC wants (cost follows occupied geometry, error you can pick). Its record layout (frame, SH vector, ∂/∂x and ∂/∂y gradients, harmonic-mean distance to visible geometry) is a concrete template for an Anoptic probe struct. Its failure cases (curved surfaces, grazing angles, sharp lobes) mark where cascades will need tracing instead.

## Key ideas

- **Record contents.** Position pᵢ, local frame (uᵢ, vᵢ, nᵢ), a hemispherical-harmonic coefficient vector for incoming radiance, two translational-gradient vectors, and the harmonic mean distance Rᵢ to visible objects. Records are view-independent, stored in an octree as in Ward et al., and reused across frames.
- **Reuse rule.** Ward's weighting is kept: the records used at p are S = {i | wᵢ(p) > 1/a}, where a is the user's accuracy. Ward's rotational gradient is replaced by actually rotating the record's coefficients into p's frame (the SH rotation matrix), with gradient terms added for displacement along the record's x and y axes.
- **Automatic BRDF split.** Each BRDF is projected per outgoing direction at the lowest order that meets an error bound (5% in the figures), capped at n_max = 10. Lobes that would need more fall back to Monte Carlo importance sampling. At n = 10 a record is about 3.6 kB.
- **Gradients.** New numerical and analytical translational-gradient methods computed from the same hemisphere samples. Compared with Ward–Heckbert for irradiance, RMS error was 0.125 (Ward) vs 0.131 (theirs).
- **Evidence (2.2 GHz Pentium 4).** Cornell box with a glossy wall (a = 0.15, N = 6,000 rays): 600 records, 33.3 s for indirect glossy. The second view needed only 164 new records (13.8 s). A camera-move animation averaged 4.9 s/frame for radiance caching vs 35 s/frame for importance sampling, which was also visibly noisier. Disney Hall (a = 0.1): 38,000 records. Its Lafortune lobes (exponents 16/88/186) had over 20% representation error at order 10, yet the paper reports no serious change in material appearance.

## Caveats

This is an offline ray tracer, not real time, and it caches only the first glossy bounce in the test scenes. Ward's split-sphere interpolation bound does not hold for radiance; the authors use it anyway and note that higher-frequency BRDFs need smaller a and that errors show at grazing angles. On curved glossy surfaces fewer records can be reused, each lookup needs a rotation, and some information is lost ("rotation loss"). Comparisons are made at equal time and judged visually, because the two methods have different artifacts.

## Links

- Author PDF: https://cgg.mff.cuni.cz/~jaroslav/papers/tvcg2005/krivanek05radiance_caching.pdf
- Project page: https://cgg.mff.cuni.cz/~jaroslav/projects/rcaching/
- DOI: https://doi.org/10.1109/TVCG.2005.83
