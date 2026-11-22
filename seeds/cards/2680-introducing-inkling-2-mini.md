---
title: "Introducing Inkling 2 Mini"
authors:
  - "Thinking Machines Lab"
year: 2026
venue: "Thinking Machines Lab news post (open-weights model release), 20 Nov 2026; with vLLM day-0 support post"
arxiv: null
doi: null
source: "https://thinkingmachines.ai/news/inkling-2-mini/"
version_reviewed: "web 2026-11-20"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
  - "kv-serving"
  - "looped-transformers"
  - "coding-agents"
seed_rank: 2680
seed_batch: "frontier-2026-11-22"
reviewed: "2026-11-22"
pool: "agents"
relevance_score: 8
cites:
  - title: "Introducing Inkling 2 Mini"
    url: "https://thinkingmachines.ai/news/inkling-2-mini/"
    year: 2026
    arxiv: null
    doi: null
  - title: "Inkling 2 Mini on vLLM: Day-0 Support for a Looped Model"
    url: "https://vllm.ai/blog/2026-11-20-inkling2-mini"
    year: 2026
    arxiv: null
    doi: null
  - title: "Universal Transformers"
    url: "https://arxiv.org/abs/1807.03819"
    year: 2018
    arxiv: "1807.03819"
    doi: null
  - title: "Attention Residuals"
    url: "https://arxiv.org/abs/2603.15031"
    year: 2026
    arxiv: "2603.15031"
    doi: null
  - title: "Think Fast: Estimating No-CoT Task-Completion Time Horizons of Frontier AI Models"
    url: "https://arxiv.org/abs/2606.07157"
    year: 2026
    arxiv: "2606.07157"
    doi: null
  - title: "Chain of Thought Monitorability: A New and Fragile Opportunity for AI Safety"
    url: "https://arxiv.org/abs/2507.11473"
    year: 2025
    arxiv: "2507.11473"
    doi: null
  - title: "Intelligence per Watt: Measuring Intelligence Efficiency of Local AI"
    url: "https://arxiv.org/abs/2511.07885"
    year: 2025
    arxiv: "2511.07885"
    doi: null
---

# Introducing Inkling 2 Mini

## One-sentence takeaway

Inkling 2 Mini is an open-weights 26.4B-total / 3.4B-active MoE that loops its middle 12 layers three times per token (48 layer applications from 24 stored layers). It is trained and shipped natively in NVFP4/MXFP8 (~20 GB), and it leads open models under 100B on DeepSWE v1.1 (48.2%). vLLM's day-0 post shows the serving bill for looping: each pass keeps its own KV cache, so per-GPU KV capacity halves.

## Why it matters here

Looped models move reasoning from tokens into depth: the lab reports that a non-looped twin needs 140% more inference compute to match the looped model's loss on 512k-token agentic traces. For agent serving this changes the accounting. Fewer tokens are written per task, but each token costs about 2.5× the decode time and 2× the KV memory at three passes (GB200, batch 1: 1.51 → 3.85 ms; KV capacity 352K → 175K tokens). Prefix-cache budgets and session-residency policies (Aggron, TripleKV, KV-residency cards) have to price KV per pass, not per token. The `loop_share_cache` research option, where all passes share one KV, is a concrete knob to study. A 20 GB local model that runs 20 persistent agents offline on one MacBook ("Thinkyville") is also a realistic target for GRID COMMAND-style many-agent simulations.

## Key ideas

- **Loop design.** Four 6-layer blocks: the prelude and coda run once, and the two middle blocks run three times. Each later pass reads the previous pass's "message" through a learned gate, initialised closed so training starts as a non-looped model. The model uses attention residuals.
- **Where to loop.** Looping the middle layers gave a 1.51–1.91× compute-equivalent gain versus 1.24–1.36× for looping the last 12 layers, and won on 27 of 28 evaluations.
- **Cheap to run locally.** 384 → 128 experts pruned once in midtraining, then healed on 1T distilled tokens. Weights are trained and deployed in NVFP4 (last 4 layers MXFP8), so there is no post-hoc quantization loss. RL ran for 2.2T tokens over 2,000 steps.
- **Monitorability.** In the variable-loop research model, the no-CoT time horizon rose from 16 s (1 pass) to 37 s (3 passes), and serial reasoning kept improving out to 10 loops, twice the trained depth. Chains of thought got shorter but stayed legible, and agentic-sabotage scores did not rise.
- **Serving (vLLM).** Pass count is selectable on the research checkpoint (`loop_num_passes`). Sharing the KV cache across passes recovers less memory than dropping a pass (194K vs 233K tokens) because per-pass conv states remain. Both knobs are rejected on the fixed-loop release checkpoint.

## Caveats

Lab launch post plus vLLM integration post; benchmark scores are self-reported, and evaluation setups vary by model. The decode-speed frontier plot is a theoretical bandwidth ceiling, not a measurement. No technical report or arXiv paper yet. Known weaknesses: multi-turn chat (MultiChallenge 50.0%) and many-constraint instructions (33.4%), both behind Qwen3.8-27B. Knowledge stays bounded by total parameters, not loops. KV numbers are vLLM's on one GB200 at 4K context, forward pass only.

## Links

- Launch post: https://thinkingmachines.ai/news/inkling-2-mini/
- Weights (Hugging Face): https://huggingface.co/thinkingmachines/Inkling-2-Mini
- Variable-loop research checkpoint: https://huggingface.co/thinkingmachines/TML-d24-varloop-research
- vLLM day-0 post (KV per pass, loop_share_cache): https://vllm.ai/blog/2026-11-20-inkling2-mini
- Universal Transformers (cited): https://arxiv.org/abs/1807.03819
- Attention Residuals (cited): https://arxiv.org/abs/2603.15031
