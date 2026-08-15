---
title: "No More Shading Languages: Compiling C++ to Vulkan Shaders"
authors: ["Hugo Devillers", "Matthias Kurtenacker", "Richard Membarth", "Stefan Lemme", "Michael Kenzel", "Ömercan Yazici", "Philipp Slusallek"]
year: 2025
venue: "HPG"
arxiv: null
doi: null
source: "https://graphics.cg.uni-saarland.de/papers/devillers-2025-hpg-vcc.pdf"
topics: [vulkan, shading-languages, spir-v, compilers]
seed_rank: 1031
seed_batch: "craft-2026-08-15"
reviewed: "2026-08-15"
pool: "engines"
relevance_score: 10
lineage: vulkan-realtime-rendering
cites:
  - title: "Futhark: Purely Functional GPU-Programming with Nested Parallelism and In-Place Array Updates"
    url: "https://doi.org/10.1145/3062341.3062354"
    year: 2017
    arxiv: null
    doi: "10.1145/3062341.3062354"
  - title: "CUDA C++ Programming Guide"
    url: "https://docs.nvidia.com/cuda/cuda-c-programming-guide/"
    year: 2025
    arxiv: null
    doi: null
see:
  - "097-mesh-shaders-in-the-vulkan-ecosystem"
  - "015-gpu-driven-rendering-pipelines"
  - "326-vulkan-descriptor-indexing-bindless"
  - "1002-futhark-purely-functional-gpu-programming"
  - "470-vulkan-meshlet-cad-scene-sample"
---

# No More Shading Languages: Compiling C++ to Vulkan Shaders

## One-sentence takeaway

Vcc (Clang + Shady IR) compiles ordinary C/C++ — pointers, recursion, function pointers — down to SPIR-V Vulkan shaders, treating GLSL/HLSL as an embedded library rather than a language.

## Why it matters here

Anoptic is C + Vulkan. Today every meshlet/RC/compute pass is a second language (GLSL/Slang) with a second type system and no real pointers. Vcc is the "write the kernel in the same C the engine is written in" compiler, with a real-time path tracer as the existence proof.

## Key ideas

- Shading languages are reframed as embedded DSLs on C++; GPU particulars (entry points, bindings, workgroup size, textures) are intrinsics and annotations in `<shady.h>`.
- Shady is a hybrid CFG / structured IR that can parse LLVM IR and SPIR-V and emit SPIR-V, CUDA, GLSL, or C11 — Vcc is "just" the Clang front-end.
- Features shaders traditionally ban (goto, recursion, function pointers, address-space-free pointers, pointer arithmetic) are lowered by stack management and continuation-passing so Vulkan will accept the binary.
- Evaluation includes a real-time path tracer competitive with native CUDA counterparts.

## Caveats

- Freestanding dialect: non-header-only libc/libstdc++ will not run on the GPU without extra work.
- Research compiler (HPG 2025); production Anoptic would still need a SPIR-V maintenance story and mesh-shader entry points, not just compute/path-trace.
- Divergence / control-flow lowering is the hard part — Uniformity Analysis in WGSL (PLDI 2026, inspected, not kept) is the sibling correctness story.

## Links

- Author PDF: https://graphics.cg.uni-saarland.de/papers/devillers-2025-hpg-vcc.pdf
- Vcc site: https://shady-gang.github.io/vcc/
- Vulkanised 2024 slides: https://vulkan.org/user/pages/09.events/vulkanised-2024/vulkanised-2024-hugo-devillers-saarland-university.pdf
