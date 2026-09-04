---
title: "A Simple Graph-Based Intermediate Representation"
authors:
  - "Cliff Click"
  - "Michael Paleczny"
year: 1995
venue: "IR’95 / ACM SIGPLAN Notices 30(3)"
arxiv: null
doi: "10.1145/202530.202534"
source: "https://www.oracle.com/technetwork/java/javase/tech/c2-ir95-150110.pdf"
topics:
  - typed-programming-systems
  - intermediate-representation
  - static-single-assignment
seed_rank: 1567
seed_batch: "archive-2026-09-04"
reviewed: "2026-09-04"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Efficiently Computing Static Single Assignment Form and the Control Dependence Graph"
    url: "https://doi.org/10.1145/115372.115320"
    year: 1991
    arxiv: null
    doi: "10.1145/115372.115320"
  - title: "Combining Analyses, Combining Optimizations"
    url: "https://doi.org/10.1145/201059.201061"
    year: 1995
    arxiv: null
    doi: "10.1145/201059.201061"
  - title: "Global Code Motion / Global Value Numbering"
    url: "https://doi.org/10.1145/223428.207154"
    year: 1995
    arxiv: null
    doi: "10.1145/223428.207154"
  - title: "Constant Propagation with Conditional Branches"
    url: "https://doi.org/10.1145/103135.103136"
    year: 1991
    arxiv: null
    doi: "10.1145/103135.103136"
see:
  - "1566-efficiently-computing-static-single-assignment-form"
  - "1440-combining-analyses-combining-optimizations"
  - "1568-ssa-is-functional-programming"
---

# A Simple Graph-Based Intermediate Representation

## One-sentence takeaway

One directed graph of opcode-labeled nodes and ordered use→def edges is both CFG and SSA: REGION/PHI/IF/PROJECTION replace basic blocks, the parser builds SSA, and C++ virtuals make each opcode a class — the ancestor of HotSpot C2’s sea-of-nodes.

## Why it matters here

ano’s optimizer should not be a CFG of instruction lists with a side table of use-def. Click–Paleczny collapse control and data onto the same edge type, so constant propagation and value numbering share support code. Parse-time SSA plus a peephole that almost matches combined CCP+GVN is the engineering argument for building SSA at the ano parser, not in a later “SSA construction” pass over Cytron 1566.

## Key ideas

- **Single-tier graph.** Vertices carry opcodes; edges are unlabeled, inputs ordered, outputs unordered. A REGION node merges predecessor control; every operation optionally takes a control input (dashed = floatable). PHI inputs are aligned with the REGION’s control inputs, so φ stays compositional without (data, control) pairs.
- **IF + PROJECTION.** Conditionals produce a tuple `{true-control, false-control}`; PROJECTION-TRUE/FALSE strip one component. The same projection trick unpacks START (params, STORE, I/O) and multi-result calls. Edges stay a single pointer; labels live on nodes.
- **STORE as a value.** Memory is an SSA value: LOAD(STORE, ptr) → value, STORE(STORE, ptr, val) → new STORE, PHI merges STORE. I/O is stricter (reads produce a new I/O state). Coarse global STORE is the admitted first cut; independent arrays would get their own STOREs.
- **Execution model.** Control is a Petri-net token on REGION/IF/START; data nodes are instantaneous functions of their inputs (not token-based). PHI latches when its REGION is visited. Irreducible loops are extra REGION+PHI pairs, not a special form.
- **C++ identity = opcode.** `Node` has no opcode field; the vtable *is* the opcode. `Identity()` / `hash()` virtuals implement algebraic identities and local GVN. Use→def is the stored pointer; def→use is a batch-built, then discarded, edge set. Arena `new`/`delete` makes parse-time node create/kill cheap.
- **Parse-time peephole vs global.** On 52 FORTRAN/C procedures, peephole+GCM was within ~2% of combined CCP+GCF+GVN (total −1.9% / avg −0.8% extra from global). Peephole+global compiled 6.3% faster than global alone (108.8 s vs 116.1 s) by shrinking the IR first.

## Caveats

- This is IR’95 / Click’s thesis IR, not a HotSpot C2 source dump. “Sea-of-nodes” is the later product name; do not mint C2 internals from this PDF. GCM/GVN is the PLDI 1995 sibling (cite); combination is 1440.
- Parse-time analysis is *pessimistic* (the rest of the procedure is unknown). It is not a replacement for optimistic SCCP.
- Serializing the graph for a machine must treat STORE like a unique unspillable register so two STOREs do not overlap; anti-dependences from LOAD to STORE are intentionally absent.

## Links

- Open PDF: https://www.oracle.com/technetwork/java/javase/tech/c2-ir95-150110.pdf
- DOI: https://doi.org/10.1145/202530.202534
- ACM DL: https://dl.acm.org/doi/10.1145/202530.202534
