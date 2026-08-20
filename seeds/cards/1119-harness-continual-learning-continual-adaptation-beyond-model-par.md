---
title: "Harness Continual Learning: Continual Adaptation Beyond Model Parameters"
authors:
  - "Borui Kang"
  - "Jinrui Gu"
  - "Junhan Lv"
  - "Wenbin Li"
  - "Lei Wang"
  - "Yang Gao"
year: 2026
venue: "arXiv:cs.LG"
arxiv: "2608.19013"
doi: null
source: "https://arxiv.org/abs/2608.19013"
topics:
  - "continual-agent-skills"
  - "agent-failure-localization"
seed_rank: 1119
seed_batch: "frontier-2026-08-20"
reviewed: "2026-08-20"
pool: "agents"
relevance_score: 9
lineage: model-harness
cites:
  - title: "HELIX: Model-Harness Co-evolution for Recursive Self-Improvement"
    url: "https://arxiv.org/abs/2608.13951"
    year: 2026
    arxiv: "2608.13951"
    doi: null
  - title: "DeepSeek Harness: Everything is a Plugin"
    url: "https://github.com/deepseek-ai/deepseek-harness"
    year: 2026
    arxiv: null
    doi: null
  - title: "Practice Makes Unsafe: Skill Misevolution in Self-Improving LLM Agents"
    url: "https://arxiv.org/abs/2608.12851"
    year: 2026
    arxiv: "2608.12851"
    doi: null
  - title: "LoopsBench: From Harness Engineering to Loop Engineering in Coding Agents"
    url: "https://arxiv.org/abs/2608.00267"
    year: 2026
    arxiv: "2608.00267"
    doi: null
see:
  - "1079-helix-model-harness-co-evolution-for-recursive-self-improvement"
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "1015-practice-makes-unsafe-skill-misevolution-in-self-improving-llm-agents"
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
  - "1017-total-recall-at-what-cost-benchmarking-the-serving-cost-of-agentic-memory"
---

# Harness Continual Learning: Continual Adaptation Beyond Model Parameters

## One-sentence takeaway

Freeze the model; the thing that forgets is the harness — prompts, memories, tools, skills, routing — so continual learning becomes a guarded commit of harness state, not another LoRA.

## Why it matters here

Tuesday kept HELIX (1079): model *and* harness co-evolve. DeepSeek Harness (1050) is the plugin substrate. Skill misevolution (1015) already showed that a self-improving skill library can get *worse*. HCL is the complementary object: the foundation model stays frozen and the harness is the continual-learning state. That is how Broadside should think about radar-loop memory and GRID COMMAND standing rules — you do not finetune the LLM every time a trigger fires; you propose a harness patch and a Continual Evaluator refuses it if historical behavior regresses. Guarded harness evolution is the HELIX commit rule with the model held still.

## Key ideas

- Harness Continual Learning (HCL): Task Interface, Experience Memory, Capability Map, Adaptive Router evolve around a frozen foundation model. Forgetting is defined at harness level.
- Split update generation from state commitment. Continual Optimizer proposes a candidate harness from post-execution feedback; Continual Evaluator commits only after current improvement, historical retention, and validity checks.
- A harness update can destroy previously reliable behavior even with the weights frozen — this is the actual operational failure mode of plugin/skill/memory stacks.
- Reported relative gains >10% on textual reasoning, multimodal perception, and open-world interaction versus corresponding baselines.

## Caveats

- Not a serving paper. Does not tell you how to page KV or restore it (1118).
- Evaluator-gated commit can stall if the retention check is conservative; the paper does not characterize that veto rate in production.
- Does not remint HELIX: HELIX trains both sides; HCL freezes the model on purpose.

## Links

- arXiv: [2608.19013](https://arxiv.org/abs/2608.19013)
