---
title: "Which Failure Does an Intervention Repair? When Agent Interventions Help, and Where Self-Evolving Skills Stall"
authors:
  - "Zihan Jin"
  - "Gaoyuan Du"
  - "Jiate Li"
  - "Dongze Ye"
  - "Shawn Li"
  - "Yue Zhao"
  - "Defu Cao"
year: 2026
venue: "arXiv preprint (cs.LG)"
arxiv: "2611.29290"
doi: null
source: "https://arxiv.org/abs/2611.29290"
version_reviewed: "v1"
topics:
  - "harness-engineering"
  - "continual-agent-skills"
  - "agent-failure-localization"
seed_rank: 2705
seed_batch: "frontier-2026-11-24"
reviewed: "2026-11-24"
pool: "agents"
relevance_score: 8
see:
  - 001-swe-agent-agent-computer-interfaces-enable-automated-softwar
  - 006-voyager-an-open-ended-embodied-agent-with-large-language-mod
  - 007-react-synergizing-reasoning-and-acting-in-language-models
  - 081-reflexion-language-agents-with-verbal-reinforcement-learning
  - 085-self-rag-learning-to-retrieve-generate-and-critique-through-
  - 086-toolformer-language-models-can-teach-themselves-to-use-tools
cites:
  - title: "Which Failure Does an Intervention Repair? When Agent Interventions Help, and Where Self-Evolving Skills Stall"
    url: "https://arxiv.org/abs/2611.29290"
    year: 2026
    arxiv: "2611.29290"
    doi: null
  - title: "Voyager: An Open-Ended Embodied Agent with Large Language Models"
    url: "https://arxiv.org/abs/2305.16291"
    year: 2023
    arxiv: "2305.16291"
    doi: null
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2022
    arxiv: "2210.03629"
    doi: null
  - title: "Reflexion: Language Agents with Verbal Reinforcement Learning"
    url: "https://arxiv.org/abs/2303.11366"
    year: 2023
    arxiv: "2303.11366"
    doi: null
---

# Which Failure Does an Intervention Repair? When Agent Interventions Help, and Where Self-Evolving Skills Stall

## One-sentence takeaway

A matched factorial study (9 benchmarks × 4 models × 4 skill conditions × 4 harness levels × 3 budgets, three runs per cell, ~0.9M trajectories) finds that agent interventions interact rather than add: a harness can absorb a skill's gain, rescue a failure the skill causes, or leave it intact, and skills evolved from the agent's own experience rarely beat a short human-written skill and can break outright on another model.

## Why it matters here

This is the most systematic model × harness × skill ablation yet, and it answers the question Broadside's model-vs-harness and continual-skills notes keep circling: which layer should a fix go in? The answer is diagnostic. Missing knowledge goes to a stronger model or retrieved facts, execution errors go to a richer harness, and feedback mostly repairs failures that leave a visible error signal. The opening case is a warning for skill libraries: a skill optimized on Qwen3.5-9B, moved unchanged to GPT-5.6-sol, takes Hotpot Context from 62.0% to 13.6%, because the skill makes the model fill its answer field with a worksheet, even though the right answer is still present in 74.1% of responses. Skills need per-model provenance and re-validation.

## Key ideas

- **Design.** 1,872 test instances from nine benchmarks chosen for different bottlenecks: SimpleQA (missing knowledge), SQuAD (answer contract), Hotpot Context/FullWiki, BigCodeBench-Hard, two SOP benchmarks, SpreadsheetBench, LiveMathematicianBench. Models: Qwen3.5-9B, Sonnet 4.6, Sonnet 5, GPT-5.6-sol. Skills: none, Direct (one call), SkillOpt (optimized on scored rollouts), Trace2Skill (distilled from trajectories), all built by Qwen3.5-9B and frozen.
- **Harness ladder.** H0 minimal prompt → H1 standardized answer/tool interface → H2 execution feedback with up to three retries → H3 one outcome-blind revision. Every comparison changes one axis on the same instances.
- **Interaction, not addition.** An 18-word SQuAD skill adds 66.2 points under H0 and 2.2 under H2. No configuration is best everywhere.
- **Feedback is not recovery.** H2 rescues failures with a visible error signal much more often on QA tasks, but only modestly on Spreadsheet (21.5% vs 17.4%).
- **Self-evolution stalls.** Experience-evolved skills can learn dataset shortcuts, break across models, and cannot supply missing facts; on SimpleQA, retrieved passages help where self-built fact skills barely do.
- **Choosing.** Per-task routing or escalation does not beat a fixed configuration; a per-benchmark switch chosen from a 20-task labelled pilot beats always using the stronger model, at lower cost.

## Caveats

Read from the abstract, introduction and design section of the v1 HTML; numbers are the authors'. Skills are built mostly by a 9B model (a stronger constructor is tested on two benchmarks only), which may understate what self-evolution can do with a frontier constructor. Benchmarks are mostly QA and short tasks, not long agentic coding sessions. Failure labels are rule- and log-based and validated on 200 samples; LiveMath is excluded from failure-conditioned analyses because the independent judge did not reproduce its labels.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.29290
- PDF: https://arxiv.org/pdf/2611.29290
- HTML: https://arxiv.org/html/2611.29290v1
- Code: https://github.com/Zihan-Zoe/same-skill-different-harness
- Data: https://huggingface.co/datasets/Zihan-Zoe/same-skill-different-harness
