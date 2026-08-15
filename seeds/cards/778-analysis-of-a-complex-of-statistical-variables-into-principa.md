---
title: Analysis of a Complex of Statistical Variables into Principal Components
authors:
- Harold Hotelling
year: 1933
venue: Journal of Educational Psychology
arxiv: null
doi: 10.1037/h0071325
source: "https://doi.org/10.1037/h0071325"
topics:
- pca
- hotelling
seed_rank: 778
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 9
lineage: algorithms-and-complexity
cites: []
see: []
---

# Analysis of a Complex of Statistical Variables into Principal Components

## One-sentence takeaway

Hotelling’s principal components are successive orthogonal linear combinations of the observed variables that maximize remaining variance, recovered from the eigenstructure of the covariance (or correlation) matrix.

## Why it matters here

This is the first-cut compressor for Anoptic telemetry, Broadside embedding spaces, and any ano feature table that needs a few decorrelated axes before a downstream model.

## Key ideas

- The first component solves $\max_{\|a\|=1}a^\top\Sigma a$; further components add orthogonality constraints.
- Solutions are the eigenvectors of $\Sigma$ ordered by eigenvalue — the same computation as an SVD of the centered data matrix.
- Components both reduce dimension and remove linear correlation, which is why they remain the default whitening step.
- Pearson (1901) had the geometric least-squares view; Hotelling names the method and gives the psychometric/statistical development.

## Caveats

## Links

- DOI: [10.1037/h0071325](https://doi.org/10.1037/h0071325)
- URL: https://doi.org/10.1037/h0071325
