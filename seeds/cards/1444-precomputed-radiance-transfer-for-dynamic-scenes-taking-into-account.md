---
title: "Precomputed Radiance Transfer for Dynamic Scenes Taking into Account Light Interreflection"
authors: ["Kei Iwasaki", "Yoshinori Dobashi", "Fujiichi Yoshimoto", "Tomoyuki Nishita"]
year: 2007
venue: "Eurographics Symposium on Rendering (EGSR) 2007 / Rendering Techniques, pp. 35–44"
arxiv: null
doi: "10.2312/EGWR/EGSR07/035-044"
source: "https://diglib.eg.org/items/f008ee57-4485-440a-966d-d8c57caa5334"
topics: [prt, interreflection, dynamic-scenes, basis-irradiance]
seed_rank: 1444
seed_batch: "user-prt-ancestors-2026-08-28"
reviewed: "2026-08-28"
pool: "graphics"
relevance_score: 10
lineage: precomputed-radiance-transfer
cites:
  - title: "Precomputed Radiance Transfer for Real-Time Rendering in Dynamic, Low-Frequency Lighting Environments"
    url: "https://doi.org/10.1145/566570.566612"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566612"
  - title: "Precomputed Shadow Fields for Dynamic Scenes"
    url: "https://doi.org/10.1145/1073204.1073319"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073319"
  - title: "Real-time Soft Shadows in Dynamic Scenes using Spherical Harmonic Exponentiation"
    url: "https://doi.org/10.1145/1141911.1141982"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141982"
  - title: "Interactive Rendering with Arbitrary BRDFs using Separable Approximations"
    url: "https://doi.org/10.2312/EGWR/EGWR99/247-260"
    year: 1999
    arxiv: null
    doi: "10.2312/EGWR/EGWR99/247-260"
see:
  - "366-precomputed-radiance-transfer"
  - "1416-precomputed-shadow-fields-for-dynamic-scenes"
  - "1415-real-time-soft-shadows-in-dynamic-scenes-using-spherical-harmoni"
  - "1413-all-frequency-rendering-of-dynamic-spatially-varying-reflectance"
  - "1042-lightcuts-a-scalable-approach-to-illumination"
  - "1374-spatiotemporal-reservoir-resampling-for-real-time-ray-tracing-wi"
---

# Precomputed Radiance Transfer for Dynamic Scenes Taking into Account Light Interreflection

## One-sentence takeaway

Treat each rigid object as a secondary light whose surface intensity lives in a PCA basis, precompute a basis-radiance field around it, and multi-bounce interreflection collapses to updating weights and a linear combination of basis irradiances.

## Why it matters here

Sloan PRT (366) bakes *self*-transfer on a static receiver; Zhou shadow fields (1416) and SHEXP (1415) move rigid casters but stop at direct visibility. Anoptic's leftover for *color bleeding between moving props* is this 2007 EGSR paper: objects as secondary lights, surface intensity in a basis, bounce as a cheap weight update. ReSTIR (1374) and Lightcuts (1042) sample many lights at runtime; Iwasaki precomputes the secondary-light field so a Broadside rigid prop can bounce without a path tracer. Pair with Pan RTF (1445) — same year, field-around-the-object instead of PCA-on-the-surface.

## Key ideas

- **Objects as secondary lights.** Source radiance \(B(x_s)=\sum_i w_i\Psi_i(x_s)\). PCA bases \(\Psi_i\) come from 256 point lights on the bounding sphere (SVD of the per-vertex intensity matrix). At runtime, least-squares weights \(w\) are a precomputed \(A^{-1}b\) (CPU); \(N=16\) terms in the figures.
- **Basis radiance field + basis irradiance.** 16 concentric spheres × \(6\times16\times16\) = 24,576 samples store \(S_i(p,\omega)\) (SH for low-frequency, Haar wavelets for all-frequency). Receiver irradiance per basis is a PRT dot product of \(S_i\) with the cosine/visibility vector; first bounce is \(B^{(1)}=f_r\sum_i w_i\Phi_i\).
- **Multi-bounce as weight updates.** Direct lighting from Zhou shadow fields. Then: project current exitance into the PCA basis, re-sum basis irradiances, repeat (three bounces in the results). Glossy: Kautz–McCool separable BRDF, \(K=4\) terms so outgoing direction factors out of the precompute.
- **Evidence (EGSR 2007, Core2Duo 2.16 GHz + GeForce Go 7900 GTX).** Room, 12 objects, 50K verts: 5–19 fps, 66.3 MB fields; direct 57 ms, basis irradiance 110 ms, three-bounce indirect 33 ms. Thirty teapots (4 glossy + 26 diffuse), 122K verts: 6 fps relight/view/albedo, 0.6 fps translating all 30, 37.7 MB. Buddha all-frequency Haar: 14K verts, 0.1 fps, 56.0 MB. Bunny vs Monte Carlo RMS 0.054 (low-frequency). PCA at 4/16 terms beats Fourier / SH / Haar on the same intensity maps (RMS 0.102/0.064 vs 0.18–0.23). GPU fragment path 6–12× CPU.

## Caveats

Rigid objects only. GPU sorts occluders by bounding-sphere *centers*, which is wrong when objects interpenetrate the sort order — authors point at SHEXP (1415) as the order-free leftover. All-frequency Haar is interactive, not real-time (0.1 fps). Translating many objects is an order of magnitude slower than relighting because basis irradiance must be rebuilt. Not a remint of PRT 366 (static self-transfer) or shadow fields 1416 (direct occlusion only).

## Links

- EG Digital Library: https://diglib.eg.org/items/f008ee57-4485-440a-966d-d8c57caa5334
- PDF: https://diglib.eg.org/bitstreams/3fa5cf4d-6450-4d53-8977-170fe0e9691d/download
- DOI: [10.2312/EGWR/EGSR07/035-044](https://doi.org/10.2312/EGWR/EGSR07/035-044)
- BibTeX: `@inproceedings{10.2312:EGWR/EGSR07/035-044}`
