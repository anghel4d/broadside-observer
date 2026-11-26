---
title: "What Does Skill Lift Actually Measure? A Source-Code-Level Audit and Noise-Aware Reanalysis of SkillsBench"
authors:
  - "Haozhe Zhang"
  - "Zhen Long"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.33943"
doi: null
source: "https://arxiv.org/abs/2611.33943"
version_reviewed: "v1"
topics:
  - "continual-agent-skills"
  - "agent-failure-localization"
  - "harness-engineering"
  - "evaluation-noise"
seed_rank: 2723
seed_batch: "frontier-2026-11-26"
reviewed: "2026-11-26"
pool: "agents"
relevance_score: 8
see:
  - 2286-lost-in-implicit-routing-how-llm-agents-fail-to-load-relevant-skills-at
  - 2432-beyond-gain-measuring-skill-internalization-for-agent-skill-retirement
  - 2464-when-skills-tell-agents-not-to-ask-a-large-scale-study-of-oversight-di
  - 084-swe-bench-can-language-models-resolve-real-world-github-issu
  - 193-openhands-an-open-platform-for-ai-software-developers-as-gen
cites:
  - title: "What Does Skill Lift Actually Measure? A Source-Code-Level Audit and Noise-Aware Reanalysis of SkillsBench"
    url: "https://arxiv.org/abs/2611.33943"
    year: 2026
    arxiv: "2611.33943"
    doi: null
  - title: "SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks"
    url: "https://arxiv.org/abs/2602.12670"
    year: 2026
    arxiv: "2602.12670"
    doi: null
  - title: "Beyond Gain: Measuring Skill Internalization for Agent Skill Retirement"
    url: "https://arxiv.org/abs/2610.32322"
    year: 2026
    arxiv: "2610.32322"
    doi: null
  - title: "Lost in Implicit Routing: How LLM Agents Fail to Load Relevant Skills at Scale"
    url: "https://arxiv.org/abs/2610.18522"
    year: 2026
    arxiv: "2610.18522"
    doi: null
  - title: "When Skills Tell Agents Not to Ask: A Large-Scale Study of Oversight Directives in Agent Skills"
    url: "https://arxiv.org/abs/2610.37734"
    year: 2026
    arxiv: "2610.37734"
    doi: null
  - title: "Equipping agents for the real world with Agent Skills (Anthropic Engineering)"
    url: "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills"
    year: 2025
    arxiv: null
    doi: null
---

# What Does Skill Lift Actually Measure? A Source-Code-Level Audit and Noise-Aware Reanalysis of SkillsBench

## One-sentence takeaway

A code-level audit of SkillsBench and a reanalysis of 7,554 public trials (1,421 paired configuration–task cells) finds that per-task "skills hurt" results are indistinguishable from run-sampling noise: no task-level loss survives multiple-testing correction, and 58% of cells could not show a decrease at all. Some of the large lift comes from graders that depend on information only the skill supplies (74.6 pp mean lift on the three affected tasks), and one harness silently injected 48 built-in skills.

## Why it matters here

Skill gating and retirement work (including cards 2432 and 2286) builds on per-task skill gains. This paper shows that signal is mostly noise at three runs per condition, and that a baseline-conditioned gate still "improves" 4–7 pp after condition labels are shuffled. For Broadside's continual-skills and model-vs-harness threads, the lesson is that before keeping or retiring a skill you need paired runs, noise floors, held-out evaluation, and an audit of what the harness itself injects.

## Key ideas

- **Source-code audit.** Two controlled-verified cases where the grader requires something stated only in the skill, plus one operational-definition gap. Four tasks ship placeholder skill directories. One execution harness adds 48 built-in skills in most runs.
- **Lift is real on average.** Overall mean lift is 18.7 pp (SkillsBench reported about 16.6 pp), but part of it is grader dependence rather than procedural help.
- **Losses are not established.** With at most three runs per condition per cell, no task-level reduction is significant after correction. Arithmetically, 58% of cells could not have shown a decrease.
- **Gating is fooled by noise.** A gate conditioned on the skill-free score gains 2–3 pp in-log, and 4–7 pp even after condition labels are shuffled. On held-out runs the gain is not significant.
- The audit ledger and analysis scripts are published.

## Caveats

I read the abstract and the section outline of the v1 HTML, not each audit case in detail. This is a reanalysis of public SkillsBench logs, limited by their run counts. It does not show that skills never hurt, only that the existing data cannot show it. Two authors, unreviewed preprint.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.33943
- PDF: https://arxiv.org/pdf/2611.33943
- HTML: https://arxiv.org/html/2611.33943v1
