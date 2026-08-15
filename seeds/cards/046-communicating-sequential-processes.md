---
title: "Communicating Sequential Processes"
authors:
  - "C. A. R. Hoare"
year: 1978
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/359576.359585"
source: "https://doi.org/10.1145/359576.359585"
topics:
  - concurrency
  - archive
seed_rank: 46
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
cites:
  - title: "Guarded commands, nondeterminacy and formal derivation of programs"
    url: "https://doi.org/10.1145/360933.360975"
    year: 1975
    arxiv: null
    doi: "10.1145/360933.360975"
  - title: "A Calculus of Communicating Systems"
    url: "https://doi.org/10.1007/3-540-10235-3"
    year: 1980
    arxiv: null
    doi: "10.1007/3-540-10235-3"
see:
  - "591-guarded-commands-nondeterminacy-and-formal-derivation-of-pro"
  - "043-a-calculus-of-communicating-systems"
---

# Communicating Sequential Processes

## One-sentence takeaway

Hoare’s 1978 CACM paper proposes that concurrent programs be structured as sequential processes that synchronize by *unbuffered* named input/output — no shared variables, no buffers, Dijkstra guards for choice.

## Why it matters here

Deterministic multi-system Anoptic design is CSP-shaped: systems rendezvous on messages rather than mutate a shared heap. occam, Go channels, and a lot of game-netcode folklore sit on this paper.

## Key ideas

- A process is a sequential program; parallelism is `P || Q`. The only interaction is `P!e` (output) meeting `Q?x` (input) on a named channel, as a single atomic event.
- Guarded commands (from Dijkstra 1975) select among ready communications; if several guards are ready, the choice is nondeterministic.
- Shared memory is deliberately excluded so interference proofs become composition proofs.
- Examples include a bounded buffer (ironically built *from* processes, not assumed), a dining-philosophers treatment, and a prime sieve — the paper is as much a manifesto as a calculus.
- The later 1985 Prentice-Hall book *Communicating Sequential Processes* is the full theory (failures/divergences); cite the CACM paper for the original proposal. Milner’s CCS (1980) is the independent algebraic twin.

## Caveats

## Links

- DOI: [10.1145/359576.359585](https://doi.org/10.1145/359576.359585)
