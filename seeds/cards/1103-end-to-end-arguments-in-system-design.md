---
title: "End-to-End Arguments in System Design"
authors:
  - "J. H. Saltzer"
  - "D. P. Reed"
  - "D. D. Clark"
year: 1984
venue: "ACM TOCS"
arxiv: null
doi: "10.1145/357401.357402"
source: "https://doi.org/10.1145/357401.357402"
topics:
  - systems-design
  - end-to-end
  - networking
seed_rank: 1103
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: systems-classics
cites:
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
  - title: "Transmission Control Protocol (RFC 793)"
    url: "https://www.rfc-editor.org/rfc/rfc793"
    year: 1981
    arxiv: null
    doi: null
    card: "1117-transmission-control-protocol-rfc-793"
  - title: "The Design Philosophy of the DARPA Internet Protocols"
    url: "https://doi.org/10.1145/52324.52336"
    year: 1988
    arxiv: null
    doi: "10.1145/52324.52336"
    card: "1119-the-design-philosophy-of-the-darpa-internet-protocols"
---

# End-to-End Arguments in System Design

## One-sentence takeaway

Functionality that only the endpoints can correctly ensure should not be solely trusted to the middle—low-level help is optional performance.

## Why it matters here

Default design razor for Anoptic networking, persistence, and security layering.

## Key ideas

- End-to-end reliability vs link-level retries.
- Encryption, duplicate suppression, crash recovery examples.
- Low-level mechanisms as performance enhancements, not substitutes.
- Internet architecture's philosophical backbone.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/357401.357402](https://doi.org/10.1145/357401.357402)
- URL: https://doi.org/10.1145/357401.357402
