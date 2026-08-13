---
title: "Transmission Control Protocol (RFC 793)"
authors:
  - "Jon Postel (ed.)"
year: 1981
venue: "IETF RFC"
arxiv: null
doi: null
source: "https://www.rfc-editor.org/rfc/rfc793"
topics:
  - networking
  - tcp
  - rfc
  - transport
seed_rank: 1117
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: systems-classics
cites:
  - title: "Internet Protocol (RFC 791)"
    url: "https://www.rfc-editor.org/rfc/rfc791"
    year: 1981
    arxiv: null
    doi: null
    card: "1116-internet-protocol-rfc-791"
  - title: "A Protocol for Packet Network Intercommunication"
    url: "https://doi.org/10.1109/TCOM.1974.1092259"
    year: 1974
    arxiv: null
    doi: "10.1109/TCOM.1974.1092259"
    card: "1115-a-protocol-for-packet-network-intercommunication"
  - title: "Congestion Avoidance and Control"
    url: "https://doi.org/10.1145/52324.52356"
    year: 1988
    arxiv: null
    doi: "10.1145/52324.52356"
    card: "1118-congestion-avoidance-and-control"
  - title: "End-to-End Arguments in System Design"
    url: "https://doi.org/10.1145/357401.357402"
    year: 1984
    arxiv: null
    doi: "10.1145/357401.357402"
    card: "1103-end-to-end-arguments-in-system-design"
---

# Transmission Control Protocol (RFC 793)

## One-sentence takeaway

RFC 793 specifies TCP: reliable, ordered byte streams over IP (congestion control came later).

## Why it matters here

Default reliable transport; pair with Jacobson for how congestion control was later bolted on.

## Key ideas

- Three-way handshake and state machine.
- Sliding windows and cumulative ACK.
- Ports, segments, urgent data.
- End-to-end reliability over IP.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- URL: https://www.rfc-editor.org/rfc/rfc793
