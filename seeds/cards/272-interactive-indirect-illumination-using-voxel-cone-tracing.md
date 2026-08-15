---
title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
authors:
  - "Cyril Crassin"
  - "Fabrice Neyret"
  - "Miguel Sainz"
  - "Simon Green"
  - "Elmar Eisemann"
year: 2011
venue: "I3D 2011"
arxiv: null
doi: "10.1145/1944745.1944787"
source: "https://doi.org/10.1145/1944745.1944787"
topics:
  - gi
  - vxgi
seed_rank: 272
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "GigaVoxels: Ray-Guided Streaming for Efficient and Detailed Voxel Rendering"
    url: "https://doi.org/10.1145/1507149.1507152"
    year: 2009
    doi: "10.1145/1507149.1507152"
  - title: "Cascaded Light Propagation Volumes for Real-Time Indirect Illumination"
    url: "https://doi.org/10.1145/1730804.1730821"
    year: 2010
    doi: "10.1145/1730804.1730821"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
see:
  - "352-gigavoxels-ray-guided-streaming-for-efficient-and-detailed-v"
  - "277-light-propagation-volumes-in-cryengine-3"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "120-voxel-cone-tracing-for-real-time-global-illumination"
---

# Interactive Indirect Illumination Using Voxel Cone Tracing

## One-sentence takeaway

Voxelize the scene into a sparse octree and gather indirect light with a handful of mip-filtered cones instead of hundreds of rays, giving interactive multi-bounce-ish GI with strong near-field contact.

## Why it matters here

Primary industrial foil on the Radiance Cascades thread: VXGI wins contact shadows and local bounce, then loses on voxel update cost and resolution. Anoptic should know exactly what RC is being measured against.

## Key ideas

- Build a sparse voxel octree (GigaVoxels lineage) of incoming radiance / occupancy.
- Approximate a cosine-weighted gather as a few cones; mip-mapping along each cone yields soft occlusion and a cheap multi-bounce look.
- Excellent near-field response; memory and incremental rebuild of the voxel volume are the production tax.
- I3D 2011, DOI 10.1145/1944745.1944787. Full author list restored (was "Crassin et al.").

## Caveats

## Links

- DOI: [10.1145/1944745.1944787](https://doi.org/10.1145/1944745.1944787)
