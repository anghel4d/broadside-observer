---
title: "Software Transactional Memory"
authors:
  - "Nir Shavit"
  - "Dan Touitou"
year: 1995
venue: "PODC"
arxiv: null
doi: "10.1145/224964.224987"
source: "https://groups.csail.mit.edu/tds/papers/Shavit/ShavitTouitou-podc95.pdf"
topics:
  - software-transactional-memory
  - concurrency
  - lock-free
  - transactions
seed_rank: 1819
seed_batch: "archive-2026-09-14"
reviewed: "2026-09-14"
pool: "systems"
relevance_score: 10
lineage: concurrent-data-structures
cites:
  - title: "Transactional Memory: Architectural Support for Lock-Free Data Structures"
    url: "https://cs.brown.edu/~mph/HerlihyM93/herlihy93transactional.pdf"
    year: 1993
    arxiv: null
    doi: "10.1145/173682.165164"
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
see:
  - "377-transactional-memory-architectural-support-for-lock-free-dat"
  - "036-wait-free-synchronization"
  - "031-michael-scott-lock-free-queue"
---

# Software Transactional Memory

## One-sentence takeaway

Shavit–Touitou show how to implement transactional memory in software so concurrent updates commit atomically without hardware TM or coarse locks.

## Why it matters here

Anoptic’s shared simulation state and GRID COMMAND’s multiplayer/AI updates need composable concurrency: STM is the software path when you cannot wait for HTM. Complements Herlihy–Moss architectural TM 377 and lock-free queues 031 without reminting them; later formal STM work (1019) sits downstream.

## Key ideas

- **Software path for TM.** Transactions as a programming abstraction implemented with ordinary instructions and helping, not special HTM ISA.
- **Non-blocking intent.** Avoids conventional lock pathologies; builds on wait-free/lock-free synchronization theory.
- **Dynamic data.** Targets dynamic-sized shared structures, not only static arrays of registers.
- **PODC 1995 founding STM paper.** Names the field that later produced TL2, NOrec, and language-level STM.

## Caveats

Early STM — performance and semantics evolved for decades; do not treat 1995 algorithms as production defaults. Distinct from Herlihy–Moss 377 (hardware TM) and from card 1019 (formal lock-free STM for measurement). Deferred from prior Archive keep-rate; open MIT TDS PDF verified.

## Links

- MIT TDS PDF: https://groups.csail.mit.edu/tds/papers/Shavit/ShavitTouitou-podc95.pdf
- DOI: https://doi.org/10.1145/224964.224987
