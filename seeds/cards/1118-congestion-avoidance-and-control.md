---
title: "Congestion Avoidance and Control"
authors:
  - "Van Jacobson"
year: 1988
venue: "SIGCOMM"
arxiv: null
doi: "10.1145/52324.52356"
source: "https://doi.org/10.1145/52324.52356"
topics:
  - networking
  - tcp
  - congestion-control
seed_rank: 1118
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: systems-classics
cites:
  - title: "Transmission Control Protocol (RFC 793)"
    url: "https://www.rfc-editor.org/rfc/rfc793"
    year: 1981
    arxiv: null
    doi: null
    card: "1117-transmission-control-protocol-rfc-793"
  - title: "Random Early Detection Gateways for Congestion Avoidance"
    url: "https://doi.org/10.1109/90.251892"
    year: 1993
    arxiv: null
    doi: "10.1109/90.251892"
    card: "1121-random-early-detection-gateways-for-congestion-avoidance"
  - title: "The Design Philosophy of the DARPA Internet Protocols"
    url: "https://doi.org/10.1145/52324.52336"
    year: 1988
    arxiv: null
    doi: "10.1145/52324.52336"
    card: "1119-the-design-philosophy-of-the-darpa-internet-protocols"
---

# Congestion Avoidance and Control

## One-sentence takeaway

Jacobson saves the Internet: slow start, congestion avoidance, RTT estimators, and fast retransmit for TCP under load.

## Why it matters here

Congestion control literacy for any custom reliable protocol or replay stream over WAN.

## Key ideas

- Slow start and congestion window.
- Conservation of packets principle.
- Better RTT/variance estimators.
- Fast retransmit on duplicate ACKs.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/52324.52356](https://doi.org/10.1145/52324.52356)
- URL: https://doi.org/10.1145/52324.52356
