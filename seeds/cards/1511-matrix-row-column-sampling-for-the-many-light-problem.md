---
title: "Matrix Row-Column Sampling for the Many-Light Problem"
authors: ["Miloš Hašan", "Fabio Pellacini", "Kavita Bala"]
year: 2007
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/1276377.1276410"
source: "https://www.cs.cornell.edu/~kb/publications/MatrixSampling_SIG07.pdf"
topics: [many-lights, VPL, matrix-sampling]
seed_rank: 1511
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 9
lineage: direct-illumination
cites:
  - title: "Lightcuts: A Scalable Approach to Illumination"
    url: "https://www.cs.cornell.edu/~kb/publications/TOG05Lightcuts.pdf"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073218"
  - title: "Instant Radiosity"
    url: "https://doi.org/10.1145/258734.258769"
    year: 1997
    arxiv: null
    doi: "10.1145/258734.258769"
  - title: "Importance Sampling of Many Lights with Adaptive Tree Splitting"
    url: "https://www.solidangle.com/research/egsr2018_ats.pdf"
    year: 2018
    arxiv: null
    doi: "10.1111/cgf.13476"
  - title: "Spatiotemporal Reservoir Resampling for Real-Time Ray Tracing with Dynamic Direct Lighting"
    url: "https://benedikt-bitterli.me/restir/"
    year: 2020
    arxiv: null
    doi: "10.1145/3386569.3392481"
see:
  - "1042-lightcuts-a-scalable-approach-to-illumination"
  - "450-instant-radiosity"
  - "1382-importance-sampling-of-many-lights-with-adaptive-tree-splitting"
  - "1374-spatiotemporal-reservoir-resampling-for-real-time-ray-tracing-wi"
---

# Matrix Row-Column Sampling for the Many-Light Problem

## One-sentence takeaway

Treat many-lights as a GPU matrix of shadow-mapped columns and sample rows/columns to reconstruct the gathering — the scalable VPL paper that is *not* Lightcuts, ATS, or ReSTIR.

## Why it matters here

Lightcuts (1042), ATS (1382), Instant Radiosity (450), and ReSTIR (1374) are live. Hašan MRC is the remaining many-lights gathering algorithm production light trees still cite: shadow-map a reduced set of VPLs, sample the receiver×light matrix. GRID COMMAND baked/offline gathering should not remint Lightcuts to get this idea.

## Key ideas

- **Lights as columns, receivers as rows.** The illumination matrix M; a small set of representative columns (shadow-mapped VPLs) plus row samples reconstructs M.
- **GPU shadow maps, not a cut tree.** Columns are rasterized SM; the reduction is a sampling of the matrix, not a Lightcuts hierarchy.
- **Scales past a cut.** Where Lightcuts clusters similar lights, MRC exploits low-rank structure across *receivers* too.
- **Evidence.** SIGGRAPH / TOG 2007, doi `10.1145/1276377.1276410`. PDF: https://www.cs.cornell.edu/~kb/publications/MatrixSampling_SIG07.pdf

## Caveats

- VPL / many-lights offline-to-interactive, not 8 ms RTXDI. Not a remint of Lightcuts 1042, ATS 1382, Instant Radiosity 450, or ReSTIR 1374. LightSlice (2011) is the later local-slice paper, not this one.

## Links

- PDF: https://www.cs.cornell.edu/~kb/publications/MatrixSampling_SIG07.pdf
- DOI: https://doi.org/10.1145/1276377.1276410
