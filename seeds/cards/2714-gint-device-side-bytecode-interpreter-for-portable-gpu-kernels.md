---
title: "Gint: A Device-Side Bytecode Interpreter for Portable GPU Kernel Programming"
authors:
  - "Ruoxi Shi"
  - "Fanbo Xiang"
  - "Zexiang Xu"
  - "Hao Su"
year: 2026
venue: "SIGGRAPH Asia 2026 Conference Papers (Kuala Lumpur, 1–4 Dec 2026)"
arxiv: null
doi: "10.1145/3829340.3842218"
source: "https://doi.org/10.1145/3829340.3842218"
version_reviewed: "DOI abstract (proceedings record dated 2026-11-30) + github.com/eliphatfs/gint docs at 2026-09-05 commit"
topics:
  - "gpu-interpreters"
  - "bytecode-vm"
  - "stack-machines"
  - "warp-centric-execution"
  - "dispatch-specialization"
  - "portable-gpu-kernels"
  - "superoptimization"
seed_rank: 2714
seed_batch: "craft-2026-11-25"
reviewed: "2026-11-25"
pool: "languages"
relevance_score: 8
lineage: batched-interpreters
cites:
  - title: "Gint: A Device-Side Bytecode Interpreter for Portable GPU Kernel Programming"
    url: "https://doi.org/10.1145/3829340.3842218"
    year: 2026
    arxiv: null
    doi: "10.1145/3829340.3842218"
---

# Gint: A Device-Side Bytecode Interpreter for Portable GPU Kernel Programming

## One-sentence takeaway

Gint runs a stack-machine bytecode interpreter inside the GPU kernel itself, treating each 32-thread warp as one vector lane over 32×4 float tiles and emitting one copy of the dispatch loop per reachable stack depth so the operand stack lives in registers; it gets within 0.5–10% of Triton on bandwidth-bound kernels (about 10× behind compiled code on compute-bound ones) and runs the same bytecode on NVIDIA, AMD and T-head hardware.

## Why it matters here

ano wants to run many small, heterogeneous rule and query programs over columns without paying a compile per program, and Anoptic wants GPU-side logic that can be generated at run time. Gint is a concrete, measured answer to "can an interpreter on the GPU be fast enough?": yes for memory-bound work, no for arithmetic-heavy kernels. Its two tricks, a whole warp as one wide SIMD lane (so dispatch cost is amortized over 128 values) and stack-depth-specialized dispatch (so the interpreter's stack never touches memory), carry over directly to a device-side evaluator for ano's masked array effects or GRID COMMAND's per-unit scripts. The headline demos, many different programs per launch (20 RL environments fused into one launch, 187× faster than eager PyTorch) and programs built on the device (a superoptimizer at 21.7 M candidates/s), are exactly the batched-interpreter pattern this lineage tracks.

## Key ideas

- **Warp = one lane.** Every instruction works on a 32×4 tile of floats (`REG_WIDTH = 4` per thread for ILP), so one opcode fetch and decode is amortized over 128 values.
- **Dispatch specialized by stack depth.** The dispatch loop is emitted once per reachable stack depth (PHI nodes carry state between dispatches), turning every operand-stack slot into an SSA register value in the back-end IR instead of an array in local memory.
- **Kernel variants by register budget.** The shipped binary holds two interpreter builds (`s7`: pool 7, 4 virtual registers, max stack 7; `l12`: pool 12, 8 registers, max stack 8); the host analyses each program's peak stack and register use and picks the smallest variant that fits, for occupancy. Virtual-register loads and stores are separate opcodes per register to avoid select chains.
- **Heterogeneous programs per launch.** Because programs are data, one launch can run many different programs (per-warp), and programs can be written by GPU code and executed without a host round-trip.
- **Portability by bytecode.** The interpreter is generated as LLVM IR for NVPTX and AMDGCN; the same bytecode runs unmodified on NVIDIA, AMD and T-head accelerators. Startup is about 0.3 ms.

## Caveats

Written from the published abstract (read through the DOI record's index metadata; the ACM page itself timed out) and the repository's `docs/kernel.md`, `docs/platforms.md`, `docs/superopt.md` and part of `docs/conductor.md`; the paper PDF was not read. The roughly 10× gap on compute-bound kernels is the honest limit: this is for bandwidth-bound and many-small-programs workloads, not a replacement for compiled shaders. The interpreter targets float tiles and a Python/PyTorch-facing front end; nothing here covers graphics pipelines, integer-heavy logic, or control-flow-divergent per-thread programs. The repository README was not available through the API (404).

## Links

- DOI: https://doi.org/10.1145/3829340.3842218
- Code: https://github.com/eliphatfs/gint
- Interpreter notes: https://github.com/eliphatfs/gint/blob/main/docs/kernel.md
- SIGGRAPH Asia 2026 papers list (session "Interaction, Holograms and Hardware"): https://jiongchen.github.io/siggraph-asia-2026-technical-papers/
