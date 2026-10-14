---
title: "Lost in Implicit Routing: How LLM Agents Fail to Load Relevant Skills at Scale"
authors:
  - "Jinlin Liu"
  - "Wei Chen"
  - "Xiaojin Zhang"
year: 2026
venue: "arXiv"
arxiv: "2610.18522"
doi: null
source: "https://arxiv.org/abs/2610.18522"
topics:
  - "continual-agent-skills"
  - "agent-failure-localization"
seed_rank: 2286
seed_batch: "frontier-2026-10-14"
reviewed: "2026-10-14"
pool: "agents"
relevance_score: 8
lineage: agent-harness-runtime
cites:
  - title: "Lost in Implicit Routing: How LLM Agents Fail to Load Relevant Skills at Scale"
    url: "https://arxiv.org/abs/2610.18522"
    year: 2026
    arxiv: "2610.18522"
    doi: null
see: []
---

# Lost in Implicit Routing: How LLM Agents Fail to Load Relevant Skills at Scale

## One-sentence takeaway

Skill libraries do not scale by implicit routing: adding 1,000 irrelevant skills to fixed SkillsBench tasks drops loaded-skill recall from 73.6% to 27.4% and raises the zero-load rate from 9.3% to 51.6%, while explicit preselection from the same library keeps 73.9% recall.

## Why it matters here

Every Broadside agent leans on a growing skill/workflow catalogue loaded by description; this paper says the failure mode is agents silently loading *nothing*, driven by interference from other skills' descriptions — a strong argument for a preselection/retrieval step rather than dumping the whole catalogue into the prompt.

## Key ideas

- **Controlled scaling.** Hold SkillsBench instruction, workspace, verifier and golden skills fixed; vary only the number of irrelevant skills installed; success is the executable verifier, no LLM judge.
- **Skill routing collapse.** Agents load fewer or no skills as the library grows, though the relevant skills remain available; loading plausible alternatives is too rare to explain the drop.
- **Cause.** Masking only the irrelevant skills' descriptions largely restores loading — semantic interference from descriptions plus instruction interference when skill choice competes with task execution.
- **Planning prompts are not enough.** Explicitly asking agents to plan skill use still underperforms preselection.
- **Mitigation.** Explicit preselection evaluated with its coverage and latency trade-offs.

## Caveats

Built on one benchmark (SkillsBench) with synthetic irrelevant-skill padding; real catalogues have overlapping, partially relevant skills. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.18522
- PDF: https://arxiv.org/pdf/2610.18522
- HTML: https://arxiv.org/html/2610.18522v1
- Code: https://github.com/jinlinll/lost-in-implicit-routing
