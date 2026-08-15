---
title: "Prediction and Entropy of Printed English"
authors:
  - "Claude E. Shannon"
year: 1951
venue: "Bell System Technical Journal"
arxiv: null
doi: "10.1002/j.1538-7305.1951.tb01366.x"
source: "https://doi.org/10.1002/j.1538-7305.1951.tb01366.x"
topics:
  - entropy
  - language-models
  - shannon
  - english
seed_rank: 558
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "A Mathematical Theory of Communication"
    url: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"
    year: 1948
    arxiv: null
    doi: "10.1002/j.1538-7305.1948.tb01338.x"
see:
  - "553-a-mathematical-theory-of-communication"
---

# Prediction and Entropy of Printed English

## One-sentence takeaway

Shannon estimates the entropy of English by having people guess the next letter, bounding the rate between roughly 0.6 and 1.3 bits per character.

## Why it matters here

Broadside language agents are statistical predictors of the same kind; this experiment is the first measured cross-entropy of a human language model.

## Key ideas

- n-gram frequencies give decreasing entropy estimates as n grows, but tables blow up before long-range structure is captured.
- A human subject, shown a prefix, guesses the next letter; the guess rank yields an upper bound on conditional entropy.
- A second experiment lets the subject see previous failures, producing a tighter estimate of residual uncertainty.
- Printed English is highly redundant — on the order of 50–75% — so prediction and compression are the same job.
- The paper is the direct ancestor of perplexity: a predictor's bit-rate is a property of the language.

## Caveats

## Links

- DOI: [10.1002/j.1538-7305.1951.tb01366.x](https://doi.org/10.1002/j.1538-7305.1951.tb01366.x)
- URL: https://doi.org/10.1002/j.1538-7305.1951.tb01366.x
