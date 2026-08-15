---
title: "Two recursively enumerable sets of incomparable degrees of unsolvability"
authors:
  - "Richard M. Friedberg"
year: 1957
venue: "Proceedings of the National Academy of Sciences"
arxiv: null
doi: "10.1073/pnas.43.2.236"
source: "https://doi.org/10.1073/pnas.43.2.236"
topics:
  - priority-method
  - post-problem
  - degrees
seed_rank: 540
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Recursively enumerable sets of positive integers and their decision problems"
    url: "https://doi.org/10.1090/S0002-9904-1944-08111-1"
    year: 1944
    arxiv: null
    doi: "10.1090/S0002-9904-1944-08111-1"
  - title: "Degrees of Recursive Unsolvability"
    url: "https://doi.org/10.2307/1969708"
    year: 1954
    arxiv: null
    doi: "10.2307/1969708"
  - title: "On the unsolvability of the problem of reducibility of the theory of algorithms"
    url: "https://www.mathnet.ru/rus/person46479"
    year: 1956
    arxiv: null
    doi: null
see:
  - "534-recursively-enumerable-sets-of-positive-integers-and-their-d"
  - "539-degrees-of-recursive-unsolvability"
  - "541-on-the-unsolvability-of-the-problem-of-reducibility-of-the-t"
---

# Two recursively enumerable sets of incomparable degrees of unsolvability

## One-sentence takeaway

Friedberg solves Post's problem: there exist r.e. sets \(A, B\) with \(A \nleq_T B\), \(B \nleq_T A\), and neither recursive—the priority method is born.

## Why it matters here

Classic "structure inside r.e. sets" result. Methodologically, priority-with-injury is the pattern every later computability construction (and a surprising number of compiler/scheduler proofs) still copies: satisfy requirement \(R_e\) unless a higher-priority requirement injures it, and argue each requirement is injured only finitely often.

## Key ideas

- Builds two r.e. sets in stages, restraining enumerations so that each reduction \(\Phi_e^A = B\) (and vice versa) is eventually diagonalized.
- Lower-priority restraints may be injured when a higher-priority requirement acts; finiteness of injury yields the result.
- Independent of Muchnik's 1956 Doklady note; together they are the Friedberg–Muchnik theorem.
- Positive solution: incomplete non-recursive r.e. degrees exist.

## Caveats

## Links

- DOI: [10.1073/pnas.43.2.236](https://doi.org/10.1073/pnas.43.2.236)
- PNAS: https://www.pnas.org/doi/10.1073/pnas.43.2.236
