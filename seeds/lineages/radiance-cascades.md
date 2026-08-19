# Radiance Cascades

**Slug:** `radiance-cascades`  
**Batch:** `lineage-radiance-cascades-2026-08-13`  
**Cards in thread:** 31 (1115 = 1107 + 8 WIP community 2026-08-20)

## Charter

Real-time global illumination for Anoptic / Broadside, centered on **Alexander Sannikov’s Radiance Cascades** (Path of Exile 2 / ExileCon WIP) and the classical RTGI methods it reframes. The thread asks how to get **noiseless, fully dynamic indirect light** without betting the engine on NeRF/3DGS neural caches. Cascades answer with a *penumbra hypothesis*: nearby light needs spatial resolution; distant light needs angular resolution. Merge hierarchical radiance intervals and you approximate a huge ray count for a fixed, scene-independent cost. Everything else on this spine is either a **precursor** (many-light, volumes, voxels, probes) or an **industrial foil** (especially DDGI) that explains what shipped engines already do while RC variants push 2D → sparse 3D.

Neural GI appears only when it is already a seeded neighbor of this thread; this lineage is deliberately **not** a NeRF/3DGS dump.

## Ordered spine

Classics → foils → RC → living variants:

1. **Many-light / VPL root** — Instant Radiosity (Keller 1997) → Reflective Shadow Maps → Splatting Indirect → Imperfect Shadow Maps.
2. **Probe / basis root** — Irradiance Volume → SH irradiance env maps → PRT (static-geometry foil).
3. **Volumetric cascades before RC** — Cascaded Light Propagation Volumes (CryEngine-era SH lattices).
4. **Voxel foil** — GigaVoxels → Voxel Cone Tracing / VXGI.
5. **Image-space foil** — SSDO (what you get from a depth buffer alone).
6. **Industrial probe foil** — Light Field Probes → DDGI → production scaling / resampling / SDF-DDGI → GI-1.0 radiance cache.
7. **Radiance Cascades** — Sannikov WIP (screenspace/2D-friendly, geometry-agnostic rebuild).
8. **Cross-domain formalization** — Osborne & Sannikov RASTI/DexRT (bilinear/ringing discussion the graphics variants cite).
9. **RC variants already seeded** — Holographic RC (2D hard shadows / volumetrics) → Osborne DexRT ray acceleration (sparse bricks / VLM / HDDA) → Split RC (sparse 3D world-space probes + ray splitting).

Community implementations now seeded as WIP cards 1108–1115 (ExileCon talk, Shadertoy 2D, UV-space 3D, GM Shaders, jason.today, Surfel RC, RC-guided NEE, Kung MSc). Still not venue papers.

### Spine table

