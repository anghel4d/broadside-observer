---
title: "Scaling Inference-Time Compute with Teams of Coding Agents"
authors:
  - "Keenan Samway"
  - "Daniel D'souza"
  - "Omar Darwiche Domingues"
  - "Marzieh Fadaee"
  - "Tan Yi-Chern"
  - "Nouha Dziri"
year: 2026
venue: "arXiv"
arxiv: "2610.17471"
doi: null
source: "https://arxiv.org/abs/2610.17471"
topics:
  - "agentic-llm-serving"
  - "runtime-harness-evolution"
seed_rank: 2288
seed_batch: "frontier-2026-10-14"
reviewed: "2026-10-14"
pool: "agents"
relevance_score: 8
lineage: runtime-harness-evolution
cites:
  - title: "Scaling Inference-Time Compute with Teams of Coding Agents"
    url: "https://arxiv.org/abs/2610.17471"
    year: 2026
    arxiv: "2610.17471"
    doi: null
see: []
---

# Scaling Inference-Time Compute with Teams of Coding Agents

## One-sentence takeaway

Treat multi-agent coding teams as a compute-allocation problem: workers are worth most as planners — a lead that delegates only planning and implements/verifies itself matches full delegation at half the cost, and a heterogeneous 17-agent team comes within 1.4 points of a strong 5-agent team at 70% lower cost.

## Why it matters here

A measured recipe for how M.'s own agent fleets should spend tokens: spawn cheap planners, keep implementation on the strong model, and stop adding implementers/verifiers past about four — complementary to the Frontier finding that dynamic sub-agent concurrency rarely pays.

## Key ideas

- **Minimal harness.** Built from scratch; vary one axis at a time — the stage where the lead delegates (planning, implementation, verification), team model mix, and worker count — on ProgramBench.
- **Teams cost 3–7×.** Teams beat solo agents, but naïvely at three to seven times the cost.
- **Planning is the best use of workers.** Delegating only planning matches throughout-delegation reward at half the cost.
- **Cheap models plan, not implement.** A strong lead with cheap planners recovers 47.5% of the all-strong team's reward gain for 13.9% of its extra cost; cheap implementers lower reward.
- **Scaling.** Planners keep helping as the team grows; implementers and verifiers plateau beyond four workers.

## Caveats

Single benchmark (ProgramBench) and one bespoke harness; the cost numbers depend on the specific model price mix. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.17471
- PDF: https://arxiv.org/pdf/2610.17471
- HTML: https://arxiv.org/html/2610.17471v1
