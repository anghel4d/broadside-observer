---
title: "Computability of Recursive Functions"
authors:
  - "J. C. Shepherdson"
  - "H. E. Sturgis"
year: 1963
venue: "Journal of the ACM"
arxiv: null
doi: "10.1145/321160.321170"
source: "https://doi.org/10.1145/321160.321170"
topics:
  - urm
  - register-machines
  - computability
seed_rank: 634
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: foundations-of-computing
cites:
  - title: "On Computable Numbers, with an Application to the Entscheidungsproblem"
    url: "https://doi.org/10.1112/plms/s2-42.1.230"
    year: 1936
    arxiv: null
    doi: "10.1112/plms/s2-42.1.230"
  - title: "General recursive functions of natural numbers"
    url: "https://doi.org/10.1007/BF01565439"
    year: 1936
    arxiv: null
    doi: "10.1007/BF01565439"
  - title: "First Draft of a Report on the EDVAC"
    url: "https://web.mit.edu/STS.035/www/PDFs/edvac.pdf"
    year: 1945
    arxiv: null
    doi: "10.5479/sil.538961.39088011475779"
  - title: "Preliminary Discussion of the Logical Design of an Electronic Computing Instrument"
    url: "https://www.ias.edu/sites/default/files/library/pdfs/ecp.preliminarydiscussion.pdf"
    year: 1946
    arxiv: null
    doi: null
see:
  - "515-on-computable-numbers-with-an-application-to-the-entscheidun"
  - "525-general-recursive-functions-of-natural-numbers"
  - "542-first-draft-of-a-report-on-the-edvac"
  - "543-preliminary-discussion-of-the-logical-design-of-an-electroni"
---

# Computability of Recursive Functions

## One-sentence takeaway

Shepherdson and Sturgis introduce unlimited register machines — a handful of increment / decrement / jump instructions on finitely many integer registers — and prove they compute exactly the partial recursive functions.

## Why it matters here

Pedagogical machine model between Turing machines and real CPUs. Anoptic’s “registers plus a program counter” mental model of a job, and any URM-style IR, is this paper rather than a tape.

## Key ideas

- URM instructions: increment a register, decrement (or test-and-jump if zero), unconditional jump.
- Equivalence with Kleene’s partial recursive functions and with Turing machines.
- The model is closer to von Neumann / IAS machines than a tape is, so the computability proof feels like assembly.
- *JACM* 10(2), 1963, pp. 217–255.

## Caveats

## Links

- DOI: [10.1145/321160.321170](https://doi.org/10.1145/321160.321170)
