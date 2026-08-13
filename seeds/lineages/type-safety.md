# type-safety

**Charter.** Type safety beyond the Hindley–Milner / System F roots already on `programming-language-foundations`: gradual & migratory typing, refinement/Liquid types, Rust ownership foundations (RustBelt, Oxide, Stacked/Tree Borrows), pluggable checkers, session types, effect typing (Koka), and typed query embeddings (LINQ). Prefer this lineage for *industrial type-safety practice*; cite PL foundations for lambda/polymorphism classics.

## Ordered spine

1. **Gradual / migratory typing** — Siek–Taha, Typed Racket, gradual guarantee, TypeScript/Flow/Hack
2. **Refinement & dependent practice** — Liquid types / LiquidHaskell, hybrid checking, F*, DOT
3. **Ownership & aliasing** — RustBelt, Oxide, Stacked Borrows, Tree Borrows, Iris
4. **Pluggable / session / effects / queries** — Checker Framework, session types, Koka, LINQ

## Cards in this mint (`to1000-db-types-2026-08-13`)

| Rank | Year | Title | Stem |
|-----:|-----:|-------|------|
| 876 | 2018 | RustBelt: Securing the Foundations of the Rust Programming Language | `876-rustbelt-securing-the-foundations-of-the-rust-programming-la` |
| 877 | 2018 | Iris: Higher-Order Concurrent Separation Logic | `877-iris-higher-order-concurrent-separation-logic` |
| 878 | 2019 | Oxide: The Essence of Rust | `878-oxide-the-essence-of-rust` |
| 879 | 2020 | Stacked Borrows: An Aliasing Model for Rust | `879-stacked-borrows-an-aliasing-model-for-rust` |
| 880 | 2023 | Tree Borrows | `880-tree-borrows` |
| 881 | 2003 | Language-Based Information-Flow Security | `881-language-based-information-flow-security` |
| 882 | 2000 | Types for Safe Locking: Static Race Detection for Java | `882-types-for-safe-locking-static-race-detection-for-java` |
| 883 | 2008 | Practical Pluggable Types for Java | `883-practical-pluggable-types-for-java` |
| 884 | 2008 | A Theory of Typed Hygienic Macros | `884-a-theory-of-typed-hygienic-macros` |
| 885 | 2006 | LINQ: Reconciling Object, Relations and XML in the .NET Framework | `885-linq-reconciling-object-relations-and-xml-in-the-net-framewo` |
| 886 | 2006 | Gradual Typing for Functional Languages | `886-gradual-typing-for-functional-languages` |
| 887 | 2007 | Gradual Typing for Objects | `887-gradual-typing-for-objects` |
| 888 | 2008 | The Design and Implementation of Typed Scheme | `888-the-design-and-implementation-of-typed-scheme` |
| 889 | 2010 | Logical Types for Untyped Languages | `889-logical-types-for-untyped-languages` |
| 890 | 2015 | Refined Criteria for Gradual Typing | `890-refined-criteria-for-gradual-typing` |
| 891 | 2016 | Abstracting Gradual Typing | `891-abstracting-gradual-typing` |
| 892 | 2011 | Blame for All | `892-blame-for-all` |
| 893 | 2010 | Threesomes, With and Without Blame | `893-threesomes-with-and-without-blame` |
| 894 | 2017 | Migratory Typing: Ten Years Later | `894-migratory-typing-ten-years-later` |
| 895 | 2016 | Is Sound Gradual Typing Dead? | `895-is-sound-gradual-typing-dead` |
| 896 | 2014 | Design and Evaluation of Gradual Typing for Python | `896-design-and-evaluation-of-gradual-typing-for-python` |
| 897 | 2017 | Gradual Typing in an Open World: Gradual Typing for Python, Reticulated | `897-gradual-typing-in-an-open-world-gradual-typing-for-python-re` |
| 898 | 2015 | Safe & Efficient Gradual Typing for TypeScript | `898-safe-efficient-gradual-typing-for-typescript` |
| 899 | 2014 | Understanding TypeScript | `899-understanding-typescript` |
| 900 | 2014 | TypeScript Design Goals | `900-typescript-design-goals` |
| 901 | 2015 | Local Type Inference for JavaScript (Flow) | `901-local-type-inference-for-javascript-flow` |
| 902 | 2014 | Hack: Evolving PHP for Facebook Scale with Gradual Types | `902-hack-evolving-php-for-facebook-scale-with-gradual-types` |
| 903 | 1991 | Refinement Types for ML | `903-refinement-types-for-ml` |
| 904 | 1999 | Dependent Types in Practical Programming | `904-dependent-types-in-practical-programming` |
| 905 | 2008 | Liquid Types | `905-liquid-types` |
| 906 | 2014 | Refinement Types for Haskell | `906-refinement-types-for-haskell` |
| 907 | 2013 | Abstract Refinement Types | `907-abstract-refinement-types` |
| 908 | 2006 | Hybrid Type Checking | `908-hybrid-type-checking` |
| 909 | 2016 | Dependent Types and Multi-Monadic Effects in F* | `909-dependent-types-and-multi-monadic-effects-in-f` |
| 910 | 2004 | Applied Type System with Stateful Views | `910-applied-type-system-with-stateful-views` |
| 911 | 2017 | The Calculus of Dependent Lambda Eliminations (Cedille) | `911-the-calculus-of-dependent-lambda-eliminations-cedille` |
| 912 | 2016 | Dependent Types in Haskell: Theory and Practice | `912-dependent-types-in-haskell-theory-and-practice` |
| 913 | 2011 | OutsideIn(X): Modular Type Inference with Local Assumptions | `913-outsidein-x-modular-type-inference-with-local-assumptions` |
| 914 | 2006 | Simple Unification-Based Type Inference for GADTs | `914-simple-unification-based-type-inference-for-gadts` |
| 915 | 2003 | Guarded Recursive Datatype Constructors | `915-guarded-recursive-datatype-constructors` |
| 916 | 2016 | Session Types for Deadlock-Free Communication | `916-session-types-for-deadlock-free-communication` |
| 917 | 2008 | Multiparty Asynchronous Session Types | `917-multiparty-asynchronous-session-types` |

## Open frontiers

- Tree Borrows stabilization vs production unsafe Rust
- Sound gradual typing at TypeScript scale
- Session types / effect systems in mainstream languages
