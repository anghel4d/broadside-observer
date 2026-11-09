---
title: "PaB-tree: Parallel B+-tree with Batch Updates"
authors:
  - "Ziyang Men"
  - "Yan Gu"
  - "Yihan Sun"
  - "Helen Xu"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2611.09172"
doi: null
source: "https://arxiv.org/abs/2611.09172"
topics:
  - "ecs-data-oriented-simulation"
  - "lockfree-game-parallelism"
  - "custom-allocators-runtime"
seed_rank: 2533
seed_batch: "craft-2026-11-09"
reviewed: "2026-11-09"
pool: "systems"
relevance_score: 8
lineage: concurrent-data-structures
cites:
  - title: "PaB-tree: Parallel B+-tree with Batch Updates"
    url: "https://arxiv.org/abs/2611.09172"
    year: 2026
    arxiv: "2611.09172"
    doi: null
see: ["867-the-bw-tree-a-b-tree-for-new-hardware-platforms", "2476-a-simple-optimistic-b-skiplist-algorithm"]
---

# PaB-tree: Parallel B+-tree with Batch Updates

## One-sentence takeaway

PaB-tree is the first batch-parallel B+-tree with provable work, span and cache bounds that is also fast in practice, built on one invariant: an overflow or underflow repair never touches a sibling and is always pushed to the parent.

## Why it matters here

Anoptic and ano both run in phases: a tick gathers a batch of inserts and deletes, then applies them all at once. That is exactly the batch-parallel model, not the fine-grained concurrent model that the Bw-tree (card 867) and Masstree target, and the abstract says those concurrent indexes run an order of magnitude slower on batch updates. A sorted index that takes a whole tick's command buffer in one parallel call fits the ECS query layer and the relational hops in ano.

## Key ideas

- **No-sibling repair.** Overflows and underflows are always fixed by pushing work to the parent, never by borrowing from or merging with a sibling. This keeps parallel repairs independent.
- **Promote primitive.** Batch construction and batch insertion both reduce to repeated node promotion; batch deletion reduces to reinsertion.
- **Bounds.** Batch updates cost \(O(B \log_B n)\) work and \(O(\log_B n)\) I/O per element, matching sequential B+-tree bounds, with polylogarithmic span.
- **Speed.** Against tuned parallel and concurrent baselines, up to 1.4× faster construction and up to 3.6× faster batch insertion, while keeping B+-tree query efficiency.

## Caveats

Fresh preprint, not refereed. I read only the abstract, so the baselines, core counts and key/value sizes are unknown here. Batch-parallel means updates are applied in bulk, not interleaved with concurrent readers; mixing reads and writes within a tick still needs a phase barrier.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.09172
- PDF: https://arxiv.org/pdf/2611.09172
