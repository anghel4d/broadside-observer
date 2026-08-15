---
title: "Proof-Carrying Code"
authors: ["George C. Necula"]
year: 1997
venue: "POPL"
arxiv: null
doi: "10.1145/263699.263712"
source: "https://doi.org/10.1145/263699.263712"
topics: [proof-carrying-code, certified-code, typed-assembly]
seed_rank: 1047
seed_batch: "archive-2026-08-16"
reviewed: "2026-08-16"
pool: "languages"
relevance_score: 10
lineage: proof-carrying-code
cites:
  - title: "From System F to Typed Assembly Language"
    url: "https://doi.org/10.1145/268946.268954"
    year: 1998
    arxiv: null
    doi: "10.1145/268946.268954"
  - title: "Safe Kernel Extensions without Run-Time Checking"
    url: "https://doi.org/10.1145/238721.238781"
    year: 1996
    arxiv: null
    doi: "10.1145/238721.238781"
  - title: "Formal Certification of a Compiler Back-end"
    url: "https://doi.org/10.1145/1111037.1111042"
    year: 2006
    arxiv: null
    doi: "10.1145/1111037.1111042"
see:
  - "1001-from-system-f-to-typed-assembly-language"
  - "028-typed-memory-management-in-a-calculus-of-capabilities"
  - "707-formal-certification-of-a-compiler-back-end-or-programming-a"
---

# Proof-Carrying Code

## One-sentence takeaway

Untrusted binary + a formal safety proof; the host checks the proof with a tiny validator and runs the code with no runtime checks and no crypto.

## Why it matters here

Last Archive minted TAL (1001) — type-preserving compile down to RISC. PCC is the sibling from the other side: the *consumer* defines a safety policy, the producer ships a proof, a small TCB validates. Anoptic loads shaders, meshlet dumps, and (eventually) ano kernels from tools it does not trust; PCC is the 1997 formulation of "check once, run without a GC or a sandbox tax." Packet filters faster than Modula-3/C with a formal guarantee were the original demo.

## Key ideas

- Safety policy is public and host-defined (VC-gen + proof rules). Certification is the producer's problem; validation is a small, fast checker.
- No cryptography, no external agent, no residual runtime checks once the proof validates.
- Case study: safe assembly-language extensions of ML, with concrete representations of the policy, the proofs, and the validator, plus an adequacy proof.
- Network packet filters as the systems payoff (continues Necula & Lee, SOSP 1996 "Safe Kernel Extensions").
- TAL (POPL 1998) is how a compiler *produces* the typed/proved binary; PCC is how a host *consumes* it.

## Caveats

- Proof size and VC-gen engineering are the historical tax; Touchstone / foundational PCC / CompCert (707) are later answers.
- POPL 97 author list is Necula; Lee is coauthor on the SOSP 96 kernel-extensions paper cited here.
- Soundness is for the stated safety policy (memory safety, etc.), not for data races or GPU occupancy.

## Links

- DOI: [10.1145/263699.263712](https://doi.org/10.1145/263699.263712)
- ACM: https://dl.acm.org/doi/10.1145/263699.263712
- Related TR: CMU-CS-96-165
