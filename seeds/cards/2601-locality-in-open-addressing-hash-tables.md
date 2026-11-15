---
title: "Locality in Open Addressing Hash Tables"
authors:
  - "Or Zamir"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2607.16390"
doi: null
source: "https://arxiv.org/abs/2607.16390"
topics:
  - "open-addressing"
  - "linear-probing"
  - "cache-locality"
  - "lower-bounds"
  - "hash-tables"
seed_rank: 2601
seed_batch: "craft-2026-11-15"
reviewed: "2026-11-15"
pool: "systems"
relevance_score: 7
lineage: open-addressing
cites:
  - title: "A Simple Analysis of Quadratic Probing and Other Open Addressing Schemes (Guo, Pettie, Wan)"
    url: "https://arxiv.org/abs/2608.08013"
    year: 2026
    arxiv: "2608.08013"
    doi: null
see:
  - "2520-incremental-open-addressing-has-no-time-space-tradeoff"
  - "2438-optimal-worst-case-open-addressing-braided-cuckoo-hashing"
  - "416-robin-hood-hashing"
  - "387-abseil-swiss-tables"
---

# Locality in Open Addressing Hash Tables

## One-sentence takeaway

Measuring open addressing by how far a lookup strays from its first slot, not just by how many slots it probes, shows a hard tradeoff: at load 1−ε no scheme without reordering can keep locality o(1/ε²) at every load, linear probing sits at that bound, uniform probing gets optimal probe count with no locality, and a load-oblivious scheme whose i-th probe lands within O(i²) of the first gets optimal Θ(1/ε) probes.

## Why it matters here

Every hash table in Anoptic is judged by cache lines touched, not probe counts, which is why linear probing and SwissTable-style group probing (card 387) win in practice. This paper turns that folk wisdom into a parameter with matching bounds: how much locality you must give up at high load, what page size an immutable table needs, and why quadratic-style offsets are a principled middle ground. Pair it with the cited Guo–Pettie–Wan analysis, which pushes proven constant insertion cost for quadratic probing to about 37.6% load.

## Key ideas

- **Locality.** The geometric distance from the first probed slot to the farthest slot inspected or used.
- **Tradeoff.** Uniform probing: optimal Θ(1/ε) probes, essentially no locality. Linear probing: highly local, Θ(1/ε²) probes. No open addressing without reordering achieves locality o(1/ε²) simultaneously at every load 1−ε.
- **Amortized bound.** Expected locality Ω(1/ε) over any sequence of (1−ε)n insertions, even if the final load is known; this implies pages of size Ω(1/ε²) for 1+o(1) expected page span in immutable open addressing.
- **Upper bounds.** With the target load known in advance, Õ(1/ε) expected probes and locality for inserts and all searches; a load-oblivious greedy scheme with optimal Θ(1/ε) probes whose i-th probe is within O(i²) of the first.
- **By-product.** A variance bound for occupied-cell densities giving O(log n/ε²) expected probes for every fixed-shift probing sequence.

## Caveats

Asymptotic theory from the abstract only; it does not model SIMD group probing, tombstones or deletes, and the constants that decide real tables are not measured. "Without reordering" excludes Robin Hood (card 416) and cuckoo variants (card 2438), which escape the bound by moving keys.

## Links

- arXiv abstract: https://arxiv.org/abs/2607.16390
- PDF: https://arxiv.org/pdf/2607.16390
- Companion, quadratic probing analysis: https://arxiv.org/abs/2608.08013
