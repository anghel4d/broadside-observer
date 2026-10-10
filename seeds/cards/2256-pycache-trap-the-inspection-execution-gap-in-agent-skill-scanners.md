---
title: "PyCache Trap: The Inspection-Execution Gap in Agent Skill Scanners"
authors:
  - "Jie Liao"
  - "Simeng Qin"
  - "Wenqi Ren"
  - "Wei Zhou"
  - "Junhao Wen"
  - "Ranjie Duan"
  - "Yang Liu"
  - "Xiaojun Jia"
year: 2026
venue: "arXiv"
arxiv: "2610.10612"
doi: null
source: "https://arxiv.org/abs/2610.10612"
topics:
  - "agent-security"
  - "agent-skills"
seed_rank: 2256
seed_batch: "frontier-2026-10-10"
reviewed: "2026-10-10"
pool: "agents"
relevance_score: 7
cites:
  - title: "PyCache Trap: The Inspection-Execution Gap in Agent Skill Scanners"
    url: "https://arxiv.org/abs/2610.10612"
    year: 2026
    arxiv: "2610.10612"
    doi: null
see: []
---

# PyCache Trap: The Inspection-Execution Gap in Agent Skill Scanners

## One-sentence takeaway

A skill package can ship benign Python source plus a substituted `__pycache__` bytecode file that the loader runs instead, and seven skill scanners missed it 94–100% of the time.

## Why it matters here

Broadside's own agents load third-party skills and plugins; this shows that reviewing the source you can read is not reviewing what will execute, which is a concrete admission rule for any harness we build.

## Key ideas

- **Attack.** Pair benign source with a loader-accepted `.pyc` cache carrying different behaviour, wired to a task-relevant invocation.
- **Scanner evasion.** Scanner-guided rewording changes the invocation text while the cache body stays fixed.
- **Result.** 94–100% attack success across 100 skills and seven scanners, with no semantic recognition of the cached behaviour.
- **Defence (EAV).** Execution-aware validation builds a typed execution graph over instructions, scripts, imports and runtime artifacts, and reproduces compiled artifacts from trusted source; it catches all 100 source-present substitutions and reaches 92.8% recall at 10% FPR across five attack families.

## Caveats

Python-loader specific; the defence is scoped to supported loaders and code-object normalization. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.10612
- PDF: https://arxiv.org/pdf/2610.10612
