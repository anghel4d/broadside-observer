---
title: "Optimizing Indirect Branch Prediction Accuracy in Virtual Machine Interpreters"
authors:
  - "Kevin Casey"
  - "M. Anton Ertl"
  - "David Gregg"
year: 2007
venue: "ACM Transactions on Programming Languages and Systems 29(6), Article 37 (journal version of Ertl & Gregg, PLDI 2003)"
arxiv: null
doi: "10.1145/1286821.1286828"
source: "https://www.scss.tcd.ie/David.Gregg/papers/toplas05.pdf"
topics:
  - interpreter-dispatch
  - branch-prediction
  - superinstructions
  - code-replication
seed_rank: 2360
seed_batch: "archive-2026-10-20"
reviewed: "2026-10-20"
pool: "languages"
relevance_score: 8
lineage: interpreter-dispatch
see:
  - 1437-threaded-code
  - 1438-optimizing-an-ansi-c-interpreter-with-superoperators
  - 1476-the-implementation-of-lua-5-0
  - 1811-a-fast-in-place-interpreter-for-webassembly
cites:
  - title: "Optimizing Indirect Branch Prediction Accuracy in Virtual Machine Interpreters"
    url: "https://doi.org/10.1145/1286821.1286828"
    year: 2007
    arxiv: null
    doi: "10.1145/1286821.1286828"
---

# Optimizing Indirect Branch Prediction Accuracy in Virtual Machine Interpreters

## One-sentence takeaway

Casey, Ertl and Gregg show that a branch target buffer predicts a threaded-code interpreter's dispatch branch correctly only when each VM instruction appears once in the hot working set, and fix that in software by replicating VM instructions (so each copy has its own dispatch branch) and by fusing sequences into superinstructions, statically at build time or dynamically by copying native code at load time — removing nearly all dispatch mispredictions and speeding Gforth up by up to 4.55× over plain threaded code, with similar but smaller gains on a JVM.

## Why it matters here

ano's interpreter tier will live or die on dispatch cost. This paper explains, with a four-line loop example, *why* switch dispatch and naive threaded code mispredict, and gives a menu of fixes with measured trade-offs: static replicas and superinstructions are portable C, dynamic copying is faster but needs relocatable code fragments. It also shows that superinstruction selection is dictionary compression (greedy is as good as optimal in practice), which is the kind of build-time tool an array-language VM can generate from profiles.

## Key ideas

- **The BTB model.** A BTB predicts each indirect branch goes where it went last time. Switch dispatch shares one branch for all VM instructions, so it predicts "same instruction again" and mispredicts 81–98% in the authors' earlier measurements; threaded code gives each VM instruction its own branch, but an instruction occurring twice in a loop still mispredicts (50–63%).
- **Replication.** Several copies of a VM instruction with separate dispatch branches; static replicas chosen round-robin beat random choice because execution stays local. A worked example shows that bad static replication can *increase* mispredictions.
- **Superinstructions.** Fusing B A into B_A removes a dispatch and makes the remaining ones unique; selection by greedy maximum munch performed almost the same as dynamic-programming optimal selection.
- **Dynamic variants.** Copy each VM instruction's native code at VM-code generation time (Piumarta–Riccardi style): dynamic replication (a copy per instance), dynamic superinstructions per basic block, with replication, and superinstructions spanning basic blocks so that only taken branches, calls and returns dispatch.
- **Results.** Gforth: replication alone up to 3.07×, superinstructions up to 3.39×, combined up to 4.55× over plain threaded code; static-only variants up to 2.35×; up to 1.34× over dynamic superinstructions alone. JVM: best 2.76× over plain on one benchmark, more modest elsewhere. Superinstructions cut executed indirect branches more than replicas do, so at equal counts they produce fewer total mispredictions.

## Caveats

The measurements are on Pentium III/4, Celeron and Athlon-class BTB predictors. Later Intel and AMD cores use history-based indirect predictors (TAGE/ITTAGE-style) that predict even switch dispatch far better, so the size of the misprediction win on current hardware must be re-measured before relying on it; superinstructions still save dispatch and operand-access work regardless. Dynamic code copying requires position-independent native fragments and executable memory, which some platforms (consoles, iOS) forbid.

## Links

- Paper (author PDF): https://www.scss.tcd.ie/David.Gregg/papers/toplas05.pdf
- Paper (DOI, TOPLAS): https://doi.org/10.1145/1286821.1286828
- Earlier PLDI 2003 version (PS): https://www.complang.tuwien.ac.at/papers/ertl%26gregg03.ps.gz
