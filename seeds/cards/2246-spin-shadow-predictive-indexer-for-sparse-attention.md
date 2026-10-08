---
title: "SPIN: Shadow Predictive Indexer for Sparse Attention"
authors:
  - "Yao Fu"
  - "Cyrus Chang"
  - "Ritchie Zhao"
  - "Bryce Long"
  - "Yueying Li"
  - "Mahdi Kamani"
  - "Samkit Jain"
  - "Rahul Raman"
  - "Tara Safavi"
  - "Shreya Gupta"
  - "Parsa Ashrafi Fashi"
  - "Minseok Lee"
  - "Julien Demouth"
  - "Bita Darvish Rouhani"
year: 2026
venue: "arXiv"
arxiv: "2610.09025"
doi: null
source: "https://arxiv.org/abs/2610.09025"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 2246
seed_batch: "frontier-2026-10-08"
reviewed: "2026-10-08"
pool: "agents"
relevance_score: 8
lineage: deepseek-sparse-attention
cites:
  - title: "SPIN: Shadow Predictive Indexer for Sparse Attention"
    url: "https://arxiv.org/abs/2610.09025"
    year: 2026
    arxiv: "2610.09025"
    doi: null
see:
  - "995-deepseek-v3-2-pushing-the-frontier-of-open-llms"
  - "999-deepseek-v4-million-token-context-intelligence"
  - "990-native-sparse-attention-hardware-aligned"
---

# SPIN: Shadow Predictive Indexer for Sparse Attention

## One-sentence takeaway

In DeepSeek-style indexer sparse attention the indexer itself still scans the whole KV cache every step; SPIN predicts the important KV blocks from the history of past indexer scores and skips 30–40% of that scan, giving up to 14.9% more vLLM throughput and 13.2% lower median inter-token latency on DeepSeek-V4 without hurting task quality.

## Why it matters here

The DeepSeek shelf (995 V3.2 DSA, 999 V4) made indexer sparse attention mainstream, and the paper notes GLM-5.2, MiniMax-M3 and LongCat-2.0 use variants too. At 512K–1M contexts, typical of long agent sessions, the indexer becomes a main decode cost. SPIN is training-free, block-level and compatible with multi-token-prediction speculative decoding, so it is an immediately deployable serving trick for the long-context agent workloads Broadside cares about.

## Key ideas

- **The bottleneck.** Core attention sees only a fixed top-k budget, but the indexer scales linearly with context length and dominates at very long context.
- **Temporal prediction.** Vertical and diagonal exponential moving averages of past indexer scores serve as a proxy for current block importance, so most blocks need not be re-scored.
- **Exploration.** Random exploration within the same block budget limits stale predictions.
- **Speculative decoding as a first-class concern.** Block sparsity holds without visible change in acceptance under DeepSeek-V4's native MTP.
- **Results.** 30–40% indexer sparsity at comparable quality on LongBench-v2, AA-LCR, MRCRv2 and RULER; up to 14.9% throughput and 13.2% median ITL improvement in end-to-end vLLM.

## Caveats

Sudden attention shifts can cause misses, and predictions feed back into future observations; the authors flag both. The gains are on one model class (DeepSeek-V4) in vLLM, and worst-case quality on adversarial retrieval was not separately reported here.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.09025
- PDF: https://arxiv.org/pdf/2610.09025
