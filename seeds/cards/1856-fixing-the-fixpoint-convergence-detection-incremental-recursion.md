---
title: "Fixing the Fixpoint: A Formal Theory of Convergence Detection for Incremental Recursive Computation"
authors: ["Chengxi Yang", "Tej Chajed", "Thomas Reps"]
year: 2026
venue: "arXiv preprint (cs.PL; cs.DB)"
arxiv: "2610.00530"
doi: null
source: "https://arxiv.org/abs/2610.00530"
topics: [incremental-view-maintenance, dbsp, datalog, fixpoint, standing-triggers]
seed_rank: 1856
seed_batch: "craft-2026-10-07"
reviewed: "2026-10-07"
pool: "languages"
relevance_score: 10
lineage: contemporary-databases
cites:
  - title: "DBSP: Automatic Incremental View Maintenance for Rich Query Languages"
    url: "https://arxiv.org/abs/2203.16684"
    year: 2023
    arxiv: "2203.16684"
    doi: "10.14778/3587136.3587137"
  - title: "Differential Dataflow"
    url: "https://www.cidrdb.org/cidr2013/Papers/CIDR13_Paper111.pdf"
    year: 2013
    arxiv: null
    doi: null
  - title: "What You Always Wanted to Know About Datalog (And Never Dared to Ask)"
    url: "https://doi.org/10.1109/69.43410"
    year: 1989
    arxiv: null
    doi: "10.1109/69.43410"
see:
  - "1489-dbsp-automatic-incremental-view-maintenance-for-rich-query-languages"
  - "823-differential-dataflow"
  - "039-what-you-always-wanted-to-know-about-datalog-and-never-dared"
---

# Fixing the Fixpoint: A Formal Theory of Convergence Detection for Incremental Recursive Computation

## One-sentence takeaway

Yang–Chajed–Reps show that the "stop at the first zero delta" fixpoint test suggested for incremental recursive DBSP circuits is unsound once you use the delta-of-deltas strategy (it can return a wrong transitive closure), that exact fixpoint detection is impossible for arbitrary expressive circuits, and that checking internal-state stability (IntConv, as Feldera does) is sound — and complete for Datalog, while-queries and their incrementalized forms — with Lean 4 proofs.

## Why it matters here

ano's standing rules and GRID COMMAND's trigger graph are heading toward an incremental Datalog/DBSP-style runtime (DBSP 1489, Differential Dataflow 823, DDlog 1809, FlowLog 1593, Nemo 1790). Recursion — reachability, territory and supply-line closure, alliance transitivity — is exactly where an incremental engine must decide "has the inner loop converged?". The cheap answer people implement is FirstZero; this paper gives a two-graph counterexample where it is wrong, and says what to check instead. That is a this-week correctness rule for whoever writes the inner-iteration termination test.

## Key ideas

- **The FPD problem.** Incrementalized recursion needs runtime fixpoint detection. With naive and semi-naive evaluation FirstZero (first empty delta) is sound; with the delta-of-deltas strategy that full incrementalization produces, it is not — a concrete pair of input graphs yields a wrong transitive closure.
- **Impossibility.** If primitive nodes make DBSP Turing-complete, there is a fixed level-1 circuit with no computable detector that is both sound and complete.
- **IntConv.** Internal convergence — operator state stops changing, inputs are fixed, outputs are zero — is a declarative criterion matching Feldera-style internal-state-stability, proved sufficient for external convergence.
- **StFP detector.** A sound and complete state-fixpoint detector, combined with fixed-input and zero-output checks across bracketed subcircuits, gives a compositional IntConv detector that handles nested recursion.
- **Completeness where it matters.** For "regular" circuits (lifted scalar circuits, composition, Datalog, while-queries) and their incremental optimizations, IntConv is also complete; the authors note similar gaps in other frameworks such as Differential Dataflow.

## Caveats

Fresh preprint (submitted 2026-09-30); peer review pending. It is a semantics/verification paper: it tells you which termination test is correct, not how to make it fast, and IntConv may keep more operator state than a delta check. Results are stated over DBSP as a core calculus; mapping them onto a Rete/TREAT-style engine (042/1004) needs care. Do not remint DBSP 1489, DD 823, Naiad 1480, DDlog 1809, FlowLog 1593, Nemo 1790.

## Links

- arXiv: https://arxiv.org/abs/2610.00530
- PDF: https://arxiv.org/pdf/2610.00530
- Lean 4 formalization: https://github.com/Arcadia-Y/fixing-the-fixpoint
