---
title: "Amazon Aurora: Design Considerations for High Throughput Cloud-Native Relational Databases"
authors:
  - "Alexandre Verbitski"
  - "Anurag Gupta"
  - "Debanjan Saha"
  - "Murali Brahmadesam"
  - "Kamal Gupta"
  - "Raman Mittal"
  - "Sailesh Krishnamurthy"
  - "Sandor Maurice"
  - "Tengiz Kharatishvili"
  - "Xiaofeng Bao"
year: 2017
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3035918.3056101"
source: "https://doi.org/10.1145/3035918.3056101"
topics:
  - cloud-native
  - log-as-database
seed_rank: 750
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Amazon Aurora: On Avoiding Distributed Consensus for I/Os, Commits, and Membership Changes"
    url: "https://doi.org/10.1145/3183713.3196937"
    year: 2018
    arxiv: null
    doi: "10.1145/3183713.3196937"
    card: "748-amazon-aurora-on-avoiding-distributed-consensus-for-i-os-com"
  - title: "Cloud-Native Database Systems at Alibaba: Opportunities and Challenges"
    url: "https://doi.org/10.14778/3352063.3352141"
    year: 2019
    arxiv: null
    doi: "10.14778/3352063.3352141"
    card: "802-cloud-native-database-systems-at-alibaba-opportunities-and-c"
  - title: "Socrates: The New SQL Server in the Cloud"
    url: "https://doi.org/10.1145/3299869.3314047"
    year: 2019
    arxiv: null
    doi: "10.1145/3299869.3314047"
    card: "761-socrates-the-new-sql-server-in-the-cloud"
  - title: "Taurus Database: How to be Fast, Available, and Frugal in the Cloud"
    url: "https://doi.org/10.1145/3318464.3386129"
    year: 2020
    arxiv: null
    doi: "10.1145/3318464.3386129"
    card: "767-taurus-database-how-to-be-fast-available-and-frugal-in-the-c"
---

# Amazon Aurora: Design Considerations for High Throughput Cloud-Native Relational Databases

## One-sentence takeaway

Amazon Aurora: Cloud-era DB architecture: disaggregation, log-as-database, elastic compute.

## Why it matters here

Geo/distributed consistency and SQL-over-shards patterns inform Anoptic persistence and multi-region ops.

## Key ideas

- Venue/year anchor: SIGMOD 2017.
- Disaggregate storage/compute; treat the log or object store as the system of record.
- Primary topics: cloud-native, log-as-database.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3035918.3056101](https://doi.org/10.1145/3035918.3056101)
- URL: https://doi.org/10.1145/3035918.3056101
