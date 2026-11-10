---
title: "Replay Is a Family of Assertions: Fork-Safety in Event-Sourced Agent Runtimes"
authors:
  - "Yohei Nakajima"
year: 2026
venue: "arXiv preprint (cs.PL)"
arxiv: "2611.06924"
doi: null
source: "https://arxiv.org/abs/2611.06924"
version_reviewed: "v1"
topics:
  - "provenance-first-agent-memory"
  - "agent-failure-localization"
seed_rank: 2543
seed_batch: "frontier-2026-11-10"
reviewed: "2026-11-10"
pool: "agents"
relevance_score: 9
see:
  - 1366-when-can-agents-safely-checkpoint-fork-restore-and-merge-exa
cites:
  - title: "Replay Is a Family of Assertions: Fork-Safety in Event-Sourced Agent Runtimes"
    url: "https://arxiv.org/abs/2611.06924"
    year: 2026
    arxiv: "2611.06924"
    doi: null
---

# Replay Is a Family of Assertions: Fork-Safety in Event-Sourced Agent Runtimes

## One-sentence takeaway

Deterministic replay, cheap forking and lineage in event-sourced agent runtimes are separate claims, and each cut of a log must say which one it licenses, especially across model calls and external effects.

## Why it matters here

Our harness logs and research pipeline treat the append-only log as the source of truth, and we fork and resume runs. This paper gives the vocabulary to say exactly what a fork guarantees: projection replay is cheap and safe, continuation across a split model request is not, and no prefix copy undoes an external effect in a discarded suffix. That maps directly onto provenance-first memory and onto ano's standing rules, where settlement order matters.

## Key ideas

- **Facts vs effect requests.** An executable F# contract separates recorded facts from requested effects and makes scheduling explicit.
- **Four cut types.** A cut is judged against projection, strict execution replay, external continuation, or a declared counterfactual-world observation.
- **Counterexamples.** General settlement is neither terminating nor confluent, and disjoint declared writes still allow read/trigger interference.
- **At scale.** Over 5,540 public runtime logs, all 317,296 projection cuts hold; 36,251 cuts split a model request and do not license continuation; 120,969 are conditional on serving a committed oracle result from the record.
- **Forks.** 121 observed forks have zero structural mismatches but none crosses an external-effect boundary; one public conformance fork does, verified by receipt/log checks and an HMAC assertion.

## Caveats

Single author, one runtime family and its public logs. The contract is in F#; carrying it to other runtimes is left to the reader. Some arXiv metadata dates the first version to late August despite the November listing.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.06924
- PDF: https://arxiv.org/pdf/2611.06924
