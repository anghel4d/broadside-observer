---
title: "Extrapolation, Interpolation, and Smoothing of Stationary Time Series"
authors:
  - "Norbert Wiener"
year: 1949
venue: "MIT Press (wartime NDRC report)"
arxiv: null
doi: null
source: "https://mitpress.mit.edu/9780262730051/extrapolation-interpolation-and-smoothing-of-stationary-time-series/"
topics:
  - wiener-filter
  - time-series
  - prediction
  - signal
seed_rank: 563
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
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

# Extrapolation, Interpolation, and Smoothing of Stationary Time Series

## One-sentence takeaway

Wiener's classified fire-control report, published in 1949, founds the optimal linear filter: predict a stationary series from its past under quadratic loss.

## Why it matters here

Simulation, netcode, and agent world-models all extrapolate noisy time series; this is the classical MMSE solution those estimators still specialize.

## Key ideas

- For wide-sense-stationary processes the causal Wiener–Hopf equation yields the minimum-mean-square linear predictor.
- Filtering (smoothing a noisy observation of the present) and interpolation (filling gaps) are the same calculus with different kernels.
- Spectral factorization turns the autocorrelation into a physically realizable transfer function.
- Wartime origin is anti-aircraft prediction; the yellow-covered classified NDRC report is why engineers called it the "yellow peril."
- Kolmogorov's discrete-time theory is the independent Soviet counterpart; cite this card for the continuous-time MIT line.

## Caveats

## Links

- URL: https://mitpress.mit.edu/9780262730051/extrapolation-interpolation-and-smoothing-of-stationary-time-series/
