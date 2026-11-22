---
title: "Introducing harness adapters: adapt your favorite model to your harness to improve performance and cost"
authors:
  - "Younes B."
  - "Ben Burtenshaw"
  - "Nathan Habib"
  - "Lysandre"
  - "Amine Dirhoussi"
  - "Adithya S K"
  - "Shaun Smith"
  - "Sergio Paniego"
  - "Joel Niklaus"
  - "Lewis Tunstall"
year: 2026
venue: "Hugging Face blog, 20 Nov 2026"
arxiv: null
doi: null
source: "https://huggingface.co/blog/harness-adapters-at-scale"
version_reviewed: "web 2026-11-20"
topics:
  - "harness-engineering"
  - "coding-agents"
  - "continual-agent-skills"
  - "agentic-llm-serving"
seed_rank: 2679
seed_batch: "frontier-2026-11-22"
reviewed: "2026-11-22"
pool: "agents"
relevance_score: 9
cites:
  - title: "Introducing harness adapters: adapt your favorite model to your harness to improve performance and cost"
    url: "https://huggingface.co/blog/harness-adapters-at-scale"
    year: 2026
    arxiv: null
    doi: null
  - title: "Agent Lightning v1.0: Towards Harnessed Agentic RL"
    url: "https://arxiv.org/abs/2608.17528"
    year: 2026
    arxiv: "2608.17528"
    doi: null
  - title: "Editing Models with Task Arithmetic"
    url: "https://arxiv.org/abs/2212.04089"
    year: 2022
    arxiv: "2212.04089"
    doi: null
  - title: "TIES-Merging: Resolving Interference When Merging Models"
    url: "https://arxiv.org/abs/2306.01708"
    year: 2023
    arxiv: "2306.01708"
    doi: null
  - title: "Model merging with SVD to tie the Knots"
    url: "https://arxiv.org/abs/2410.19735"
    year: 2024
    arxiv: "2410.19735"
    doi: null
  - title: "The Thinking Leakage in Reinforcement Learning for LLMs"
    url: "https://arxiv.org/abs/2610.14270"
    year: 2026
    arxiv: "2610.14270"
    doi: null
---

# Introducing harness adapters: adapt your favorite model to your harness to improve performance and cost

## One-sentence takeaway

Hugging Face trained one rank-32 LoRA per agent harness (pi, OpenCode, Hermes Agent) for a frozen Qwen3.8-27B, using RL inside each harness exactly as it ships. Each adapter beats the base model in its own harness on SWE-bench Pro (hard 51) and Terminal-Bench 2.1 while making 53–72% fewer tool calls, and the three adapters are nearly orthogonal, so they merge into one "super-adapter" that works under all three.

## Why it matters here

This is the most direct measurement yet of the model-vs-harness split that `summaries/02-model-or-harness.md` argues about. Harness fit turns out to be a small, separable weight delta: about 0.01–0.02 cosine similarity between harnesses, recoverable with a LoRA and a few hundred validated tasks. Most of the gain is efficiency (less reasoning, fewer calls, more first-try successes), which is the serving cost Broadside cares about. Training happens on the exact tokens the shipped harness produced, recorded by a proxy between harness and vLLM, not on a re-implemented agent loop. That is the same "train on deploy-time tokens" discipline that prefix-cache-friendly agents need. The task pipeline (validate, then keep only tasks the base model sometimes solves) is a ready-made recipe for practice loops.

## Key ideas

- **Train in the real harness.** Pi 1.5.2, OpenCode 2.2.7 and Hermes Agent v0.22.6 run unmodified in Docker images (OpenEnv + Harbor). TRL's AsyncGRPOTrainer learns from proxy-recorded tokens. The reward is the verifier's pass/fail plus a 0.1 tool-efficiency bonus.
- **Task hygiene matters.** 858 of 1,127 Hub candidates passed `openenv validate`: oracle reaches max reward, doing nothing scores lower, canaries do not beat the floor, replay is deterministic. Wrong-answer controls caught a Terminal-Bench 2.1 verifier that accepted known-wrong answers. A difficulty screen keeps only tasks the base model solves sometimes (171 of 442 scored), because GRPO gets no signal from always/never tasks.
- **In-harness gains.** On SWE-bench Pro (hard 51), pi goes from 39.2% to 64.7% (15 newly solved vs 2 lost), hermes 29.4%→43.1%, opencode 35.3%→51.0%. On Terminal-Bench 2.1: pi +16.3, hermes +14.1, opencode +6.0 points (+13.6 on the 66 tasks not used to pick its checkpoint).
- **Merging.** The LoRAs are concatenated along rank (96 = 3×32). Weight ½ beats both the average (⅓) and the plain sum (1), which over-shortens agents to 13 tool calls/task. With thinking on, the super-adapter beats the thinking base model on 5 of 6 harness–benchmark pairs (mean 55.5%→63.5%).
- **Transfer is partial.** The pi adapter run under OpenCode matches OpenCode's own specialist on Terminal-Bench 2.1 and keeps about two-thirds of Hermes's gain. On out-of-distribution AutomationBench with its own agent loop, every adapter stays within noise of the base model.

## Caveats

This is a vendor blog post with public trajectories and model cards, not a peer-reviewed paper; read on the day of release. Results cover one model family (Qwen3.8-27B) and agentic-coding tasks. The authors flag "reasoning leakage": in non-thinking mode the adapted model writes short reasoning-like text before tool calls, so part of the gain may come from smuggling thinking back in. The ½ merge weight was chosen on Terminal-Bench 2.1, so super-adapter Terminal-Bench numbers are slightly optimistic. Harness defaults differ (pi compacts context, the others do not), so scores are only comparable within a harness, not across harnesses.

## Links

- Blog post: https://huggingface.co/blog/harness-adapters-at-scale
- Blog source (Markdown): https://github.com/huggingface/blog/blob/main/harness-adapters-at-scale.md
- Adapters collection: https://huggingface.co/collections/harness-hub/qwen38-27b-harness-adapters
- Super-adapter model card: https://huggingface.co/harness-hub/Qwen3.8-27B-super-adapter
- Task dataset: https://huggingface.co/datasets/harness-hub/harness-adapters
- Agent Lightning v1.0 (cited): https://arxiv.org/abs/2608.17528
