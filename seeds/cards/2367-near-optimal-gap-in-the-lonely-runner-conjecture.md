---
title: "Near optimal gap in the Lonely Runner Conjecture"
authors:
  - "Xiyu Hu"
  - "Yifan Jing"
year: 2026
venue: "arXiv preprint"
arxiv: "2610.23790"
doi: null
source: "https://arxiv.org/abs/2610.23790"
topics:
  - "diophantine-approximation"
  - "lonely-runner"
  - "additive-combinatorics"
  - "ai-assisted-mathematics"
seed_rank: 2367
seed_batch: "curiosity-2026-10-21"
reviewed: "2026-10-21"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "Near optimal gap in the Lonely Runner Conjecture"
    url: "https://arxiv.org/abs/2610.23790"
    year: 2026
    arxiv: "2610.23790"
    doi: null
  - title: "Some remarks on the lonely runner conjecture (Tao)"
    url: "https://arxiv.org/abs/1701.02048"
    year: 2018
    arxiv: "1701.02048"
    doi: null
see: ["1198-more-than-two-thirds-of-the-zeros-of-the-riemann-zeta-function", "1875-torus-packet-equidistribution-in-prime-quartic-and-sextic-degrees"]
---

# Near optimal gap in the Lonely Runner Conjecture

## One-sentence takeaway

For any n runners with distinct integer speeds on a unit circle, there is a moment when every one of them is more than (1 + c)/(2n) away from the start, for an absolute constant c > 0, the first improvement over the trivial union bound 1/(2n) by a constant factor rather than a vanishing one.

## Why it's lovely

The lonely runner conjecture is a children's-story problem with a Diophantine heart: n + 1 runners at distinct constant speeds on a circular track, and the claim is that each runner is eventually at distance at least 1/(n + 1) from all the others. The easy bound, 1/(2n), comes from a one-line measure argument, and for sixty years every improvement (Chen, Perarnau–Serra, Tao 2018, Bedert 2025) shrank to nothing relative to it as n grew. Hu and Jing finally get a fixed fraction of extra room. It also gives a new bound for the "pyjama problem" of covering the plane with rotated and dilated stripes. And the paper includes an unusually candid AI statement: ChatGPT models suggested GCD-sum estimates and pointed to the Green–Walker refinement and checked arguments, but the authors say the models could not improve the bound on their own, a useful data point next to card 1198.

## Key ideas

- **Setup.** ML(V) = max over t of min over v in V of ‖vt‖. The conjecture is ML(V) ≥ 1/(n + 1), sharp for V = {1, …, n}. A union bound over Bohr sets {t : ‖vt‖ ≤ δ} of measure 2δ gives 1/(2n).
- **Stronger statement.** The set of times when every runner is beyond 1/(2n) has measure at least an absolute κ₀ > 0; then c = κ₀/2.
- **Large-GCD argument.** A refinement of Green and Walker's GCD-sum estimates handles speed sets with arithmetic structure across many primes.
- **Spillover inequality.** A new "physical spillover" inequality for interval multiplicities under dilation controls how much the Bohr intervals can overlap without wasting measure, with a split into Type I overlaps (common rational centres) and Type II (pairs).
- **Rational boxes.** If many speeds have bounded rational coordinates, there is substantial overlap at common centres, which frees measure; otherwise the GCD argument applies.

## Caveats

Fresh preprint, not yet refereed. The constant c is explicit but tiny and unoptimized, so the gap to the conjectured 1/(n + 1), roughly a factor of two, remains wide. Bedert also has unpublished improvements that are close in time; the priority picture may shift.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.23790
- PDF: https://arxiv.org/pdf/2610.23790
- Tao, Some remarks on the lonely runner conjecture: https://arxiv.org/abs/1701.02048
