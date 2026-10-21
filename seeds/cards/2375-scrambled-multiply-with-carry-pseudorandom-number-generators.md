---
title: "Scrambled Multiply-with-Carry Pseudorandom Number Generators"
authors:
  - "Sebastiano Vigna"
year: 2026
venue: "arXiv (cs.CR; cross-listed cs.MS)"
arxiv: "2610.27313"
doi: null
source: "https://arxiv.org/abs/2610.27313"
topics:
  - "prng"
  - "multiply-with-carry"
  - "spectral-test"
  - "determinism"
  - "simulation"
seed_rank: 2375
seed_batch: "craft-2026-10-21"
reviewed: "2026-10-21"
pool: "systems"
relevance_score: 7
lineage: pseudorandom-generators
cites:
  - title: "Scrambled Multiply-with-Carry Pseudorandom Number Generators"
    url: "https://arxiv.org/abs/2610.27313"
    year: 2026
    arxiv: "2610.27313"
    doi: null
  - title: "Scrambled Linear Pseudorandom Number Generators"
    url: "https://arxiv.org/abs/1805.01407"
    year: 2021
    arxiv: "1805.01407"
    doi: "10.1145/3460772"
  - title: "Efficient multiply-with-carry random number generators with maximal period"
    url: "https://doi.org/10.1145/945511.945514"
    year: 2003
    arxiv: null
    doi: "10.1145/945511.945514"
---

# Scrambled Multiply-with-Carry Pseudorandom Number Generators

## One-sentence takeaway

Vigna proves that every multiply-with-carry (MWC) generator has an unavoidable flaw in its lattice structure in dimension k+2, shows that XORing each output with its carry (the "X" scrambler, one instruction off the dependency chain) removes every lattice defect his tests could find, ranks 52 million candidate multipliers with a normalization-independent geometric-mean score, and recommends MWC192X: 64-bit outputs from 192 bits of state in about 0.52 ns, with jump functions and a period of about 2^191.

## Why it matters here

GRID COMMAND's lockstep simulation needs a fast, seedable and reproducible PRNG that also supports jumping to independent per-system or per-thread streams. This paper gives a drop-in candidate from the author of xoshiro, with suggested multipliers for 64 to 256 bits of state, seeding instructions, and an explicit warning that matters for job systems: streams obtained by jumping are related through the same small-modulus generator, so the scrambler is needed when draws are mixed across streams. It also suggests MWC64X/32 for GPUs, where registers are scarce.

## Key ideas

- **Structural limitation.** For base b and lag k, the outputs (x_n, x_{n+1}, x_{n+k+1})/b lie, to within 1/b, on parallel planes at least about 1/(1.28√b) apart, whatever the multiplier. For b = 2^64 a 3-D birthday-spacings test needs about 3 TB of output to see this, but for b = 2^32 it fails in seconds. That makes the usual worst-case figure of merit meaningless for MWC generators.
- **Scrambler X.** It returns x_n ⊕ carry (for generalized MWC, x_n ⊕ ⌊τ_n/b⌋), generalizing Thomas's MWC64X, costs less than 7% per output, and removed every lattice defect detected in the tests. It's mandatory for 32-bit-base generators.
- **Ranking.** Candidates are ranked by a weighted geometric mean of spectral-test figures of merit, which social-choice results show is essentially the only ranking independent of how figures are normalized and of the other candidates. Nine combinations of base, lag and type were searched. Thomas's original MWC64X multiplier ranks 15,741st out of 22,982.
- **Speed (Zen 5 at 4.5 GHz).** With lag ≥ 2, consecutive multiplications are independent, so MWC192 and MWC256 take about 0.52 ns (2.3 cycles) per output, against 0.93 ns for MWC128 and about 2.05 ns for every generalized MWC (GMWC) variant. For comparison, xoshiro256++ takes 0.58, RomuTrio 0.58, and SFC64 0.49 with GCC (which has no jump function and only a 2^64 minimum period).
- **Alternatives.** GMWC128X when lattice quality matters more than speed (no structural limitation up to dimension 8), and MWC128X/32 for 32-bit outputs. The paper also corrects three errors in Goresky and Klapper's GMWC paper.

## Caveats

It's not cryptographic, despite the cs.CR primary listing. "Passes all tests we are aware of" is empirical, and the X scrambler has no theoretical analysis yet (the author lists it as open). The timings come from one microbenchmark harness with unrolling disabled, and the AVX-512 code generation trap needs `-mno-avx512vl` with GCC. For lockstep determinism the real requirement is integer-exact cross-platform behaviour, which MWC gives as long as a 64×64→128 multiply is available, but WASM or other targets without fast 128-bit products weren't measured.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.27313
- PDF: https://arxiv.org/pdf/2610.27313
- Author's PRNG page (reference code): https://prng.di.unimi.it/
- Scrambled linear generators (xoshiro): https://arxiv.org/abs/1805.01407
