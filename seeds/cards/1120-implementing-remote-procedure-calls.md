---
title: "Implementing Remote Procedure Calls"
authors:
  - "Andrew D. Birrell"
  - "Bruce Jay Nelson"
year: 1984
venue: "ACM TOCS"
arxiv: null
doi: "10.1145/2080.357392"
source: "https://doi.org/10.1145/2080.357392"
topics:
  - networking
  - rpc
  - distributed-systems
seed_rank: 1120
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: systems-classics
cites:
  - title: "End-to-End Arguments in System Design"
    url: "https://doi.org/10.1145/357401.357402"
    year: 1984
    arxiv: null
    doi: "10.1145/357401.357402"
    card: "1103-end-to-end-arguments-in-system-design"
  - title: "Hints for Computer System Design"
    url: "https://doi.org/10.1145/773379.806614"
    year: 1983
    arxiv: null
    doi: "10.1145/773379.806614"
    card: "1104-hints-for-computer-system-design"
  - title: "A Protocol for Packet Network Intercommunication"
    url: "https://doi.org/10.1109/TCOM.1974.1092259"
    year: 1974
    arxiv: null
    doi: "10.1109/TCOM.1974.1092259"
    card: "1115-a-protocol-for-packet-network-intercommunication"
---

# Implementing Remote Procedure Calls

## One-sentence takeaway

Birrell–Nelson make RPC a practical systems primitive: stubs, binding, and semantics that feel like local calls.

## Why it matters here

RPC/IDL mindset behind tool APIs and service boundaries in Broadside infra.

## Key ideas

- Stub generation and automatic marshaling.
- Binding and naming for remote interfaces.
- Exactly-once vs at-most-once practical discussion.
- Cedar/Grapevine implementation experience.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/2080.357392](https://doi.org/10.1145/2080.357392)
- URL: https://doi.org/10.1145/2080.357392
