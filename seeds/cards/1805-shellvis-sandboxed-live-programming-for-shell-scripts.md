---
title: "ShellVis: Sandboxed Live Programming for Shell Scripts"
authors:
  - "Joshua Horowitz"
  - "Jeffrey Heer"
year: 2026
venue: "arXiv"
arxiv: "2609.11000"
doi: null
source: "https://arxiv.org/abs/2609.11000"
topics:
  - "embedded-scripting-dsls"
  - "batched-interpreters-ffi"
  - "custom-allocators-runtime"
seed_rank: 1805
seed_batch: "frontier-2026-09-12"
reviewed: "2026-09-12"
pool: "language"
relevance_score: 9
lineage: sandboxed-live-shell
cites:
  - title: "ShellVis: Sandboxed Live Programming for Shell Scripts"
    url: "https://arxiv.org/abs/2609.11000"
    year: 2026
    arxiv: "2609.11000"
    doi: null
see:
  - "630-definitional-interpreters-for-higher-order-programming-langu"
  - "1438-optimizing-an-ansi-c-interpreter-with-superoperators"
  - "1047-proof-carrying-code"
  - "1792-capability-based-computer-systems"
  - "1796-exokernel-an-operating-system-architecture-for-application-level-resource-management"
---

# ShellVis: Sandboxed Live Programming for Shell Scripts

## One-sentence takeaway

ShellVis makes live programming safe for shell scripts by confining side effects to a sandbox simulation of the real environment — so traces stay live without turning edit mistakes into disasters.

## Why it matters here

ano’s embedded scripting and GRID COMMAND’s NL→action path both need “see it run” without writing the real world. Sandboxed liveness is the language-systems bridge: interpreters that show effects while capability/exokernel discipline keeps the host safe.

## Key ideas

- Live programming runs and traces programs while editing — deadly when side effects are real.
- Proposal: sandbox the live session so effects hit a simulation of the true environment.
- Applies sandboxed liveness specifically to shell scripts (high effect surface, ubiquitous glue).
- Separates visibility/trace from commitment to the host — a commit-gate cousin at the language level.
- Relevant pattern for ano REPLs and engine console scripts that must not mutate production ECS state while exploring.

## Caveats

Shell fidelity of the sandbox vs real POSIX edge cases is the hard part; incomplete simulation breeds false confidence. Not a general ano language design paper — extract the sandboxing pattern. Do not remint Archive capability/exokernel 1792 / 1796 casually as duplicates of this idea.

## Links

- arXiv: [2609.11000](https://arxiv.org/abs/2609.11000)
- PDF: https://arxiv.org/pdf/2609.11000
