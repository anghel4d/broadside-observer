---
title: "Demystifying Spherical Harmonics: An Optimization Approach"
authors:
  - "Andrew Helmer"
year: 2026
venue: "Helmer's Blog"
arxiv: null
doi: null
source: "https://andrew-helmer.github.io/demystifying-spherical-harmonics/"
topics:
  - "spherical-harmonics"
  - "irradiance-probes"
  - "least-squares"
  - "directional-lightmaps"
  - "global-illumination"
seed_rank: 2397
seed_batch: "craft-2026-10-23"
reviewed: "2026-10-23"
pool: "graphics"
relevance_score: 8
lineage: realtime-gi
cites:
  - title: "Demystifying Spherical Harmonics: An Optimization Approach"
    url: "https://andrew-helmer.github.io/demystifying-spherical-harmonics/"
    year: 2026
    arxiv: null
    doi: null
  - title: "Stupid Spherical Harmonics (SH) Tricks (Peter-Pike Sloan)"
    url: "https://www.ppsloan.org/publications/StupidSH36.pdf"
    year: 2008
    arxiv: null
    doi: null
  - title: "Alternative definition of Spherical Harmonics for Lighting (Graham Hazel)"
    url: "https://grahamhazel.com/blog/2017/12/18/alternative-definition-of-spherical-harmonics-for-lighting/"
    year: 2017
    arxiv: null
    doi: null
  - title: "Introduction to Spherical Harmonics for Graphics Programmers (nicebyte)"
    url: "https://gpfault.net/posts/sph.html"
    year: null
    arxiv: null
    doi: null
see:
  - "367-an-efficient-representation-for-irradiance-environment-maps"
  - "256-scaling-probe-based-real-time-dynamic-global-illumination-fo"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Demystifying Spherical Harmonics: An Optimization Approach

## One-sentence takeaway

Helmer derives L1/L2 spherical-harmonic approximations as ordinary least-squares linear models over the uniform sphere. Projection then reduces to sphere averages with rational scale factors (c₀ = ⟨f⟩, cₓ = 3⟨f ωₓ⟩, L2 cross terms = 15⟨f ωᵢωⱼ⟩). The bigger point is the assumptions this exposes: projection is optimal only for the unclamped model, squared error, and a uniform full-sphere domain, and common graphics uses break all three (clamped reconstruction, hemispherical lightmaps, surface-restricted fits).

## Why it matters here

Any probe, cascade-merge or irradiance-cache path in Anoptic will store L1/L2 SH. Mobile ReSTIR+clipmap systems and DDGI-style probes collapse to L1 per cell, for example. This post is the clearest statement of when naive projection is biased: hemisphere-domain lightmaps come out too bright, and "divide by two" fakes directionality. It also says what to do instead: regress directly, or fit the clamped model. It gives us a rational-coefficient, π-free formulation that is easy to put in shader code and test.

## Key ideas

- **SH projection as least squares.** Minimizing ⟨(f̂ − f)²⟩ over the sphere decouples the coefficients by symmetry. Using ⟨ωₓ²⟩ = 1/3 and ⟨ωₓ⁴⟩ = 1/5 gives closed-form "encoding rules" with only rational constants.
- **Fast Reconstruction Form vs Orthogonal Form for L2.** The monomial form is cheapest to evaluate but makes c₀ depend on the quadratic coefficients. The orthogonal form (3ωz²−1, ωx²−ωy², …) keeps every coefficient independent and leaves c₀ as the plain average, which helps quality tiers.
- **Convolution is a diagonal scale.** A rotationally symmetric kernel multiplies each band by a constant. For Lambertian with the 1/π BRDF, the L1 directional terms scale by 2/3. Any linear spherical transform is an n×n matrix on the coefficients.
- **Assumption violations.** (1) The clamp `max(…, 0)` makes the projected coefficients suboptimal; a directional light under Lambert is exactly representable with the clamped form but comes out over-soft when projected. (2) Squared error ignores perceptual or relative error. (3) For non-sphere domains (hemispheres, surfaces) projection is biased, and plain regression or a closed-form hemisphere correction is the fallback.

## Caveats

This is an expository blog post, not new research. Most of the results are classical (Sloan, Hazel and nicebyte are cited), the orthogonal-form rules are stated without derivation, and ringing and de-ringing are out of scope. The author says AI helped with KaTeX formatting, some derived rules and the diagrams, and the HDR probe was AI-generated. There are no quantitative comparisons, only interactive visuals. The post was updated on 2026-10-19 with an L1 vs L2 comparison.

## Links

- Post: https://andrew-helmer.github.io/demystifying-spherical-harmonics/
- Sloan, Stupid SH Tricks (PDF): https://www.ppsloan.org/publications/StupidSH36.pdf
- Hazel, Alternative definition of SH for lighting: https://grahamhazel.com/blog/2017/12/18/alternative-definition-of-spherical-harmonics-for-lighting/
- nicebyte, Intro to SH for graphics programmers: https://gpfault.net/posts/sph.html
