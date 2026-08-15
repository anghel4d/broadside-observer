---
title: "Checking a Large Routine"
authors:
  - "Alan M. Turing"
year: 1949
venue: "Report of a Conference on High Speed Automatic Calculating Machines, Cambridge"
arxiv: null
doi: null
source: "https://turingarchive.kings.cam.ac.uk/publications-lectures-and-talks-amtb/amt-b-8"
topics:
  - program-proof
  - verification
  - turing
seed_rank: 523
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Assigning Meanings to Programs"
    url: "https://people.eecs.berkeley.edu/~necula/Papers/FloydMeaning.pdf"
    year: 1967
    arxiv: null
    doi: null
  - title: "An Axiomatic Basis for Computer Programming"
    url: "https://doi.org/10.1145/363235.363259"
    year: 1969
    arxiv: null
    doi: "10.1145/363235.363259"
  - title: "Proposal for Development in the Mathematics Division of an Automatic Computing Engine (ACE)"
    url: "https://www.npl.co.uk/getattachment/ea5c6585-0929-4713-962c-2306f8dcf1f2/turing-proposal-Alan-LR.pdf?lang=en-US"
    year: 1946
    arxiv: null
    doi: null
see:
  - "626-assigning-meanings-to-programs"
  - "592-an-axiomatic-basis-for-computer-programming"
  - "522-proposal-for-development-in-the-mathematics-division-of-an-a"
---

# Checking a Large Routine

## One-sentence takeaway

Turing annotates a factorial-style machine routine with assertions at each box so that local checks imply the whole program is correct—Floyd–Hoare reasoning eighteen years early.

## Why it matters here

Prehistory of the axiomatic-semantics spine already in the corpus (Floyd, Hoare, separation logic). When Anoptic or ano wants a standing rule or kernel to carry an invariant, this 1949 EDSAC-conference note is the first worked example of "write the assertions next to the code."

## Key ideas

- Given 24 June 1949 at the inaugural EDSAC conference; printed in the Cambridge *Report of a Conference on High Speed Automatic Calculating Machines*, pp. 67–69.
- The example computes \(n!\) by a loop; each box of the flow diagram carries a predicate that must hold whenever control reaches it.
- If every box preserves its neighbours' assertions, the routine as a whole meets its specification.
- The 1949 typesetting is corrupt; Morris and Jones (1984) reprint a corrected text as "An Early Program Proof by Alan Turing."

## Caveats

## Links

- Turing Digital Archive AMT/B/8: https://turingarchive.kings.cam.ac.uk/publications-lectures-and-talks-amtb/amt-b-8
- Morris–Jones 1984 reprint: https://www.cs.tau.ac.il/~nachumd/term/EarlyProof.pdf
