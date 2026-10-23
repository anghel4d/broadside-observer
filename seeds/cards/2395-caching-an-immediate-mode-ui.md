---
title: "Don't throw it all away: Caching an immediate-mode UI"
authors:
  - "Moritz Falk"
year: 2026
venue: "Blick blog"
arxiv: null
doi: null
source: "https://blickeditor.com/blog/caching-an-immediate-mode-ui"
topics:
  - "immediate-mode-ui"
  - "tiled-compute-rendering"
  - "sdf-shapes"
  - "render-caching"
  - "gpu-binning"
seed_rank: 2395
seed_batch: "craft-2026-10-23"
reviewed: "2026-10-23"
pool: "graphics"
relevance_score: 9
lineage: real-time-rendering
cites:
  - title: "Don't throw it all away: Caching an immediate-mode UI"
    url: "https://blickeditor.com/blog/caching-an-immediate-mode-ui"
    year: 2026
    arxiv: null
    doi: null
  - title: "Cached Software Rendering (rxi)"
    url: "https://rxi.github.io/cached_software_rendering.html"
    year: null
    arxiv: null
    doi: null
  - title: "UIPainter: Tile-Based UI Rendering in One Draw Call (Wessel Mast, Guerrilla)"
    url: "https://www.guerrilla-games.com/read/uipainter-tile-based-ui-rendering-in-one-draw-call"
    year: 2024
    arxiv: null
    doi: null
  - title: "Compute-Based GPU Particle Systems (Gareth Thomas, GDC 2014) sample"
    url: "https://github.com/GPUOpen-LibrariesAndSDKs/GPUParticles11"
    year: 2014
    arxiv: null
    doi: null
see:
  - "1854-real-time-gpu-vector-graphics-sdf-generation-quadratic-stroke"
  - "1787-higher-quality-2d-text-rendering"
---

# Don't throw it all away: Caching an immediate-mode UI

## One-sentence takeaway

Blick's UI painter keeps an immediate-mode frontend but caches pixels on the GPU. It bins a stream of fixed-size 64-byte drawing commands into coarse and fine tiles with bitsets, hashes each tile's ordered command list, and repaints only the tiles whose hash changed. Painting runs front-to-back through a small command interpreter in a compute shader. In a short scripted editing test on an M3 Pro this painted about 94% fewer tiles, used 87% less painter GPU time, and cut estimated CPU+GPU power by about 20%.

## Why it matters here

Anoptic's UI and HUD (dense RTS panels, minimap, text) will be immediate-mode, and the "IMGUI wastes work" objection is exactly what this answers. The design fits our arenas-and-command-buffers style. The UI emits a flat SoA-friendly command stream, the GPU decides what changed, and there is no retained widget tree and no CPU dirty-region tracking. It also explains how to do shape groups (combined SDF with one outline) and group opacity without offscreen targets.

## Key ideas

- **Commands as a tiny rendering language.** The command families are analytic SDF shapes, textured shapes (images, glyph coverage, effect atlases), shape-group boundaries and alpha-barrier boundaries. Group and barrier commands change how the commands after them are processed, so the shader acts as an interpreter with a little per-pixel state.
- **Two-level binning on the GPU.** A preprocessing pass marks which coarse regions each command touches. Each fine tile then filters its region's candidates into its own ordered list. Group and barrier boundaries and glow or shadow extents need bounds too, or tiles break.
- **Hash-to-skip.** Each tile's commands are hashed in draw order and compared with the previous frame. Changed tiles are appended to a work list, and the GPU writes the indirect dispatch count, so nothing goes back to the CPU. A whole-painter skip triggers when no command, dependency or effect changed. Texture content revisions must be part of the hash.
- **Front-to-back with early-out.** Each pixel stops once it is opaque, unless it is inside an open group or barrier.
- **Alpha barriers** (idea credited to Anton Mikhailov). The painter saves the accumulated color, composites the subtree separately, then applies one opacity, all in registers with no offscreen texture. Only one barrier can be active at a time (no nesting).
- **Lineage.** The design combines rxi's cached software rendering (hash a grid, redraw changed cells), Gareth Thomas's tiled compute particles, and Wessel Mast's Decima UIPainter (tiled SDF UI in one draw call).

## Caveats

The measurements come from a single four-trial, synthetic light-editing session on one laptop, with macOS `powermetrics` estimates and unvalidated battery telemetry. The author calls the battery projection preliminary. Tile lists have a fixed capacity, which limits overlap depth. Scrolling or large animations invalidate many tiles. Hashing commands instead of comparing pixels can cause spurious repaints. Stale-pixel regression tests (cached vs uncached image diffs) are proposed but not automated yet. Only the Metal backend is described in detail.

## Links

- Post: https://blickeditor.com/blog/caching-an-immediate-mode-ui
- rxi, Cached Software Rendering: https://rxi.github.io/cached_software_rendering.html
- Guerrilla, UIPainter: https://www.guerrilla-games.com/read/uipainter-tile-based-ui-rendering-in-one-draw-call
- GPUOpen GPUParticles11 sample: https://github.com/GPUOpen-LibrariesAndSDKs/GPUParticles11
