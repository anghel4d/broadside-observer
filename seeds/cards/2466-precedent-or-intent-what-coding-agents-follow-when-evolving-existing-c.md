---
title: "Precedent or Intent? What Coding Agents Follow When Evolving Existing Code"
authors:
  - "Haichao Zhu"
  - "Geyang Xu"
  - "Zhaorui Yang"
  - "Jiyuan Wang"
  - "Qian Zhang"
year: 2026
venue: "arXiv preprint (cs.AI, cs.SE)"
arxiv: "2610.38244"
doi: null
source: "https://arxiv.org/abs/2610.38244"
topics:
  - "agent-failure-localization"
  - "continual-agent-skills"
seed_rank: 2466
seed_batch: "frontier-2026-10-30"
reviewed: "2026-10-30"
pool: "agents"
relevance_score: 8
see:
  - 1822-harness-or-model-isolating-the-harness-effect-in-agentic-coding-with
  - 2430-knowing-when-to-stop-the-evidence-action-gap-in-coding-agents
cites:
  - title: "Precedent or Intent? What Coding Agents Follow When Evolving Existing Code"
    url: "https://arxiv.org/abs/2610.38244"
    year: 2026
    arxiv: "2610.38244"
    doi: null
---

# Precedent or Intent? What Coding Agents Follow When Evolving Existing Code

## One-sentence takeaway

In 5,625 controlled trials, coding agents followed existing repository code over their own defaults in 359 of 360 conflicts, the placement of the example files mattered more than their number, and only a written priority rule reliably made them follow new instructions instead (117 of 120 versus 0 of 120 in real repos).

## Why it matters here

This is the empirical case for encoding lessons as written rules loaded by the harness rather than hoping agents pick them up from code: the repo itself is the strongest prompt, for better or worse. It also says where a precedent lives (local files versus sibling resources) decides whether an agent copies it, which matters for how Anoptic and ano code is laid out for agent work.

## Key ideas

- **Three competing signals.** Agents' default choices, repository precedent and explicit task instructions are isolated in purpose-built repos, then checked in four open-source repos across three languages.
- **Shared defaults, stronger precedent.** Four agents share the same default implementation choices but almost always switch to whatever the repo already does.
- **Location over count.** Three supporting local files give 96% adoption versus 4% for sibling-resource files; moving files alone shifts adoption from 0% to 100% at a fixed example count.
- **Rules beat examples for change.** When new intent conflicts with old code, written priority rules succeed far more often than code examples (59/60 versus 38/60 joint successes).
- **Traceability.** The authors argue for keeping design rationale and priorities, not just the code, so future changes know what should win.

## Caveats

Six implementation pairs and four agents; the dramatic open-source result comes from a small number of repos. Purpose-built repos make conflicts clean in a way real codebases rarely are.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.38244
- PDF: https://arxiv.org/pdf/2610.38244
