---
title: "Language Model Harnesses can be Compositional Generalizers"
authors:
  - "Alex L. Zhang"
  - "Souradip Chakraborty"
  - "Omar Khattab"
year: 2026
venue: "arXiv preprint (cs.CL)"
arxiv: "2611.28298"
doi: null
source: "https://arxiv.org/abs/2611.28298"
version_reviewed: "v1"
topics:
  - "harness-engineering"
  - "continual-agent-skills"
  - "agentic-llm-serving"
seed_rank: 2706
seed_batch: "frontier-2026-11-24"
reviewed: "2026-11-24"
pool: "agents"
relevance_score: 8
see:
  - 001-swe-agent-agent-computer-interfaces-enable-automated-softwar
  - 007-react-synergizing-reasoning-and-acting-in-language-models
  - 013-attention-is-all-you-need
  - 084-swe-bench-can-language-models-resolve-real-world-github-issu
  - 086-toolformer-language-models-can-teach-themselves-to-use-tools
  - 841-mapreduce-simplified-data-processing-on-large-cluster
  - 977-deepseekmath-pushing-limits-of-mathematical-reasoning
cites:
  - title: "Language Model Harnesses can be Compositional Generalizers"
    url: "https://arxiv.org/abs/2611.28298"
    year: 2026
    arxiv: "2611.28298"
    doi: null
  - title: "Recursive Language Models"
    url: "https://arxiv.org/abs/2512.24601"
    year: 2025
    arxiv: "2512.24601"
    doi: null
  - title: "Recursive Agent Optimization"
    url: "https://arxiv.org/abs/2605.06639"
    year: 2026
    arxiv: "2605.06639"
    doi: null
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2022
    arxiv: "2210.03629"
    doi: null
  - title: "Executable Code Actions Elicit Better LLM Agents"
    url: "https://arxiv.org/abs/2402.01030"
    year: 2024
    arxiv: "2402.01030"
    doi: null
---

# Language Model Harnesses can be Compositional Generalizers

## One-sentence takeaway

Harnesses that manage context programmatically, like the Recursive Language Model (RLM), can learn under RL to decompose tasks so each LM call sees a "locally in-distribution" input; trained only on short tasks they generalize to tasks 2–64× longer, transfer strategies across domains, and a surrogate-trained RLM-27B improves Qwen3.8-27B in the same harness by 26.9% on hard long-context suites with about 2× fewer inference tokens.

## Why it matters here

This is a sharp model-vs-harness claim (see `summaries/02-model-or-harness.md`): the harness, not the network, can carry compositional generalization if it shapes what each LM call sees. ReAct-style "trajectory-as-a-prompt" harnesses force the root model to generalize over an ever-growing context; RLM-style harnesses keep every call short and familiar. For practice loops, "surrogate harness training" is the useful recipe: train a specific call inside the harness on cheap synthetic environments with fake tool and sub-calls instead of full expensive rollouts. For serving, short, regular sub-calls with stable prefixes are friendlier to caching than one long growing trajectory.

## Key ideas

- **Locally in-distribution (LID).** A harness generalizes compositionally if, on an unseen task, each LM call's input looks like something the model can already solve; the root learns orchestration, and sub-calls reuse existing skills.
- **Length generalization.** Trained on short tasks (e.g., MRCRv2 at 32K–64K tokens, 2 needles), evaluated far longer (2M–4M tokens, 8 needles: 64×); also GraphWalks, LongBenchPro, OOLONG, OOLONG-Pairs at 2–8×. RLM generalizes while the base LM improves less. RL loss is applied only to root trajectories (as in Recursive Agent Optimization).
- **Strategy generalization.** Training on one domain (e.g., OOLONG trec-coarse) transfers to another with similar structure (spam questions); RLM transfers best across the three tested pairs. CodeAct and Pi harnesses show similar gains on programmatic tasks but struggle when sub-tasks are reasoning-dense.
- **Surrogate harness training.** RLM-27B is trained mostly on easier synthetic environments, some with fake tools/sub-calls, and evaluated on held-out suites (LongReason, OOLONG-Real, OBLIQ-Bench, CorpusQA, LooGLE-v2, BrowseComp-Plus, ExpertLongBench, CTC-Bench): +26.9% average with ~2× fewer tokens.
- **Recursion composes.** Harnesses can compose learned decompositions through recursive sub-harness calls (tail-recursion strategies learned via surrogate training).

## Caveats

Read from the abstract, introduction, experiment tables and conclusion of the v1 HTML (63 pages with appendix; appendices not read). Results are on long-context reading and aggregation tasks where decomposition is natural; the authors note that CodeAct, Pi and a plain LM + REPL harness struggle when sub-tasks require dense reasoning or dense context processing. RL training details and compute are in appendices I did not check. Two authors (Zhang, Khattab) also wrote the original RLM paper, so harness design and evaluation are not independent.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.28298
- PDF: https://arxiv.org/pdf/2611.28298
- HTML: https://arxiv.org/html/2611.28298v1
- Recursive Language Models: https://arxiv.org/abs/2512.24601
