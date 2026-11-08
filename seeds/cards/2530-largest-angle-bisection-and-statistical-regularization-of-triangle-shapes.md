---
title: "Largest-Angle Bisection and Statistical Regularization of Triangle Shapes"
authors:
  - "Jérôme Michaud"
year: 2026
venue: "arXiv preprint (math.DS)"
arxiv: "2611.06492"
doi: null
source: "https://arxiv.org/abs/2611.06492"
topics:
  - "mesh-refinement"
  - "dynamical-systems"
  - "projective-geometry"
  - "computational-geometry"
seed_rank: 2530
seed_batch: "curiosity-2026-11-09"
reviewed: "2026-11-09"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "The largest angle bisection procedure"
    url: "https://arxiv.org/abs/1908.02749"
    year: 2019
    arxiv: "1908.02749"
    doi: null
see: []
---

# Largest-Angle Bisection and Statistical Regularization of Triangle Shapes

## One-sentence takeaway

If you keep cutting a triangle along the bisector of its largest angle, almost every branch of the refinement tree converges in shape to the right-isosceles triangle, because the two child maps form a piecewise projective system with a Hilbert-metric Lyapunov function that drops whenever the branch switches children.

## Why it's lovely

A school-geometry rule (split the fattest corner in half) turns out to be a two-generator dynamical system on triangle shape space with a single dominant attractor, and the proof is a clean Hilbert-projective-metric argument rather than brute case analysis. Exceptional shapes still exist, but they live only on branches that pick the same child forever, a measure-zero set, so the tree "forgets" its starting triangle statistically even though it never does so deterministically. For Anoptic's meshlet and terrain tooling, it is a neat counterpoint to longest-edge bisection (whose branches cycle through a dense set of shapes): a bisection rule whose deep levels are dominated by one well-shaped triangle is exactly the kind of property you want from adaptive subdivision.

## Key ideas

- **Angle-projective chart.** Order the angles \(\alpha\ge\beta\ge\gamma\) and map a triangle to \((\beta/\alpha,\gamma/\alpha)\) in \(T=\{1\ge x\ge y>0\}\); the two LAB children become piecewise projective maps on \(T\) (piecewise because child angles must be re-sorted).
- **Pure vs mixed branches.** A branch that eventually always takes the same child drifts toward that child's one-dimensional fixed segment (the exceptional families); every branch that switches children infinitely often converges to the right-isosceles shape.
- **Lyapunov function.** A function built from Hilbert's projective metric never increases under refinement and strictly decreases at every switch of child.
- **Statistical regularization.** Under any Bernoulli choice with positive probability for both children, a random branch converges to right-isosceles almost surely; under uniform choice, the fraction of level-\(n\) descendants outside any neighbourhood of that shape tends to zero.
- **Contrast with LEB.** Longest-edge bisection branches end in cycles of length at most four whose limits can be densely spread; LAB instead has one statistically dominant shape.

## Caveats

Single-author preprint about the unconstrained binary tree from one triangle with equal weight per descendant; it does not handle conforming completion, neighbour interactions, adaptive marking, or area/error weighting, and gives no quantitative convergence rates. The author calls the result structural rather than immediately algorithmic. I read the introduction, the shape-space setup and the conclusion (16 pages).

## Links

- arXiv abstract: https://arxiv.org/abs/2611.06492
- PDF: https://arxiv.org/pdf/2611.06492
- Prior work (Ismailescu, Kim, Kim, Lee): https://arxiv.org/abs/1908.02749
