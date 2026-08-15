---
title: "A Pragmatic Implementation of Non-Blocking Linked-Lists"
authors:
  - "Timothy L. Harris"
year: 2001
venue: "DISC 2001"
arxiv: null
doi: "10.1007/3-540-45414-4_21"
source: "https://doi.org/10.1007/3-540-45414-4_21"
topics:
  - lockfree
seed_rank: 298
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Linearizability: a correctness condition for concurrent objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
  - title: "Wait-free synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
  - title: "Lock-free linked lists using compare-and-swap"
    url: "https://doi.org/10.1145/224964.224988"
    year: 1995
    arxiv: null
    doi: "10.1145/224964.224988"
see:
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
  - "036-wait-free-synchronization"
  - "431-thread-scheduling-for-multiprogrammed-multiprocessors"
---

# A Pragmatic Implementation of Non-Blocking Linked-Lists

## One-sentence takeaway

Harris marks a node's next-pointer with a spare bit to logically delete it, then physically swings the predecessor's pointer with CAS — the lock-free list every later map and skip-list copies.

## Why it matters here

This is the practical lock-free list baseline. Ano intrusive lists, wait-free queues, and epoch/hazard reclaimers all assume this mark-then-swing protocol.

## Key ideas

- Two-phase delete: (1) CAS a mark bit into `node.next` so concurrent inserters see the node as gone; (2) CAS the predecessor from `node` to `node.next`.
- Helping: a thread that sees a marked successor finishes the physical unlink before retrying its own operation, so the list cannot get stuck behind a crashed deleter.
- Uses only single-word CAS (the mark lives in a pointer low bit). No DCAS, unlike Valois 1995.
- Linearizable search / insert / delete; the search may return a node that is already marked, so callers must re-validate.
- DISC 2001, DOI 10.1007/3-540-45414-4_21. Duplicate "Thread scheduling" cites dropped.

## Caveats

## Links

- DOI: [10.1007/3-540-45414-4_21](https://doi.org/10.1007/3-540-45414-4_21)
