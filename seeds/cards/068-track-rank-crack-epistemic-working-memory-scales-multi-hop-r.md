---
title: "Track, Rank, Crack: Epistemic Working Memory Scales Multi-Hop Reasoning in Language Agents"
authors:
  - "Ning Liu"
year: 2026
venue: "arXiv:cs.LG"
arxiv: "2607.12267"
doi: null
source: "https://arxiv.org/abs/2607.12267"
topics:
  - tool-use
  - react
  - provenance
  - rag
  - agent-memory
  - reasoning
  - planning
seed_rank: 68
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents"
    url: "https://arxiv.org/abs/2605.20616"
    year: 2026
    arxiv: "2605.20616"
    doi: null
  - title: "Jailbreaks on Vision Language Model via Multimodal Reasoning"
    url: "https://arxiv.org/abs/2601.22398"
    year: 2026
    arxiv: "2601.22398"
    doi: null
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2022
    arxiv: "2210.03629"
    doi: null
see:
  - "007-react-synergizing-reasoning-and-acting-in-language-models"
---

# Track, Rank, Crack: Epistemic Working Memory Scales Multi-Hop Reasoning in Language Agents

## One-sentence takeaway

Language agents that interleave reasoning and tool use degrade sharply as reasoning chains lengthen, even when each individual step is easy.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state; retrieval+evidence trails matter for Broadside provenance-rich digests (Track, Rank, Crack: Epistemic Working Memory Scales Multi-Hop Reasoning in Language Agents)

## Key ideas

- Language agents that interleave reasoning and tool use degrade sharply as reasoning chains lengthen, even when each individual step is easy.
- We trace this to context dilution: an agent's investigative state (what it has confirmed, what it suspects, and what it still needs) lives only implicitly in a growing context window, where early discoveries are buried under later retrievals.
- We introduce SLEUTH, which makes this state explicit and actionable through a structured epistemic working memory: the agent maintains Confirmed Facts grounded to sources, Active Hypotheses ranked by evidence, and Open Questions that directly drive its next action.
- Across five multi-hop benchmarks and five established baselines, SLEUTH's advantage grows with difficulty, from +5 points on HotpotQA to +11 on 4-hop

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2607.12267](https://arxiv.org/abs/2607.12267)
- URL: https://arxiv.org/abs/2607.12267
