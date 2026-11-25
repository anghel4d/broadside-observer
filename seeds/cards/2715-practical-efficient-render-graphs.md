---
title: "Practical, efficient render graphs"
authors:
  - "Ipotrick (Patrick)"
year: 2026
venue: "Patrick's Pretty Pixels (blog), 20 Nov 2026"
arxiv: null
doi: null
source: "https://ipotrick.github.io/site/blogs/practical-efficient-rendergraphs/"
version_reviewed: "web 2026-11-20"
topics:
  - "render-graphs"
  - "frame-graphs"
  - "barrier-generation"
  - "pass-reordering"
  - "transient-memory-aliasing"
  - "split-barriers"
  - "async-compute"
  - "vulkan"
seed_rank: 2715
seed_batch: "craft-2026-11-25"
reviewed: "2026-11-25"
pool: "graphics"
relevance_score: 8
lineage: vulkan-realtime-rendering
cites:
  - title: "Practical, efficient render graphs"
    url: "https://ipotrick.github.io/site/blogs/practical-efficient-rendergraphs/"
    year: 2026
    arxiv: null
    doi: null
  - title: "FrameGraph: Extensible Rendering Architecture in Frostbite"
    url: "https://www.gdcvault.com/play/1024612/FrameGraph-Extensible-Rendering-Architecture-in"
    year: 2017
    arxiv: null
    doi: null
  - title: "Render graphs and Vulkan — a deep dive"
    url: "https://themaister.net/blog/2017/08/15/render-graphs-and-vulkan-a-deep-dive/"
    year: 2017
    arxiv: null
    doi: null
  - title: "Task Graph Renderer at Activision"
    url: null
    year: 2023
    arxiv: null
    doi: null
  - title: "The Render Pipeline Shaders SDK"
    url: "https://gpuopen.com/learn/rps_1_0/"
    year: 2022
    arxiv: null
    doi: null
see:
  - "100-framegraph-extensible-rendering-architecture-in-frostbite"
---

# Practical, efficient render graphs

## One-sentence takeaway

A render graph built on per-resource access timelines, not an explicit pass DAG or versioned resources, gets correct barriers, read and concurrent-write access groups, batched and reordered passes, and lifetime-based transient memory aliasing from mostly "look at the previous entry on this timeline" steps; in the author's Timberdoodle renderer (about 80 passes) it saves about 350 MB of VRAM and 0.2–0.4 ms per frame.

## Why it matters here

Anoptic is a Vulkan renderer with meshlets, radiance cascades and many optional passes; hand-placed barriers stop scaling exactly when presets and feature toggles multiply. This post is the most implementation-ready recent write-up of the frame-graph idea since Frostbite: it explains each optimization in order of payoff (barriers, then access groups, then batching and reordering, then aliasing, then split barriers and async compute), argues for a static graph rebuilt only on settings change (as Activision does), and gives an API shape with resources as typed value indices and graphs composed by ordinary functions. That matches Anoptic's C23, data-oriented style better than the string-ID, versioned-resource APIs most engines copied from FrameGraph.

## Key ideas

- **Two-level recording.** Passes declare how they access resources (read, write, attachment kind) and record their commands later in a callback; the graph sees the whole frame before any real command is recorded.
- **Resource timelines are the graph.** For each resource, the ordered list of passes that touch it and how. A write depends on the previous access, a read on the last write; the pass graph is implicit and never materialized.
- **Access groups.** Consecutive reads merge into one timeline entry with a merged layout and merged stage/access masks, removing read-after-read barriers and backward scans; writes explicitly marked "concurrent" (disjoint ranges, atomics) group the same way.
- **Batching and reordering.** Passes are scheduled into batches after the latest batch of their dependencies (groups store min/max batch), and the barriers for a batch are merged into as few API calls as possible.
- **Aliasing as 2D packing.** Transient lifetimes (first to last batch) × memory ranges are placed longest-lived first at the lowest free address, with rectangle-intersection tests ("big grains of sand first"); this alone saves about half of transient memory, around 20% of total VRAM in Timberdoodle.
- **Static over per-frame.** Record and optimize at load or settings change and cache permutations; per-frame rebuilding limits how much optimization you can afford. Bindings travel with attachments through shared index headers, or through macro-declared pass heads shared by C++ and shaders (Daxa's task heads).

## Caveats

A practitioner blog post by the developer known as Ipotrick (signed "Patrick"; full name not given on the page, so none is recorded here) describing one design (Daxa's render graph, used in the Timberdoodle research renderer, co-developed with Matěj Sakmary, whose virtual shadow maps are card 2419); the savings are the author's own measurements on two GPUs (RTX 4080, RX 9070 XT) with other engines' published numbers cited for comparison, not an independent benchmark. The sections on batching/reordering and split barriers/async compute were skimmed rather than read line by line. It is a Vulkan/D3D12 story; nothing covers bindless validation, multi-GPU, or how a static graph handles truly dynamic per-frame work beyond conditional permutations.

## Links

- Post: https://ipotrick.github.io/site/blogs/practical-efficient-rendergraphs/
- Archived copy: https://web.archive.org/web/20261125024852/https://ipotrick.github.io/site/blogs/practical-efficient-rendergraphs/
- Found via Graphics Programming Weekly 464: https://www.jendrikillner.com/post/graphics-programming-weekly-issue-464/
