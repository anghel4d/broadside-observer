---
title: "Smale's mean value constant (1981) equals 4"
authors:
  - "Dave Goel"
year: 2026
venue: "arXiv preprint (math.CV)"
arxiv: "2611.17373"
doi: null
source: "https://arxiv.org/abs/2611.17373"
version_reviewed: "v1"
topics:
  - "complex-polynomials"
  - "critical-points"
  - "smale-problems"
  - "lean-formalization"
seed_rank: 2613
seed_batch: "curiosity-2026-11-17"
reviewed: "2026-11-16"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "Smale's mean value constant (1981) equals 4"
    url: "https://arxiv.org/abs/2611.17373"
    year: 2026
    arxiv: "2611.17373"
    doi: null
---

# Smale's mean value constant (1981) equals 4

## One-sentence takeaway

Smale's 1981 mean value constant is exactly 4, not the conjectured 1: the paper shows K(d) tends to 4 as the degree grows, so Smale's bound of 4 is sharp, and the main result is formalized in Lean 4.

## Why it's lovely

Smale's mean value conjecture is one of those clean, 45-year-old questions about polynomials anyone can state: at some critical point c, |p(c)/(c·p'(0))| is at most a constant, and Smale asked whether 4 could be replaced by 1. The answer is a surprise in the other direction. Smale's crude-looking 4 was the truth all along, reached only in the limit and never attained. The Lean 4 formalization makes it another data point for the machine-checked-results thread this library has been following.

## Key ideas

- **The quantity.** For p of degree d ≥ 2 with p(0)=0 and p'(0)≠0, S(p) is the minimum over critical points c of |p(c)/(c·p'(0))|; K(d) is the sup of S(p).
- **Old facts.** Smale (1981) proved K(d) ≤ 4 and asked whether 4 can be replaced by 1; each K(d) was already known to be below 4.
- **New result.** sup_d K(d) = 4 and K(d) → 4 as d → ∞, so no constant below 4 works and the supremum is not attained.
- **Method.** A reduction due to Jatar and Ng plus an explicit construction of extremal families.
- **Formalized.** The main result is checked in Lean 4.

## Caveats

Abstract-level read of the v1 preprint (Monday 16 Nov 2026 arXiv listing); not refereed. I have not inspected the Lean development or the construction. The abstract settles the uniform constant; how fast K(d) approaches 4 for small d is not stated there.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.17373
- PDF: https://arxiv.org/pdf/2611.17373
