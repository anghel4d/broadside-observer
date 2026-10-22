---
title: "ARRIVAL in cube-root subexponential time"
authors:
  - "Ebrahim Ghorbani"
  - "Raul Lopes"
  - "Matthias Mnich"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2610.28241"
doi: null
source: "https://arxiv.org/abs/2610.28241"
topics:
  - "zero-player-games"
  - "switch-graphs"
  - "fixed-points"
  - "complexity"
seed_rank: 2393
seed_batch: "curiosity-2026-10-23"
reviewed: "2026-10-23"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "ARRIVAL in cube-root subexponential time"
    url: "https://arxiv.org/abs/2610.28241"
    year: 2026
    arxiv: "2610.28241"
    doi: null
see: ["2269-primitive-periods-in-greedy-chip-firing-games", "2369-autonomous-ai-discovery-on-the-busy-beaver-frontier"]
---

# ARRIVAL in cube-root subexponential time

## One-sentence takeaway

For ARRIVAL, the train-on-a-switchyard puzzle where each switch alternates its two exits and you must predict which of two stations the train reaches first, a block-wise fixed-point search with ℓ₁-centerpoints cuts the best known running time from n^{O(√n)} to 2^{O(n^{1/3} log^{2/3} n)}.

## Why it's lovely

ARRIVAL is a toy you could build with a model railway: every junction flips after each pass, and the question is simply where the train ends up. Simulating it can take exponentially long, the problem is known to lie in NP ∩ coNP, and yet nobody knows a polynomial algorithm, which makes it one of a handful of natural problems in that limbo alongside parity games. This paper sits neatly between the two previous algorithms (guess every pivot at once, or one at a time by binary search) and guesses pivots in blocks, steered by ℓ₁ centerpoints. It is a close cousin of rotor-router and chip-firing dynamics (card 2269), and a reminder that tiny deterministic rule systems, like trigger and switch logic in game simulations, can hide surprisingly hard prediction problems.

## Key ideas

- **Switching flows as certificates.** Following Dohrau, Gärtner, Kohler, Matoušek and Welzl, a run is summarized by how many times each arc is used; a consistent switching flow certifies the outcome.
- **Pivots and guesses.** Choose a set S of pivot vertices so every vertex is within distance d of S or a terminal, turn pivots into terminals, guess how many tokens each pivot emits, route, and check that each pivot receives what it sent. The base case costs about 2^d.
- **Blocks of k.** Instead of all pivots at once (Gärtner et al., ICALP 2021) or one at a time (Haslebacher, ICALP 2025), guesses are made k at a time, which needs a k-dimensional search with few routing calls.
- **Least fixed points with unit increments.** Theorem 1.2: for a map F on {0..N}^k where raising one input by one raises at most one output by one, the least fixed point is found with O(k³ log(kN + 2)) evaluations, using approximate ℓ₁-centerpoints (whose existence is due to Haslebacher et al., FOCS 2025) to cut half-spaces.
- **Result.** Multi-ARRIVAL with up to 2ⁿ tokens, and hence ARRIVAL, is solved deterministically in 2^{O(n^{1/3} · log^{2/3} n)} time.

## Caveats

Still subexponential, so the central question (is ARRIVAL in P?) stays open, and the algorithm is theoretical, with no implementation or experiments. Fresh preprint, not yet refereed. The connection to game rule systems is an analogy about prediction hardness, not a technique to adopt.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.28241
- PDF: https://arxiv.org/pdf/2610.28241
