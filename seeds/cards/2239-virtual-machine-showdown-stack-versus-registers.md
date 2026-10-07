---
title: "Virtual Machine Showdown: Stack Versus Registers"
authors:
  - "Yunhe Shi"
  - "David Gregg"
  - "Andrew Beatty"
  - "M. Anton Ertl"
year: 2005
venue: "1st ACM/USENIX International Conference on Virtual Execution Environments (VEE '05), pp. 153–163"
arxiv: null
doi: "10.1145/1064979.1065001"
source: "https://www.usenix.org/legacy/events/vee05/full_papers/p153-yunhe.pdf"
topics:
  - bytecode-vm-design
  - register-vm
  - stack-vm
  - interpreter-dispatch
  - batched-interpreters-ffi
seed_rank: 2239
seed_batch: "archive-2026-10-08"
reviewed: "2026-10-08"
pool: "languages"
relevance_score: 9
lineage: interpreter-dispatch
cites:
  - title: "Virtual Machine Showdown: Stack Versus Registers (extended journal version)"
    url: "https://doi.org/10.1145/1328195.1328197"
    year: 2008
    arxiv: null
    doi: "10.1145/1328195.1328197"
  - title: "The Case for Virtual Register Machines"
    url: "https://doi.org/10.1145/858570.858575"
    year: 2003
    arxiv: null
    doi: "10.1145/858570.858575"
  - title: "Stack Caching for Interpreters"
    url: "https://doi.org/10.1145/207110.207165"
    year: 1995
    arxiv: null
    doi: "10.1145/207110.207165"
---

# Virtual Machine Showdown: Stack Versus Registers

## One-sentence takeaway

Translating JVM stack bytecode into a virtual register form, with aggressive copy propagation and constant-load optimisation, removes about 47% of executed VM instructions while growing code only about 25%. In a real JVM interpreter that cut running time by about 32% with switch dispatch and still by about 26.5% with threaded dispatch, which is the main quantitative case for register-based bytecode.

## Why it matters here

ano's interpreter and any GRID COMMAND scripting VM face this choice at the start, and it is hard to undo. Lua 5.0 (1476) bet on registers; the JVM, CPython and WebAssembly use stacks. This paper isolates the trade: each VM instruction costs an indirect, often mispredicted, dispatch, and registers cut the number of dispatches at the price of fetching wider instructions. For ano's array-at-a-time operators, where each dispatch is amortised over a whole column, the trade shifts again, so these numbers are a baseline to measure against rather than a verdict. Pairs with threaded code 1437, superoperators 1438 and the in-place Wasm interpreter 1811.

## Key ideas

- **The question.** Stack code is compact but needs more instructions (explicit loads and stores to the operand stack). Register code names operands in the instruction, so it needs fewer instructions but each one is larger. With interpreters, dispatch cost usually dominates.
- **Better translation than prior work.** Davis et al. (2003) reported about 35% fewer instructions but 45% larger code using a simple translation. Here, copy propagation eliminates almost all stack load/store moves, and constant loads are deduplicated and hoisted out of loops: about 47% of executed VM instructions are removed, for about 25% more bytecode.
- **Cheap extra fetch.** The larger code costs only about 1.07 extra real-machine loads per VM instruction eliminated, which is far less than the dispatch saved.
- **Real implementation.** A register VM was built inside a fully standard-compliant JVM interpreter and measured on standard benchmarks on a Pentium 4: 32.3% less time with C `switch` dispatch, and about 26.5% less with threaded dispatch (labels as values).
- **Journal follow-up (TACO 2008).** A fuller register JVM on Intel, AMD64, PowerPC and Alpha with switch, token-threaded, direct-threaded and inline-threaded dispatch reports an average 1.48× speedup on AMD64 with switch dispatch and 1.15× even with inline threading.

## Caveats

The register code here is produced by translating javac's stack bytecode, not by a compiler designed for registers, and the benchmarks are 2005-era Java programs. Modern indirect-branch predictors shrink the dispatch penalty that drives the result, so re-measure on current cores. Register VMs push work into the compiler (register allocation, wider operand fields) and make bytecode verification and compactness harder. Stack caching (Ertl 1995) and superinstructions are orthogonal ways to recover stack-VM performance. Not a remint of threaded code 1437 or Lua 5.0 1476.

## Links

- VEE '05 paper PDF (USENIX): https://www.usenix.org/legacy/events/vee05/full_papers/p153-yunhe.pdf
- Extended TACO 2008 version (author copy, Tufts archive): https://www.cs.tufts.edu/comp/150FP/archive/david-gregg/vm-showdown.pdf
- DOI (VEE '05): https://doi.org/10.1145/1064979.1065001
- DOI (TACO 2008): https://doi.org/10.1145/1328195.1328197
