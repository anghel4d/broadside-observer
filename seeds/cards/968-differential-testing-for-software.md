---
title: "Differential Testing for Software"
authors:
  - "William M. McKeeman"
year: 1998
venue: "Digital Technical Journal"
arxiv: null
doi: null
source: "https://www.hpl.hp.com/hpjournal/dtj/vol10num1/vol10num1art9.pdf"
topics:
  - "differential-testing"
  - "compilers"
seed_rank: 968
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: unix-foundations
cites:
  []
---

# Differential Testing for Software

## One-sentence takeaway

If several implementations of the same spec exist, feed them the same random inputs and treat disagreements as bugs — the 1998 named technique uutils uses against GNU.

## Why it matters here

The testing idea behind 'GNU is the oracle'. Also how you swap a foundation without a formal spec.

## Key ideas

- Digit. Tech. J. 10(1):100–107, 1998.
- Originally for compilers; now the standard move whenever two Unix userlands coexist.
- uutils: grammar-guided inputs so time is not wasted on unparseable argv.

## Caveats

- Short industrial note. libFuzzer/OSS-Fuzz are the modern engines; this is the idea.

## Links

- PDF: https://www.hpl.hp.com/hpjournal/dtj/vol10num1/vol10num1art9.pdf
