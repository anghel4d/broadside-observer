---
title: "Importance Resampling for Global Illumination"
authors:
  - "Justin Talbot"
  - "David Cline"
  - "Parris Egbert"
year: 2005
venue: "EGSR"
arxiv: null
doi: null
source: "https://faculty.cs.byu.edu/~talbot/publications/ris.pdf"
topics:
  - "RIS"
  - "foundational"
seed_rank: 1385
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: many-lights
cites:
  - title: "Spatiotemporal Reservoir Resampling for Real-Time Ray Tracing with Dynamic Direct Lighting"
    url: "https://benedikt-bitterli.me/restir/"
    year: 2020
    arxiv: null
    doi: "10.1145/3386569.3392481"
  - title: "Lightcuts: A Scalable Approach to Illumination"
    url: "https://doi.org/10.1145/1073204.1073218"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073218"
see:
  - "1042-lightcuts-a-scalable-approach-to-illumination"
  - "1342-importance-resampling-for-bssrdf"
---

# Importance Resampling for Global Illumination

## One-sentence takeaway

RIS: draw from a cheap proposal, resample with the true weight, and you have the sampling primitive ReSTIR is built on.

## Why it's lovely

Why you might love this: A 2005 EGSR paper that sat quietly until Bitterli et al. turned it into RTXDI. Foundational in hindsight.

## Problem

Importance sampling needs a PDF you can both sample and evaluate. The BSDF×lighting product is neither. Generating many cheap candidates and keeping one with the right weight is the move — but it has to be stated as an unbiased estimator.

## Design

- Generate M candidates from a proposal q.
- Compute weights w_i = p(x_i)/q(x_i) (or a balanced variant).
- Resample one candidate proportional to w; the estimator uses M and the chosen weight.
- Applied to GI (environment maps, direct lighting) in the 2005 EGSR paper.

## Evidence

EGSR 2005. ReSTIR 2020 cites it as the primitive; the 2016 BSSRDF resampling card (1342) is a sibling application, not this paper.

## Limitations

M candidates still cost M. Correlation and discrete lights need extra care (that's ReSTIR's reservoir + MIS). Not a GI cache.

## Implications for Broadside

Do not implement ReSTIR without knowing RIS. 1342 is BSSRDF resampling — different paper, keep both.

## Bottom line

Mint RIS 2005. The sampling primitive under ReSTIR.

## Links

- URL: https://faculty.cs.byu.edu/~talbot/publications/ris.pdf
