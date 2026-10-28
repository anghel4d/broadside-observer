---
title: "Concordat: Typed Sessions for LLM Agents"
authors:
  - "Milad Sikaroudi"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2610.37461"
doi: null
source: "https://arxiv.org/abs/2610.37461"
topics:
  - "typed-programming-systems"
  - "agent-failure-localization"
seed_rank: 2451
seed_batch: "frontier-2026-10-28"
reviewed: "2026-10-28"
pool: "agents"
relevance_score: 9
see:
  - 916-session-types-for-deadlock-free-communication
  - 917-multiparty-asynchronous-session-types
cites:
  - title: "Concordat: Typed Sessions for LLM Agents"
    url: "https://arxiv.org/abs/2610.37461"
    year: 2026
    arxiv: "2610.37461"
    doi: null
---

# Concordat: Typed Sessions for LLM Agents

## One-sentence takeaway

Concordat gives an agent a finite-state protocol in the style of typestate and session types and enforces it at run time by offering the model only the tools legal in the current state, and on tau-bench airline with simulated customers pressuring it to skip confirmation, the standard agent changed bookings without a "yes" in 13 of 50 tasks (gpt-4.1) and 29 of 128 runs (Claude Haiku 5.5) while the Concordat agent did so zero times with no significant loss in task success.

## Why it matters here

Rules like "never send without explicit confirmation" are exactly the constraints our bots live under, and this shows that stating them in the prompt is not enough under pressure while a typed interface makes the violation unrepresentable. It is also a direct bridge from the session-type cards (916, 917) to agent harnesses, and the same move, restricting the action set by state, fits ano's standing rules.

## Key ideas

- **Agent as typed object.** The agent's interface is a finite-state protocol; each turn exposes only the tools legal in the current state, and illegal calls are rejected before side effects.
- **Human-reserved decisions.** Some transitions can only be requested, never taken, by the model.
- **Linear budgets.** Token and tool-call budgets are charged and split linearly across handoffs between agents.
- **Static checks.** Protocols are checked when defined, and a subclass that could bypass its parent's protocol is rejected, a behavioural Liskov substitution rule.
- **Benchmarks miss it.** tau-bench's own reward did not detect most of the confirmation violations the standard agent made.

## Caveats

Single-author library paper evaluated on one domain (50 airline tasks). Protocols must be written by hand and only cover what the designer foresaw; enforcement constrains which tool is called, not whether its arguments are right.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.37461
- PDF: https://arxiv.org/pdf/2610.37461
- Code: https://github.com/miladsikaroudi/concordat
