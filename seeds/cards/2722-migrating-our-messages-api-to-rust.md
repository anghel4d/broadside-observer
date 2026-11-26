---
title: "Migrating our Messages API to Rust"
authors:
  - "Anthropic"
year: 2026
venue: "Anthropic Engineering blog, 25 Nov 2026"
arxiv: null
doi: null
source: "https://www.anthropic.com/research/migrating-api-to-rust"
version_reviewed: "web 2026-11-25"
topics:
  - "agentic-llm-serving"
  - "agent-failure-localization"
  - "continual-agent-skills"
  - "harness-engineering"
  - "verification-loops"
seed_rank: 2722
seed_batch: "frontier-2026-11-26"
reviewed: "2026-11-26"
pool: "agents"
relevance_score: 8
cites:
  - title: "Migrating our Messages API to Rust"
    url: "https://www.anthropic.com/research/migrating-api-to-rust"
    year: 2026
    arxiv: null
    doi: null
  - title: "Effective harnesses for long-running agents (Anthropic Engineering)"
    url: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
    year: 2025
    arxiv: null
    doi: null
---

# Migrating our Messages API to Rust

## One-sentence takeaway

Anthropic moved its Messages API from Python to Rust while it stayed live and kept changing. It used the production Python service as the oracle: requests were shadowed, model output replayed into both versions, stage-by-stage checkpoints and privacy-preserving diff fingerprints located each mismatch, and coordinated Claude agents fixed them in nested sandbox, production and memory loops. The Rust API uses about 70% less CPU per request and cuts median time to first token by about 20%.

## Why it matters here

It is a detailed production account of the generator–verifier gap: by May 2026 writing the code was cheap, and the work went into building a verification signal precise enough for agents to act on. The design maps onto Broadside threads. Fingerprints group hundreds of thousands of diff records into one bug each, which is failure localization. The memory loop turns engineer corrections into rules, lints, tests and a merge check, which is continual skills with provenance. Shadowing a nondeterministic model service works by replaying one model output into both versions, which is the replay pattern a serving or harness change needs.

## Key ideas

- **Tests were not enough.** About 700 integration tests were coupled to the Python implementation. An audit of the ported tests found more than 100 weakened assertions. In April the Rust API passed about 98% of tests while only about a quarter of inputs matched on production traffic (for example, Python escaped emoji in JSON tool calls and Rust did not).
- **Shadowing a nondeterministic service.** The model runs once and its output is replayed to Rust. Every stage before and after the model call must match exactly. Billing and limits count each request once.
- **Checkpoints and fingerprints without reading user data.** Both versions emit per-step results. A record holds the step, the prompt piece, the first differing byte and the two lengths, never the text. One bug leaves the same fingerprint across requests, so records group by bug.
- **Coordinator and workers.** A script groups diff records every 10–30 minutes. A coordinating Claude agent is alerted only for new kinds of record, assigns one worker agent per kind, and opens a Slack thread for human steering.
- **Three loops.** Inner: a sandbox with both codebases and sub-second input and output checks against a fake model. The agent writes its own repro request and edits until the versions match, then adds a regression test. Seam: PR review. An engineer rejected a web-search workaround that matched outputs without fixing the cause. Outer: shadowed production builds with and without each fix, compared by fingerprint frequency. Memory: corrections become CLAUDE.md rules, lints, tests and a merge check that requires matching Rust changes.
- **Lesson stated:** keep human judgment in what counts as correct, leave the how to agents, and move engineers outward from the inner loop to writing the rules.

## Caveats

Vendor engineering blog post with no independent replication. The 70% CPU and 20% TTFT figures are Anthropic's own plotted seven-day averages over specific regions and periods. The post names no individual authors on the page I parsed (it ends with an authors and acknowledgements section). It shows that the verifier rewarded the cheapest output match and needed human review, so 'agents fixed it' still depended on engineers at the seam. Details of the coordinator tooling are not released.

## Links

- Post: https://www.anthropic.com/research/migrating-api-to-rust
- Engineering index: https://www.anthropic.com/engineering
