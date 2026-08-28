---
title: "Precomputed Radiance Transfer Field for Rendering Interreflections in Dynamic Scenes"
authors: ["Minghao Pan", "Rui Wang", "Xinguo Liu", "Qunsheng Peng", "Hujun Bao"]
year: 2007
venue: "Computer Graphics Forum 26(3), pp. 485–493 (Eurographics 2007)"
arxiv: null
doi: "10.1111/j.1467-8659.2007.01071.x"
source: "https://doi.org/10.1111/j.1467-8659.2007.01071.x"
topics: [prt, radiance-transfer-fields, interreflection, cpca, dynamic-scenes]
seed_rank: 1445
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
  - title: "Clustered Principal Components for Precomputed Radiance Transfer"
    url: "https://doi.org/10.1145/882262.882276"
    year: 2003
    arxiv: null
    doi: "10.1145/882262.882276"
  - title: "Real-time Soft Shadows in Dynamic Scenes using Spherical Harmonic Exponentiation"
    url: "https://doi.org/10.1145/1141911.1141982"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141982"
see:
  - "366-precomputed-radiance-transfer"
  - "1416-precomputed-shadow-fields-for-dynamic-scenes"
  - "1415-real-time-soft-shadows-in-dynamic-scenes-using-spherical-harmoni"
  - "1413-all-frequency-rendering-of-dynamic-spatially-varying-reflectance"
  - "1042-lightcuts-a-scalable-approach-to-illumination"
  - "1374-spatiotemporal-reservoir-resampling-for-real-time-ray-tracing-wi"
  - "1444-precomputed-radiance-transfer-for-dynamic-scenes-taking-into-account"
---

# Precomputed Radiance Transfer Field for Rendering Interreflections in Dynamic Scenes

## One-sentence takeaway

A radiance transfer field (RTF) stores, in the space around a rigid object, how that object reflects incident lighting — scene-independent, CPCA-compressed, and a drop-in extra lookup on Zhou shadow fields.

## Why it matters here

Shadow fields (1416, Halo 3) move an object's *occlusion* through a dynamic scene; they cannot bounce color. Pan, Wang, Liu, Bao, Peng (ZJU CAD, CGF/EG 2007) add the missing field: an object-local 7-D transfer of incident radiance → outgoing radiance at neighboring points. Anoptic baked GI with moving rigid props wants this next to 1416, not a full PRT rebase (366 is still the static-receiver ancestor). Same 2007 leftover as Iwasaki 1444 (PCA-on-the-surface secondary lights); RTF is the *field-around-the-object* twin and cites Iwasaki's 2006 sketch as the Fourier-on-exitance cousin. ReSTIR (1374) / Lightcuts (1042) sample; this precomputes.

## Key ideas

- **RTF / ITF.** At a neighboring point \(q\), interreflected radiance is \(I_q = \sum_{i,j} M_q^{ij} l_j\, y_i\) — an interreflection transfer function of the object's incident lighting, stored on the same concentric-sphere lattice as shadow fields (\(0.1\eta\)–\(8\eta\), 16 spheres; \(6\times16\times16\) cubemap samples for diffuse, \(6\times32\times32\) for glossy). 4th-order SH. The field is fully determined by the object; the scene configuration is not baked in.
- **Proxy approximation for local lighting.** Distant-env PRT assumes one lighting vector per object. For shadows / local lights / neighbor bounce, incident lighting varies smoothly: k-means on vertices → \(m=8\)–\(24\) proxies; inverse-distance weights interpolate; each RTF sample stores \(m\) transfer matrices (\(n\times n\times m\)). One proxy recovers Sloan's simulator.
- **Fits shadow fields.** Bounce step: iterate `ComputeIncidentRadiance` at every proxy (source radiance fields + RTFs + object occlusion fields, near-to-far, SH triple products) until proxies converge. Shading step: self-transfer × incident at visible vertices. Extra interreflection cost vs shadow-field rendering is "very small."
- **CPCA + caches.** Raw RTF is 192–576 MB/object. 32 clusters × 16 principal components: 40–50:1 compression, ~1% diffuse / ~3% specular Frobenius error. Sample-interpolation cache and eigen-vector cache both >95% hit; together they cut interreflection math by >90%.
- **Evidence (EG 2007, Core 2 Duo E6300 + GeForce 7800, CPU SSE + threads ≈ 6×).** Table 1: Cornell-box 7 objs / 22K / 44.1 MB / 8–12 fps; dynamic Cornell 8 / 40K / 50.0 MB / 10–16 fps; table 4 / 40K / 32.8 MB / 8–10 fps; brick game 10 / 86K / 63.5 MB / 5–8 fps. Precompute 40 min–2 h. Cornell vs radiosity is visually close despite the proxies. CPU prototype; GPU is listed as future work.

## Caveats

Low-frequency only — all-frequency RTF is called out as impractical (data volume + no efficient wavelet rotation). Rigid objects; deformables are future work. Proxy interpolation assumes *smooth* low-frequency local lighting. Adaptive spatial sampling of the field is left open. Not a remint of PRT 366, shadow fields 1416, or Iwasaki 1444 (surface PCA vs surrounding field). Sloan neighborhood-transfer (366) assumed uniform illumination over the object — RTF's proxies are the local-light fix.

## Links

- DOI: [10.1111/j.1467-8659.2007.01071.x](https://doi.org/10.1111/j.1467-8659.2007.01071.x)
- Wiley: https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-8659.2007.01071.x
- PDF (ZJU CAD): http://www.cad.zju.edu.cn/home/xgliu/papers/eg07-prtf.pdf
- ResearchGate: https://www.researchgate.net/publication/220507657_Precomputed_Radiance_Transfer_Field_for_Rendering_Interreflections_in_Dynamic_Scenes
