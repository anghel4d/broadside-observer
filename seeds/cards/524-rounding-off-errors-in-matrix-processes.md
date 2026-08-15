---
title: "Rounding-Off Errors in Matrix Processes"
authors:
  - "Alan M. Turing"
year: 1948
venue: "Quarterly Journal of Mechanics and Applied Mathematics"
arxiv: null
doi: "10.1093/qjmam/1.1.287"
source: "https://doi.org/10.1093/qjmam/1.1.287"
topics:
  - numerical-analysis
  - error-analysis
  - turing
seed_rank: 524
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: foundations-of-computing
cites:
  - title: "The Art of Computer Programming, Volume 2: Seminumerical Algorithms"
    url: "https://www-cs-faculty.stanford.edu/~knuth/taocp.html"
    year: 1969
    arxiv: null
    doi: null
  - title: "Various techniques used in connection with random digits"
    url: "https://mcnp-green.lanl.gov/pdf_files/InBook_Computing_1961_Neumann_JohnVonNeumannCollectedWorks_VariousTechniquesUsedinConnectionwithRandomDigits.pdf"
    year: 1951
    arxiv: null
    doi: null
  - title: "Proposal for Development in the Mathematics Division of an Automatic Computing Engine (ACE)"
    url: "https://www.npl.co.uk/getattachment/ea5c6585-0929-4713-962c-2306f8dcf1f2/turing-proposal-Alan-LR.pdf?lang=en-US"
    year: 1946
    arxiv: null
    doi: null
see:
  - "596-the-art-of-computer-programming-volume-2-seminumerical-algor"
  - "549-various-techniques-used-in-connection-with-random-digits"
  - "522-proposal-for-development-in-the-mathematics-division-of-an-a"
---

# Rounding-Off Errors in Matrix Processes

## One-sentence takeaway

Turing analyses Gaussian elimination under finite precision and introduces the condition number of a matrix as the right measure of numerical stability.

## Why it matters here

Anoptic simulation is not only discrete logic: radiance, physics, and camera matrices live in floating point. This 1948 paper is the founding argument that a computed result should be read as the exact solution of a nearby problem (backward error), not as a failed exact arithmetic.

## Key ideas

- Bounds the effect of rounding in elimination / triangular factorization rather than treating error as an afterthought.
- Isolates the condition of the matrix (sensitivity of the solution to perturbations) from the stability of the algorithm.
- Written against the ACE-era machine: finite word length is part of the specification, not a bug.
- Direct ancestor of Wilkinson's later rounding-error books and of every later "don't invert that matrix" sermon.

## Caveats

## Links

- DOI: [10.1093/qjmam/1.1.287](https://doi.org/10.1093/qjmam/1.1.287)
- URL: https://doi.org/10.1093/qjmam/1.1.287
