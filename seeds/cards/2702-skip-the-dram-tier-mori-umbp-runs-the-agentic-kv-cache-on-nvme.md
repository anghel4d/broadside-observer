---
title: "Skip the DRAM Tier: MoRI UMBP Runs the Agentic KV Cache on NVMe"
authors:
  - "AMD and Embedded LLM"
year: 2026
venue: "vLLM blog, 23 Nov 2026"
arxiv: null
doi: null
source: "https://vllm.ai/blog/2026-11-23-skip-the-dram-tier"
version_reviewed: "web 2026-11-23"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
  - "kv-serving"
seed_rank: 2702
seed_batch: "frontier-2026-11-24"
reviewed: "2026-11-24"
pool: "agents"
relevance_score: 9
cites:
  - title: "Skip the DRAM Tier: MoRI UMBP Runs the Agentic KV Cache on NVMe"
    url: "https://vllm.ai/blog/2026-11-23-skip-the-dram-tier"
    year: 2026
    arxiv: null
    doi: null
  - title: "MoRI (AMD ROCm communication library with the UMBP KV cache pool)"
    url: "https://github.com/ROCm/mori"
    year: 2026
    arxiv: null
    doi: null
---

# Skip the DRAM Tier: MoRI UMBP Runs the Agentic KV Cache on NVMe

## One-sentence takeaway

On vLLM replaying real Claude Code sessions (AgentX traces, median turn 142K input tokens, over 96% already-seen prefix), a 1.8 TB KV pool on two local NVMe drives matched a 1.8 TB host-DRAM pool within 1% throughput for Kimi-K3 at 48, 70 and 96 sessions, because throughput tracks the KV hit rate (R² 0.96 over 42 runs; +1% hit rate ≈ +10% throughput) and the asynchronous load hides inside the prefill queue wait.

## Why it matters here

This is the cleanest production-style number yet for why agent serving is a prefix-retention problem: hit rate alone explained 96% of throughput variance, and at 96% hit rate every lost point is 25% more prefill work. It reframes capacity planning for agent KV: DRAM costs per TB held, NVMe costs per TB written, so drives rated for Kimi-K3's ~83 TB/day of writes hold a day of KV for about the price of a DRAM pool that holds 31 minutes. For Broadside's tokenization/prefix-caching thread, it argues that session-length retention (hours to days, as DeepSeek reportedly does with three-day SSD retention) is now affordable, which raises the value of byte-stable, append-only agent prompts.

## Key ideas

- **Setup.** AMD MI355X, Kimi-K3 (93 layers: 69 linear-attention KDA, 24 MLA) served 1P1D (TP8 prefill + TP8 decode). UMBP pool in AMD's MoRI library behind vLLM's `UMBPStoreConnector`. Workloads: 393 AgentX Claude Code sessions and WEKA's kvlab 40-day corpus (median replayed request 165K tokens).
- **Result.** NVMe vs DRAM at equal 1.8 TB: 12,275 vs 12,240 tok/s/GPU at 48 sessions, 13,492 vs 13,380 at 70, 13,284 vs 13,313 at 96; hit rates differ by ≤0.08% of prompt tokens. A repeat on other machines put NVMe ahead by 0.4–0.9%.
- **DRAM only stages.** A 64 GB write buffer plus a 16 GiB read staging buffer (direct I/O via io_uring, no page cache). At 70 sessions the write buffer can be dropped; at 96 sessions dropping it cost 6.7%.
- **Why it works.** Same capacity and same eviction rules mean same retained KV; a hit is worth far more than its load (128K prefix: ~0.45 s DRAM hit, ~0.84 s NVMe hit, ~7.7 s recompute in MoRI's guide); and vLLM's async connector lets the load finish while the request waits for prefill.
- **Hybrid models.** The pool stores MLA KV blocks plus checkpoints of KDA state so a turn can resume mid-prompt; checkpoints age faster than KV under eviction.
- **Ideas borrowed from DeepSeek's deployment notes.** SSD-resident agent KV, layer-wise loading and bounded replay, tested on vLLM.

## Caveats

Vendor blog (AMD with Embedded LLM) on the vLLM site, not peer reviewed; many comparisons are single runs on a cluster with ±0.3–2.5% run-to-run variation. One hardware platform (MI355X, two Micron 7450 PRO drives per node) and mostly one model; DeepSeek-V4-Pro and V4.1-Flash add a few points. The authors flag drive wear as the main limitation: every computed KV block is written to the drives (17× more writes than reads at low load), and they plan a distributed pool to spread writes. Prices are list prices from a calculator on 13 Nov 2026. I read the post through the "Why NVMe keeps up" section and the sources list, not every appendix table.

## Links

- Blog post: https://vllm.ai/blog/2026-11-23-skip-the-dram-tier
- MoRI repository: https://github.com/ROCm/mori
