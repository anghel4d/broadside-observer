---
title: "How close can pure FP get to C?"
authors:
  - "Richard Feldman"
year: 2026
venue: "rtfeldman.com blog, 22 Oct 2026"
arxiv: null
doi: null
source: "https://rtfeldman.com/fp-vs-c"
topics:
  - "functional-programming"
  - "performance-engineering"
  - "bounds-check-elimination"
  - "in-place-mutation"
  - "compile-time-evaluation"
  - "memory-safety"
seed_rank: 2420
seed_batch: "craft-2026-10-25"
reviewed: "2026-10-25"
pool: "languages"
relevance_score: 7
cites:
  - title: "How close can pure FP get to C?"
    url: "https://rtfeldman.com/fp-vs-c"
    year: 2026
    arxiv: null
    doi: null
see: ["1859-perceus-garbage-free-reference-counting-with-reuse", "2417-the-goose-programming-language"]
---

# How close can pure FP get to C?

## One-sentence takeaway

After the author tuned it, roc-deflate, a pure-Roc DEFLATE library that is memory-safe, reference-counted, always bounds-checked and has no FFI, ran a median 8.9% slower than libdeflate's hand-tuned SIMD C on a Ryzen 9 3900X and 2.6% slower on an M1 across 144 Silesia benchmarks, ranging from 18% slower to just over 18% faster.

## Why it matters here

The interesting part for ano is the short list of things that close the gap when users cannot switch off the safety checks. Keep values unique so reference counting can turn updates into in-place mutation. Add one early length check before a loop so the optimizer can delete the checks inside it. Build lookup tables at compile time so indexing them needs no runtime check. Choose wrapping arithmetic where overflow cannot matter. Each of these is something an array language's compiler can do for its users rather than ask of them. It is also a clean data point on what full purity, determinism across targets and no build scripts cost on real code: single digits.

## Key ideas

- **Avoid sharing.** Roc's opportunistic mutation is Koka's "Functional but In-Place": a uniquely referenced value is updated in place. Accidental sharing is the main performance bug.
- **Hoist bounds checks.** Something like `if len <= highest_index { return 0 }` before a loop lets the compiler prove that every access in the loop is in range.
- **Tables built at compile time.** Their lengths are known, so `Ok(entry) = table.get(5)` is an exhaustive match that needs no runtime check.
- **`plus_wrap`.** Use it where overflow checks cannot be optimized away and wrapping is acceptable.
- **What the remaining gap buys.** Purity is enforced through thin and thick arrows, there is no arbitrary FFI, packages have no build scripts, and pure functions are meant to behave identically on every target.

## Caveats

- One library and one corpus, non-streaming APIs only, tuned by a Roc core developer. The author says himself that it does not generalize yet.
- Roc is still weeks from 0.1.0, and the results pin specific compiler revisions. The benchmark setup script was AI-generated and, by the author's own note, has not been vetted.
- C's performance ceiling is still higher. The inputs where Roc wins come from differences between the two implementations, not from anything Roc can do that C cannot.

## Links

- Post: https://rtfeldman.com/fp-vs-c
- Roc opportunistic mutation docs: https://www.roc-lang.org/docs/main/langref/expressions/#opportunistic-mutation
- Benchmark setup script: https://gist.github.com/rtfeldman/7b6830809149867b79761ffb8e0456c3
