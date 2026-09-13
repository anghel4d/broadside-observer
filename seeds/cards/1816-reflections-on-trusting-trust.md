---
title: "Reflections on Trusting Trust"
authors:
  - "Ken Thompson"
year: 1984
venue: "CACM (Turing Award Lecture)"
arxiv: null
doi: "10.1145/358198.358210"
source: "https://www.cs.cmu.edu/~rdriley/487/papers/Thompson_1984_ReflectionsonTrustingTrust.pdf"
topics:
  - compilers
  - supply-chain-security
  - trust
  - unix
seed_rank: 1816
seed_batch: "archive-2026-09-14"
reviewed: "2026-09-14"
pool: "systems"
relevance_score: 10
lineage: unix-lineage
cites:
  - title: "The UNIX Time-Sharing System"
    url: "https://dsf.berkeley.edu/cs262/unix.pdf"
    year: 1974
    arxiv: null
    doi: "10.1145/361011.361019"
see:
  - "1814-the-unix-time-sharing-system"
---

# Reflections on Trusting Trust

## One-sentence takeaway

A compiler can hide a Trojan that re-injects itself and backdoors programs — trusting a binary means trusting the people and toolchain that produced it.

## Why it matters here

Broadside agents that compile, install, or trust model/tool binaries inherit this lesson: provenance beats “the binary looks fine.” Anoptic and ano builds need reproducible toolchains and signed inputs; GRID COMMAND mods and plugins are the same attack surface.

## Key ideas

- **Self-reproducing programs as setup.** Quines teach the mechanism before the attack.
- **Login backdoor stage.** A compromised compiler emits a backdoored login without a source trace.
- **Compiler self-propagation.** The Trojan teaches the next compiler to keep injecting — source audits miss it.
- **Trust boundary.** Correctness claims about programs are only as strong as trust in the people and tools that built them.

## Caveats

Turing Award lecture, not a CVE catalog. Modern supply-chain defenses (reproducible builds, diverse compilation, SBOMs) are responses, not part of the 1984 text. Pairs with UNIX 1814; does not remint Plan 9 or Exokernel.

## Links

- CMU PDF: https://www.cs.cmu.edu/~rdriley/487/papers/Thompson_1984_ReflectionsonTrustingTrust.pdf
- DOI: https://doi.org/10.1145/358198.358210
