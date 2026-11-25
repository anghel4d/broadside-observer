---
title: "Practical and Robust Stenciled Shadow Volumes for Hardware-Accelerated Rendering"
authors:
  - "Cass Everitt"
  - "Mark J. Kilgard"
year: 2002
venue: "NVIDIA technical report (developer.nvidia.com, 12 Mar 2002); arXiv cs/0301002 (6 Jan 2003)"
arxiv: "cs/0301002"
doi: null
source: "https://arxiv.org/abs/cs/0301002"
version_reviewed: "arXiv cs/0301002v1 (8 pages, 5 figures)"
topics:
  - "shadow-volumes"
  - "stencil-buffer"
  - "z-fail"
  - "infinite-projection"
  - "homogeneous-coordinates"
  - "depth-clamp"
  - "silhouette-extrusion"
seed_rank: 2718
seed_batch: "archive-2026-11-26"
reviewed: "2026-11-26"
pool: "graphics"
relevance_score: 7
lineage: shadow-volumes
cites:
  - title: "Practical and Robust Stenciled Shadow Volumes for Hardware-Accelerated Rendering"
    url: "https://arxiv.org/abs/cs/0301002"
    year: 2002
    arxiv: "cs/0301002"
    doi: null
  - title: "Shadow Algorithms for Computer Graphics"
    url: "https://doi.org/10.1145/563858.563901"
    year: 1977
    arxiv: null
    doi: "10.1145/563858.563901"
see:
  - "1043-shadow-algorithms-for-computer-graphics"
---

# Practical and Robust Stenciled Shadow Volumes for Hardware-Accelerated Rendering

## One-sentence takeaway

Everitt and Kilgard make Crow's shadow volumes robust on stock rasterizers by combining three moves — a projection matrix with the far plane at infinity, shadow volumes closed with real geometry at infinity via w = 0 vertices, and z-fail stencil counting from infinity instead of from the eye — so near- and far-plane clipping can no longer "slice open" a volume and no fragile near-plane capping is needed.

## Why it matters here

The library's shadow-volume line stopped at Crow 1977 (1043), and the 2026-11-24 Archive flagged this paper as the missing practical step. For Anoptic it is the reference recipe if hard, pixel-exact, omnidirectional shadows from point lights are ever wanted next to (or as a test oracle for) shadow maps: the whole method is "count enters and exits from infinity", expressed in a few lines of fixed-function state. The ideas carry over to the modern pipeline: the Pinf / infinite-far-plane trick is a close relative of today's infinite (often reversed-Z) projections; possible-silhouette extraction from per-triangle plane tests and edge adjacency is a natural mesh or compute shader pass over meshlets; depth clamp and two-sided stencil are ordinary Vulkan pipeline state today (the `depthClamp` feature with `depthClampEnable`, and separate front/back `VkStencilOpState`). The paper is also an honest example of designing for the hard cases (light inside an open container, eye inside a shadow volume) instead of the average frame, which is how Anoptic's visibility code should be judged.

## Key ideas

- **Why the old method broke.** Heidmann's 1991 stencil method counts zpass enters/exits along the eye ray. Near or far clipping cuts the infinite volumes open, so counts go wrong; capping at the near plane is "fragile" (Carmack's word, quoted) because the caps themselves can be clipped and must be watertight. The paper shows three cases where Diefenbach's 1996 fix fails.
- **z-fail ("Carmack's reverse").** Increment for back faces and decrement for front faces when the depth test *fails*. With volumes closed at both ends this gives the same count as zpass, but counting happens behind the visible surface, so the eye's position (inside a volume or not) and the near plane no longer matter.
- **Far plane at infinity.** Taking Far → ∞ changes only the third row of the OpenGL frustum matrix; a w = 0 point in front of the eye maps to depth 1.0 and is never far-clipped. Precision cost is small: with Near = 1, Far = 100 the depth range is squeezed by about 1%.
- **Closed volumes at infinity.** For light L and a closed model with edge adjacency: plane test d = A·Lx + B·Ly + C·Lz + D·Lw gives front/back facing per triangle; edges between a front- and a back-facing triangle are "possible silhouette" edges. The volume is (1) each such edge extruded to a quad whose far vertices are A·Lw − L·Aw with w = 0, (2) back-facing triangles projected to infinity the same way, (3) front-facing triangles as is.
- **Full procedure.** Ambient pass with depth; per light: clear stencil, render volumes with zfail INCR/DECR on back/front faces, then additive light pass where stencil = 0 with depth EQUAL; zpass INCR in the light pass avoids double-blending at identical depths. Optimizations: quad strips around silhouette loops, a triangle fan for directional lights (all far vertices coincide), zpass for loops known never to touch the near plane (mixing is legal per loop), reusing volumes while light and occluder are static.
- **Hardware proposals.** Wrapping stencil increment/decrement (EXT_stencil_wrap) to avoid saturation; NV_depth_clamp, which disables near/far clipping and clamps depth, so a finite projection works again and orthographic views are covered; and a newly proposed two-sided stencil test so volume geometry is sent once (same fill, less CPU/driver work; wrap ops become mandatory).

## Caveats

Hard shadows from ideal point/directional lights only; models must be closed 2-manifolds (Bergeron 1986 handles open or non-planar meshes), and rasterization must be watertight. Stencil fill rate is the cost the authors themselves flag; there is no performance evaluation beyond example frame rates (e.g. 34 fps with three lights on a GeForce4 Ti 4600 at 640×480, 8 fps with 12 clustered lights), and culling of shadow volumes is left as future work. The paper says on its first page that it was published on-line by NVIDIA and is not an accepted SIGGRAPH paper, so it is a vendor report, not peer-reviewed. Shadow maps (virtual, cascaded, filtered — see the `shadow-maps` and `soft-shadows` cards) won the industry for good reasons; read this as a robustness recipe and a reference renderer, not as Anoptic's default shadow path.

## Links

- arXiv abstract: https://arxiv.org/abs/cs/0301002
- PDF: https://arxiv.org/pdf/cs/0301002
- Crow 1977, the origin (card 1043): https://doi.org/10.1145/563858.563901
