---
title: "Simple and Effective Type Check Removal through Lazy Basic Block Versioning"
authors:
  - "Maxime Chevalier-Boisvert"
  - "Marc Feeley"
year: 2015
venue: "ECOOP 2015 (29th European Conference on Object-Oriented Programming), LIPIcs 37, 101–123"
arxiv: "1411.0352"
doi: "10.4230/LIPIcs.ECOOP.2015.101"
source: "https://arxiv.org/abs/1411.0352"
topics:
  - jit-compilation
  - type-specialization
  - dynamic-languages
  - batched-interpreters-ffi
seed_rank: 2339
seed_batch: "archive-2026-10-18"
reviewed: "2026-10-18"
pool: "languages"
relevance_score: 9
lineage: interpreter-dispatch
see:
  - 1362-optimizing-dynamically-typed-object-oriented-languages-with-po
  - 1439-dynamo-a-transparent-dynamic-optimization-system
  - 1437-threaded-code
  - 1476-the-implementation-of-lua-5-0
cites:
  - title: "Simple and Effective Type Check Removal through Lazy Basic Block Versioning"
    url: "https://arxiv.org/abs/1411.0352"
    year: 2015
    arxiv: "1411.0352"
    doi: "10.4230/LIPIcs.ECOOP.2015.101"
---

# Simple and Effective Type Check Removal through Lazy Basic Block Versioning

## One-sentence takeaway

Chevalier-Boisvert and Feeley make a baseline JavaScript JIT (Higgs) compile basic blocks lazily, one version per incoming typing context, so that type tests whose outcome is already known in that context disappear; with at most 5 versions per block this removes 71% of type tests on 26 SunSpider/V8 benchmarks (versus 16% for a flow-based type analysis), cuts execution time by 21% on average and up to 50%, and barely changes code size or compile time.

## Why it matters here

If ano ever gets a JIT tier above its interpreter (threaded code 1437, Lua-style VM 1476), this is the cheapest credible way to specialize on value tags without a type-inference pass, profiling infrastructure or deoptimization machinery. The idea — let execution decide which specialized versions exist, carry known facts along control-flow edges, and fall back to a generic version at a cap — also applies to array-rank and shape specialization, and it is the technique Chevalier-Boisvert later carried into Shopify's YJIT for Ruby.

## Key ideas

- **Typing contexts.** The code generator tracks a map from live SSA values to type tags; a type-test branch creates two outgoing contexts, and if the tag is already known the test and branch are removed at code-generation time.
- **Versions per context.** A block may be compiled once per distinct incoming context; there is no fixed point over types, so values that are int on one path and float on another get separate, precise code paths instead of a conservative union.
- **Laziness tames blow-up.** Eagerly, t types and v variables could give tᵛ versions; Higgs instead emits out-of-line stubs at undetermined branches that call back into the compiler, so versions are generated only for contexts that actually occur, roughly in order of frequency, and code is laid out in execution order.
- **A cap with a generic fallback.** maxvers bounds versions per block; when it is hit and no compatible version exists, a generic version (all live values unknown) is emitted; maxvers = 0 disables versioning.
- **Results.** At a limit of 5: 71% of type tests removed, mean code size +0.19% (no limit: +0.25% mean, +15% max), compile time −1.2% on average and +5.3% worst case (specialized blocks are often smaller); the comparison type analysis gave 4% speedup and in the worst case slowed compilation by over 100×. The paper also reports more efficient machine code than TraceMonkey on several benchmarks.

## Caveats

The versioning is intraprocedural: function arguments, globals, object properties and return values start as unknown, which limits how many checks can go (the authors flag interprocedural extensions as future work). Higgs is an experimental VM; regex-heavy benchmarks were excluded and compile time was excluded from the execution-time figures. The type lattice is only first-level tags (int32, float64, object, string and so on), not shapes or hidden classes.

## Links

- Paper (arXiv): https://arxiv.org/abs/1411.0352
- Paper (arXiv PDF): https://arxiv.org/pdf/1411.0352
- Paper (DOI, LIPIcs): https://doi.org/10.4230/LIPIcs.ECOOP.2015.101
