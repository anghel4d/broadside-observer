---
title: "JIT bitmap text rendering for microcontrollers"
authors:
  - "Raph Levien"
year: 2026
venue: "Linebender blog"
arxiv: null
doi: null
source: "https://linebender.org/blog/jit-bitmap-text/"
topics:
  - "computational-linguistics-interfaces"
  - "vulkan-realtime-rendering"
seed_rank: 2537
seed_batch: "craft-2026-11-09"
reviewed: "2026-11-09"
pool: "graphics"
relevance_score: 8
lineage: gpu-text
cites:
  - title: "JIT bitmap text rendering for microcontrollers"
    url: "https://linebender.org/blog/jit-bitmap-text/"
    year: 2026
    arxiv: null
    doi: null
see: ["1787-higher-quality-2d-text-rendering", "1128-gpu-centered-font-rendering-directly-from-glyph-outlines"]
---

# JIT bitmap text rendering for microcontrollers

## One-sentence takeaway

Raph Levien renders proportional, kerned bitmap text while racing the beam on an RP2350 by JIT-compiling each string into a few ARM instructions per glyph (load, bit-field extract, shifted OR), at about 23 cycles per glyph plus 3 per row, and kerns with a dot product of per-glyph edge bitvectors.

## Why it matters here

Anoptic's text path is scanline-based, and this is the purest version of that idea: a y-sorted display list, an active list per scanline, and per-object start/render/end hooks with a deterministic bitmap allocator. Two tricks transfer directly. First, compiling a string into straight-line code removes all per-glyph branching and shift setup. Second, kerning as AND plus popcount of two small bitvectors is a GPU-friendly replacement for OpenType kern-table chasing, which Levien says he first thought of for GPU text layout.

## Key ideas

- **Race the beam.** No framebuffer; a one-line buffer per scanline with a budget of about 6 cycles per pixel and double-buffered display lists swapped at vsync.
- **Packed font atlas.** Glyph ink packed so no glyph straddles a 32-pixel chunk, side bearings stored in metadata, and overlapping glyphs share pixels (1140 to 960 bytes).
- **JIT per string.** At object start the string is compiled into code that ORs glyph bits into a 1-bpp line; instruction reordering fills the load-use delay. The JIT runs in under 100 µs before scanout, and JIT plus run for the demo is about 2.6% of one core.
- **Dot-product kerning.** Each glyph has left and right edge bitvectors; the kern is popcount(right_a AND left_b), two bytes per glyph, evaluated at display-list build time.

## Caveats

A blog post, not a paper, about 1-bpp bitmap fonts on a Cortex-M33; it does not handle antialiasing, shaping or Unicode. The kerning tables were built by hand, and scaling dot-product kerning to real fonts is stated as an untested hunch. The author discloses LLM assistance in translating and optimising the JIT core.

## Links

- Blog post: https://linebender.org/blog/jit-bitmap-text/
- Bitmap Graphics, SIGGRAPH 84 course notes (prior art on Blit bitblt code generation), cited in the post
