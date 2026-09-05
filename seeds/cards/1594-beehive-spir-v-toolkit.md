---
title: "Experiences in Building a Composable and Functional API for Runtime SPIR-V Code Generation"
authors: ["Juan Fumero", "György Rethy", "Athanasios Stratikopoulos", "Nikos Foutris", "Christos Kotselidis"]
year: 2023
venue: "arXiv (cs.SE)"
arxiv: "2305.09493"
doi: null
source: "https://arxiv.org/abs/2305.09493"
topics: [vulkan-realtime-rendering, embedded-scripting-dsls]
seed_rank: 1594
seed_batch: "craft-2026-09-05"
reviewed: "2026-09-05"
pool: "languages"
relevance_score: 9
lineage: spirv-codegen
cites:
  - title: "SPIR-V Specification"
    url: "https://registry.khronos.org/SPIR-V/specs/unified1/SPIRV.html"
    year: 2023
    arxiv: null
    doi: null
see:
  - "1031-no-more-shading-languages-compiling-cpp-to-vulkan-shaders"
  - "015-gpu-driven-rendering-pipelines"
---

# Experiences in Building a Composable and Functional API for Runtime SPIR-V Code Generation

## One-sentence takeaway

Beehive is a generated Java composable/functional SPIR-V binary-module builder (plus assembler/disassembler) for JVM runtimes, kept maintainable across SPIR-V releases — TornadoVM compiles **3×** faster than its OpenCL C JIT and runs up to **1.52×** vs the OpenCL C backend.

## Why it matters here

Anoptic is C + Vulkan: specialization, ano→GPU lowers, and mesh/compute variants still want a *runtime SPIR-V builder* beside Vcc 1031 (C++ → SPIR-V compiler) and GPU-driven pipelines 015. Beehive is the “emit a valid module from a host language without hand-writing binary” leftover — instruction builders, validation, and a spec-driven codegen so a new SPIR-V revision is not a rewrite. Steal the composable-builder architecture; do not wait for a Java runtime in the engine.

## Key ideas

- **Generated, not hand-written opcode soup.** Framework auto-generates a Java library from the SPIR-V spec so new releases are a regeneration, and the same pipeline can target other binary standards.
- **Assembler + disassembler + console client.** Round-trip text ↔ binary for debugging modules the runtime just emitted.
- **TornadoVM existence proof.** First Java path that dynamically builds SPIR-V modules; used as TornadoVM’s SPIR-V backend vs the older OpenCL C JIT.
- **Numbers given.** Compile **3×** faster than TornadoVM’s OpenCL C JIT; execute up to **1.52×** faster than that OpenCL C backend on the paper’s heterogeneous offload suite.

## Caveats

Java/JVM-first (TornadoVM). Patterns transfer to a C builder; the artifact is not a drop-in for Anoptic’s C core. 2023 paper — SPIR-V has moved; the maintain-by-regeneration claim is the durable bit. Not a shading-language replacement (that is Vcc 1031) and not a GPU-driven pipeline (015). Near-keeper on Craft 2026-09-03. Do not remint 1031 / 015.

## Links

- arXiv abs: https://arxiv.org/abs/2305.09493
- PDF: https://arxiv.org/pdf/2305.09493
- Code: https://github.com/beehive-lab/beehive-spirv-toolkit
- TornadoVM: https://github.com/beehive-lab/TornadoVM
