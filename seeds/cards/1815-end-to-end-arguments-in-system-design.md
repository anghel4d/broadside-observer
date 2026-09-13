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
source: "https://web.mit.edu/Saltzer/www/publications/endtoend/endtoend.pdf"
topics:
  - end-to-end
  - systems-design
  - networking
  - layering
seed_rank: 1815
seed_batch: "archive-2026-09-14"
reviewed: "2026-09-14"
pool: "systems"
relevance_score: 10
lineage: systems-design-principles
cites: []
see: []
---

# End-to-End Arguments in System Design

## One-sentence takeaway

Functions placed low in a stack are often redundant once the application must check correctness itself — keep low layers thin unless they are clear performance assists.

## Why it matters here

Anoptic networking, lockstep, and agent tool sandboxes face the same placement question: checksums, retries, auth, and “smart” middleware vs application-level checks. Broadside’s harness should not bury correctness in a clever transport that the agent still has to verify.

## Key ideas

- **End-to-end argument.** Application requirements decide whether a low-level function is justified; low-level copies are often incomplete.
- **Classic examples.** Bit-error recovery, encryption, duplicate suppression, crash recovery, delivery acknowledgement — the endpoints still must reason.
- **Performance carve-out.** Low-level support is fine as an optimization when measured gains outweigh complexity.
- **Layering guidance.** Prefer moving function upward toward the application that understands the real correctness condition.

## Caveats

A design principle paper, not a protocol. Misread as “never put anything in the network”; the text allows performance assists. Complements UNIX 1814 and Plan 9’s thin protocols without replacing them.

## Links

- MIT Saltzer PDF: https://web.mit.edu/Saltzer/www/publications/endtoend/endtoend.pdf
- DOI: https://doi.org/10.1145/357401.357402
