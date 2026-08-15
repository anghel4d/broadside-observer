---
title: "Various techniques used in connection with random digits"
authors:
  - "John von Neumann"
year: 1951
venue: "In Monte Carlo Method, NBS Applied Mathematics Series 12"
arxiv: null
doi: null
source: "https://mcnp-green.lanl.gov/pdf_files/InBook_Computing_1961_Neumann_JohnVonNeumannCollectedWorks_VariousTechniquesUsedinConnectionwithRandomDigits.pdf"
topics:
  - randomness
  - monte-carlo
  - von-neumann
  - prng
seed_rank: 549
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
  - title: "A Mathematical Theory of Communication"
    url: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"
    year: 1948
    arxiv: null
    doi: "10.1002/j.1538-7305.1948.tb01338.x"
  - title: "On Tables of Random Numbers"
    url: "https://www.jstor.org/stable/25049284"
    year: 1963
    arxiv: null
    doi: "10.1016/S0304-3975(98)00075-9"
  - title: "Rounding-Off Errors in Matrix Processes"
    url: "https://doi.org/10.1093/qjmam/1.1.287"
    year: 1948
    arxiv: null
    doi: "10.1093/qjmam/1.1.287"
see:
  - "596-the-art-of-computer-programming-volume-2-seminumerical-algor"
  - "553-a-mathematical-theory-of-communication"
  - "605-on-tables-of-random-numbers"
  - "524-rounding-off-errors-in-matrix-processes"
---

# Various techniques used in connection with random digits

## One-sentence takeaway

Von Neumann's three-page Monte Carlo note is the source of the middle-square method, the "state of sin" warning about arithmetical PRNGs, and several rejection tricks for nonuniform sampling.

## Why it matters here

Anoptic simulation stacks need randomness epistemology: replayable Monte Carlo, unbiased bits from a biased source, and the honesty that a deterministic recipe is not a random number. This is the famous caution plus the methods.

## Key ideas

- Summary by G. E. Forsythe of von Neumann's talk at the 1949 NBS/RAND Monte Carlo symposium; printed in *Monte Carlo Method*, NBS AMS 12 (1951), pp. 36–38.
- Physical sources are rejected for machine use because a check-run cannot replay the same digits; recorded tables or arithmetic recipes are required.
- "Anyone who considers arithmetical methods of producing random digits is, of course, in a state of sin"—then he analyses middle-square and the logistic map \(x \mapsto 4x(1-x)\) anyway, including how round-off eats the theory in ~33 steps.
- Rejection sampling: accept \(X\) only if a second uniform \(Y\) falls under a scaled density; von Neumann debiasing of a biased coin by taking \(01/10\) and discarding \(00/11\); a comparison-only method for sampling \(e^{-x}\).

## Caveats

## Links

- Collected Works scan: https://mcnp-green.lanl.gov/pdf_files/InBook_Computing_1961_Neumann_JohnVonNeumannCollectedWorks_VariousTechniquesUsedinConnectionwithRandomDigits.pdf
- NBS AMS 12 volume: *Monte Carlo Method*, U.S. Government Printing Office, 1951