| Year | Card | Title | Role |
|------|------|-------|------|
| 1997 | `450-instant-radiosity` | Instant Radiosity | Many-light root |
| 1998 | `451-the-irradiance-volume` | The Irradiance Volume | Probe-volume root |
| 2001 | `367-an-efficient-representation-for-irradiance-environment-maps` | An Efficient Representation for Irradiance Environment Maps | SH irradiance micro-classic |
| 2002 | `366-precomputed-radiance-transfer` | Precomputed Radiance Transfer | PRT / precomputed transport foil |
| 2005 | `292-reflective-shadow-maps` | Reflective Shadow Maps | RSM — GPU Instant Radiosity |
| 2006 | `452-splatting-indirect-illumination` | Splatting Indirect Illumination | RSM splatting bridge |
| 2008 | `402-imperfect-shadow-maps-for-efficient-computation-of-indirect-` | Imperfect Shadow Maps for Efficient Computation of Indirect Illumination | ISM many-light visibility |
| 2009 | `352-gigavoxels-ray-guided-streaming-for-efficient-and-detailed-v` | Gigavoxels: Ray-Guided Streaming for Efficient and Detailed Voxel Rendering | GigaVoxels substrate |
| 2009 | `398-approximating-dynamic-global-illumination-in-image-space-ssd` | Approximating Dynamic Global Illumination in Image Space (SSDO) | SSDO image-space foil |
| 2010 | `277-light-propagation-volumes-in-cryengine-3` | Cascaded Light Propagation Volumes for Real-Time Indirect Illumination | Cascaded LPV |
| 2011 | `272-interactive-indirect-illumination-using-voxel-cone-tracing` | Interactive Indirect Illumination Using Voxel Cone Tracing | VXGI (primary) |
| 2011 | `120-voxel-cone-tracing-for-real-time-global-illumination` | Voxel Cone Tracing for Real-Time Global Illumination | VXGI (duplicate short title) |
| 2017 | `327-real-time-global-illumination-using-precomputed-light-field-` | Real-Time Global Illumination using Precomputed Light Field Probes | Light Field Probes |
| 2019 | `318-dynamic-diffuse-global-illumination-with-ray-traced-irradian` | Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields | DDGI industrial probe foil |
| 2020 | `256-scaling-probe-based-real-time-dynamic-global-illumination-fo` | Scaling Probe-Based Real-Time Dynamic Global Illumination for Production | DDGI production scaling |
| 2020 | `257-signed-distance-fields-dynamic-diffuse-global-illumination` | Signed Distance Fields Dynamic Diffuse Global Illumination | SDF-DDGI neighbor |
| 2021 | `246-dynamic-diffuse-global-illumination-resampling` | Dynamic Diffuse Global Illumination Resampling | DDGI + reservoir resampling |
| 2023 | `231-gi-1-0-a-fast-and-scalable-two-level-radiance-caching-scheme` | GI-1.0: A Fast and Scalable Two-level Radiance Caching Scheme for Real-time Global Illumination | GI-1.0 radiance-cache foil |
| 2023 | `005-radiance-cascades-a-novel-approach-to-calculating-global-ill` | Radiance Cascades: A Novel Approach to Calculating Global Illumination | Sannikov Radiance Cascades |
| 2024 | `453-radiance-cascades-a-novel-high-resolution-formal-solution-fo` | Radiance Cascades: A Novel High-Resolution Formal Solution for Multidimensional Non-LTE Radiative Transfer | Osborne & Sannikov RC formalization |
| 2025 | `1107-a-simple-ray-acceleration-structure-for-non-lte-radiative-t` | A Simple Ray Acceleration Structure for Non-LTE Radiative Transfer | DexRT sparse+mip+HDDA |
| 2025 | `211-holographic-radiance-cascades-for-2d-global-illumination` | Holographic Radiance Cascades for 2D Global Illumination | Holographic RC |
| 2026 | `208-split-radiance-cascades-real-time-global-illumination-via-sp` | Split Radiance Cascades: Real-Time Global Illumination via Sparse Radiance Probes | Split RC (3D sparse) |
| 2023 | `1108-exilecon-2023-rendering-path-of-exile-2` | ExileCon 2023: Rendering Path of Exile 2 | PoE2 screenspace talk |
| 2023 | `1109-radiance-cascades-shadertoy` | Radiance Cascades (Shadertoy) | fad 2D Shadertoy |
| 2024 | `1110-radiance-cascades-3d-uv-space-shadertoy` | Radiance Cascades 3D (UV-Space Shadertoy) | UV-space 3D PoC |
| 2024 | `1111-gm-shaders-guest-radiance-cascades` | GM Shaders Guest: Radiance Cascades | Yaazarai tutorial |
| 2024 | `1112-radiance-cascades-building-real-time-global-illumination` | Radiance Cascades: Building Real-Time Global Illumination | jason.today |
| 2025 | `1113-surfel-radiance-cascades-diffuse-global-illumination` | Surfel Radiance Cascades Diffuse Global Illumination | Surfel RC |
| 2025 | `1114-radiance-cascades-guided-nee-pathtracer` | Radiance Cascades Guided NEE Pathtracer | RC-guided NEE |
| 2025 | `1115-comparing-radiance-cascades-to-voxel-cone-tracing-for-inte` | Comparing Radiance Cascades to Voxel Cone Tracing… | Kung LiU MSc |

## Broadside cards in thread

