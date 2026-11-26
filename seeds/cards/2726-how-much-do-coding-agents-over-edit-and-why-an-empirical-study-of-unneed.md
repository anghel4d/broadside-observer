---
title: "How Much Do Coding Agents Over-Edit, and Why? An Empirical Study of Unneeded Edits in Repository-Level Agent Patches"
authors:
  - "Aakash Goel"
  - "Benjamin Steenhoek"
  - "Yu Hu"
year: 2026
venue: "arXiv preprint (cs.SE)"
arxiv: "2611.34875"
doi: null
source: "https://arxiv.org/abs/2611.34875"
version_reviewed: "v1"
topics:
  - "agent-failure-localization"
  - "provenance-first-agent-memory"
  - "harness-engineering"
  - "coding-agents"
seed_rank: 2726
seed_batch: "frontier-2026-11-26"
reviewed: "2026-11-26"
pool: "agents"
relevance_score: 7
see:
  - 084-swe-bench-can-language-models-resolve-real-world-github-issu
  - 001-swe-agent-agent-computer-interfaces-enable-automated-softwar
  - 193-openhands-an-open-platform-for-ai-software-developers-as-gen
cites:
  - title: "How Much Do Coding Agents Over-Edit, and Why? An Empirical Study of Unneeded Edits in Repository-Level Agent Patches"
    url: "https://arxiv.org/abs/2611.34875"
    year: 2026
    arxiv: "2611.34875"
    doi: null
  - title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"
    url: "https://arxiv.org/abs/2310.06770"
    year: 2023
    arxiv: "2310.06770"
    doi: null
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
  - title: "OpenHands: An Open Platform for AI Software Developers as Generalist Agents"
    url: "https://arxiv.org/abs/2407.16741"
    year: 2024
    arxiv: "2407.16741"
    doi: null
---

# How Much Do Coding Agents Over-Edit, and Why? An Empirical Study of Unneeded Edits in Repository-Level Agent Patches

## One-sentence takeaway

Delta Residue Attribution (DRA) replays agent trajectories, traces every unit of the final patch to the step that wrote it, reverts each unit and reruns the tests. Over 7,660 resolved GitHub Copilot CLI trajectories from 18 models, agent code is on average at least as necessary as developers' code (0.887 vs 0.864 on SWE-bench Verified). Still, about 11% of agent code units are unneeded and 89% of those change behaviour, and code necessity is unrelated to resolve rate on SWE-bench Verified and negatively correlated with it on DeepSWE (Spearman −0.59).

## Why it matters here

DRA is provenance applied to agent output: every line of the patch is linked to the trajectory step that produced it, then tested for necessity. It locates the failure, here over-editing, at the level of the step and the unit rather than the whole run, the granularity Broadside's model-vs-harness work needs. The practical results are harness-level. Pruning with only the tests the agent can see removes most unneeded code (67% recall, 46% precision) while 89% of pruned patches still resolve. Asking the agent to audit its own diff is more precise but less effective (36% recall, 66% precision).

## Key ideas

- **Patch size is not over-editing.** On SWE-bench Verified most extra lines are tests (61%) and docs (13%). On DeepSWE most extra edits are code (58%).
- **Necessity score per unit.** A unit is needed if reverting it fails the tests. Code necessity (NP_code) is 0.887 for agents against 0.864 for developers on SWE-bench Verified, where 11 of 18 models leave less unneeded code than developers, and 0.797 against 0.785 on DeepSWE.
- **Where it comes from.** Debug steps write almost none of the unneeded code. Most of it is already in the patch when the agent's tests first pass, so early stopping barely helps (0.700 → 0.710).
- **Validation.** The DRA flag predicts units outside every function the developer patch touched with AUROC 0.718, against 0.478 for unit size.
- **Recommendation.** Report code necessity next to resolve rate, prune at the harness level, and debloat training trajectories before SFT.

## Caveats

I read the abstract, setup, and discussion/limitations of the v1 HTML. Necessity depends on the test oracle and is an upper bound on DeepSWE and SWE-bench Pro. Units are reverted one at a time, so jointly needed pairs can mislead, and role labels were checked against a second LLM judge with no human audit. Only one harness (Copilot CLI) is used in the main results, only resolved trajectories are studied, 33.4% of DeepSWE patches contain a unit without provenance, and SWE-bench Verified may be contaminated.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.34875
- PDF: https://arxiv.org/pdf/2611.34875
- HTML: https://arxiv.org/html/2611.34875v1
