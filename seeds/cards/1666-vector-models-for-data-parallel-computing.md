---
title: "Vector Models for Data-Parallel Computing"
authors:
  - "Guy E. Blelloch"
year: 1990
venue: "MIT Press"
arxiv: null
doi: null
source: "https://www.cs.cmu.edu/~guyb/papers/Ble90.pdf"
topics:
  - data-parallel
  - nested-parallelism
  - scan-primitives
seed_rank: 1666
seed_batch: "archive-2026-09-10"
reviewed: "2026-09-10"
pool: "languages"
relevance_score: 9
lineage: blelloch-vector-models
cites:
  - title: "NESL: A Nested Data-Parallel Language (Version 3.1)"
    url: "https://www.cs.cmu.edu/~scandal/nesl.html"
    year: 1995
    arxiv: null
    doi: null
  - title: "Scans as Primitive Parallel Operations"
    url: "https://doi.org/10.1109/12.42122"
    year: 1989
    arxiv: null
    doi: "10.1109/12.42122"
  - title: "Prefix Sums and Their Applications"
    url: "https://www.cs.cmu.edu/~guyb/papers/Ble93.pdf"
    year: 1993
    arxiv: null
    doi: null
see:
  - "141-nesl-a-nested-data-parallel-language-version-3-1"
  - "307-scans-as-primitive-parallel-operations"
  - "1571-prefix-sums-and-their-applications"
  - "1045-rank-and-uniformity"
  - "1044-single-assignment-c-efficient-support-for-high-level-array-operations"
---

# Vector Models for Data-Parallel Computing

## One-sentence takeaway

Blelloch’s 1990 MIT Press monograph formalises data-parallel computation on segmented vectors with scan, permute, and nested parallelism — the shared foundation under NESL, modern GPU scan libraries, and collection-oriented array languages.

## Why it matters here

ano’s array/columnar ECS path and Anoptic’s GPU work both live in the world this book named: flat vs nested parallel collections, scan as the versatile primitive, and segmentation for irregular work. NESL 141, Scans 307, and Prefix Sums 1571 are the live operational cards; this mint is the monograph that ties them together. Do not remint those three.

## Key ideas

- **Vector model.** Parallelism is expressed on whole collections; scalar control is secondary.
- **Scan as Swiss army knife.** Prefix sums / scans implement split, filter, enumerate, and many graph/string idioms — not just “sum from the left.”
- **Segmented operations.** Nested vectors become flat vectors plus segment descriptors — the compilation trick NESL and later GPU frameworks reuse.
- **Cost models.** Work and depth analyses make nested data-parallelism accountable, not magical.

## Caveats

- Book PDF hosted as `Ble90.pdf` on CMU (verified title page this pass); no DOI. “Scan Primitives for Vector Computers” and “Programming Parallel Algorithms” (CACM 1996) remain near-keepers with ACM walls.
- Prefix Sums and Their Applications is already live as **1571** — do not remint.
- Rank & Uniformity 1045 / SAC 1044 are sibling array-language cards, not substitutes for this monograph.

## Links

- CMU PDF: https://www.cs.cmu.edu/~guyb/papers/Ble90.pdf
- MIT Press catalogue: https://mitpress.mit.edu/9780262023139/vector-models-for-data-parallel-computing/
