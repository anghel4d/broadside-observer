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
see:
  - "007-react-synergizing-reasoning-and-acting-in-language-models"
  - "081-reflexion-language-agents-with-verbal-reinforcement-learning"
---

# Track, Rank, Crack: Epistemic Working Memory Scales Multi-Hop Reasoning in Language Agents

## One-sentence takeaway

SLEUTH makes investigative state explicit as Confirmed Facts, ranked Active Hypotheses, and Open Questions so multi-hop agents do not bury early discoveries under later retrievals.

## Why it matters here

Broadside multi-hop digest queries and ano research loops fail the same way: the working set lives only implicitly in the window. SLEUTH is structured epistemic state, not a bigger context.

## Key ideas

- ReAct-style agents degrade as chains lengthen even when each hop is easy; the cause is context dilution of confirmed / suspected / still-needed state.
- Confirmed Facts are grounded to sources; Active Hypotheses are ranked by evidence; Open Questions drive the next action.
- Gains grow with difficulty: +5 on HotpotQA to +11 on 4-hop chains, beating Reflexion without multiple episodes.
- Remaining errors are often evidence-sufficiency failures — the agent found the answer but will not commit. A commitment trigger helps only if structured state already exists.
- Enforcing protocol adherence on a weaker model recovers up to +19 on the hardest problems, isolating organization of reasoning over raw model size.

## Caveats

## Links

- arXiv: [2607.12267](https://arxiv.org/abs/2607.12267)
- PDF: https://arxiv.org/pdf/2607.12267
