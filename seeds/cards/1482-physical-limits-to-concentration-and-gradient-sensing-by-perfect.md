---
title: "Physical limits to concentration and gradient sensing by perfect monitors"
authors: ["Farshid Jafarpour"]
year: 2026
venue: "arXiv:physics.bio-ph"
arxiv: "2608.08816"
doi: null
source: "https://arxiv.org/abs/2608.08816"
topics: ["curiosity", "q-bio"]
seed_rank: 1482
seed_batch: "curiosity-2026-09-01"
reviewed: "2026-09-01"
pool: "maths-foundations"
relevance_score: 10
lineage: physical-limits-of-sensing
cites:
  - title: "Physical limits to concentration and gradient sensing by perfect monitors"
    url: "https://arxiv.org/abs/2608.08816"
    year: 2026
    arxiv: "2608.08816"
    doi: null
  - title: "Physics of chemoreception"
    url: "https://doi.org/10.1016/S0006-3495(77)85544-6"
    year: 1977
    arxiv: null
    doi: "10.1016/S0006-3495(77)85544-6"
see:
  - "1089-life-at-low-reynolds-number"
---

# Physical limits to concentration and gradient sensing by perfect monitors

## One-sentence takeaway

Berg–Purcell's perfect volume monitor should ignore its interior: optimal concentration and gradient estimators put all weight on the boundary, via an electrostatic mapping.

## Why it's lovely

Why you might love this: fifty years after Berg–Purcell, the surprise is that *seeing the whole ball is worse than seeing only the shell*. Variance minimization is Coulomb self-energy; the conductor puts charge on \(\partial\Omega\). Capacitance sets concentration precision; polarizability sets gradient precision; spheres are *worst* among fixed-volume shapes. The factor-of-two cost of not absorbing is exact and shape-independent.

## Key ideas

- Position-weighted estimators; unbiasedness = unit charge (concentration) or fixed dipole + neutrality (gradient).
- Long-time density correlations = Laplacian Green function → electrostatics.
- Sphere: surface estimator improves BP by \(5/6\) (concentration) and Endres–Wingreen by \(7/10\) (gradient).
- Arbitrary shape: \(\mathrm{Var}=2c_0/(DT\mathcal{C}_\Omega)\); absorber is exactly twice as good as the optimal nonperturbing monitor.
- \(d\le 2\) recurrence shifts the potential but leaves boundary localization optimal; gradient sensing cancels the recurrent term.

## Caveats

Instrument idealization (nonperturbing, no molecule IDs), not a claim about how cells implement sensing. Shallow-gradient and long-time (\(T\gg a^2/D\)) regimes. Improvement factors are modest; the conceptual flip (bulk weight is waste) is the gift.

## Implications for Broadside

Sensor / probe design metaphor for Anoptic: when correlations are Coulomb-like, interior samples are redundant — put the budget on the frontier. Pairs with Purcell's low-Reynolds classic (1089) as the chemoreception twin.

## Links

- arXiv abs: https://arxiv.org/abs/2608.08816
- PDF: https://arxiv.org/pdf/2608.08816.pdf
