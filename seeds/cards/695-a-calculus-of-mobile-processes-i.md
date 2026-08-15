---
title: "A Calculus of Mobile Processes, I"
authors:
  - "Robin Milner"
  - "Joachim Parrow"
  - "David Walker"
year: 1992
venue: "Information and Computation"
arxiv: null
doi: "10.1016/0890-5401(92)90008-4"
source: "https://doi.org/10.1016/0890-5401(92)90008-4"
topics:
  - pi-calculus
  - milner
  - concurrency
  - mobility
seed_rank: 695
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "A Calculus of Communicating Systems"
    url: "https://link.springer.com/book/10.1007/3-540-10235-3"
    year: 1980
    arxiv: null
    doi: null
  - title: "Communicating Sequential Processes"
    url: "https://doi.org/10.1145/359576.359585"
    year: 1978
    arxiv: null
    doi: "10.1145/359576.359585"
see:
  - "043-a-calculus-of-communicating-systems"
  - "046-communicating-sequential-processes"
---

# A Calculus of Mobile Processes, I

## One-sentence takeaway

The π-calculus extends CCS with name-passing: a process can send a channel on a channel, and restriction then extrudes so the receiver shares a previously private name.

## Why it matters here

Mobile-concurrency classic beside CCS/CSP already in the corpus — the process calculus session types and any GRID COMMAND "hand this mailbox to that unit" story actually sit on. Old card DOI ended in `-3` (404).

## Key ideas

- Syntax: inaction, choice, parallel, restriction, and prefix `x̄y.P` / `x(y).P` (output/input of a name). Replication handles infinite behaviour.
- Scope extrusion is the characteristic reaction: `(νy)(x̄y.P | Q) | x(z).R → (νy)(P | Q | R{y/z})` when y is fresh to R.
- Bisimulation is rebuilt for name-passing (late/early distinctions appear already in this paper and its companion Part II).
- *Information and Computation* 100(1):1–40, September 1992, DOI 10.1016/0890-5401(92)90008-4. Part II is the same volume.

## Caveats

## Links

- DOI: [10.1016/0890-5401(92)90008-4](https://doi.org/10.1016/0890-5401(92)90008-4)