| Stem | Year | Score | Title |
|------|------|-------|-------|
| `450-instant-radiosity` | 1997 | 10 | Instant Radiosity |
| `451-the-irradiance-volume` | 1998 | 9 | The Irradiance Volume |
| `367-an-efficient-representation-for-irradiance-environment-maps` | 2001 | 8 | An Efficient Representation for Irradiance Environment Maps |
| `366-precomputed-radiance-transfer` | 2002 | 8 | Precomputed Radiance Transfer |
| `292-reflective-shadow-maps` | 2005 | 9 | Reflective Shadow Maps |
| `452-splatting-indirect-illumination` | 2006 | 8 | Splatting Indirect Illumination |
| `402-imperfect-shadow-maps-for-efficient-computation-of-indirect-` | 2008 | 7 | Imperfect Shadow Maps for Efficient Computation of Indirect Illumination |
| `352-gigavoxels-ray-guided-streaming-for-efficient-and-detailed-v` | 2009 | 8 | Gigavoxels: Ray-Guided Streaming for Efficient and Detailed Voxel Rendering |
| `398-approximating-dynamic-global-illumination-in-image-space-ssd` | 2009 | 7 | Approximating Dynamic Global Illumination in Image Space (SSDO) |
| `277-light-propagation-volumes-in-cryengine-3` | 2010 | 9 | Cascaded Light Propagation Volumes for Real-Time Indirect Illumination |
| `120-voxel-cone-tracing-for-real-time-global-illumination` | 2011 | 9 | Voxel Cone Tracing for Real-Time Global Illumination |
| `272-interactive-indirect-illumination-using-voxel-cone-tracing` | 2011 | 9 | Interactive Indirect Illumination Using Voxel Cone Tracing |
| `327-real-time-global-illumination-using-precomputed-light-field-` | 2017 | 8 | Real-Time Global Illumination using Precomputed Light Field Probes |
| `318-dynamic-diffuse-global-illumination-with-ray-traced-irradian` | 2019 | 8 | Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields |
| `256-scaling-probe-based-real-time-dynamic-global-illumination-fo` | 2020 | 9 | Scaling Probe-Based Real-Time Dynamic Global Illumination for Production |
| `257-signed-distance-fields-dynamic-diffuse-global-illumination` | 2020 | 9 | Signed Distance Fields Dynamic Diffuse Global Illumination |
| `246-dynamic-diffuse-global-illumination-resampling` | 2021 | 9 | Dynamic Diffuse Global Illumination Resampling |
| `005-radiance-cascades-a-novel-approach-to-calculating-global-ill` | 2023 | 10 | Radiance Cascades: A Novel Approach to Calculating Global Illumination |
| `231-gi-1-0-a-fast-and-scalable-two-level-radiance-caching-scheme` | 2023 | 9 | GI-1.0: A Fast and Scalable Two-level Radiance Caching Scheme for Real-time Global Illumination |
| `453-radiance-cascades-a-novel-high-resolution-formal-solution-fo` | 2024 | 9 | Radiance Cascades: A Novel High-Resolution Formal Solution for Multidimensional Non-LTE Radiative Transfer |
| `1107-a-simple-ray-acceleration-structure-for-non-lte-radiative-t` | 2025 | 9 | A Simple Ray Acceleration Structure for Non-LTE Radiative Transfer |
| `211-holographic-radiance-cascades-for-2d-global-illumination` | 2025 | 9 | Holographic Radiance Cascades for 2D Global Illumination |
| `208-split-radiance-cascades-real-time-global-illumination-via-sp` | 2026 | 9 | Split Radiance Cascades: Real-Time Global Illumination via Sparse Radiance Probes |
| `1108-exilecon-2023-rendering-path-of-exile-2` | 2023 | 9 | ExileCon 2023: Rendering Path of Exile 2 |
| `1109-radiance-cascades-shadertoy` | 2023 | 8 | Radiance Cascades (Shadertoy) |
| `1110-radiance-cascades-3d-uv-space-shadertoy` | 2024 | 8 | Radiance Cascades 3D (UV-Space Shadertoy) |
| `1111-gm-shaders-guest-radiance-cascades` | 2024 | 8 | GM Shaders Guest: Radiance Cascades |
| `1112-radiance-cascades-building-real-time-global-illumination` | 2024 | 8 | Radiance Cascades: Building Real-Time Global Illumination |
| `1113-surfel-radiance-cascades-diffuse-global-illumination` | 2025 | 8 | Surfel Radiance Cascades Diffuse Global Illumination |
| `1114-radiance-cascades-guided-nee-pathtracer` | 2025 | 7 | Radiance Cascades Guided NEE Pathtracer |
| `1115-comparing-radiance-cascades-to-voxel-cone-tracing-for-inte` | 2025 | 7 | Comparing Radiance Cascades to Voxel Cone Tracing for Interactive Global Illumination in Dynamic Scenes |

## Graph notes

- Prefer **`272`** over **`120`** for VXGI cites (same DOI; 137 is a short-title duplicate).
- Card **`277`** file stem still says `…cryengine-3` but frontmatter title is corrected to the I3D **Cascaded LPV** paper (DOI `10.1145/1730804.1730821`).
- **`005`** source pinned to `https://github.com/Raikiri/RadianceCascadesPaper` (WIP tex); not a finished journal article.
- Neural Cone Radiosity (`275`) and other neural GI seeds stay **off** this lineage unless they become direct RC neighbors.

## Open frontiers / watch next

- **Sparse 3D RC in engine** — validate Split RC hashmap + ray splitting on Anoptic’s Vulkan/meshlet path; measure vs DDGI leak/bias class bugs. Osborne 2025 (1107) is the DexRT sparsity/HDDA counterpart, not a game-probe paper.
- **Holographic → 3D** — memory wall O(N×X²); Surfel RC (1113) and UV-space RC (1110) now have WIP cards, still no venue paper.
- **Artifact taxonomy** — ringing, bilinear fix, non-linear accumulation; promote Osborne & Sannikov + HRC notes into a `summaries/` digest.
- **Hybrid with HW RT** — RC-guided NEE is now `1114` (`entropylost/vlam`); still 2D research-stage.
- **RTS dynamics** — fully rebuildable, no temporal debt: does RC stay constant-cost with thousands of emissive gameplay FX?
- **Do not expand** into general NeRF/3DGS neural radiance fields unless a paper is an explicit RC successor.
