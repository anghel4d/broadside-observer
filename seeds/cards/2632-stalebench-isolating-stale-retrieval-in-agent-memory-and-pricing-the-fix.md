---
title: "StaleBench: Isolating Stale Retrieval in Agent Memory, and Pricing the Fix"
authors:
  - "S M Mahbub Murshed"
year: 2026
venue: "arXiv preprint (cs.CL); accepted to Findings of EACL 2027"
arxiv: "2611.19752"
doi: null
source: "https://arxiv.org/abs/2611.19752"
version_reviewed: "v1"
topics:
  - "provenance-first-agent-memory"
seed_rank: 2632
seed_batch: "frontier-2026-11-18"
reviewed: "2026-11-18"
pool: "agents"
relevance_score: 8
see:
  - 171-tepa-revoking-stale-memories-for-conflict-robust-language-ag
  - 1579-fresh-memory-stale-plans-dependency-scoped-validation-for-distributed
cites:
  - title: "StaleBench: Isolating Stale Retrieval in Agent Memory, and Pricing the Fix"
    url: "https://arxiv.org/abs/2611.19752"
    year: 2026
    arxiv: "2611.19752"
    doi: null
---

# StaleBench: Isolating Stale Retrieval in Agent Memory, and Pricing the Fix

## One-sentence takeaway

StaleBench isolates stale retrieval in agent memory on 892 real updating facts with source-derived currency labels, and shows standard retrieval metrics can rank memory policies backwards: two policies with identical rank-1 results differ by 29.5 and 65.6 points in reader accuracy, which a new Contamination@5 metric catches.

## Why it matters here

Superseded facts are the everyday failure of long-term memory, and this benchmark keeps currency labels from the source (Wikidata validity years) rather than from a retrieval score, which is the provenance-first stance. The practical lessons are concrete: measure what else sits in the top-k, and do entity resolution on both write and query paths. It also shows Mem0, Graphiti and LangMem each handle supersession differently.

## Key ideas

- **Failure isolated.** For value-agnostic questions ("which team does X play for now?"), a similarity retriever cannot prefer the current version because every version matches the entity.
- **Data.** 892 real updating facts with currency labels from Wikidata validity years via TempLAMA.
- **Backwards metrics.** A retention policy and its retain-everything control return the same rank-1 statement for every test query yet differ by 29.5 and 65.6 points of reader accuracy on two readers when no date is shown.
- **Contamination@5.** The added metric ranks those policies correctly where current@1 and current@5 do not.
- **Fix and systems.** Removing lexical anchors costs deployed keying mechanisms tens of points of freshness; entity resolution on write and query paths recovers most of it. Mem0, Graphiti, LangMem and a reimplemented ERASE each handle supersession differently.

## Caveats

Abstract-level read of the v1 preprint (Tuesday 17 Nov 2026 listing); single-author paper. Facts are encyclopedic (TempLAMA), not conversational agent memory, so transfer to personal-assistant or coding-agent memory is untested here.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.19752
- PDF: https://arxiv.org/pdf/2611.19752
- HTML: https://arxiv.org/html/2611.19752v1
- Code and data: https://github.com/thenexuslab/stalebench-release
