---
title: "Virtual Shadow Maps (GPU Zen 3 chapter, Markdown edition)"
authors:
  - "Matěj Sakmary"
  - "Jaker"
  - "Justin Hall"
  - "LVSTRI"
year: 2026
venue: "Graphics Programming Discord blog (copy of the GPU Zen 3 article), 12 Oct 2026"
arxiv: null
doi: null
source: "https://graphics-programming.org/blog/virtual-shadow-maps"
topics:
  - "shadow-mapping"
  - "virtual-texturing"
  - "gpu-driven-rendering"
  - "meshlets"
  - "mesh-shaders"
  - "vulkan"
seed_rank: 2419
seed_batch: "craft-2026-10-25"
reviewed: "2026-10-25"
pool: "graphics"
relevance_score: 8
cites:
  - title: "Virtual Shadow Maps"
    url: "https://graphics-programming.org/blog/virtual-shadow-maps"
    year: 2026
    arxiv: null
    doi: null
see: ["1503-virtual-shadow-maps-in-fortnite-battle-royale-chapter-4", "1508-efficient-virtual-shadow-maps-for-many-lights", "144-hierarchical-z-buffer-visibility", "015-gpu-driven-rendering-pipelines", "090-nanite-a-deep-dive"]
---

# Virtual Shadow Maps (GPU Zen 3 chapter, Markdown edition)

## One-sentence takeaway

A fully GPU-driven virtual shadow map for directional light: 16 concentric 4096² clipmap cascades of 128² pages, backed by one 4096² physical texture, with per-page caching, a sliding-window page table, and a "hierarchical page buffer" (a HiZ-like max-reduction of dirty flags) that culls meshlets in task shaders. On an RTX 3070 with Bistro (about 4M triangles), caching cuts total VSM time from about 2.4 ms to 0.39 ms.

## Why it matters here

The library already has Epic's Fortnite VSM (1503) and the many-lights paper (1508). This one is the version you can implement from: every pass is spelled out with listings, and there is open Vulkan code in Timberdoodle. It also uses exactly Anoptic's pipeline shape, meshlets plus mesh and task shaders plus GPU-only bookkeeping. The point to borrow is that sparse resources were rejected because deciding residency would need a CPU readback, so the allocator is a pair of GPU buffers (free pages, then evictable pages) filled by indirect dispatch. That is a GPU arena with no round trip. The hierarchical page buffer is a general trick that works for any shadow technique once you know which pages are visible.

## Key ideas

- **Two page tables.** The virtual page table stores physical coordinates plus allocated, visible and dirty bits. The physical page table holds the inverse mapping, so a page can be evicted and reassigned in one pass.
- **Caching that survives camera motion.** Cascade frustums snap to the page grid, and the light slides only in a plane parallel to its near plane, so cached depths stay valid. 2D wraparound addressing reuses page-table entries as pages scroll in and out.
- **Bookkeeping in five passes.** Free invalidated pages (light moved, or a per-cascade bitmask of pages touched by dynamic objects). Mark visible pages from the depth buffer. Fill the free and evictable buffers. Allocate. Clear only the new pages.
- **Cascade choice.** Two heuristics: one aims for one shadow texel per screen pixel, and one is based on distance and does not change when the camera rotates.
- **Culling.** Hierarchical page buffer levels are 2×2 max-reductions of the dirty flags. A task shader keeps a meshlet if any of the four texels its bounds touch is dirty. Fragments write depth with an image atomic min into the physical page.
- **Filtering fix.** For PCF or PCSS, mark a neighbourhood of pages at least as wide as the filter, so taps that cross a page edge stay backed.

## Caveats

- Directional light only. The open problems are local lights, translucency and the full invalidation when time of day changes. Compute rasterization is suggested as future work.
- Timings come from one camera path in one scene on one GPU. The headline number is for the cached 4096-texel, 128² page configuration, and the uncached runs were 0.95–2.37 ms.
- This is a near-final copy of a book chapter converted from LaTeX, so the printed GPU Zen 3 text may differ. The authors are listed by the names and handles the blog shows.

## Links

- Article: https://graphics-programming.org/blog/virtual-shadow-maps
