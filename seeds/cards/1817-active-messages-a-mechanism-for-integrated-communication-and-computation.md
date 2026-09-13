---
title: "Active Messages: a Mechanism for Integrated Communication and Computation"
authors:
  - "Thorsten von Eicken"
  - "David E. Culler"
  - "Seth Copen Goldstein"
  - "Klaus Erik Schauser"
year: 1992
venue: "ISCA / UCB CSD-92-675"
arxiv: null
doi: "10.1145/146628.140382"
source: "https://www2.eecs.berkeley.edu/Pubs/TechRpts/1992/Archive/CSD-92-675.pdf"
topics:
  - active-messages
  - messaging
  - parallel-computing
  - rpc
seed_rank: 1817
seed_batch: "archive-2026-09-14"
reviewed: "2026-09-14"
pool: "systems"
relevance_score: 10
lineage: messaging-rpc
cites:
  - title: "Scheduler Activations: Effective Kernel Support for the User-Level Management of Parallelism"
    url: "https://www2.eecs.berkeley.edu/Pubs/TechRpts/1991/CSD-91-650.pdf"
    year: 1991
    arxiv: null
    doi: "10.1145/121132.121151"
see:
  - "1795-scheduler-activations-effective-kernel-support-for-the-user-level-management-of-parallelism"
---

# Active Messages: a Mechanism for Integrated Communication and Computation

## One-sentence takeaway

Put a user-level handler address at the head of each message so arrival runs a tiny handler that integrates the payload into the ongoing computation — minimize communication overhead without a heavyweight message-driven CPU.

## Why it matters here

Anoptic’s lock-free job queues, networked lockstep, and agent tool RPCs want the Active Messages shape: cheap user-level handlers, overlap of compute and transfer, no kernel round-trip per message. Complements Scheduler Activations 1795 for user-level parallelism.

## Key ideas

- **Handler-headed messages.** The message carries the address of a user-level handler executed on arrival with the body as argument.
- **Overlap without heavy machinery.** Communication pipeline stays full while computation continues; latency tolerance becomes a compile/runtime concern.
- **Implementations.** nCUBE/2 and CM-5 measurements; Split-C as a split-phase shared-memory extension.
- **Sufficiency claim.** Active messages can host the dynamically scheduled languages that motivated message-driven machines, without those machines’ poor processor cost/performance.

## Caveats

1992 multiprocessor messaging — not a modern RDMA/DPDK cookbook. Open PDF via Berkeley TR CSD-92-675 (image-scanned archive) and text mirrors. Deferred from prior Archive keep-rate; do not remint Scheduler Activations 1795 or Click (this batch).

## Links

- Berkeley TR PDF: https://www2.eecs.berkeley.edu/Pubs/TechRpts/1992/Archive/CSD-92-675.pdf
- Text mirror: https://www.cs.unibo.it/~renzo/so/old/articoli2/ECG+92.pdf
- DOI: https://doi.org/10.1145/146628.140382
