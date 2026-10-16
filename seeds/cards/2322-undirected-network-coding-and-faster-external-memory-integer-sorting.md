---
title: "Undirected Network Coding and Faster External-Memory Integer Sorting"
authors:
  - "Baochun Li"
  - "Zongpeng Li"
  - "Sirui Liu"
year: 2026
venue: "arXiv"
arxiv: "2610.20079"
doi: null
source: "https://arxiv.org/abs/2610.20079"
topics:
  - "external-memory-algorithms"
  - "integer-sorting"
  - "network-coding"
  - "lean-verified"
seed_rank: 2322
seed_batch: "curiosity-2026-10-17"
reviewed: "2026-10-17"
pool: "systems"
relevance_score: 9
cites:
  - title: "Undirected Network Coding and Faster External-Memory Integer Sorting"
    url: "https://arxiv.org/abs/2610.20079"
    year: 2026
    arxiv: "2610.20079"
    doi: null
  - title: "Network coding can beat routing in undirected multiple-unicast networks"
    url: "https://arxiv.org/abs/2610.09367"
    year: 2026
    arxiv: "2610.09367"
    doi: null
  - title: "The multiple unicast conjecture is false"
    url: "https://arxiv.org/abs/2610.10108"
    year: 2026
    arxiv: "2610.10108"
    doi: null
see: ["1966-integer-multiplication-below-n-log-n", "303-cache-oblivious-algorithms", "764-organization-and-maintenance-of-large-ordered-indices"]
---

# Undirected Network Coding and Faster External-Memory Integer Sorting

## One-sentence takeaway

Using a finite undirected network where binary linear coding strictly beats fractional routing (refuting the 2004 Li–Li conjecture), the authors build a deterministic external-memory sorter for Θ(log N)-bit integers that uses asymptotically fewer block transfers than the Aggarwal–Vitter comparison bound in some parameter ranges, answering a question open since 1988, with correctness and I/O bounds checked in Lean 4.

## Why it's lovely

It is a rare case of information theory turning straight into an algorithm. In 2019 Farhadi, Hajiaghayi, Larsen and Shi showed that if network coding can never beat routing in undirected multiple-unicast networks, then no trick on integer bits can beat comparison sorting on disk. Two independent refutations of that conjecture appeared in early October 2026 (the radar held one of them then), but knocking out a conditional lower bound does not by itself give a faster algorithm. This paper does that step: the coding gain is turned into a faster "address-field interchange", the fixed data permutation that Leighton's Columnsort spends its time on. Anyone who has sorted bigger-than-RAM data, or built a B-tree or radix pass over blocks, will recognize every piece except the surprising one.

## Key ideas

- **Model.** N keys on disk, memory of M words, transfers of B consecutive words; cost is block transfers. The comparison bound is Θ((N/B)(1 + log(N/M)/log(M/B))).
- **Coding gadget.** A small undirected multiple-unicast network in which binary linear coding achieves strictly more throughput than fractional routing. Lean checks the strict advantage.
- **From coding to I/O.** The linear construction becomes an address-field interchange operation applied recursively, reducing long-field interchanges to short ones handled with memory buffers. This adapts the recursive field-exchange idea from OpenAI's unrefereed "integer multiplication below n log n" manuscript from multitape Turing machines to block transfers.
- **Sorter.** Columnsort plus most-significant-digit radix partitioning, with the accelerated permutations, sorts in O((N/B)[1 + log N / ((log(M/B))^{1−ε} (log M)^ε)]) I/Os for 2B ≤ M ≤ N, with ε = 1.8 × 10⁻¹¹. With M = 2B and N = B², comparison sorting needs Θ(B log B) I/Os and this needs O(B (log B)^{1−ε}).
- **Verification.** Lean 4 with Mathlib covers termination, correctness, storage and the block-transfer bounds. ChatGPT helped explore constructions, check arguments and write the Lean code, as the paper states.

## Caveats

With ε around 10⁻¹¹ the gain is purely asymptotic and will never show on a real disk or SSD; the point is that the comparison bound is not a law. The bound holds for Θ(log N)-bit keys in particular parameter regimes, not for every (N, M, B). This is a fresh 38-page preprint built on equally fresh and unrefereed results (the two Li–Li refutations and the OpenAI multiplication manuscript).

## Links

- arXiv abstract: https://arxiv.org/abs/2610.20079
- PDF: https://arxiv.org/pdf/2610.20079
- Zhang–Li–Li counterexample: https://arxiv.org/abs/2610.09367
- Braverman–He counterexample: https://arxiv.org/abs/2610.10108
