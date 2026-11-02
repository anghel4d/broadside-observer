---
title: "Four runners that are barely lonely"
authors:
  - "Hyunjun Yi"
  - "Karam Gill"
  - "Bryan Bu"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2610.40694"
doi: null
source: "https://arxiv.org/abs/2610.40694"
topics:
  - "lonely-runner"
  - "diophantine-approximation"
  - "computer-assisted-proof"
seed_rank: 2498
seed_batch: "curiosity-2026-11-03"
reviewed: "2026-11-03"
pool: "maths"
relevance_score: 7
cites:
  - title: "Four runners that are barely lonely"
    url: "https://arxiv.org/abs/2610.40694"
    year: 2026
    arxiv: "2610.40694"
    doi: null
see:
  - 2367-near-optimal-gap-in-the-lonely-runner-conjecture
---

# Four runners that are barely lonely

## One-sentence takeaway

The full spectrum of loneliness values below \(1/4\) for four runners is settled: they are exactly \(m/(4m+2)\) for \(m \ge 2\) except \(m = 3\), so \(3/14\) is the single missing value, the near-tight quadruples are two infinite families plus the sporadic \(\{1,3,4,14\}\), and the proof is an effective density lemma that bounds the search to speeds up to 512 followed by an exact check of 800,816,099 quadruples.

## Why it's lovely

The lonely runner conjecture asks only when everyone on a circular track is far from the start at once, yet the fine structure of how lonely the runners can get is a rigid little number-theory spectrum with one hole in it. The paper turns a known "up to finitely many exceptions" result into a finished table by making the non-effective step effective, then lets a computer finish the job with verification scripts shipped as ancillary files. That pattern (prove a bound that makes the remainder finite, then exhaustively search and publish the checker) is exactly the provenance-first style Broadside wants from AI-assisted and machine-checked mathematics.

## Key ideas

- **Loneliness.** \(\mathrm{ML}(v) = \max_t \min_i \|v_i t\|\), the largest moment at which every runner is at least that far from the start.
- **Classification for four speeds.** Primitive quadruples with \(\mathrm{ML} < 1/4\) are \(\{1,2,3,4k\}\), \(\{x,y,x+y,x+2y\}\) under a congruence condition, or \(\{1,3,4,14\}\); this proves Fan and Sun's Conjecture 4.1.
- **Effective reduction.** A density lemma bounds the length of any near-tight quadruple lying on no critical two-dimensional subtorus by 512, answering Cordella's request for an effective version of the reduction.
- **Accumulation points.** The four-runner spectrum's accumulation points in \((0, 2/5]\) are exactly the three-runner values there, as Giri and Kravitz conjectured.
- **General \(n\).** Conditional on smaller cases, a sharp bound \(\mathrm{ML}(v) > 1/n - (n(n-1))^{n-2}/(2|v|)\), plus a five-speed subtorus classification below \(2/9\).

## Caveats

The general-\(n\) results are conditional on the conjecture for \(n-1\) and \(n-2\) speeds. The complete classification rests on a large exact search whose correctness depends on the shipped code. I read the abstract and introduction (45 pages).

## Links

- arXiv abstract: https://arxiv.org/abs/2610.40694
- PDF: https://arxiv.org/pdf/2610.40694
