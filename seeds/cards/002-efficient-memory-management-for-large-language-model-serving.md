---
title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
authors:
  - "Woosuk Kwon"
  - "Zhuohan Li"
  - "Siyuan Zhuang"
  - "Ying Sheng"
  - "Lianmin Zheng"
  - "Cody Hao Yu"
  - "Joseph E. Gonzalez"
  - "Hao Zhang"
  - "Ion Stoica"
year: 2023
venue: "SOSP"
arxiv: "2309.06180"
doi: "10.1145/3600006.3613165"
source: "https://arxiv.org/abs/2309.06180"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - transformer
  - foundations
  - llm-serving
seed_rank: 2
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 10
cites:
  - title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
    url: "https://arxiv.org/abs/2205.14135"
    year: 2022
    arxiv: "2205.14135"
    doi: null
  - title: "Orca: A Distributed Serving System for Transformer-Based Generative Models"
    url: "https://www.usenix.org/conference/osdi22/presentation/yu"
    year: 2022
    arxiv: null
    doi: null
see:
  - "089-flashattention-fast-and-memory-efficient-exact-attention-wit"
---

# Efficient Memory Management for Large Language Model Serving with PagedAttention

## One-sentence takeaway

PagedAttention treats the KV cache like virtual memory — non-contiguous blocks mapped by a block table — so vLLM can pack requests without reservation waste and share prefixes across sequences.

## Why it matters here

Every Broadside observer and GRID COMMAND agent is a long, branching decode: if KV pages fragment or duplicate, batch size collapses and the radar loop starves. This is the serving primitive behind prefix reuse, tool-call forks, and multi-session memory.

## Key ideas

- Autoregressive serving is memory-bound on the KV cache, which grows and shrinks per request; contiguous reservation wastes memory to internal and external fragmentation and blocks large batches.
- PagedAttention splits KV into fixed-size blocks addressed through a per-sequence block table, so physical GPU memory need not be contiguous and unused slots stay unallocated.
- vLLM shares blocks across sequences that share a prompt prefix (beam search, parallel sampling) via copy-on-write, cutting redundant KV copies.
- Against FasterTransformer and Orca, vLLM reports 2–4× throughput at the same latency, with larger gains on long sequences and complex decoding.
- The attention kernel itself becomes OS-like: allocate, map, share, and reclaim pages rather than pre-reserving a max-length slab per request.

## Caveats

## Links

- arXiv: [2309.06180](https://arxiv.org/abs/2309.06180)
- PDF: https://arxiv.org/pdf/2309.06180
- DOI: [10.1145/3600006.3613165](https://doi.org/10.1145/3600006.3613165)
- Code: https://github.com/vllm-project/vllm
