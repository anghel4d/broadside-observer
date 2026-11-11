---
title: "Deterministic, Reproducible Inference in Exact Integer Arithmetic, and Verifiable Distributed Inference as Its Consequence"
authors:
  - "Sayed Amir Karim"
year: 2026
venue: "arXiv preprint (cs.LG)"
arxiv: "2611.13730"
doi: null
source: "https://arxiv.org/abs/2611.13730"
topics:
  - "determinism"
  - "fixed-point-arithmetic"
  - "reproducibility"
  - "lockstep"
  - "verifiable-computation"
seed_rank: 2555
seed_batch: "craft-2026-11-11"
reviewed: "2026-11-11"
pool: "systems"
relevance_score: 8
lineage: game-networking
cites:
  - title: "tritify (code)"
    url: "https://github.com/pelloran-inc/tritify"
    year: 2026
    arxiv: null
    doi: null
see:
  - "016-deterministic-lockstep"
  - "276-floating-point-determinism"
---

# Deterministic, Reproducible Inference in Exact Integer Arithmetic, and Verifiable Distributed Inference as Its Consequence

## One-sentence takeaway

tritify runs real transformer, MoE and SAM 2.1 forward passes entirely in specified integer arithmetic (ternary weights, fixed-point scales, integer `isqrt`, lookup-table softmax), so outputs are bit-identical across CPU ISAs, CPU versus GPU, and machines, which turns "run it elsewhere" into "run it elsewhere and check the SHA-256".

## Why it matters here

This is the lockstep-RTS determinism problem solved for neural nets. GRID COMMAND needs any learned unit policy, pathing heuristic or commander model to produce the same bits on every client, and the paper is a careful checklist of what that actually takes: not just "no floats" but fixed integer widths, defined overflow and rounding (round-half-away-from-zero shifts), fixed accumulation order and a deterministic schedule. It also shows a clean architecture to copy, a frozen generic integer engine plus per-model plugins with float "reference twins" kept only for verification.

## Key ideas

- **Representation.** A tensor is integer codes plus one fixed-point scale (integer mantissa and shift); weights are quantized once to balanced ternary, activations per tensor at run time with no calibration pass.
- **No float on the hot path.** Matmul accumulation, requantization, residual adds, RMSNorm (integer reduction plus integer inverse square root) and attention scaling are all integer; nonlinearities and softmax are offline-built integer tables with declared error.
- **Three separate claims.** Cross-hardware bit-identity, decision fidelity to the float reference on tested prompts, and location independence, each verified separately and kept apart on purpose.
- **Split anywhere.** GLM-4.5-Air (about 107B parameters, 427 GB of integer codes) generated an answer across three machines, none able to hold the model, with the same per-layer hashes as a single host.
- **Checkable offload.** An untrusted server's bytes can be re-derived against an open scalar oracle; the author frames this as audit by sampling, not free total verification.

## Caveats

Single-author preprint. No speed-up is claimed, and bandwidth can make distributed runs slower than local ones. GPU bit-identity is shown only for the ternary GEMM on Apple M3 Metal, not whole models. Fidelity is "matches the float reference on the cases tested", and defence against a dishonest server is future work. I read the abstract, claims and data-path sections.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.13730
- PDF: https://arxiv.org/pdf/2611.13730
- Code: https://github.com/pelloran-inc/tritify
