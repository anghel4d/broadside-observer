---
title: "A Meshless Hierarchical Representation for Light Transport"
authors:
  - "Jaakko Lehtinen"
  - "Matthias Zwicker"
  - "Emmanuel Turquin"
  - "Janne Kontkanen"
  - "Frédo Durand"
  - "François X. Sillion"
  - "Timo Aila"
year: 2008
venue: "ACM Transactions on Graphics 27(3) (SIGGRAPH 2008)"
arxiv: null
doi: "10.1145/1360612.1360636"
source: "https://people.csail.mit.edu/jaakko/meshless/"
topics:
  - "global-illumination"
  - "hierarchical-radiosity"
  - "precomputed-radiance-transfer"
  - "scattered-data-approximation"
  - "fast-multipole"
seed_rank: 2581
seed_batch: "archive-2026-11-14"
reviewed: "2026-11-14"
pool: "graphics"
relevance_score: 9
lineage: hierarchical-radiosity
cites:
  - title: "A Rapid Hierarchical Radiosity Algorithm"
    url: "https://doi.org/10.1145/122718.122740"
    year: 1991
    arxiv: null
    doi: "10.1145/122718.122740"
  - title: "Wavelet Radiosity"
    url: "https://doi.org/10.1145/166117.166146"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166146"
  - title: "The Laplacian Pyramid as a Compact Image Code"
    url: "https://doi.org/10.1109/TCOM.1983.1095851"
    year: 1983
    arxiv: null
    doi: "10.1109/TCOM.1983.1095851"
  - title: "Lightcuts: A Scalable Approach to Illumination"
    url: "https://doi.org/10.1145/1073204.1073318"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073318"
see:
  - "1068-a-rapid-hierarchical-radiosity-algorithm"
  - "1041-a-ray-tracing-solution-for-diffuse-interreflection"
  - "374-global-illumination-using-photon-maps"
  - "366-precomputed-radiance-transfer"
  - "1042-lightcuts-a-scalable-approach-to-illumination"
  - "1528-all-frequency-shadows-using-non-linear-wavelet-lighting-approximation"
---

# A Meshless Hierarchical Representation for Light Transport

## One-sentence takeaway

Illumination is stored on a multilevel Poisson-disk cloud of surface points, where each level stores only the residual from the coarser levels, as in a Laplacian pyramid. This gives a hierarchical basis that needs no mesh or parameterization, and a transport operator built by hierarchical link refinement stays sparse enough for real-time indirect light on a 2.3M-triangle scene.

## Why it matters here

The M2L+RC plan for Anoptic (FMM-style far-field transfer spliced onto radiance cascades over a geometry-adaptive octree) needs exactly two things this paper supplies. First, a multiresolution radiance representation that lives on scattered samples in occupied space, not on a probe grid or a UV parameterization. Second, a link-refinement rule that only refines sender and receiver pairs whose transfer is significant or varies between neighbors. That rule is the "hierarchical-radiosity link refinement when visibility makes a far pair high-rank" step already identified as the one extra piece FMM needs for light. The paper's limitations (coarse supports leaking through walls, ringing at shadow edges) are the known risks of that plan, measured on real scenes.

## Key ideas

- **Points, not meshes.** Levels of Poisson-disk samples are drawn with a 5D distance (position plus normal), which needs only ray casts against the geometry. Each point carries a basis function with a level-dependent radius and a normal-aware fall-off weight.
- **Residual hierarchy.** The coarsest level holds point samples of the function; each finer level encodes the difference from the reconstruction of all coarser levels, so fine coefficients go to zero where lighting is smooth. The construction is a projection operator, so any Galerkin-style solver or precomputed-transfer method can use it.
- **Sparse transport by refinement.** Receivers are refined coarse-to-fine through a queue; a link from sender j is kept if its magnitude is above ε and, for non-coarsest senders, if it differs from links to j's neighbors by more than ε. Only a small fraction of all sender-receiver pairs is ever computed.
- **Direct-to-indirect transfer.** Precompute single-bounce T, then a multi-bounce operator by Neumann series (four bounces in the tests). At run time, project shadow-mapped direct light into the basis, apply the operator, and splat the indirect result on the GPU.
- **Numbers reported.** 12 to 25 FPS at 1280×720 with a static light and 6 to 9 FPS with a moving light, on scenes up to the 5.1M-triangle Jade Palace; 77 to 120 MB per scene; a little under half an hour of precomputation for the 2.3M-triangle scene in the teaser; about two orders of magnitude faster precomputation than Kristensen et al. 2005 on Sponza.

## Caveats

This is precomputed transfer for static geometry; nothing here handles moving occluders, which Anoptic's dynamic GI requires, so the takeaway is the representation and the refinement rule, not the pipeline. Large coarse supports can leak light through thin walls, and smooth bases ring at sharp shadow boundaries, which is why direct light is rendered separately. Only diffuse vector irradiance is transported. I read the abstract, introduction and related work, the basis construction and transport sections, results, and the limitations in the author preprint.

## Links

- Project page and preprint: https://people.csail.mit.edu/jaakko/meshless/
- PDF (author copy): https://www.cs.umd.edu/~zwicker/publications/MeshlessRepresentationForLightTransport-SIG08.pdf
- DOI: https://doi.org/10.1145/1360612.1360636
- MIT DSpace: https://dspace.mit.edu/handle/1721.1/100272
