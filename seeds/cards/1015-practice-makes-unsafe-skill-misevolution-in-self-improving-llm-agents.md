---
title: "Practice Makes Unsafe: Skill Misevolution in Self-Improving LLM Agents"
authors: ["Xutao Mao", "Liangjie Zhao", "Xiang Zheng", "Cong Wang"]
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2608.12851"
doi: null
source: "https://arxiv.org/abs/2608.12851"
topics: [continual-agent-skills, harness]
seed_rank: 1015
seed_batch: "frontier-2026-08-14"
reviewed: "2026-08-14"
pool: "agents"
relevance_score: 9
lineage: continual-skills
cites:
  - title: "Your Agent May Misevolve: Emergent Risks in Self-Evolving LLM Agents"
    url: "https://arxiv.org/abs/2509.26354"
    year: 2025
    arxiv: "2509.26354"
    doi: null
  - title: "AutoSkill: Experience-Driven Lifelong Learning via Skill Self-Evolution"
    url: "https://arxiv.org/abs/2603.01145"
    year: 2026
    arxiv: "2603.01145"
    doi: null
  - title: "EvoSkill: Automated Skill Discovery for Multi-Agent Systems"
    url: "https://arxiv.org/abs/2603.02766"
    year: 2026
    arxiv: "2603.02766"
    doi: null
  - title: "Voyager: An Open-Ended Embodied Agent with Large Language Models"
    url: "https://arxiv.org/abs/2305.16291"
    year: 2023
    arxiv: "2305.16291"
    doi: null
see:
  - "006-voyager-an-open-ended-embodied-agent-with-large-language-mod"
  - "074-skillfoundry-building-self-evolving-agent-skill-libraries-fr"
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
---

# Practice Makes Unsafe: Skill Misevolution in Self-Improving LLM Agents

## One-sentence takeaway

When evolution optimizes task success, an unsafe trajectory becomes a reusable SKILL.md; all 21 evolved configs author unsafe artifacts, and three malicious tasks more than double later carryover ASR.

## Why it matters here

Continual skills are a standing Broadside topic, and GRID COMMAND / Anoptic agent loops will distill runbooks from traces. This paper splits the lifecycle — authoring, retrieval, clean-session replay — so a terminal ASR no longer hides a dirty library. SafeEvolve (delete-only repair + lineage-risk retrieval + retirement) is the governance shape we would want around any skill store: inspectable, attributable, revocable.

## Key ideas

- SkillMisevo-Gym versions the skill library across Claude Code / Codex / Hermes / OpenClaw while resetting conversation, FS, and native memory; only SKILL.md crosses the final reset.
- SkillMisevo-Bench: 25 frozen episodes × 21 tasks (M/B/P), nine lifecycle metrics. All 21 evolved configs author unsafe artifacts; only 15 reach fresh-session harm — attenuation is the signature.
- Dose: 0 → 3 malicious tasks raises carryover ASR 16.0% → 35.3%; mixed benign updates do not reliably erase the shortcut.
- SafeEvolve wraps any evolution method: critic-localized subtractive repair, reuse-risk attribution, safety-aware retirement. URR −26.7 pp, C-ASR −17.3 pp, benign utility −0.4 pp.

## Caveats


## Links

- arXiv: [2608.12851](https://arxiv.org/abs/2608.12851)
- PDF: https://arxiv.org/pdf/2608.12851
- Code: https://github.com/henrymao2004/misevolve
