---
title: "Latent Idiom Recognition for a Minimalist Functional Array Language using Equality Saturation"
authors:
  - "Jonathan Van der Cruysse"
  - "Christophe Dubach"
year: 2024
venue: "CGO"
arxiv: "2312.17682"
doi: null
source: "https://arxiv.org/abs/2312.17682"
topics:
  - array-programming-apl-bqn-q
  - batched-interpreters-ffi
seed_rank: 9
seed_batch: "craft-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
lineage: programming-language-foundations
cites:
  - title: "Comparing Parallel Functional Array Languages: Programming and Performance"
    url: "https://arxiv.org/abs/2505.08906"
    year: 2025
    arxiv: "2505.08906"
    doi: null
    card: "205-comparing-parallel-functional-array-languages-programming-an"
  - title: "Notation as a Tool of Thought"
    url: "https://doi.org/10.1145/358896.358899"
    year: 1980
    arxiv: null
    doi: "10.1145/358896.358899"
    card: "046-notation-as-a-tool-of-thought"
  - title: "Scans as Primitive Parallel Operations"
    url: "https://doi.org/10.1109/TC.1986.1676477"
    year: 1986
    arxiv: null
    doi: "10.1109/TC.1986.1676477"
    card: "383-scans-as-primitive-parallel-operations"
  - title: "The Semantics of Rank Polymorphism"
    url: "https://arxiv.org/abs/1907.00509"
    year: 2019
    arxiv: "1907.00509"
    doi: null
    card: "1190-the-semantics-of-rank-polymorphism"
---

# Latent Idiom Recognition for a Minimalist Functional Array Language using Equality Saturation

## One-sentence takeaway

Encode array-language *semantics* and *library idioms* in the same tiny operator set, then let equality saturation find the BLAS/PyTorch-shaped match you would have written by hand.

## Why it matters here

ano will lower scans/masks/gathers onto GPU kernels and libc-shaped loops. Hand-written idiom matchers rot the moment someone writes the same gemm as a different nest. LIAR’s move — minimalist array IR as both language and idiom DSL, e-graphs for the search — is the compiler craft that lets a BQN-twin stay small and still hit vendor kernels. Pair with Remora (1190) for the source calculus and this for the lowering.

## Key ideas

- Idiom recognition is usually a pile of fragile pattern matchers; slight input variation hides the gemm.
- A tiny functional array language supplies both the rewrite-rule semantics *and* the idiom encodings — no second DSL to learn.
- Equality saturation explores equivalent programs until a library/hardware idiom appears.
- Matches core BLAS and PyTorch ops on kernels; geometric-mean 1.46× vs reference C when emitting BLAS-using C from the high-level language.
- CGO 2024 (Rise/ELEVATE-adjacent: Dubach).

## Caveats

- Demonstrated on BLAS/PyTorch kernels, not on ECS standing-rule programs. The transfer to ano is the IR grain, not a drop-in pass.
- Equality saturation can explode; budget and extraction heuristics are the engineering.
- 2023 arXiv / 2024 CGO; check the ACM version for the final numbers.

## Links

- arXiv: [2312.17682](https://arxiv.org/abs/2312.17682)
- PDF: https://arxiv.org/pdf/2312.17682
- CGO 2024: https://jonathanvdc.github.io/compiler-work/latent-idiom-recognition/
