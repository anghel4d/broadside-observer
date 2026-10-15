---
title: "Efficient Software-Based Fault Isolation"
authors:
  - "Robert Wahbe"
  - "Steven Lucco"
  - "Thomas E. Anderson"
  - "Susan L. Graham"
year: 1993
venue: "SOSP '93 (14th ACM Symposium on Operating Systems Principles), 203–216"
arxiv: null
doi: "10.1145/168619.168635"
source: "https://crypto.stanford.edu/cs155old/cs155-spring09/papers/sfi.pdf"
topics:
  - sandboxing
  - software-fault-isolation
  - region-memory-capabilities
  - extensibility
seed_rank: 2306
seed_batch: "archive-2026-10-16"
reviewed: "2026-10-16"
pool: "systems"
relevance_score: 9
lineage: software-fault-isolation
see:
  - 1811-a-fast-in-place-interpreter-for-webassembly
  - 1792-capability-based-computer-systems
  - 1767-authority-is-not-a-string-a-capability-scoped-harness-for-prompt
cites:
  - title: "Efficient Software-Based Fault Isolation"
    url: "https://doi.org/10.1145/168619.168635"
    year: 1993
    arxiv: null
    doi: "10.1145/168619.168635"
  - title: "A Fast In-Place Interpreter for WebAssembly"
    url: "https://doi.org/10.1145/3563311"
    year: 2022
    arxiv: "2205.01183"
    doi: "10.1145/3563311"
---

# Efficient Software-Based Fault Isolation

## One-sentence takeaway

Wahbe et al. isolate untrusted modules inside one address space by giving each a "fault domain" (an aligned segment of code and data) and rewriting its object code so every store or indirect jump whose target cannot be checked statically is forced into that segment with two inserted instructions ("sandboxing") using dedicated registers — trading about 4% slower untrusted code for cross-domain calls an order of magnitude cheaper than hardware-protected RPC.

## Why it matters here

This is the ancestor of NaCl and WebAssembly's linear-memory model (the library has a Wasm interpreter, 1811) and the low-level counterpart of capability systems (1792). For Anoptic mods, ano plugins, or agent-written code running inside the engine, it states the design trade-off precisely: pay a small tax on every untrusted store and branch to make calls across the trust boundary nearly as cheap as normal calls, which matters when callbacks are frequent and small.

## Key ideas

- **Unsafe instructions only.** PC-relative branches and stores with immediate addresses are verified statically; only jumps through registers (including returns) and register-addressed stores need checks.
- **Segment matching vs. sandboxing.** Segment matching inserts four instructions that compare the target's upper bits with the segment id and trap on mismatch (good for debugging). Address sandboxing just masks off the upper bits and ORs in the segment id — two instructions, no branch; it does not catch the bad address but guarantees it can only hit the module's own domain.
- **Dedicated registers close the bypass.** Checked addresses go through registers the untrusted code may never write, so jumping into the middle of a check sequence still yields a safe address; a simple verifier checks every unsafe region of a module before loading it. Removing five registers from gcc's allocator did not significantly change SPEC92 averages on the DECstation.
- **Cheap guarded stack pointer.** Guard zones around segments let small-offset stack accesses skip sandboxing; a hardware fault catches anything that strays into the guard.
- **Numbers.** Average 4% execution overhead on a suite including SPEC92 on both the DECstation 5000/240 and DEC Alpha; a safe cross-domain RPC took about 1.1 µs and 0.8 µs respectively; in POSTGRES running the Sequoia 2000 benchmark with untrusted geometric operators, fault-isolation overhead dropped by more than 3x versus hardware isolation.

## Caveats

The original scheme protects writes and jumps but not reads, so untrusted code can still read the host's memory (later systems such as NaCl and Wasm also sandbox loads). It assumes RISC architectures with plenty of registers; x86 needed different techniques. Speculative-execution attacks post-date the paper and break the "masked address is harmless" argument for reads. Numbers are 1993 hardware. The link is a course mirror; the ACM version is the DOI.

## Links

- Paper (PDF mirror): https://crypto.stanford.edu/cs155old/cs155-spring09/papers/sfi.pdf
- Paper (DOI): https://doi.org/10.1145/168619.168635
