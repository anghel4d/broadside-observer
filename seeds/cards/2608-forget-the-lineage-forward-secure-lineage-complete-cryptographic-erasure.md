---
title: "Forget the Lineage: Forward-Secure, Lineage-Complete Cryptographic Erasure for LLM-Agent Memory"
authors:
  - "Yulliwas Ameur"
  - "Billal Mokhtari"
  - "Samia Bouzefrane"
year: 2026
venue: "arXiv preprint (cs.CR)"
arxiv: "2611.18133"
doi: null
source: "https://arxiv.org/abs/2611.18133"
version_reviewed: "v1"
topics:
  - "provenance-first-agent-memory"
seed_rank: 2608
seed_batch: "frontier-2026-11-16"
reviewed: "2026-11-16"
pool: "agents"
relevance_score: 8
see:
  - 1643-forgetting-without-restarting-execution-state-unlearning-for-stateful
  - 2585-discern-preserve-at-write-resolve-at-read-for-persistent-llm-agent-memor
cites:
  - title: "Forget the Lineage: Forward-Secure, Lineage-Complete Cryptographic Erasure for LLM-Agent Memory"
    url: "https://arxiv.org/abs/2611.18133"
    year: 2026
    arxiv: "2611.18133"
    doi: null
---

# Forget the Lineage: Forward-Secure, Lineage-Complete Cryptographic Erasure for LLM-Agent Memory

## One-sentence takeaway

LinEra encrypts each agent memory under a key derived from its parents' keys along the derivation graph, with source keys from a puncturable PRF, so one puncture makes every summary, fact and embedding derived from a forgotten input unreadable even to an attacker holding all storage and current keys; on mem0 with LoCoMo, logical deletion leaked 70 of 71 forgotten secrets and LinEra leaked none.

## Why it matters here

Provenance-first memory gives us the derivation graph for free; this paper shows that graph is also the right unit for deletion, and that deleting the source row alone is nearly useless because derived memories carry it. The forgetting-radius law is a design lever: fine-grained derivation windows (four turns) both forget less collateral and answer better than session-level summaries, which argues for small, well-lineaged memory writes.

## Key ideas

- **Threat model.** After a forget request, an adversary with all storage and the agent's current keys learns nothing about the forgotten input or anything derived from it.
- **Key lineage.** Each memory's key is derived from its parents' keys; source keys come from a puncturable PRF, so forgetting is one puncture and descendants need not be located.
- **Sound lineage rule.** A writer records as parents everything it saw, confining a source's influence to its descendants.
- **Evidence.** Integrated with mem0, writers from two LLM families (1.5B-7B) on LoCoMo: on the largest writer's ten conversations, 70/71 secrets recovered after logical deletion, 67 with per-object or epoch keys, 0 with LinEra.
- **Forgetting radius.** Forgetting 1% of turns erases 73.0% of derived memories with session-level summaries but 3.8% with four-turn windows; re-deriving restores what is lost.

## Caveats

Abstract-level read of the v1 preprint (Monday 16 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. Security proofs and the lineage rule assume the writer honestly records everything it saw; leakage through model weights or external logs is outside the scheme.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.18133
- PDF: https://arxiv.org/pdf/2611.18133
