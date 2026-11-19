---
title: "Detecting Empty Abstractions and Pruning Dead Paths in the Linux eBPF Verifier with Abstract Step Functions"
authors:
  - "Harishankar Vishwanatha"
  - "Srinivas Narayana"
  - "Santosh Nagarakatte"
year: 2026
venue: "arXiv preprint (cs.PL)"
arxiv: "2611.23584"
doi: null
source: "https://arxiv.org/abs/2611.23584"
version_reviewed: "v1"
topics:
  - "abstract-interpretation"
  - "ebpf"
  - "bitwise-domains"
  - "static-analysis"
  - "verified-operators"
seed_rank: 2646
seed_batch: "craft-2026-11-19"
reviewed: "2026-11-19"
pool: "languages"
relevance_score: 7
see:
  - "701-abstract-interpretation-a-unified-lattice-model-for-static-a"
cites:
  - title: "Detecting Empty Abstractions and Pruning Dead Paths in the Linux eBPF Verifier with Abstract Step Functions"
    url: "https://arxiv.org/abs/2611.23584"
    year: 2026
    arxiv: "2611.23584"
    doi: null
---

# Detecting Empty Abstractions and Pruning Dead Paths in the Linux eBPF Verifier with Abstract Step Functions

## One-sentence takeaway

The eBPF verifier tracks each register with interval domains plus tristate numbers but had no empty-set state, so contradictory branch refinements analysed dead paths and broke domain invariants; a formally verified constant-time operator, tnum_step (jump to the next integer matching a tristate bitmask), gives a sound and complete emptiness check across domains at 1.48% overhead and is now in mainline Linux.

## Why it matters here

ano's optimizer will track value ranges and bit facts on columns (masks, flags, packed ids) to drop dead branches and bounds checks. This paper is a production-grade lesson: combining interval and bitmask domains without a bottom element causes real failures, and the fix is a constant-time intersection test. tnum_step is a small, verified primitive we can reuse for bitmask-aware range analysis.

## Key ideas

- **The bug class.** Interval and tristate domains refined at a branch can contradict each other; without ⊥ the verifier keeps analysing an unreachable path and later operators break their non-emptiness preconditions.
- **Impact.** A multi-year Linux issue behind production outages, false rejections and state explosion.
- **Abstract step functions.** A general way to test in O(1) whether intervals and non-convex domains intersect, without scanning values.
- **tnum_step.** Formally verified constant-time jump to the next integer that satisfies a tristate bitmask; upstreamed to mainline Linux.
- **Cost.** 1.48% overhead on kernel selftests and production suites such as Cilium.

## Caveats

Abstract-level read of the 23-page v1 preprint (17 Nov 2026). The technique is specific to the eBPF verifier's domains; how it extends to richer relational domains is not covered in the abstract.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.23584
- PDF: https://arxiv.org/pdf/2611.23584
