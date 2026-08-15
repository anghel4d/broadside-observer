---
title: "The BrowserGym Ecosystem for Web Agent Research"
authors:
  - "Thibault Le Sellier De Chezelles"
  - "Maxime Gasse"
  - "Alexandre Drouin"
  - "Massimo Caccia"
  - "Léo Boisvert"
  - "Megh Thakkar"
  - "Tom Marty"
  - "Rim Assouel"
  - "Sahar Omidi Shayegan"
  - "Lawrence Keunho Jang"
  - "Xing Han Lù"
  - "Ori Yoran"
  - "Dehan Kong"
  - "Frank F. Xu"
  - "Siva Reddy"
  - "Quentin Cappart"
  - "Graham Neubig"
  - "Ruslan Salakhutdinov"
  - "Nicolas Chapados"
  - "Alexandre Lacoste"
year: 2024
venue: "arXiv:cs.LG"
arxiv: "2412.05467"
doi: null
source: "https://arxiv.org/abs/2412.05467"
topics:
  - rag
  - retrieval
  - provenance
  - agent-eval
  - harness
  - computer-use-agents
seed_rank: 79
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "WorkArena: How Capable Are Web Agents at Solving Common Knowledge Work Tasks?"
    url: "https://arxiv.org/abs/2403.07718"
    year: 2024
    arxiv: "2403.07718"
    doi: null
  - title: "WebArena: A Realistic Web Environment for Building Autonomous Agents"
    url: "https://arxiv.org/abs/2307.13854"
    year: 2023
    arxiv: "2307.13854"
    doi: null
---

# The BrowserGym Ecosystem for Web Agent Research

## One-sentence takeaway

BrowserGym unifies web-agent benchmarks behind one gym-like observation/action space, and AgentLab is the companion framework for building, testing, and analyzing those agents.

## Why it matters here

Computer-use evaluation for ano and Broadside is otherwise a pile of incompatible harnesses; BrowserGym is the shared ACI plus the first large multi-benchmark LLM comparison on it.

## Key ideas

- Prior web-agent benchmarks were fragmented, so model comparisons were not reproducible.
- The original BrowserGym environment (Drouin et al., 2024) defined the gym-like interface; this paper extends it into an ecosystem that absorbs existing literature benchmarks.
- AgentLab covers agent creation, testing, and experiment management while new benchmarks can still be plugged in.
- First large-scale multi-benchmark run: 6 SOTA LLMs × 6 popular web-agent benchmarks.
- Claude-3.5-Sonnet leads almost every benchmark; GPT-4o wins the vision-heavy ones. Robust real-world web agents remain an open problem.

## Caveats

## Links

- arXiv: [2412.05467](https://arxiv.org/abs/2412.05467)
- PDF: https://arxiv.org/pdf/2412.05467
