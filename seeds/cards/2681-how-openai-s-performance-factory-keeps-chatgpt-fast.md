---
title: "How OpenAI's Performance Factory keeps ChatGPT fast"
authors:
  - "Okay Zed"
  - "Cyrus Forbes"
year: 2026
venue: "OpenAI engineering blog, 19 Nov 2026"
arxiv: null
doi: null
source: "https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast"
version_reviewed: "web 2026-11-19"
topics:
  - "continual-agent-skills"
  - "provenance-first-agent-memory"
  - "agent-failure-localization"
  - "coding-agents"
seed_rank: 2681
seed_batch: "frontier-2026-11-22"
reviewed: "2026-11-22"
pool: "agents"
relevance_score: 8
cites:
  - title: "How OpenAI's Performance Factory keeps ChatGPT fast"
    url: "https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast"
    year: 2026
    arxiv: null
    doi: null
---

# How OpenAI's Performance Factory keeps ChatGPT fast

## One-sentence takeaway

OpenAI runs regression response for ChatGPT as an "agent factory". An alert opens a task, Codex turns move it through needs-investigation → root-caused → fix-proposed → resolved, a separate adversarial Codex session tries to disprove each diagnosis, and an engineer only reviews the PR. Over just over three months the system ran 1,700+ investigations and root-caused 600+.

## Why it matters here

This is a production account of three Broadside threads working together. Skills: the team's investigation playbook became a shared `perf-forensics` skill, tested with evals built from past regressions. That is rehearsal on historical incidents. Provenance: the task record holds status and findings outside any single agent's context, so other agents or humans can resume. Control flow: agents subscribe to events (PR comments, failed CI) and go dormant instead of spinning. The progression it describes (manual → Codex as partner → reusable skills → workflows) is a useful maturity ladder for our own agent loops. The adversarial-review step is a cheap, generalisable defence against stopping at the first plausible explanation.

## Key ideas

- **Workflow as a state machine.** Engineers define workflows and per-state instructions. A dispatch loop starts a Codex turn for the task's current state, and the agent records progress and advances the state.
- **Cloud Codex with real tools.** Turns run inside OpenAI's network with access to repos, metrics, logs, traces, CPU profiles and memory snapshots, under a service identity that scopes permissions and attributes actions.
- **Diagnosis playbook.** Find when the metric first worsened (often hours before the alert), compare request cohorts (slower vs more slow requests), check deploys and feature flags, then read code and confirm with traces.
- **Adversarial review.** A second Codex session re-tests assumptions and counterfactuals. In one case it reopened an investigation because the blamed service had already recovered while failures continued. In a manual review of 100 root-cause suggestions, 70% were graded accurate.
- **Closing the loop.** Every task gets a scannable report (time series, flame graphs, traces). After deploy, an agent verifies recovery to baseline before resolving. Next steps: proactive discovery from profiles and rightsizing skills.

## Caveats

Company engineering blog: no ablations, no breakdown of which regressions it misses, and only one accuracy figure (70% on 100 manually graded root causes). Fixes are still merged by humans. Posted 19 Nov, inside the previous frontier window but not screened then (that run read only HN-surfaced lab posts), so it is carded here as gap-fill.

## Links

- Post: https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast
- Related OpenAI engineering post, Inside the Codex sandbox (18 Nov 2026): https://openai.com/index/inside-the-codex-sandbox
