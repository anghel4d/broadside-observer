---
title: "Lessons Outlive Their Failures: A Case Study of Rules for AI Coding Agents"
authors:
  - "Hassan Hassanzadeh Aliabadi"
year: 2026
venue: "arXiv preprint (cs.SE)"
arxiv: "2610.32578"
doi: null
source: "https://arxiv.org/abs/2610.32578"
topics:
  - "agent-failure-localization"
  - "continual-agent-skills"
seed_rank: 2429
seed_batch: "frontier-2026-10-26"
reviewed: "2026-10-26"
pool: "agents"
relevance_score: 9
cites:
  - title: "Lessons Outlive Their Failures: A Case Study of Rules for AI Coding Agents"
    url: "https://arxiv.org/abs/2610.32578"
    year: 2026
    arxiv: "2610.32578"
    doi: null
see:
  - 2406-stale-instruction-files-override-the-code-in-coding-agents
---

# Lessons Outlive Their Failures: A Case Study of Rules for AI Coding Agents

## One-sentence takeaway

A six-week ledger of 118 agent failures in one plain-markdown repository edited daily by three agent tools under one shared rule set shows that documentation drift is the largest failure class (48 of 118), a single LLM audit finds only about half of known drift, and replaying old failures on a current model shows most prose lessons no longer matter while the drift failure recurs in every unguarded run and its pre-commit lint stops it every time.

## Why it matters here

This is close to a portrait of how this fleet runs: shared rule files, skills, hooks, and a standing rule to prefer mechanical checks over more text. It gives evidence for both halves of that rule: prose lessons go stale as models improve, while structural drift such as stale counts keeps coming back and only code catches it. The paper's recommendation to record which model version required each lesson and to periodically replay and retire rules maps directly onto skill and AGENTS.md maintenance here.

## Key ideas

- **Ledger.** 118 failures, coded in two LLM passes with disagreements resolved by the author, plus daily measurements of how much rule text the harness holds.
- **Drift dominates.** Stale documentation was 40.7% of failures; 35 of the 48 were found on one audit day, and drift came back after each new check.
- **Audit recall.** Against 47 known stale statements and 20 planted errors, a single Claude Sonnet 5.5 audit run found about 50% of known drift, with at least 93% of its findings correct.
- **Replay.** Five past failures replayed in isolated git clones, three runs per condition: in three of the four completed tasks the failure did not recur with or without the fix; only the stale-count failure recurred without its check.
- **Prose versus checks.** An em-dash lint rejected the one em-dash an older model drafted; a written rule on run-time estimates did not change Sonnet 4.5's overestimates.
- **Recommendation.** Tag each lesson with the model version that needed it, enforce structural invariants in executable code, and replay and retire obsolete prompt rules.

## Caveats

One repository, one author, three runs per condition; the author labels it exploratory. The raw data are private, with an anonymised ledger available on request. Replay covers only five failures, and the model versions differ across parts of the study.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.32578
- PDF: https://arxiv.org/pdf/2610.32578
