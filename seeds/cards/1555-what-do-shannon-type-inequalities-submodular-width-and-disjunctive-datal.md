---
title: "What Do Shannon-type Inequalities, Submodular Width, and Disjunctive Datalog Have to Do with One Another?"
authors:
  - "Mahmoud Abo Khamis"
  - "Hung Q. Ngo"
  - "Dan Suciu"
year: 2017
venue: "PODS"
arxiv: "1612.02503"
doi: "10.1145/3034786.3056105"
source: "https://arxiv.org/abs/1612.02503"
topics:
  - "worst-case-optimal-joins"
  - "panda"
  - "submodular-width"
  - "disjunctive-datalog"
seed_rank: 1555
seed_batch: "user-agm-wcoj-2026-09-03"
reviewed: "2026-09-03"
pool: "languages"
relevance_score: 10
lineage: worst-case-optimal-joins
cites:
  - title: "Size Bounds and Query Plans for Relational Joins"
    url: "https://arxiv.org/abs/1711.03860"
    year: 2013
    arxiv: "1711.03860"
    doi: "10.1137/110859440"
  - title: "FAQ: Questions Asked Frequently"
    url: "https://arxiv.org/abs/1504.04044"
    year: 2016
    arxiv: "1504.04044"
    doi: "10.1145/2902251.2902280"
  - title: "What You Always Wanted to Know About Datalog (And Never Dared to Ask)"
    url: "https://doi.org/10.1109/69.43410"
    year: 1989
    arxiv: null
    doi: "10.1109/69.43410"
  - title: "Skew Strikes Back: New Developments in the Theory of Join Algorithms"
    url: "https://arxiv.org/abs/1310.3314"
    year: 2013
    arxiv: "1310.3314"
    doi: "10.1145/2590989.2590991"
  - title: "Constraint Solving via Fractional Edge Covers"
    url: "https://doi.org/10.1145/2635812"
    year: 2014
    arxiv: null
    doi: "10.1145/2635812"
see:
  - "1550-size-bounds-and-query-plans-for-relational-joins"
  - "1551-faq-questions-asked-frequently"
  - "039-what-you-always-wanted-to-know-about-datalog-and-never-dared"
---

# What Do Shannon-type Inequalities, Submodular Width, and Disjunctive Datalog Have to Do with One Another?

## One-sentence takeaway

PANDA turns a proof sequence of Shannon-flow inequalities into relational operators (join, horizontal partition, union) and evaluates disjunctive datalog — hence conjunctive and aggregate queries — in time matching the submodular-width / polymatroid bound, including FDs and degree constraints.

## Why it matters here

AGM is the no-constraint size bound. Real ECS tables have keys (entity id → component), degree bounds (max inventory size, max squad membership), and FDs. PANDA is the algorithm that spends those constraints: a 4-cycle of relationship tables drops from N^2 (fractional hypertree width) to Õ(N^{3/2}) by routing tuples into two tree decompositions, exactly the 'standing rule over a cyclic relationship graph' case ano will hit. Proof-to-plan is the right compiler architecture for a query language that is already FAQ-shaped.

## Key ideas

- **Disjunctive datalog size bound.** For a rule with several heads, log |P| ≤ max_h min_B h(B) over polymatroids (or entropic functions) obeying the degree constraints. Entropic bound is asymptotically tight; polymatroid bound is not (Zhang–Yeung gap, arbitrarily large).
- **Shannon-flow inequalities.** Dualising the polymatroid LP yields Σ λ_B h(B) ≤ Σ δ_{Y|X} h(Y|X). A complete proof system of four rewrites (submodularity, monotonicity, composition, decomposition) proves every such inequality.
- **PANDA.** Each rewrite is a relational op: composition → join, decomposition → heavy/light horizontal partition (log N degree buckets when the two sides are not divergent), etc. Runtime Õ(N + polylog(N) · Π N_{Y|X}^{δ}).
- **Submodular width, degree-aware.** Using PANDA as a black box, Boolean/full conjunctive queries (and FAQ aggregates) run in Õ(N^{da-subw(Q)} + |out|), matching Marx's yardstick exactly rather than poly(N^{subw}). da-fhtw / da-subw extend fhtw/subw to FDs and degree constraints.
- **4-cycle example.** Two tree decompositions, four disjunctive rules; each 4-cycle is placed in both bags of at least one tree. fhtw=2, subw=3/2, PANDA Õ(N^{3/2}).
- PODS 2017 (invited to JACM). Authors of this paper are Abo Khamis, Ngo, Suciu — not Olteanu; Olteanu's factorized-databases line is the compression cousin, cited, not this algorithm. arXiv:1612.02503; later exposition 'PANDA: Query Evaluation in Submodular Width' (arXiv:2402.02001).

## Caveats

- Polymatroid bound can overestimate by N^s; the algorithm matches the (looser) polymatroid/submodular-width number, not the entropic cone, because the entropic cone is not polyhedral.
- Non-divergent decomposition pays a polylog by binning degrees; query-complexity factors are hidden in Õ. Computing the optimal proof/width is still hard in query complexity.
- Not a remint of FAQ (1551), AGM (1550), or Yannakakis. Dan Olteanu is not a coauthor of the PODS 2017 paper; do not card-title this as Abo Khamis–Ngo–Olteanu–Suciu.

## Links

- arXiv abs: https://arxiv.org/abs/1612.02503
- PDF: https://arxiv.org/pdf/1612.02503
- PODS DOI: https://doi.org/10.1145/3034786.3056105
- Author PDF: https://homes.cs.washington.edu/~suciu/pods055-abo-khamis.pdf
