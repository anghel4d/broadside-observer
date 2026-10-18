---
title: "NVIDIA Nemotron Labs Dory 1.0 4B: a looped (latent-recurrent) LLM with elastic inference compute"
authors:
  - "NVIDIA"
year: 2026
venue: "Hugging Face model card (NVIDIA Nemotron Labs)"
arxiv: null
doi: null
source: "https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16"
topics:
  - "agentic-llm-serving"
  - "looped-transformers"
  - "low-precision-training"
seed_rank: 2341
seed_batch: "frontier-2026-10-18"
reviewed: "2026-10-18"
pool: "agents"
relevance_score: 8
cites:
  - title: "NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16 (model card)"
    url: "https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16"
    year: 2026
    arxiv: null
    doi: null
  - title: "nGPT: Normalized Transformer with Representation Learning on the Hypersphere"
    url: "https://arxiv.org/abs/2410.01131"
    year: 2024
    arxiv: "2410.01131"
    doi: null
see: []
---

# NVIDIA Nemotron Labs Dory 1.0 4B: a looped (latent-recurrent) LLM with elastic inference compute

## One-sentence takeaway

Dory is a 4B open looped LLM from NVIDIA (released 16 Oct 2026): 8 input layers, a shared 20-layer recurrent block applied 1 to 4 times with the input reinjected each loop, and 8 output layers, so one checkpoint trades compute per token for accuracy at serve time; SWE-bench Verified goes from 50.3 at one loop to 59.5 at two and 61.8 at four, and "last-loop" KV caching keeps the cache at one-loop size whatever the loop count.

## Why it matters here

The loop count is a serve-time dial on the same weights. That fits Broadside's routing problem (cheap passes for routine steps, deeper passes for hard ones) without swapping models or growing the KV budget. It is also a credible small open model for local or edge agents: per-token compute goes into latent "thinking" rather than longer outputs, and it runs on vLLM and llama.cpp with recurrent-KV options exposed as plain config overrides.

## Key ideas

- **Input / Recurrent / Output split.** The recurrent block's parameters are shared across loops, and the input is reinjected into every loop. The backbone is normalized-GPT (nGPT) with interleaved sliding-window and full-attention layers, and up to 256K context.
- **Elastic compute.** `n_recurrent_loops` is set at serve time (1 to 4). NVIDIA recommends 2 as the default (most of the gain comes from the second loop) and 4 for agentic tasks. At 1/2/4 loops: Terminal-Bench 2.1 is 12.5/18.1/22.2, GPQA Diamond 69.2/72.4/72.2 and HLE text 8.3/10.9/10.4.
- **Token efficiency.** The model card reports that more loops solve the same tasks with fewer generated tokens, so end-to-end latency does not scale linearly with loop count.
- **Last-loop KV caching.** Standard looping stores a KV cache per loop. In `last_loop` mode each loop overwrites the previous loop's entries, so the cache holds only the final loop's keys and values, with accuracy "close to" per-loop mode and nearly unchanged output lengths.
- **Native NVFP4 pre-training.** The model is pre-trained in 4-bit NVFP4 and then continued in BF16. It ships as BF16, MXFP8, NVFP4 and a Q5_K_M GGUF.

## Caveats

This is a model card, not a paper: there are no ablations against a parameter-matched non-looped model and no description of the training recipe beyond data names and frameworks. Gains are not monotone (GPQA and HLE dip from 2 to 4 loops), and τ³-bench Banking stays low (11.6 to 14.7). Comparator columns (Qwen3.5, Gemma 4, Qwen3.6) are partly reported scores, and some are marked as such. The last-loop cache's accuracy claim is qualitative. vLLM and llama.cpp support was still in unmerged PRs at release. The OpenMDW-1.1 license is permissive but non-standard.

## Links

- Model card (BF16): https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16
- GGUF export: https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-GGUF
- vLLM support PR: https://github.com/vllm-project/vllm/pull/60149
- nGPT backbone paper: https://arxiv.org/abs/2410.01131
