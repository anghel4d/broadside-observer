---
title: "CoGraM: Context-sensitive granular optimization method with rollback for robust model fusion"
authors:
  - "Julius Lenz"
year: 2025
venue: "arXiv:cs.LG"
arxiv: "2512.03610"
doi: null
source: "https://arxiv.org/abs/2512.03610"
topics:
  - netcode
seed_rank: 268
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 9
cites:
  - title: "Overwatch Gameplay Architecture and Netcode (ECS-flavored)"
    url: "https://www.gdcvault.com/play/1024001/-Overwatch-Gameplay-Architecture-and"
    year: 2017
    arxiv: null
    doi: null
    card: "338-overwatch-gameplay-architecture-and-netcode-ecs-flavored"
  - title: "Snapshot Interpolation"
    url: "https://gafferongames.com/post/snapshot_interpolation/"
    year: 2015
    arxiv: null
    doi: null
    card: "341-snapshot-interpolation"
  - title: "GGPO Rollback Networking"
    url: "https://github.com/pond3r/ggpo"
    year: 2006
    arxiv: null
    doi: null
    card: "254-ggpo-rollback-networking"
---

# CoGraM: Context-sensitive granular optimization method with rollback for robust model fusion

## One-sentence takeaway

Merging neural networks without retraining is central to federated and distributed learning.

## Why it matters here

Realtime/sim/netcode discipline for deterministic or low-latency games (CoGraM: Context-sensitive granular optimization method with rollback for robust ).

## Key ideas

- Merging neural networks without retraining is central to federated and distributed learning.
- Common methods such as weight averaging or Fisher merging often lose accuracy and are unstable across seeds.
- CoGraM (Contextual Granular Merging) is a multi-stage, context-sensitive, loss-based, and iterative optimization method across layers, neurons, and weight levels that aligns decisions with loss differences and thresholds and prevents harmful updates through rollback.
- CoGraM is an optimization method that addresses the weaknesses of methods such as Fisher and can significantly improve the merged network.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2512.03610](https://arxiv.org/abs/2512.03610)
- URL: https://arxiv.org/abs/2512.03610
