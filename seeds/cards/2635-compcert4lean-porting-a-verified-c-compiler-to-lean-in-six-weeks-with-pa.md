---
title: "CompCert4Lean: Porting a Verified C Compiler to Lean in Six Weeks with Parallel Coding Agents"
authors:
  - "Cong Wang"
  - "Zhiyang Chen"
  - "Fan Long"
  - "Martin Rinard"
year: 2026
venue: "arXiv preprint (cs.PL)"
arxiv: "2611.21084"
doi: null
source: "https://arxiv.org/abs/2611.21084"
version_reviewed: "v1"
topics:
  - "typed-programming-systems"
seed_rank: 2635
seed_batch: "frontier-2026-11-18"
reviewed: "2026-11-18"
pool: "languages"
relevance_score: 8
see:
  - 1469-string-diagrams-for-monoidal-categories-in-rocq
  - 720-inductive-definitions-in-the-system-coq-rules-and-properties
cites:
  - title: "CompCert4Lean: Porting a Verified C Compiler to Lean in Six Weeks with Parallel Coding Agents"
    url: "https://arxiv.org/abs/2611.21084"
    year: 2026
    arxiv: "2611.21084"
    doi: null
---

# CompCert4Lean: Porting a Verified C Compiler to Lean in Six Weeks with Parallel Coding Agents

## One-sentence takeaway

One expert directing parallel LLM agents ported CompCert 3.17's verified compiler core from Rocq to Lean in about six weeks, discharging all 4,908 recorded proof obligations without project-specific axioms; 88.8% of the 1,071 human interactions were about workflow and coordination, and only three supplied technical direction.

## Why it matters here

This is the strongest data point yet on agents doing large, proof-carrying language-infrastructure work under a human who mostly organises: partition along dependencies, audit statements before proofs, then reconstruct proofs in parallel against stable interfaces. That workflow is directly reusable for verified pieces of ano's toolchain, and the post-port optimisation campaign shows agents improving a compiler while keeping the end-to-end correctness theorem.

## Key ideas

- **Scope.** Typed CompCert C through x86-64 assembly; produces executable Linux binaries.
- **Workflow.** Partition the development along dependencies, audit translated definitions and theorem statements before large-scale proof reconstruction, then reconstruct proofs in parallel against stable interfaces.
- **Completeness.** All 4,908 recorded proof obligations discharged without project-specific axioms.
- **Human role.** Of 1,071 human interactions, 88.8% concerned workflow and coordination; three supplied technical direction.
- **Optimisation.** Under matched 24 active-hour budgets, GPT-6-astra produced a Lean candidate with 11.7% lower generated-program runtime across 29 small-test programs versus 2.3% for its Rocq candidate, both relative to CompCert 3.17 and preserving the end-to-end correctness theorem.

## Caveats

Abstract-level read of the v1 preprint (Tuesday 17 Nov 2026 listing; 39 pages). The optimisation comparison is one model on 29 small programs; the expert's skill and the existing CompCert proof structure are large confounders for generalising the six-week figure.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.21084
- PDF: https://arxiv.org/pdf/2611.21084
- HTML: https://arxiv.org/html/2611.21084v1
