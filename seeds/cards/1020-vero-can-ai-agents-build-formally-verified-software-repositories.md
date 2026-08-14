---
title: "Vero: Can AI Agents Build Formally Verified Software Repositories?"
authors: ["Zhe Ye", "Hantao Lou", "Yuechun Sun", "Peiyang Song", "Zhengxu Yan", "Timothe Kasriel", "Qingyang Zhang", "Kaiyu Yang", "Soonho Kong", "Jingxuan He", "Dawn Song"]
year: 2026
venue: "arXiv:cs.LG"
arxiv: "2608.13522"
doi: null
source: "https://arxiv.org/abs/2608.13522"
topics: [type-safety, coding-agents]
seed_rank: 1020
seed_batch: "frontier-2026-08-14"
reviewed: "2026-08-14"
pool: "languages"
relevance_score: 8
lineage: type-safety
cites:
  - title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"
    url: "https://arxiv.org/abs/2310.06770"
    year: 2024
    arxiv: "2310.06770"
    doi: null
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
  - title: "VERINA: Benchmarking Verifiable Code Generation"
    url: "https://arxiv.org/abs/2505.23135"
    year: 2025
    arxiv: "2505.23135"
    doi: null
  - title: "seL4: Formal Verification of an OS Kernel"
    url: "https://doi.org/10.1145/1629575.1629596"
    year: 2009
    arxiv: null
    doi: "10.1145/1629575.1629596"
see:
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
  - "100-swe-bench-can-language-models-resolve-real-world-github-issu"
  - "1001-from-system-f-to-typed-assembly-language"
  - "1011-cyclone-a-safe-dialect-of-c"
---

# Vero: Can AI Agents Build Formally Verified Software Repositories?

## One-sentence takeaway

First repo-level joint code-and-proof benchmark (43 Lean 4 projects, 743 APIs, 2,705 specs): best agent fully solves 27/43, and ten instances resist every harness — the gap is lemma libraries, not local tactics.

## Why it matters here

Type-safety is a standing cluster, and last night’s Archive just minted TAL (1001) and Cyclone (1011). Vero is the agent-side complement: can a coding agent keep a multi-module proof store coherent? That is the question for any future ano/Anoptic path that wants machine-checked standing rules rather than tests. The audit mechanism (prove unsat / prove the reference wrong) is how a benchmark should treat its own ground truth.

## Key ideas

- Instances curated from Dafny/Verus/Coq/Python into Lean 4 scaffolds with frozen APIs and specs; proof-only vs code-and-proof modes.
- Formal audit accepts machine-checked negative evidence; used in curation to catch 38 spec defects across 9 instances.
- Anti-cheat: slot-scoped re-render, axiom allowlist (no `sorry`/`native_decide`), reject `@[implemented_by]` oracles.
- GPT-5.5 xhigh: 27/43 code-and-proof, 25/43 proof-only; 87% spec pass ≠ repo completion. Full solves share helpers across ≥5 specs in 65/82 cases. Agents freeze implementations early and grind proofs.

## Caveats

- Lean 4 only; concurrent/temporal protocols mostly absent.
- Full-solve metric is all-or-nothing; ~$106 per completed repo at the top config.
- Spec semantic completeness still human-reviewed; audit certifies formal satisfiability, not intent.

## Links

- arXiv: [2608.13522](https://arxiv.org/abs/2608.13522)
- PDF: https://arxiv.org/pdf/2608.13522
- Code: https://github.com/sunblaze-ucb/vero
