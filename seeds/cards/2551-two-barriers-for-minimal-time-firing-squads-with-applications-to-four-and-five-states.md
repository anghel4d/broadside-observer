---
title: "Two barriers for minimal-time firing squads, with applications to four and five states"
authors:
  - "Kia Keng Giam"
year: 2026
venue: "arXiv preprint (cs.FL, nlin.CG)"
arxiv: "2611.11080"
doi: null
source: "https://arxiv.org/abs/2611.11080"
topics:
  - "cellular-automata"
  - "firing-squad-synchronization"
  - "state-complexity"
  - "sat-certificates"
  - "lower-bounds"
seed_rank: 2551
seed_batch: "curiosity-2026-11-11"
reviewed: "2026-11-11"
pool: "maths-foundations"
relevance_score: 8
lineage: foundations-of-computing
cites:
  - title: "A six states minimal time solution to the firing squad synchronization problem"
    url: "https://github.com/rocq-archive/firing-squad"
    year: 1986
    arxiv: null
    doi: null
see:
  - "1850-two-dimensional-majority-rule-is-p-complete"
---

# Two barriers for minimal-time firing squads, with applications to four and five states

## One-sentence takeaway

Every line of a minimal-time firing squad agrees with the infinite half-line until the echo of its right end returns, so lower bounds can be proved on the half-line alone; this gives two barriers valid for any number of states and, with certified SAT checks, rules out four states and sharply constrains a five-state solution, the question open since Mazoyer's six-state rule in 1987.

## Why it's lovely

Myhill's 1957 puzzle (identical cells, each seeing only its neighbours, must all fire at the same instant at time \(2n-2\)) is a perfect miniature of distributed synchronization with no clock and no counter. The paper's trick is to notice that a minimal-time solution is really one shared space-time diagram of the half-line plus, for each length, a small reflected triangle near the right end, and that the triangle only learns from two anti-diagonals of the half-line. That turns "all lengths" into checkable conditions. For ano's standing rules and the RTS simulation it is a crisp reminder of how much global behaviour a tiny local rule table must encode, and of how DRAT-certified SAT can carry a combinatorial lower bound.

## Key ideas

- **Half-line reduction.** A line of length \(n\) and the half-line coincide on all cells with \(t+i\le 2n-2\); the line differs only inside the reflected triangle, which reads the half-line on \(t+i\in\{2n-3,2n-2\}\).
- **Late periodicity.** In any minimal-time solution, depth row \(j\) behind the front becomes time-periodic only after time \((3/2-\varepsilon)j\) for infinitely many \(j\).
- **No eventual regularity.** The half-line is never periodic in both time and space on a wedge at its left border.
- **Four states excluded** using lines of length 2–5 plus parts of the next five, with certified satisfiability checks (a cleaner certificate for the classical computer-search result).
- **Five-state constraints.** Any five-state solution uses at least 15 non-quiescent neighbourhoods on the first 78 anti-diagonals of its half-line; explicit five-state rules synchronize exactly the lengths 2–14.

## Caveats

The five-state question stays open: the results are necessary conditions and partial searches, not a proof either way. Single-author preprint from a pre-university author, not yet refereed; the SAT encodings and certificate pipeline deserve independent rechecking. I read the abstract, introduction and results overview (34 pages).

## Links

- arXiv abstract: https://arxiv.org/abs/2611.11080
- PDF: https://arxiv.org/pdf/2611.11080
- Coq proof of Mazoyer's six-state solution (archive): https://github.com/rocq-archive/firing-squad
