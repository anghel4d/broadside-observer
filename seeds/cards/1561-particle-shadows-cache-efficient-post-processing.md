---
title: "Particle Shadows & Cache-Efficient Post-Processing"
authors:
  - "Louis Bavoil"
  - "Jon Jansen"
year: 2013
venue: "GDC 2013 (Advanced Visual Effects with DirectX 11)"
arxiv: null
doi: null
source: "https://d29g4g2dyqv443.cloudfront.net/sites/default/files/akamai/gamedev/docs/BAVOIL_ParticleShadowsAndCacheEfficientPost.pdf"
topics:
  - "ssao"
  - "hbao-plus"
  - "interleaved-rendering"
seed_rank: 1561
seed_batch: "user-ao-post-2026-09-03"
reviewed: "2026-09-03"
pool: "graphics"
relevance_score: 9
lineage: ssao
cites:
  - title: "Interleaved Sampling"
    url: "https://www.cs.ubc.ca/labs/imager/tr/2001/keller2001a/keller.2001a.pdf"
    year: 2001
    arxiv: null
    doi: null
  - title: "Scalable Ambient Obscurance"
    url: "https://research.nvidia.com/sites/default/files/publications/McGuire12SAO.pdf"
    year: 2012
    arxiv: null
    doi: "10.2312/EGGH/HPG12/097-103"
  - title: "Image-Space Horizon-Based Ambient Occlusion"
    url: "https://developer.download.nvidia.com/presentations/2008/SIGGRAPH/HBAO_SIG08b.pdf"
    year: 2008
    arxiv: null
    doi: "10.1145/1401032.1401061"
  - title: "Approximating Dynamic Global Illumination in Image Space"
    url: "https://doi.org/10.1145/1507149.1507161"
    year: 2009
    arxiv: null
    doi: "10.1145/1507149.1507161"
see:
  - "401-horizon-based-ambient-occlusion"
  - "1387-practical-realtime-strategies-for-accurate-indirect-occlusion"
  - "398-approximating-dynamic-global-illumination-in-image-space-ssd"
---

# Particle Shadows & Cache-Efficient Post-Processing

## One-sentence takeaway

HBAO+ is the DX11 production recipe for horizon AO: interleaved passes with a constant jitter per pass (no random texture), a SAO-like AO term, always full-resolution from full-res depths, and an optional second depth layer.

## Why it matters here

Card 401 is the 2008 horizon integral on a GeForce 8800. HBAO+ is the cache layout Anoptic would actually dispatch as a Vulkan compute SSAO: deinterleave the depth, run one jitter-free kernel per subgrid, reinterleave, bilateral blur. That is the GameWorks path (ArcheAge, The Secret World, Metro: Last Light preview) rather than reminting the SIGGRAPH talk.

## Key ideas

- **Interleaved Rendering (Keller 2001).** Large sparse jittered filters (SSAO / SSDO / SSR) trash the texture cache because adjacent pixels fetch far-apart texels. Deinterleave the full-res input into an NxN texture array (2×2: one draw, 4 MRTs; 4×4: two draws, 8 MRTs), run each sampling pattern as its own low-res pass with a *constant* jitter, then reinterleave with one Tex2DArray fetch per pixel.
- **Measured on GTX 680 (D3D11 timestamps).** Full-res jittered SSAO 3.47 ms at 1920×1200 vs 4×4-interleaved 1.74 ms (2.0×); 9.25 ms vs 3.14 ms at 2560×1600 (2.9×). Texture-cache hit rate 38%→67% and 32%→62%. Breakdown at 1920×1200: Z deinterleave 0.12 + SSAO 1.50 + AO interleave 0.12 ms.
- **HBAO+ vs HBAO (GameWorks 2.4 / GitHub HBAOPlus 4.0).** (1) No randomization texture — unique jitter per interleaved pass, citing this GDC talk. (2) Simpler AO term close to Scalable Ambient Obscurance (McGuire/Mara/Luebke HPG 2012) to avoid over-occlusion. (3) Always full-res from full-res depths (no half-res flicker). (4) Optional second depth layer (Bavoil–Sainz 2009 multi-layer SSAO / McGuire 2013 deep G-buffers) to cut halos behind foreground.
- **Pipeline knobs.** CoarseAO: 32 variable-radius disk samples with ≥4 full-res pixels between center and tap. Optional DetailAO: 4 orthogonal neighbors (skip on alpha-tested grass). Cross-bilateral blur radius 2/4/8. PowerExponent typically 2–3. Input: hardware depth + projection; normals optional. DX11_0+; MSAA uses sample 0 (PER_PIXEL_AO).
- **Talk is two halves.** Part 1 is Particle Shadow Mapping (voxelize particle transmittance into a 3D light-space map, CS-propagate, ~0.50 ms for 8K particles / 256³ on GTX 680). The named HBAO+ item is Part 2 plus the later GameWorks library. ShaderX7 ch. 6.2 is the same algorithm as 401 — not this card.

## Caveats

- Closed-source GameWorks DLL (DX11/DX12/GL samples). The GDC PDF is the public writeup; there is no arXiv. Do not remint 401 (HBAO 2008), 1349 (SAO), or ShaderX7.
- Interleaved rendering snaps sample coords to a quarter-res grid aligned with the kernel center; missed small-kernel detail may need a full-res inner pass. Looks the same for kernels >16×16 full-res pixels.
- Still screen-space AO. Particle-shadow half of the talk is not HBAO+; do not read this card as a volumetric-shadow paper.

## Links

- GDC 2013 PDF: https://d29g4g2dyqv443.cloudfront.net/sites/default/files/akamai/gamedev/docs/BAVOIL_ParticleShadowsAndCacheEfficientPost.pdf
- GameWorks HBAO+ 2.4: https://archive.docs.nvidia.com/gameworks/content/gameworkslibrary/visualfx/hbao/product.html
- GitHub (closed-source lib): https://github.com/NVIDIAGameWorks/HBAOPlus
