---
title: "Local Allow, Global Deny: Why Per-Action Authorization Does Not Compose in LLM Agents"
authors:
  - "Anmol Pandey"
  - "Aditya Jain"
  - "Liang Chen"
  - "Carsten Maple"
year: 2026
venue: "arXiv preprint (cs.CR)"
arxiv: "2610.27620"
doi: null
source: "https://arxiv.org/abs/2610.27620"
topics:
  - "agent-failure-localization"
  - "typed-programming-systems"
seed_rank: 2384
seed_batch: "frontier-2026-10-22"
reviewed: "2026-10-22"
pool: "agents"
relevance_score: 8
cites:
  - title: "Local Allow, Global Deny: Why Per-Action Authorization Does Not Compose in LLM Agents"
    url: "https://arxiv.org/abs/2610.27620"
    year: 2026
    arxiv: "2610.27620"
    doi: null
  - title: "Hyperproperties"
    url: "https://doi.org/10.3233/JCS-2009-0393"
    year: 2010
    arxiv: null
    doi: "10.3233/JCS-2009-0393"
  - title: "Noninterference and the Composability of Security Properties"
    url: null
    year: 1988
    arxiv: null
    doi: null
---

# Local Allow, Global Deny: Why Per-Action Authorization Does Not Compose in LLM Agents

## One-sentence takeaway

Guards that screen each agent tool call in isolation cannot enforce policies about purpose: a relational purpose violation is a 2-safety hyperproperty with no single offending step, so any per-action (single-trace) monitor that never raises a false alarm detects none of them, whatever model or rule engine sits inside it; only comparing executions can.

## Why it matters here

Broadside agents run under allow-lists and per-call approvals. This paper gives the formal reason why that layer can be sound step by step and still leak: "share my free/busy" can be honored on every call while the pattern of offered slots reveals why a slot is busy. It also gives a constructive tool (a SAT/SMT witness synthesizer) and a monitor ladder for deciding what a guard must observe. It pairs with card 2365, which attacks the approval layer from the social side; this one shows its expressive ceiling.

## Key ideas

- **Compositional authorization failure (CAF).** A locally authorized execution, or pair of executions, that violates a global policy over intent, purpose, provenance, consent and delegation. Classes are mapped by expressiveness (trace safety versus relational k-safety) and observability (monitor profiles P0–P7).
- **Impossibility.** The purpose property is 2-safety and relational under a stated non-collapse condition; false-alarm-free per-trace monitors miss all of it. For stochastic agents even cross-execution sampling gives only statistical detection.
- **AL-SYNTH.** A bounded model checker on SAT/SMT (no language model) that emits minimal CAF witnesses for a given tool schema, policy and monitor profile, validated for soundness, bounded completeness and minimality against an exhaustive oracle; minimal-witness search stayed flat where all-SAT enumeration grew to 29,337 witnesses.
- **Guardrail survey.** Of six surveyed guardrails (including CaMeL, Fides and SAFEFLOW), the strongest single-execution profile covers seven of eight classes but none detects the relational purpose class.
- **LLM judges.** Nine models screening the synthesized witness step by step approve it almost without exception, at a rate comparable to a benign control, yet flag it when shown both executions side by side. A live open-weights agent committed a consent-composition CAF in 22 of 60 rollouts, which a composition-aware guard eliminated.

## Caveats

The impossibility is about false-alarm-free per-trace monitors; a guard that accepts false positives can over-approximate soundly. The models are small typed transition systems (a scheduling assistant is the running example). An offline audit of Claude Sonnet 4.6 found no CAFs in the tested classes; the point there is that safety came from the model's behavior, not from a monitor.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.27620
- PDF: https://arxiv.org/pdf/2610.27620
