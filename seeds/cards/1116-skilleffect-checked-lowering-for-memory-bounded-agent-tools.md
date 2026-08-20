---
title: "SkillEffect: Checked Lowering for Memory-Bounded Agent Tools"
authors:
  - "Yinuo Wang"
  - "Yiyu Shi"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2608.17007"
doi: null
source: "https://arxiv.org/abs/2608.17007"
topics:
  - "batched-interpreters-ffi"
  - "custom-allocators-runtime"
  - "continual-agent-skills"
seed_rank: 1116
seed_batch: "frontier-2026-08-20"
reviewed: "2026-08-20"
pool: "agents"
relevance_score: 10
lineage: arena-agent-tools
cites:
  - title: "DeepSeek Harness: Everything is a Plugin"
    url: "https://github.com/deepseek-ai/deepseek-harness"
    year: 2026
    arxiv: null
    doi: null
  - title: "When Lifetimes Liberate: A Type System for Arenas with Higher-Order Reachability Tracking"
    url: "https://arxiv.org/abs/2509.04253"
    year: 2026
    arxiv: "2509.04253"
    doi: null
  - title: "Per-Frame Arena Allocation Patterns in Games"
    url: "https://www.gamedeveloper.com/programming/arena-memory-allocators"
    year: 2012
    arxiv: null
    doi: null
  - title: "GPU implementation of a resource-constrained virtual machine"
    url: "https://arxiv.org/abs/2608.16387"
    year: 2026
    arxiv: "2608.16387"
    doi: null
see:
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "921-when-lifetimes-liberate-a-type-system-for-arenas"
  - "343-per-frame-arena-allocation-patterns-in-games"
  - "1082-gpu-implementation-of-a-resource-constrained-virtual-machine"
  - "1079-helix-model-harness-co-evolution-for-recursive-self-improvement"
---

# SkillEffect: Checked Lowering for Memory-Bounded Agent Tools

## One-sentence takeaway

A skill is not a prompt: it is a checked lowering into an arena-bound VM, with atomic capacity leases and a postcondition, so a tool call cannot blow the memory cap even when the generated program is semantically right.

## Why it matters here

Standing topic: agent tools + engine arenas. DeepSeek Harness (1050) made the harness a plugin object; HELIX (1079) evolves that object; Uxn-Vulkan (1082) is a hard-capped GPU VM. SkillEffect is the missing runtime contract for *tool bodies*: the model emits a program against existing tool interfaces, an independent checker rebuilds the lowering from the immutable input, and execution happens inside an arena with a leased cap. Anoptic's lock-free ECS already thinks in arenas (343, 921). GRID COMMAND NL-order loops will spawn tool-shaped jobs (path, query, mesh extract) that must not OOM the sim. This is how you keep that promise without trusting the LLM.

## Key ideas

- Relation plugin = source recognizer + input-fact extractor + bounded-IR constructor + arena-bound function + postcondition. Generality is architectural, not automatic — each computation family needs an audited plugin.
- Independent checker rebuilds the proposed lowering from the submitted program and immutable input *before* granting execution authority. The model does not get to mark its own homework.
- Shared runtime: checked selection, bounded-VM execution, atomic capacity leasing, staged publication. Six plugins cover streaming reduction through bounded-heap Top-k.
- Bounded access cuts peak memory and raises completion under externally fixed caps. XLSX onboarding is the working example of a real tool surface.

## Caveats

- Not a drop-in for arbitrary Python tools — you write the relation plugin. Unaudited skills stay unbounded.
- Does not replace a serving-layer KV policy (1077/1080); this is the *tool-side* memory bound, not the prefix cache.
- Evaluated on six operator families, not a GRID COMMAND order set.

## Links

- arXiv: [2608.17007](https://arxiv.org/abs/2608.17007)
