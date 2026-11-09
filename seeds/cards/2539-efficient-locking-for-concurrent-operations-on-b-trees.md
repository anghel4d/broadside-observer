---
title: "Efficient Locking for Concurrent Operations on B-Trees"
authors:
  - "Philip L. Lehman"
  - "S. Bing Yao"
year: 1981
venue: "ACM Transactions on Database Systems 6(4)"
arxiv: null
doi: "10.1145/319628.319663"
source: "https://www.csd.uoc.gr/~hy460/pdf/p650-lehman.pdf"
topics:
  - "lockfree-game-parallelism"
  - "relational-ecs-queries"
seed_rank: 2539
seed_batch: "archive-2026-11-10"
reviewed: "2026-11-10"
pool: "systems"
relevance_score: 9
lineage: concurrent-data-structures
cites:
  - title: "Efficient Locking for Concurrent Operations on B-Trees"
    url: "https://doi.org/10.1145/319628.319663"
    year: 1981
    arxiv: null
    doi: "10.1145/319628.319663"
see: ["2533-pab-tree-parallel-b-tree-with-batch-updates", "867-the-bw-tree-a-b-tree-for-new-hardware-platforms"]
---

# Efficient Locking for Concurrent Operations on B-Trees

## One-sentence takeaway

Lehman and Yao add one right-link pointer and a high key to every B*-tree node, so a reader that lands on a node split under it just moves right; searches take no locks at all, and an insert holds at most three node locks, only while propagating a split upward.

## Why it matters here

The B-link tree is the template for "readers never block, writers repair locally" that Anoptic wants for shared indexes (spatial buckets, entity-id maps, ano relational hops). Its trick, making a half-finished structural change still readable by giving every node a forward escape hatch, is the same move later reused by the Bw-tree (867) and by lock-free skip lists, and the new PaB-tree (2533) is a direct descendant. It is the right first read before designing any concurrent ordered index for the engine.

## Key ideas

- **Link plus high key.** Each node stores an upper bound on its keys and a pointer to its right sibling at the same level; a search whose key exceeds the high key follows the link.
- **No read locks.** Locks only exclude other writers to a page; readers always proceed, which the paper notes is unlike earlier schemes.
- **Bottom-up split.** A split writes the new right half first, then the rewritten left half (atomically, with its link to the new node), then inserts the separator one level up, moving right there if needed; locks are taken left-to-right and bottom-up.
- **Constant locks.** At most three nodes are locked at once, and only while following a link during split propagation.
- **Proofs.** An informal proof of deadlock freedom (via a total order on nodes) and of correctness for interleaved searches and inserts.

## Caveats

The model is disk pages with atomic page reads and writes, not cache lines; porting it to in-memory concurrency needs memory-ordering care the paper never discusses. Livelock is possible in principle (a very slow process chasing links), argued unlikely in practice. Deletion is simplified by allowing underfull leaves and never merging, with batch reorganization or a whole-tree lock as the fallback.

## Links

- PDF: https://www.csd.uoc.gr/~hy460/pdf/p650-lehman.pdf
- DOI: https://doi.org/10.1145/319628.319663
