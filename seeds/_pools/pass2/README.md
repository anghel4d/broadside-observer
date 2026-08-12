# Pass 2 — Systems prefill (2026-08-13)

## Goal
Survey ~1000 NEW candidate papers/works (no modern LLM/transformer/deep-RL agent stack), keep top 250 as seed cards 251–500.

## Ban rules (reject if title/abstract matches, case-insensitive)
Primary banned regex covers: LLM, large language, transformer, ChatGPT, GPT-N, BERT, RAG, neural radiance, NeRF, Gaussian splat, diffusion model, reinforcement learning, deep RL, multi-agent RL, AlphaStar, language model, foundation model, vision-language, VLM, CLIP, Stable Diffusion, agentic, and related ML-agent stack terms.

Allowed: classical game/sim AI (A*, JPS, GOAP/STRIPS/HTN, behavior trees, utility AI, influence maps, boids, classical RTS search/MCTS without deep RL), HPC, realtime, engine, classical real-time graphics.

## Counts
- Merged unique candidates: **980**
- Top seeds written: **250** (cards `251`–`500`)
- Pool breakdown: `{'engine': 50, 'gameai': 49, 'realtime': 22, 'hpc': 76, 'graphics': 53}`
- Memory-allocation seeds (≥10 required): **28**
- ECS seeds (≥10 required): **15**

## Floors
Hand-curated floor file `floors_curated.jsonl` (12 allocator + 12 ECS) is force-merged before ranking.

## Outputs
- `hpc.jsonl`, `graphics.jsonl`, `realtime.jsonl`, `engine.jsonl`, `gameai.jsonl`
- `merged.jsonl`, `top250.jsonl`
- Cards under `seeds/cards/251-*.md` … `500-*.md`
- `seed_batch`: `systems-prefill-2026-08-13`
