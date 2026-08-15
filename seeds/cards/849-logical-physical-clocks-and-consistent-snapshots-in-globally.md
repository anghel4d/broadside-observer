---
title: Logical Physical Clocks and Consistent Snapshots in Globally Distributed Databases
authors:
- Sandeep S. Kulkarni
- Murat Demirbas
- Deepak Madeppa
- Bharadwaj Avva
- Marcelo Leone
year: 2014
venue: University at Buffalo CSE Technical Report 2014-04
arxiv: null
doi: null
source: "https://cse.buffalo.edu/tech-reports/2014-04.pdf"
topics:
- databases
- contemporary-db
seed_rank: 849
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: "Spanner: Google's Globally-Distributed Database"
  url: "https://www.usenix.org/conference/osdi12/technical-sessions/presentation/corbett"
  year: 2012
  arxiv: null
  doi: 10.5555/2387880.2387905
see:
- "812-spanner-google-s-globally-distributed-database"
- "816-cockroachdb-the-resilient-geo-distributed-sql-database"
---

# Logical Physical Clocks and Consistent Snapshots in Globally Distributed Databases

## One-sentence takeaway

Hybrid Logical Clocks (HLCs) stamp events with a pair close to NTP wall time that still respects causality (if e → f then HLC(e) < HLC(f)), so distributed databases can take consistent snapshots without waiting out TrueTime-style uncertainty or running a prior barrier.

## Why it matters here

CockroachDB’s commit timestamps *are* HLCs. If GRID COMMAND or Broadside need “happens-before plus almost-NTP” without GPS clocks, this TR is the algorithm: keep l (logical) just ahead of pt (physical), and compare (pt, l, node) lexicographically.

## Key ideas

- Each node tracks `pt` (physical clock) and `l` (a logical component that only advances when `pt` would otherwise go backwards relative to a received stamp).
- On send/local event: `l' = max(l, pt)`; on receive of stamp `m`: `l' = max(l, pt, m.l)` with a careful increment so causality is strict.
- Snapshots at an HLC value see a causal cut whose timestamps stay close to civil time, unlike pure Lamport clocks that can drift arbitrarily from NTP.
- CockroachDB, MongoDB causal consistency, and several NewSQL stores adopted the scheme; this 2014-04 Buffalo TR is the canonical write-up.

## Caveats

## Links

- PDF: https://cse.buffalo.edu/tech-reports/2014-04.pdf
