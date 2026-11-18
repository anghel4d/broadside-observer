---
title: "Up or down at every integer: Collatz-type maps of arbitrary sets and the up-down graph"
authors:
  - "Oleg Vasilyev"
year: 2026
venue: "arXiv preprint (cs.DM)"
arxiv: "2611.20344"
doi: null
source: "https://arxiv.org/abs/2611.20344"
version_reviewed: "v1"
topics:
  - "collatz"
  - "dynamical-systems"
  - "directed-graphs"
  - "markov-chains"
  - "ai-assisted-mathematics"
seed_rank: 2641
seed_batch: "curiosity-2026-11-19"
reviewed: "2026-11-18"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "Up or down at every integer: Collatz-type maps of arbitrary sets and the up-down graph"
    url: "https://arxiv.org/abs/2611.20344"
    year: 2026
    arxiv: "2611.20344"
    doi: null
  - title: "The 3x+1 semigroup"
    url: "https://doi.org/10.1016/j.jnt.2005.06.010"
    year: 2006
    arxiv: null
    doi: "10.1016/j.jnt.2005.06.010"
---

# Up or down at every integer: Collatz-type maps of arbitrary sets and the up-down graph

## One-sentence takeaway

If every integer x independently chooses to go up to ⌈3x/2⌉ or down to ⌈x/2⌉, Collatz and Mahler's map become subgraphs of one 'up-down graph'. Cycles stay below an up-proportion of log₃2 and divergent orbits stay above it. Removing just the odd numbers ≡ 9 or 15 (mod 16) from the up-set gives a Collatz-like map whose orbits all provably reach (1,2).

## Why it's lovely

Collatz is famously hard because nothing about it seems to have any structure. This paper changes the question: let any set S decide which integers step up, and ask what the whole family of maps looks like. The answers are pleasing. Density hardly matters: some density-one sets send every orbit to 1, while periodic sets of arbitrarily small density have increasing orbits. Every positive integer is the smallest element of a cycle of some map. log₃2 is the exact threshold between cycling and escaping. Most strikingly, deleting one-eighth of the integers from the Collatz up-set gives a map you can prove converges, and deleting 22 residue classes mod 512 (4.3%) also works. Finite changes, on the other hand, never help. It belongs with the Collatz-like 'Cryptids' on the busy-beaver frontier (card 2369), and it turns a hard problem into graph reachability plus a finite Markov-chain computation, which is a reusable way to approach it.

## Key ideas

- **Maps.** T_S(x) = ⌈3x/2⌉ if x ∈ S, else ⌈x/2⌉. S = odd numbers gives Collatz, even numbers give Collatz shifted by one, and S = ℕ gives Mahler's map.
- **One graph.** In the up-down graph every x has edges to ⌈x/2⌉ and ⌈3x/2⌉. Cycles of a map are simple cycles of its subgraph, divergent orbits are rays, and a family of maps is bounded exactly when its subgraph has no ray.
- **Threshold.** Cycles have an up-proportion below log₃2, divergent orbits above it, and both come arbitrarily close.
- **Periodic S.** When S is periodic modulo a power of 2, a finite Markov chain gives an effective up-frequency, and a finite computation can prove that every orbit reaches a cycle.
- **Distance from Collatz.** Adding fewer than log_{3/2}N + 1 even numbers below N makes some orbit increase. Removing the residues 9 and 15 mod 16, or 22 residue classes mod 512, gives maps whose convergence is provable. Mahler's Z-number problem follows from a question about one such map.

## Caveats

I read the abstract, introduction and acknowledgments of v1 (Monday 16 Nov 2026); the paper is not refereed. The Collatz conjecture itself is untouched. The author acknowledges that Anthropic Claude models helped with literature search, derivations, computations and drafting. Some results rest on finite computer checks.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.20344
- PDF: https://arxiv.org/pdf/2611.20344
- Applegate & Lagarias, The 3x+1 semigroup: https://doi.org/10.1016/j.jnt.2005.06.010
