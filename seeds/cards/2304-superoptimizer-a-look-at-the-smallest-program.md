---
title: "Superoptimizer: A Look at the Smallest Program"
authors:
  - "Henry Massalin"
year: 1987
venue: "ASPLOS II (2nd Int. Conf. on Architectural Support for Programming Languages and Operating Systems), 122–126"
arxiv: null
doi: "10.1145/36206.36194"
source: "https://web.stanford.edu/class/cs343/resources/superoptimizer.pdf"
topics:
  - superoptimization
  - program-search
  - peephole-optimization
  - instruction-sets
seed_rank: 2304
seed_batch: "archive-2026-10-16"
reviewed: "2026-10-16"
pool: "languages"
relevance_score: 8
lineage: superoptimization
see:
  - 1438-optimizing-an-ansi-c-interpreter-with-superoperators
  - 1152-egg-fast-and-extensible-equality-saturation
cites:
  - title: "Superoptimizer: A Look at the Smallest Program"
    url: "https://doi.org/10.1145/36206.36194"
    year: 1987
    arxiv: null
    doi: "10.1145/36206.36194"
  - title: "egg: Fast and Extensible Equality Saturation"
    url: "https://doi.org/10.1145/3434304"
    year: 2021
    arxiv: "2004.03082"
    doi: "10.1145/3434304"
---

# Superoptimizer: A Look at the Smallest Program

## One-sentence takeaway

Massalin's superoptimizer finds the provably shortest machine-code sequence for a small function by brute-force enumeration over an instruction set, made practical by a cheap probabilistic test (run each candidate on a few hand-picked inputs) and by pruning sequences already known to equal something shorter — and it discovers branch-free bit tricks humans don't, such as a four-instruction 68020 signum.

## Why it matters here

This is the origin of search-based code generation, which the library meets later as equality saturation (egg, 1152) and interpreter superoperators (1438). For ano's backend or any engine VM, the practical payoff is a peephole table: run an offline search over short sequences once, and ship the discovered rewrites. The "cheap test first, expensive verification only for survivors" structure is also exactly how agent-generated code should be filtered.

## Key ideas

- **Exhaustive search by length.** Enumerate all programs of length 1, 2, 3 … over a chosen instruction subset; the first program equivalent to the source is minimal by construction.
- **Probabilistic equivalence test.** The first version compared full boolean expressions of programs (about 40 programs per second, so only up to 3 instructions). Running candidates on test vectors instead (e.g. −1000, 0, 456 for signum, then −1024..1024) reached about 50,000 programs per second; the author reports never finding an incorrect program among those that passed, and checked survivors by hand.
- **Pruning with N-dimensional bit tables.** Any subsequence equivalent to a shorter one cannot appear in an optimal program, so sequences like "move X,Y; move Y,X" are rejected by table lookup; the tables can be filled by a human or by running the superoptimizer itself with the boolean test.
- **Branch-free results.** Many functions normally written with conditional jumps come out as carry-flag arithmetic without branches, which matters on pipelined machines; signum takes 4 instructions on the 68000 family versus 9 from the SUN-3 C compiler, and 3 on the 8086.
- **Instruction-set critique.** Re-running the appendix programs on the WE32000 always produced longer code, traced to its missing add-with-carry and flag semantics, so the tool doubles as an ISA design probe.

## Caveats

Search is exponential in program length: 12-instruction programs took several hours on a 16 MHz 68020, so it is not a compiler pass. Pointers and memory were out of reach, so it works best for register-to-register code. The probabilistic test is not a proof, and the implementation had to run on the target ISA. Modern successors (STOKE, Souper, equality saturation) replace the test vectors with SMT solvers. The link is a course mirror of the ACM paper.

## Links

- Paper (PDF mirror): https://web.stanford.edu/class/cs343/resources/superoptimizer.pdf
- Paper (DOI): https://doi.org/10.1145/36206.36194
