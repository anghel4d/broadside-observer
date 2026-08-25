---
title: "Comprehensible rendering of 3-D shapes"
authors: ["Takafumi Saito", "Tokiichiro Takahashi"]
year: 1990
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/97879.97901"
source: "https://doi.org/10.1145/97879.97901"
topics:
  - "deferred-rendering"
seed_rank: 1347
seed_batch: "fox-engine-2013"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: deferred-rendering
cites:
  []
see:
  - "1346-deferred-shading"
  - "1344-photorealism-through-the-eyes-of-a-fox-the-core"
---

# Comprehensible rendering of 3-D shapes

## One-sentence takeaway

Saito–Takahashi 1990: Geometric Buffers (G-buffers) — depth, normals, and other per-pixel geometry stored so enhancement is a post-process. The academic name Fox's deferred G-buffer sits on.

## Problem

Line-tracking for edges, contours, and hatching does not compose with ordinary raster shading. Need an intermediate that already has hidden-surface removal done.

## Design

After projection and HSR, keep one buffer per geometric property (depth, normal, …). Enhancement (edges, hatching, NPR) and, they note, photorealistic shading can run as 2D post-processes on that set. That is the G-buffer. Games later filled it with albedo/roughness/velocity and lit it (Hargreaves, Fox).

## Evidence

SIGGRAPH 1990 / Computer Graphics 24(4):197–206. DOI 10.1145/97879.97901. Open PDF: Princeton course copy. Calver 2003 cites this paper as the origin of the G-buffer idea.

## Limitations

The paper is NPR / comprehensibility, not a real-time multi-light engine. No MRT, no PBR. The game deferred literature starts ~2003–2004.

## Implications for Broadside

When Fox or Courrèges say "G-buffer" they mean this data structure. Already-in-library Visibility Buffer (271) is a later compression of the same idea.

## Bottom line

Mint Saito–Takahashi 1990 as the academic G-buffer cite. Do not remint Hargreaves as the same paper.

## Links

- DOI: https://doi.org/10.1145/97879.97901
- PDF (Princeton course copy): https://www.cs.princeton.edu/courses/archive/fall00/cs597b/papers/saito90.pdf
