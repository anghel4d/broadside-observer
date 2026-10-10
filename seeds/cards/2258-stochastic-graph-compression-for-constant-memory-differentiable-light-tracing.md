---
title: "Stochastic Graph Compression for Constant-Memory Differentiable Light Tracing"
authors:
  - "Linas Beresna"
  - "Eugene Fiume"
year: 2026
venue: "arXiv"
arxiv: "2610.10847"
doi: null
source: "https://arxiv.org/abs/2610.10847"
topics:
  - "differentiable-rendering"
seed_rank: 2258
seed_batch: "frontier-2026-10-10"
reviewed: "2026-10-10"
pool: "engines"
relevance_score: 7
cites:
  - title: "Stochastic Graph Compression for Constant-Memory Differentiable Light Tracing"
    url: "https://arxiv.org/abs/2610.10847"
    year: 2026
    arxiv: "2610.10847"
    doi: null
see: []
---

# Stochastic Graph Compression for Constant-Memory Differentiable Light Tracing

## One-sentence takeaway

Reservoir Light Replay Backpropagation keeps one reservoir-sampled sensor connection per light path and replays the RNG in the adjoint pass, giving an unbiased gradient whose memory is that of differentiating a single scattering event.

## Why it matters here

Differentiable rendering is a building block for inverse-graphics tooling in Anoptic; this removes the memory blow-up that made light tracing (splatting from every vertex) impractical to differentiate.

## Key ideas

- **Problem.** Autodiff of a light tracer records a graph growing with every valid sensor connection along the path.
- **Gap.** Adjoint path replay fixes depth for path tracing but its non-branching structure does not cover splatting.
- **Trick.** A streaming weighted reservoir keeps one representative connection per path during the primal pass.
- **Adjoint.** Deterministic path reconstruction by replaying the pseudorandom sequence; backprop only through the retained connection, still unbiased.

## Caveats

Single-connection retention trades memory for gradient variance; the abstract gives no variance or wall-clock numbers. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.10847
- PDF: https://arxiv.org/pdf/2610.10847
