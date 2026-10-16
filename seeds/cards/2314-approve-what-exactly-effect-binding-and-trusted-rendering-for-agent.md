---
title: "Approve What, Exactly? Effect Binding and Trusted Rendering for Agent Step-Up Authorization"
authors:
  - "Sai Varun Kodathala"
  - "Prashanth Pollishetty"
  - "Jaylen Cargill"
year: 2026
venue: "arXiv"
arxiv: "2610.21063"
doi: null
source: "https://arxiv.org/abs/2610.21063"
topics:
  - "agent-failure-localization"
seed_rank: 2314
seed_batch: "frontier-2026-10-16"
reviewed: "2026-10-16"
pool: "agents"
relevance_score: 9
lineage: agent-security
cites:
  - title: "Approve What, Exactly? Effect Binding and Trusted Rendering for Agent Step-Up Authorization"
    url: "https://arxiv.org/abs/2610.21063"
    year: 2026
    arxiv: "2610.21063"
    doi: null
see: []
---

# Approve What, Exactly? Effect Binding and Trusted Rendering for Agent Step-Up Authorization

## One-sentence takeaway

An agent's approval prompt is a real second factor only if a compromised agent cannot produce it and it names exactly what it approves; twelve approval-path attacks break AP2, Microsoft's action-bound design and MCP elicitation, and a reference gateway that renders the card from a canonical effect descriptor and has a phone passkey sign its digest cuts forged-narration success from 0.54 to 0.03.

## Why it matters here

Grok Bot-style assistants ask the user before sends, deletes and payments; this is the threat model and measurement for whether that card actually binds the effect, and it pairs naturally with object-bound confinement (card 2284) for Broadside's own agent runtimes.

## Key ideas

- **Two conditions.** Unreachable by the agent, and effect-binding: the approval must name the exact effect that will run.
- **Twelve attacks.** Decoy recipients, amount cancellation, card padding, label spoofing, enrollment squatting, threshold splitting and more, run against AP2, Microsoft action-bound approval and MCP elicitation.
- **Runtime audit.** Ten agent runtimes: no third-party-verifiable approval record, no flood limits where measurable, and post-approval argument changes in four of eight runtimes with measurable binding.
- **ASU gateway.** Renders the card from a canonical effect descriptor, a passkey on the user's phone signs its digest, only the stored call executes. Tamarin proves binding, single-use and key-level non-repudiation under three stated hypotheses (53 lemmas).
- **Evaluation.** 27,108 scripted trials and 609 AgentDojo attack pairs: stops substitution, replay and grant stretching; with 15 LLMs as automated approvers, the trusted card raises catch rate 0.30 to 0.98 at the cost of refusing 16% of harmless near misses.

## Caveats

No human approver data; one scripted technique per scenario; a second device added nothing measurable over a trusted on-host confirmation; flooding still succeeds 0.45–0.60 of the time against a modeled approver; approval cannot stop effects that policy already allows. Code, data and proofs are released. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.21063
- PDF: https://arxiv.org/pdf/2610.21063
- HTML: https://arxiv.org/html/2610.21063v1
