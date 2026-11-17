---
title: "The BSD Packet Filter: A New Architecture for User-level Packet Capture"
authors:
  - "Steven McCanne"
  - "Van Jacobson"
year: 1993
venue: "USENIX Winter 1993 Conference, San Diego"
arxiv: null
doi: null
source: "https://www.tcpdump.org/papers/bpf-usenix93.pdf"
version_reviewed: "preprint dated 19 Dec 1992"
topics:
  - "packet-filter"
  - "virtual-machines"
  - "bytecode-design"
  - "predicate-compilation"
  - "control-flow-graphs"
seed_rank: 2623
seed_batch: "archive-2026-11-18"
reviewed: "2026-11-18"
pool: "languages"
relevance_score: 8
see:
  - "1047-proof-carrying-code"
  - "1820-the-click-modular-router"
  - "1438-optimizing-an-ansi-c-interpreter-with-superoperators"
cites:
  - title: "The BSD Packet Filter: A New Architecture for User-level Packet Capture"
    url: "https://www.tcpdump.org/papers/bpf-usenix93.pdf"
    year: 1993
    doi: null
---

# The BSD Packet Filter: A New Architecture for User-level Packet Capture

## One-sentence takeaway

Replace a stack-machine expression-tree filter with a tiny accumulator machine running a control-flow graph (fixed 64-bit instructions, one C switch to decode, registers that fit in real registers), run it on the packet in place before any copy, and capture gets 1.5–20× faster than CSPF and 10–150× faster than Sun's NIT.

## Why it matters here

BPF is the original small, protocol-free predicate VM: the kernel knows nothing about packets except that they are byte arrays, and users ship it filter programs. That is the shape of an ano selection predicate compiled for a hot loop. Its five design constraints (protocol independent, general, touch each input word once, single-switch decode, registers in physical registers) are a ready checklist for any ano/Anoptic bytecode, and the tree-vs-CFG argument (trees re-parse and redo work; a CFG reuses what earlier tests learned) applies directly to compiling selections over columns.

## Key ideas

- **Filter early, in place.** The driver calls BPF first; each listener's filter decides accept and how many bytes to keep, and only accepted bytes are copied. NIT copied first and filtered later, so for large discarded packets it cost about 450 µs against BPF's 5 µs.
- **CFG beats tree.** CSPF evaluates a boolean expression tree on an operand stack: it maps to memory loads and stores on RISC CPUs and can recompute shared subexpressions. A DAG of tests lets later nodes reuse earlier parse results; tcpdump's filter compiler reorders and minimizes the CFG.
- **Machine.** Accumulator, index register x, a scratch store of 32-bit words, implicit PC. Instruction classes: load, store, ALU, branch (true and false offsets in one instruction), return, and register transfer. Format: opcode:16, jt:8, jf:8, k:32.
- **Safety by construction.** Reading past the end of the packet or dividing by zero ends the filter with return value 0 (packet dropped). The index register exists mainly to skip the variable-length IP header via the 4*([k]&0xf) addressing mode.
- **Buffering.** A simple non-shared buffer model per listener, made possible by larger address spaces, instead of AT&T STREAMS modules.

## Caveats

Measured on a 1992 SPARCstation 2 under SunOS 4.1.1; the CSPF comparison is about filter mechanism, the NIT comparison mostly about buffering. The paper defers the filter optimizer to future work and does not discuss verification of untrusted filters; the later eBPF verifier and JIT are not in it.

## Links

- Paper PDF (tcpdump.org): https://www.tcpdump.org/papers/bpf-usenix93.pdf
