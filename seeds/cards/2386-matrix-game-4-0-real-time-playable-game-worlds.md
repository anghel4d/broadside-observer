---
title: "Matrix-Game 4.0: Harnessing Video Models for Real-Time Playable Game Worlds"
authors:
  - "Jihai Zhang"
  - "Runjia Qian"
  - "Kaiqin Kong"
  - "Biao Jiang"
  - "Puyi Wang"
  - "Siru Chen"
  - "Tianle Li"
  - "Guanjie Chen"
  - "Junyi Wu"
  - "Chubin Chen"
  - "Yuanhang Li"
  - "Kaichen Huang"
  - "Haobo Zhang"
  - "Yangguang Li"
  - "Wei Yu"
  - "Guibin Chen"
  - "Yu Cheng"
  - "Yahui Zhou"
year: 2026
venue: "arXiv preprint (Skywork AI technical report)"
arxiv: "2610.27999"
doi: null
source: "https://arxiv.org/abs/2610.27999"
topics:
  - "procedural-content-codegen"
  - "vulkan-realtime-rendering"
seed_rank: 2386
seed_batch: "frontier-2026-10-22"
reviewed: "2026-10-22"
pool: "game-ai"
relevance_score: 8
cites:
  - title: "Matrix-Game 4.0: Harnessing Video Models for Real-Time Playable Game Worlds"
    url: "https://arxiv.org/abs/2610.27999"
    year: 2026
    arxiv: "2610.27999"
    doi: null
---

# Matrix-Game 4.0: Harnessing Video Models for Real-Time Playable Game Worlds

## One-sentence takeaway

Matrix-Game 4.0 stops asking a video model to remember the world: a lightweight game engine holds state and executes rules, a multimodal coding agent writes game code from player requests and captions the engine's events, and a distilled autoregressive video renderer turns the engine's low-poly proxy frames into detailed visuals, reaching 480p at 60 FPS with 112 ms key-press-to-display latency on one RTX 5090.

## Why it matters here

This is the "engine is the referee, neural net is the renderer" split that a custom-engine project like Anoptic / GRID COMMAND would want if it ever uses generative visuals: the simulation stays deterministic and authoritative, and generation is a post-process conditioned on structure. It is also a working loop for natural-language gameplay edits ("add a shield that breaks at its durability limit") that land as engine code, not as pixels, which connects to card 2364's game-creation agents.

## Key ideas

- **Three roles.** Code defines the rules, the engine maintains state and renders simplified geometry, the video model supplies materials, lighting and atmosphere. The engine provides continuous external correction, so errors do not compound through autoregressive rollout as in pure video world models.
- **Agent in both directions.** Upstream it turns player ideas into game code and scene content registered with the engine; downstream it converts engine state and events (e.g. a shot hitting an oil barrel) into dynamic captions for the renderer.
- **Paired training data.** Pixel-aligned low-poly structure renders, high-fidelity renders and proxy depth captured in Unreal Engine 5 under identical cameras and frame indices.
- **Real-time distillation.** The renderer is distilled to a causal generator that emits four-frame chunks with one or two denoising steps; single-step generation sustains 83 FPS with about 18.2 GiB peak memory on an RTX 5090, about 67 FPS on an RTX 5080 and 58 FPS on an RTX 5070 Ti (fixed prompts).
- Shooter and driving demos with engine-enforced mechanics; code, weights and low-poly assets are released.

## Caveats

Technical report with demos; there is no benchmark of rule compliance or long-run visual consistency, and quality is shown on held-out examples rather than measured against games. 480p output, and the latency comparison table mixes systems on different hardware and resolutions. The renderer is trained on UE5 content, so look and generalization depend on that capture set. The "engine" is a lightweight custom simulation, not a production engine.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.27999
- PDF: https://arxiv.org/pdf/2610.27999
