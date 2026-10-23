---
title: "Parallel Random Numbers: As Easy as 1, 2, 3"
authors:
  - "John K. Salmon"
  - "Mark A. Moraes"
  - "Ron O. Dror"
  - "David E. Shaw"
year: 2011
venue: "SC11 (International Conference for High Performance Computing, Networking, Storage and Analysis), pp. 1-12"
arxiv: null
doi: "10.1145/2063384.2063405"
source: "https://www.thesalmons.org/john/random123/papers/random123sc11.pdf"
topics:
  - counter-based-rng
  - philox
  - threefry
  - deterministic-simulation
  - gpu-rng
seed_rank: 2403
seed_batch: "archive-2026-10-24"
reviewed: "2026-10-24"
pool: "systems"
relevance_score: 8
lineage: pseudorandom-generators
see:
  - 2375-scrambled-multiply-with-carry-pseudorandom-number-generators
  - 016-deterministic-lockstep
  - 276-floating-point-determinism
cites:
  - title: "Parallel Random Numbers: As Easy as 1, 2, 3"
    url: "https://doi.org/10.1145/2063384.2063405"
    year: 2011
    arxiv: null
    doi: "10.1145/2063384.2063405"
---

# Parallel Random Numbers: As Easy as 1, 2, 3

## One-sentence takeaway

Instead of stepping a sequential state, compute the nth random number directly as a keyed bijection of a counter, x = b_k(n): Salmon et al. build such counter-based generators from AES, from reduced-round ciphers (ARS, Threefry) and from a new multiply-based bijection (Philox), all of which pass TestU01's SmallCrush, Crush and BigCrush with zero failures, give at least 2^64 independent streams of period 2^128 or more, need little or no state, and run at a few cycles per byte — Philox faster than CURAND on one NVIDIA GPU.

## Why it matters here

GRID COMMAND's lockstep simulation and Anoptic's job system need randomness that is identical on every machine regardless of thread count or execution order. The paper's central API point is exactly that: derive the key and counter from application variables — entity id, tick number, purpose tag — rather than from thread or core ids, and the stream is machine-independent and order-free. That makes `rand(entity, tick, k)` a pure function ano can evaluate in any column order, on CPU or GPU, with no per-entity RNG state stored in the ECS.

## Key ideas

- **The problem with conventional PRNGs.** They iterate s_{n+1} = f(s_n), so parallel use needs partitioned state per thread; the Mersenne Twister needs about 2.5 kB of state per thread, which is expensive on GPUs and special hardware.
- **Counter-based definition.** Output is b_k(n) for a counter n and key k; multistream use assigns keys per unit, substream use partitions counters (blocking or striding); both are trivially parallel.
- **Three families.** (1) Real block ciphers: AES with AES-NI ran at 1.7 cycles/byte on one core, faster than the C++0x Mersenne Twister, using 176 bytes of precomputed round keys; Threefish is portable but slower. (2) Reduced ciphers: ARS (fastest Crush-resistant generator with AES-NI, no per-key storage) and Threefry (fastest without AES-NI, only adds, rotates and xors). (3) Philox, a non-cryptographic bijection built on hi/lo multiply, fastest on GPUs.
- **Crush resistance.** All proposed generators pass SmallCrush, Crush and BigCrush plus extra tests that use random access to outputs; the paper notes many widely used PRNGs, including those standardised by C, C++0x and POSIX, fail multiple tests.
- **Recommendations.** AES if AES-NI is present and 176 bytes of key state is acceptable; ARS-7 if storing pre-computed keys is too costly or the last iota of performance matters; without AES-NI, Threefry-4×64-20 on CPUs and Philox-4×32-10 on GPUs, using variants with extra rounds as a safety margin because the cost is small.
- **Origin.** The approach was first used in molecular-dynamics simulations on the Anton machine.

## Caveats

Statistical quality is established empirically (the Crush batteries), not proven; the reduced-round generators are not cryptographically secure. Performance figures are from 2011 CPUs and GPUs. Converting integer outputs to uniform floats and other distributions deterministically across platforms is left to the application — the usual floating-point determinism concerns still apply.

## Links

- Paper (author-hosted PDF): https://www.thesalmons.org/john/random123/papers/random123sc11.pdf
- Paper (DOI, SC11): https://doi.org/10.1145/2063384.2063405
