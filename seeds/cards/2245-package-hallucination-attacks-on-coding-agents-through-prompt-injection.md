---
title: "Package Hallucination Attacks on Coding Agents through Prompt Injection in Rule Files"
authors:
  - "Yupu Wang"
  - "Zhengyuan Jiang"
  - "Reachal Wang"
  - "Neil Zhenqiang Gong"
year: 2026
venue: "arXiv"
arxiv: "2610.09264"
doi: null
source: "https://arxiv.org/abs/2610.09264"
topics:
  - "agent-failure-localization"
seed_rank: 2245
seed_batch: "frontier-2026-10-08"
reviewed: "2026-10-08"
pool: "agents"
relevance_score: 8
lineage: agent-supply-chain-security
cites:
  - title: "Package Hallucination Attacks on Coding Agents through Prompt Injection in Rule Files"
    url: "https://arxiv.org/abs/2610.09264"
    year: 2026
    arxiv: "2610.09264"
    doi: null
see:
  - "1767-authority-is-not-a-string-a-capability-scoped-harness-for-prompt"
  - "1608-a-blind-trust-the-bloody-thrust-when-attacker-controlled-hook-updates"
  - "1816-reflections-on-trusting-trust"
---

# Package Hallucination Attacks on Coding Agents through Prompt Injection in Rule Files

## One-sentence takeaway

Community-shared rule files such as AGENTS.md and .cursorrules are an injection channel: an evolutionary search (PackHallu) finds prompts that, hidden in a benign rule file, make coding agents swap real dependencies for attacker-controlled packages, and current prompt-injection detectors fail to flag them.

## Why it matters here

Every repo Broadside and the fleet touch carries agent rule files, and copying rule files from awesome-lists is common practice. This turns that habit into a software supply-chain risk on the same axis as Thompson's trusting-trust (1816) and attacker-controlled hooks (1608). The defensive takeaway for Broadside engagements is concrete: treat rule files as code under review, and pin or allow-list dependencies so an agent cannot silently introduce a new package.

## Key ideas

- **Attack.** Inject a malicious prompt into an otherwise benign rule file so the agent replaces a legitimate dependency with an attacker-controlled one while doing a normal task.
- **Optimiser.** PackHallu iteratively rewrites the injected prompt using trajectory-level feedback and LLM-guided mutations.
- **Breadth.** Evaluated on 3 coding benchmarks covering 10 widely used Python packages, 8 agent frameworks and 13 backbone LLMs; it beats heuristic and optimisation-based prompt-injection baselines and transfers from a surrogate agent to others.
- **Detection gap.** State-of-the-art prompt-injection detectors do not reliably identify the malicious rule files.

## Caveats

This is an attack paper; it shows feasibility and success rates but proposes no defence. Effectiveness depends on agents installing packages without human review or lockfiles; teams that pin dependencies and review diffs reduce the risk. Exact rates per framework were not checked for this card.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.09264
- PDF: https://arxiv.org/pdf/2610.09264
