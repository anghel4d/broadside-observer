---
title: "Voxel Cone Tracing for Real-Time Global Illumination"
authors:
  - "Cyril Crassin"
  - "Fabrice Neyret"
  - "Miguel Sainz"
  - "Simon Green"
  - "Elmar Eisemann"
year: 2011
venue: "I3D"
arxiv: null
doi: "10.1145/1944745.1944787"
source: "https://doi.org/10.1145/1944745.1944787"
topics:
  - gi
  - graphics
seed_rank: 120
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
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
see:
  - "352-gigavoxels-ray-guided-streaming-for-efficient-and-detailed-v"
  - "277-light-propagation-volumes-in-cryengine-3"
---

# Voxel Cone Tracing for Real-Time Global Illumination

## One-sentence takeaway

Inject direct radiance into a sparse voxel octree, mipmap it as Gaussian lobes, then gather two-bounce GI by tracing a handful of cones through the hierarchy — five wide for diffuse, one tight specular cone whose aperture is the Phong exponent.

## Why it matters here

Anoptic / engine RTGI needs a mesh-independent gather that stays temporally stable under dynamic lights; VXGI is the classical cone-in-octree foil that Radiance Cascades later re-cuts into interval cascades.

## Key ideas

- Three GPU passes: splat light-view-map photons into octree leaves (atomic add + six-axis neighbour repair for duplicated brick corners), filter incoming radiance / NDF / occlusion up the tree, then deferred-shade visible fragments by cone-tracing the octree.
- Voxelization rasterizes the mesh on the three axes at leaf resolution and subdivides the pointer octree on the fly; static geometry is timestamped so only movers rebuild. Bricks are $3\times3\times3$ with samples on node corners so hardware trilinear works without a one-voxel halo.
- Cone step looks up the mip level matching the cone radius and accumulates with the emission-absorption model $c := \alpha c + (1-\alpha)\alpha_2 c_2$. Same integrator estimates ambient occlusion as a visibility-only hemisphere of cones.
- Directional data is one isotropic Gaussian lobe per voxel ($\sigma^2 = (1-|D|)/|D|$); shading convolves BRDF lobe, NDF, and view-cone lobe. Two bounces, Lambertian and glossy, 25–70 fps on a GTX 480, almost independent of triangle count.
- Compared with LPV-style diffusion grids, the sparse octree plus ray-like gather keeps mid-frequency glossy highlights and avoids the low-resolution flicker of nested regular volumes.

## Caveats

## Links

- DOI: [10.1145/1944745.1944787](https://doi.org/10.1145/1944745.1944787)
- Author PDF: https://research.nvidia.com/sites/default/files/pubs/2011-09_Interactive-Indirect-Illumination/GIVoxels-pg2011-authors.pdf
