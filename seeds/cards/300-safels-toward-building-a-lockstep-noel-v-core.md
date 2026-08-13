---
title: "SafeLS: Toward Building a Lockstep NOEL-V Core"
authors:
  - "Marcel Sarraseca"
  - "Sergi Alcaide"
  - "Francisco Fuentes"
  - "Juan Carlos Rodriguez"
  - "Feng Chang"
  - "Ilham Lasfar"
  - "Ramon Canal"
  - "Francisco J. Cazorla"
  - "Jaume Abella"
year: 2023
venue: "arXiv:cs.AR"
arxiv: "2307.15436"
doi: null
source: "https://arxiv.org/abs/2307.15436"
topics:
  - netcode
seed_rank: 300
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 9
cites:
  - title: "CoGraM: Context-sensitive granular optimization method with rollback for robust model fusion"
    url: "https://arxiv.org/abs/2512.03610"
    year: 2025
    arxiv: "2512.03610"
    doi: null
    card: "268-cogram-context-sensitive-granular-optimization-method-with-r"
  - title: "LOG.io: Unified Rollback Recovery and Data Lineage Capture for Distributed Data Pipelines"
    url: "https://arxiv.org/abs/2512.16038"
    year: 2025
    arxiv: "2512.16038"
    doi: null
    card: "273-log-io-unified-rollback-recovery-and-data-lineage-capture-fo"
  - title: "GGPO Rollback Networking"
    url: "https://github.com/pond3r/ggpo"
    year: 2006
    arxiv: null
    doi: null
    card: "254-ggpo-rollback-networking"
---

# SafeLS: Toward Building a Lockstep NOEL-V Core

## One-sentence takeaway

Safety-critical systems such as those in automotive, avionics and space, require appropriate safety measures to avoid silent data corruption upon random hardware errors such as those caused by radiation and other types of electromagnetic interference.

## Why it matters here

Realtime/sim/netcode discipline for deterministic or low-latency games (SafeLS: Toward Building a Lockstep NOEL-V Core).

## Key ideas

- Safety-critical systems such as those in automotive, avionics and space, require appropriate safety measures to avoid silent data corruption upon random hardware errors such as those caused by radiation and other types of electromagnetic interference.
- Those safety measures must be able to prevent faults from causing the so-called common cause failures (CCFs), which occur when a fault produces identical errors in redundant elements so that comparison fails to detect the errors and a failure arises.
- The usual solution to avoid CCFs in CPU cores is using lockstep cores, so that two cores execute the same flow of instructions, but with some time staggering so that their state is never identical and faults can only lead to different errors, which are then detectable by means of comparison.
- This paper extends Gaisler's RISC-V NOEL-V core with lockstep; and presents future prospects for its use and distribution.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2307.15436](https://arxiv.org/abs/2307.15436)
- URL: https://arxiv.org/abs/2307.15436
