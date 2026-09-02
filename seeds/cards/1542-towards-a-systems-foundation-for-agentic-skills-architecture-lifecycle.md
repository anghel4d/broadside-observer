---
title: "Towards a Systems Foundation for Agentic Skills: Architecture, Lifecycle, and Security"
authors:
  - "Sanket Badhe"
  - "Deep Shah"
  - "Priyanka Tiwari"
  - "Nehal Kathrotia"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2608.29596"
doi: null
source: "https://arxiv.org/abs/2608.29596"
topics:
  - "continual-agent-skills"
  - "agent-failure-localization"
seed_rank: 1542
seed_batch: "frontier-2026-09-02"
reviewed: "2026-09-02"
pool: "agents"
relevance_score: 10
lineage: agent-skills
cites:
  - title: "Voyager: An Open-Ended Embodied Agent with Large Language Models"
    url: "https://arxiv.org/abs/2305.16291"
    year: 2023
    arxiv: "2305.16291"
    doi: null
  - title: "DeepSeek Harness: Everything is a Plugin"
    url: "https://deepseek.com/harness/en/"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Contract-Centered Architecture for Scalable and Manageable Agentic Runtimes"
    url: "https://arxiv.org/abs/2608.27086"
    year: 2026
    arxiv: "2608.27086"
    doi: null
see:
  - "006-voyager-an-open-ended-embodied-agent-with-large-language-mod"
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "1116-skilleffect-checked-lowering-for-memory-bounded-agent-tools"
  - "1446-a-contract-centered-architecture-for-scalable-and-manag"
---
# Towards a Systems Foundation for Agentic Skills: Architecture, Lifecycle, and Security

## One-sentence takeaway

Agentic skills need a systems foundation — architecture, lifecycle, and security — as modular procedural artifacts that externalize execution knowledge beyond monolithic prompts.

## Why it matters here

Broadside treats skills as first-class (1446 Skill contract; 1116 SkillEffect). This paper supplies the missing systems vocabulary: architecture, lifecycle, security for reusable executable skills under long-horizon reliability and context pressure.

## Key ideas

- Monolithic prompts and stateless tool-calling fail to scale on long-horizon tasks.
- Agentic skills: modular procedural abstractions that externalize execution knowledge into reusable, executable, portable artifacts.
- Covers architecture, lifecycle, and security — not just a skill-library API sketch.
- Positions skills as systems objects beside the model and harness.

## Caveats

- Survey/foundation framing — adopt vocabulary, then test against Cordis plugins and GRID COMMAND NL-order skills.
- Security claims need adversarial eval before trusting skill install paths.
- Pair with Skill Following leftover 2609.00549 for actual-use metrics.

## Links

- arXiv: [2608.29596](https://arxiv.org/abs/2608.29596)
- PDF: https://arxiv.org/pdf/2608.29596
