# ssao

**Charter.** Screen-space ambient occlusion *implementations* and screen-space bent-normal extras: interleaved/cache-efficient HBAO+, adaptive compute ASSAO-descendants, GTAO ports, and G-buffer bent cones. Theory cards stay on `ambient-occlusion` (401 HBAO, 484 CryEngine SSAO, 1349 SAO) and GTAO 1387; this thread is what Anoptic actually dispatches as Vulkan compute.

## Ordered spine

1. **Horizon / production HBAO** — Bavoil & Jansen GDC 2013 interleaved rendering → GameWorks HBAO+ (this mint, 1561). Original 2008 talk is 401.
2. **Adaptive compute** — AMD FidelityFX CACAO 2020 (1562), MIT Vulkan/DX12 port of Intel ASSAO. ASSAO itself is bibliography only.
3. **GTAO port** — XeGTAO 2021 (1563), MIT HLSL of Jimenez 2016 (1387) with Hilbert samples, spatial denoise, optional bent normals.
4. **Screen-space bent cones** — Klehm et al. VMV 2011 (1564). Landis 1514 is the bake-time origin, not this lineage.

## Cards in this mint (`user-ao-post-2026-09-03`)

| Rank | Year | Title | Stem |
|-----:|-----:|-------|------|
| 1561 | 2013 | Particle Shadows & Cache-Efficient Post-Processing | `1561-particle-shadows-cache-efficient-post-processing` |
| 1562 | 2020 | AMD FidelityFX Combined Adaptive Compute Ambient Occlusion | `1562-amd-fidelityfx-combined-adaptive-compute-ambient-occlusion` |
| 1563 | 2021 | XeGTAO | `1563-xegtao` |
| 1564 | 2011 | Bent Normals and Cones in Screen-space | `1564-bent-normals-and-cones-in-screen-space` |

## Open frontiers

- Vulkan compute SSAO that emits AO + bent N in one pass (XeGTAO MainPass layout) on Anoptic's G-buffer
- Adaptive importance-map scheduling on a compute queue without a graphics-queue bubble
- Not absorbing radiance-cascades near-field into this lineage; `card:`-link 1387 / RC when comparing
