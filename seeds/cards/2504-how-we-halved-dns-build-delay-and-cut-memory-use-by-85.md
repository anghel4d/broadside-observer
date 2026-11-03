---
title: "How we halved DNS build delay and cut memory use by 85%"
authors:
  - "Cloudflare"
year: 2026
venue: "Cloudflare blog"
arxiv: null
doi: null
source: "https://blog.cloudflare.com/dns-targeted-zone-builds/"
topics:
  - "incremental-computation"
  - "build-planning"
  - "change-propagation"
seed_rank: 2504
seed_batch: "craft-2026-11-03"
reviewed: "2026-11-03"
pool: "systems"
relevance_score: 7
cites:
  - title: "How we halved DNS build delay and cut memory use by 85%"
    url: "https://blog.cloudflare.com/dns-targeted-zone-builds/"
    year: 2026
    arxiv: null
    doi: null
see: ["1489-dbsp-automatic-incremental-view-maintenance-for-rich-query-languages", "1466-adapton-composable-demand-driven-incremental-computation"]
---

# How we halved DNS build delay and cut memory use by 85%

## One-sentence takeaway

Cloudflare's DNS Zone Builder now picks the smallest of five build types (resources only, resources plus metadata, apex plus metadata, purge, full zone) that it can prove writes keys byte-for-byte identical to a full rebuild, falls back to a full build whenever an event is vague, and merges work per zone, which cut peak memory by 85% and halved change-to-edge latency for zones of tens of millions of records.

## Why it matters here

It is a production write-up of the rule ano's standing rules need: incremental recomputation must produce exactly what a full recompute would, and uncertainty must never turn into less work. The five-tier planner, events that carry old and new values, and per-key stale removal are a concrete template for deciding when a rule change can touch only a few entities versus forcing a full re-evaluation.

## Key ideas

- **Events say what changed.** Producers now include changed fields with previous and new values; timestamp-only 'something changed' events still force a full build.
- **Smallest provably safe build.** Each setting was traced through the code that generates DNS output and classified by what it can affect; the invariant is byte-for-byte equality with a full build.
- **Stale removal.** For each rebuilt name, existing keys are scanned and anything the new build did not write is removed.
- **Per-zone scheduling.** A new scheduler combines work for the same zone without dropping Kafka messages, and the memory headroom let them shorten resilience waits.

## Caveats

An engineering blog post, not peer reviewed; the safety argument is described in prose, not formally checked. Specific to Cloudflare's pipeline and Quicksilver store. I read the first half of the post.

## Links

- Blog post: https://blog.cloudflare.com/dns-targeted-zone-builds/
