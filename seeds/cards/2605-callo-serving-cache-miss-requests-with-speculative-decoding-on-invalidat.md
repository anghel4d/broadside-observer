---
title: "Callo: Serving Cache-Miss Requests with Speculative Decoding on Invalidated KV under Prefill-Decode Disaggregation"
authors:
  - "Jianjun Ou"
  - "Matthew Lentz"
year: 2026
venue: "arXiv preprint (cs.DC)"
arxiv: "2611.18459"
doi: null
source: "https://arxiv.org/abs/2611.18459"
version_reviewed: "v1"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 2605
seed_batch: "frontier-2026-11-16"
reviewed: "2026-11-16"
pool: "agents"
relevance_score: 8
see:
  - 1078-aborted-but-not-forgotten-kv-cache-retention-breaks-rollback-consistency
  - 1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving
cites:
  - title: "Callo: Serving Cache-Miss Requests with Speculative Decoding on Invalidated KV under Prefill-Decode Disaggregation"
    url: "https://arxiv.org/abs/2611.18459"
    year: 2026
    arxiv: "2611.18459"
    doi: null
---

# Callo: Serving Cache-Miss Requests with Speculative Decoding on Invalidated KV under Prefill-Decode Disaggregation

## One-sentence takeaway

When an agent edits its own context and the cached KV is invalidated, Callo drafts tokens speculatively from the stale KV while the exact re-prefill runs, then verifies the drafts against the exact KV before committing, giving 1.05-1.19x all-request speedups over vLLM on SWE-agent sessions under prefill-decode disaggregation.

## Why it matters here

Context edits (compaction, tool-output rewriting, history cleaning) are exactly what our provenance-first harness work keeps recommending, and each one throws away the prefix cache. Callo turns the invalidated KV from waste into a free draft model while staying exact, because nothing is committed until checked against the true prefill. That makes edit-heavy harness designs cheaper to serve, and it is a concrete answer to the cost side of the compaction trade-off in cards 1077 and 1078.

## Key ideas

- **Problem.** Agent sessions edit context often; an edit invalidates cached KV and the request waits for a full re-prefill before decoding.
- **Stale KV as drafter.** The invalidated KV is still mostly right, so Callo uses it to generate speculative drafts during the re-prefill.
- **Exactness.** Drafts are verified against the exact KV after prefill before any token is committed, so outputs match the non-speculative path.
- **Scheduling.** Speculation is placed on underutilized decode resources and preempted when drafts look unlikely to be accepted.
- **Evidence.** Two-GPU testbed, SWE-agent sessions, three model families: 1.05-1.19x all-request speedup over vLLM at moderate load; cluster simulations on real-world traces suggest the gains hold at scale.

## Caveats

Abstract-level read of the v1 preprint (Monday 16 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. The measured gain is modest and reported at moderate load on two GPUs; behaviour at high load, where decode slack disappears, is left to simulation.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.18459
- PDF: https://arxiv.org/pdf/2611.18459
