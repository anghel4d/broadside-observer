---
title: "Differential Testing for Software"
authors:
  - "William M. McKeeman"
year: 1998
venue: "Digital Technical Journal"
arxiv: null
doi: null
source: "https://www.cs.swarthmore.edu/~bylvisa1/cs97/f13/Papers/DifferentialTestingForSoftware.pdf"
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

McKeeman names the technique: generate random inputs, feed them to several implementations of the same spec, and treat crashes, hangs, and output disagreements as bugs — especially when no trusted oracle exists.

## Why it matters here

The testing idea behind 'GNU is the oracle' for uutils, and behind any Anoptic plan to swap a foundation without a formal spec. libFuzzer and OSS-Fuzz are the modern engines; this is the idea.

## Key ideas

- Digit. Tech. J. 10(1):100–107, 1998. Originally a DIGITAL compiler-testing note (C compilers, preprocessors, runtimes).
- Workflow: mechanical generation → multiple test beds → classify crash / hang / output diff / comparison-system failure → reduce the failing case.
- Independent implementations are mutual oracles; the method also found bugs in the *comparison* compilers, not only in DIGITAL's.
- uutils: grammar-guided argv so time is not wasted on unparseable command lines; GNU vs Rust vs Toybox/BusyBox is the same setup.

## Caveats

## Links

- PDF: https://www.cs.swarthmore.edu/~bylvisa1/cs97/f13/Papers/DifferentialTestingForSoftware.pdf
- Issue scan: https://www.bitsavers.org/pdf/dec/dtj/dtj_v10-01_1998.pdf
- DBLP: https://dblp.org/rec/journals/dtj/McKeeman98.html
