---
title: "MCPrioQ: A lock-free algorithm for online sparse markov-chains"
authors:
  - "Jesper Derehag"
  - "Åke Johansson"
year: 2023
venue: "arXiv:cs.LG"
arxiv: "2304.14801"
doi: null
source: "https://arxiv.org/abs/2304.14801"
topics:
  - lockfree
seed_rank: 232
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Read-Copy Update"
    url: "https://www.rdrop.com/users/paulmck/RCU/"
    year: 2001
    arxiv: null
    doi: null
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
see:
  - "304-read-copy-update"
  - "036-wait-free-synchronization"
---

# MCPrioQ: A lock-free algorithm for online sparse markov-chains

## One-sentence takeaway

MCPrioQ is a lock-free sparse Markov chain with O(1) updates and O(CDF⁻¹(t)) inference, aimed at recommending the next n items in descending probability while writers keep running.

## Why it matters here

GRID COMMAND opponent models and Anoptic "what does this unit do next" tables are online sparse chains; a structure that can be updated with atomics and still yield an approximate top-n is the runtime form of that model.

## Key ideas

- Updates go through hash tables and atomic instructions so many writers can learn continuously.
- Lookups walk a priority queue that is allowed to be only approximately correct under concurrency.
- An RCU-like scheme keeps the approximate/lock-free contract, but swaps elements in place instead of the usual pop-then-insert.
- Inference cost tracks the inverse CDF, so you pay for the probability mass you actually read, not the whole graph.
- Designed for recommender-style "give me the n most likely next states" rather than full matrix power iteration.

## Caveats

## Links

- arXiv: [2304.14801](https://arxiv.org/abs/2304.14801)
- PDF: https://arxiv.org/pdf/2304.14801
