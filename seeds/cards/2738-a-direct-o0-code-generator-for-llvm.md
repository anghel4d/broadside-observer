---
title: "A direct -O0 code generator for LLVM"
authors:
  - "Fangrui Song (MaskRay)"
year: 2026
venue: "MaskRay (blog), 26 Nov 2026"
arxiv: null
doi: null
source: "https://maskray.me/blog/llvm-direct-o0-code-generator"
version_reviewed: "web 2026-11-26"
topics:
  - "compiler-backends"
  - "baseline-code-generation"
  - "compile-time"
  - "llvm"
  - "per-function-fallback"
  - "differential-testing"
  - "debug-info"
seed_rank: 2738
seed_batch: "craft-2026-11-27"
reviewed: "2026-11-27"
pool: "languages"
relevance_score: 7
cites:
  - title: "A direct -O0 code generator for LLVM"
    url: "https://maskray.me/blog/llvm-direct-o0-code-generator"
    year: 2026
    arxiv: null
    doi: null
  - title: "TPDE: A Fast Adaptable Compiler Back-End Framework"
    url: "https://arxiv.org/abs/2505.22610"
    year: 2025
    arxiv: "2505.22610"
    doi: null
see: []
---

# A direct -O0 code generator for LLVM

## One-sentence takeaway

An experimental LLVM function pass compiles each function straight from IR to machine-code bytes, with no `MachineFunction` and no MIR pipeline, and hands any function it cannot handle to the regular pipeline in the same object file. On LLVM's compile-time tracker, `clang -O0 -g` builds take 14% fewer instructions on x86-64 and 21% fewer on AArch64. The back end alone runs 3–7× fewer instructions. The cost is 10% more `.text` on x86-64 and about the same size on AArch64.

## Why it matters here

Two workbench lessons. First, Anoptic is a C23 engine, and its edit-compile-run loop mostly runs on debug builds. The profile table in the post shows where `-O0 -g` back-end time goes: ISel 19–43%, MC encoding/object writing 10–22%, DWARF/`.eh_frame` up to 22%. It also shows that most of it is pipeline overhead, not code quality work. That is a useful reality check before choosing between clang, a TPDE-style back end or a custom JIT for hot-reload. Second, if ano ever emits native code for column kernels or standing rules, the design is a compact template for a baseline tier. It uses a trivial value model (fixed slots, single-use-in-block values stay in registers, only caller-saved registers). Its "unknown means fall back, because slow is a better failure than wrong" gate makes an exhaustive enum `switch` fail the build whenever a new attribute appears. And it uses the optimizing pipeline as a per-function differential oracle. The ano bridge is my extrapolation; the post is about clang.

## Key ideas

- **Direct, not one-pass.** `DirectCodeGen` runs first in the `-O0` codegen function pass manager and fills a private buffer (bytes, fixups, CFI points, line rows, variable slots, call sites). Nothing shared is touched until the function succeeds; on failure the function takes the regular pipeline. Section selection, DWARF and the object writer are reused.
- **Value model.** Static allocas get fixed frame slots. A value with one use in its own block lives only in a register; any other value is stored to its slot at definition, with the register kept as a droppable clean copy. Only caller-saved registers are used, so calls need no save/restore. Compare→branch, single-use load and constant-offset GEP are folded into their users.
- **What a skipped pipeline owes.** Every skipped pass that can change output is either reimplemented (stack protector, CFI, ENDBR64, PAC/BTI A-key, live debug values, GNU EH) or forces fallback (atomics, inline asm, SafeStack, XRay, retpolines and others). With distro hardening flags, 99.2–99.7% of sqlite3 and tramp3d functions stay on the direct path.
- **`-S` must print what `-c` encodes.** `MCInst`s are kept with their offsets and replayed on success. `llc -filetype=asm | llvm-mc` versus `-filetype=obj` gives identical disassembly and relocations on 272 modules. The round trip also found encoding mismatches in the regular pipeline.
- **Size.** About 2.0K shared lines, 1.8K x86-64, 1.7K AArch64 and 0.4K AsmPrinter; a new target implements 35 virtual hooks. With the pipeline gone, MC became the bottleneck, and five MC fixes landed upstream separately.

## Caveats

This is an unreviewed branch (`direct-codegen`, two commits), not upstream LLVM, and nothing has been posted for review. Only x86-64 and AArch64 ELF with the small code model are covered. Fallback rates rise with sanitizers (UBSan 12%, ASan 18%, TSan 85%) and are about 12% on AArch64 for plain `-O0`. Code is 10% larger on x86-64, and run-time speed of the output was not measured. No Csmith/YARPGen campaign or stage-2 `check-llvm` was run. The author states that an LLM agent (Claude Code) wrote most of the code and drafted the post, which he steered and edited. I read the full post, skimming the exceptions section.

## Links

- Post: https://maskray.me/blog/llvm-direct-o0-code-generator
- TPDE (comparison back end): https://arxiv.org/abs/2505.22610
