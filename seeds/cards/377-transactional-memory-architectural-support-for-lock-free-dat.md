---
title: "Transactional Memory: Architectural Support for Lock-Free Data Structures"
authors:
  - "Maurice Herlihy"
  - "J. Eliot B. Moss"
year: 1993
venue: "ISCA"
arxiv: null
doi: "10.1145/165123.165164"
source: "https://doi.org/10.1145/165123.165164"
topics:
  - lockfree
  - tm
seed_rank: 377
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
cites:
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
  - title: "How to Make a Multiprocessor Computer That Correctly Executes Multiprocess Programs"
    url: "https://doi.org/10.1109/TC.1979.1675439"
    year: 1979
    arxiv: null
    doi: "10.1109/TC.1979.1675439"
see:
  - "472-how-to-make-a-multiprocessor-computer-that-correctly-execute"
---

# Transactional Memory: Architectural Support for Lock-Free Data Structures

## One-sentence takeaway

Herlihy and Moss propose hardware transactions — load-transactional / store-transactional / commit — so a thread can speculatively update a set of words and abort on conflict instead of taking locks.

## Why it matters here

This is the original HTM paper, the foil for Anoptic’s explicit lock-free / epoch style. Intel TSX and friends are descendants. GRID COMMAND should not wait on HTM, but the vocabulary (read-set, write-set, conflict, abort) is how you talk about optimistic ECS commits.

## Key ideas

- A transaction is a finite sequence of reads and writes that appears atomic; the hardware tracks the locations and commits or discards the write-set.
- New instructions (`LT`, `ST`, `COMMIT`, `ABORT`, `VALIDATE`) plus a small transactional cache implement the set.
- Intended as a lock-free alternative to spinlocks for short critical sections — not a replacement for I/O or unbounded computation.
- Conflicts abort the loser; progress arguments rely on a backoff / retry policy, not wait-freedom of the transaction itself.

## Caveats

## Links

- DOI: https://doi.org/10.1145/165123.165164
- Author PDF: https://www.cs.utexas.edu/~pingali/CS395T/2013fa/papers/herlihy93transactional.pdf
