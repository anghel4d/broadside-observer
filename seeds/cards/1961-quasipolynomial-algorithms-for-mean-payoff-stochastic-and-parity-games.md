---
title: "Quasipolynomial algorithms for mean-payoff, stochastic and parity games"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 104; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Turn-Based-Stochastic-Mean-Payoff-Games-in-Deterministic-Quasipolynomial-Time-October-5-2026/stochastic-mean-payoff-games.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1961
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Turn-Based Stochastic Mean-Payoff Games in Deterministic Quasipolynomial Time"
    url: "https://github.com/openai/math/blob/main/preprints/Turn-Based-Stochastic-Mean-Payoff-Games-in-Deterministic-Quasipolynomial-Time-October-5-2026/stochastic-mean-payoff-games.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Mean-payoff parity games in quasipolynomial time"
    url: "https://github.com/openai/math/blob/main/preprints/Mean-payoff-parity-games-in-quasipolynomial-time-October-5-2026/mean-payoff-parity.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Deterministic quasipolynomial-time mean-payoff games"
    url: "https://github.com/openai/math/blob/main/preprints/Deterministic-quasipolynomial-time-mean-payoff-games-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Randomized quasipolynomial-time mean-payoff games"
    url: "https://github.com/openai/math/blob/main/preprints/Randomized-quasipolynomial-time-mean-payoff-games-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Quasipolynomial algorithms for mean-payoff, stochastic and parity games

## One-sentence takeaway

OpenAI's result family 104 (Theoretical computer science) claims: Gives deterministic algorithms using $2^{O((\log(L+2))^2)}$ bit operations, for complete binary input length L, for ordinary mean-payoff games and two separate extensions.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): They compute exact values and optimal positional strategies in ordinary games, the nonnegative expectation-of-liminf value set in turn-based stochastic games, and the winning set for nonnegative liminf mean payoff conjoined with parity. Signed rewards, rational chance probabilities, and parity priorities are unrestricted and binary-encoded.
- *Turn-Based Stochastic Mean-Payoff Games in Deterministic Quasipolynomial Time*: We give a uniform deterministic quasipolynomial-time algorithm for finite turn-based stochastic mean-payoff games with signed integer rewards and rational chance-transition probabilities encoded in binary. It computes exactly the vertices of nonnegative value, including value zero, for the expectation of the pathwise liminf mean payoff. The algorithm uses exact rational arithmetic and $2^{O((\log(L+2))^2)}$ bit operations, where L is the complete binary input length.
- *Mean-payoff parity games in quasipolynomial time*: We give a uniform deterministic quasipolynomial-time algorithm for mean-payoff parity games. It computes all vertices from which a player can enforce both nonnegative liminf mean payoff and the parity condition, with arbitrary signed binary rewards and unrestricted binary priorities. The running time is $2^{O((\log(L+2))^2)}$ bit operations, where L is the complete input length.
- *Deterministic quasipolynomial-time mean-payoff games*: We give a deterministic algorithm that computes the complete zero-threshold winning set of a finite mean-payoff game with arbitrary signed integer edge weights encoded in binary. For total explicit input length L, it uses $2^{O((\log(L+2))^2)}$ bit operations. A reduction also computes the exact rational value at every vertex and globally optimal positional strategies for both players within the same quasipolynomial bound.
- *Randomized quasipolynomial-time mean-payoff games*: We give a randomized algorithm that computes the complete zero-threshold winning set of a finite mean-payoff game with arbitrary signed integer edge weights encoded in binary. For total explicit input length L, it uses $2^{O((\log(L+2))^2)}$ bit operations on every random tape and is correct with probability at least 7/8. A polynomial-time check certifies the winning regions and positional strategies for both players or reports failure.
- Lean scope (lean/docs/104.md): The formalization checks that a specified two-step execution of Truffet's elimination procedure terminates with a feasible but nonoptimal output. It is a finite counterexample to that proposed optimization step.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Turn-Based Stochastic Mean-Payoff Games in Deterministic Quasipolynomial Time](https://github.com/openai/math/blob/main/preprints/Turn-Based-Stochastic-Mean-Payoff-Games-in-Deterministic-Quasipolynomial-Time-October-5-2026/stochastic-mean-payoff-games.pdf)
- Manuscript: [Mean-payoff parity games in quasipolynomial time](https://github.com/openai/math/blob/main/preprints/Mean-payoff-parity-games-in-quasipolynomial-time-October-5-2026/mean-payoff-parity.pdf)
- Manuscript: [Deterministic quasipolynomial-time mean-payoff games](https://github.com/openai/math/blob/main/preprints/Deterministic-quasipolynomial-time-mean-payoff-games-September-25-2026/paper.pdf)
- Manuscript: [Randomized quasipolynomial-time mean-payoff games](https://github.com/openai/math/blob/main/preprints/Randomized-quasipolynomial-time-mean-payoff-games-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/104.md
- Comparator statement (Finite counterexample to Truffet's optimization procedure): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TruffetCounterexample.lean
- Comparator statement (Randomized quasipolynomial mean-payoff algorithm): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/RandomizedMeanPayoff.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
