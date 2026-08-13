---
title: "Random Early Detection Gateways for Congestion Avoidance"
authors:
  - "Sally Floyd"
  - "Van Jacobson"
year: 1993
venue: "IEEE/ACM Trans. Networking"
arxiv: null
doi: "10.1109/90.251892"
source: "https://doi.org/10.1109/90.251892"
topics:
  - networking
  - aqm
  - red
  - congestion
seed_rank: 1121
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: systems-classics
cites:
  - title: "Congestion Avoidance and Control"
    url: "https://doi.org/10.1145/52324.52356"
    year: 1988
    arxiv: null
    doi: "10.1145/52324.52356"
    card: "1118-congestion-avoidance-and-control"
  - title: "Transmission Control Protocol (RFC 793)"
    url: "https://www.rfc-editor.org/rfc/rfc793"
    year: 1981
    arxiv: null
    doi: null
    card: "1117-transmission-control-protocol-rfc-793"
---

# Random Early Detection Gateways for Congestion Avoidance

## One-sentence takeaway

RED signals congestion early via probabilistic drops—active queue management before buffers explode.

## Why it matters here

AQM idea still relevant to latency-sensitive game/realtime traffic shaping.

## Key ideas

- Detect incipient congestion via average queue length.
- Probabilistic early drop/mark.
- Avoid global synchronization of TCP flows.
- Gateway-centric congestion signaling.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1109/90.251892](https://doi.org/10.1109/90.251892)
- URL: https://doi.org/10.1109/90.251892
