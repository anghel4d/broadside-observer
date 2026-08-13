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
| 1129 | 2018 | RustBelt: Securing the Foundations of the Rust Programming Language | `1129-rustbelt-securing-the-foundations-of-the-rust-programming-la` |
| 1130 | 2018 | Iris: Higher-Order Concurrent Separation Logic | `1130-iris-higher-order-concurrent-separation-logic` |
| 1131 | 2019 | Oxide: The Essence of Rust | `1131-oxide-the-essence-of-rust` |
| 1132 | 2020 | Stacked Borrows: An Aliasing Model for Rust | `1132-stacked-borrows-an-aliasing-model-for-rust` |
| 1133 | 2023 | Tree Borrows | `1133-tree-borrows` |
| 1134 | 2003 | Language-Based Information-Flow Security | `1134-language-based-information-flow-security` |
| 1135 | 2000 | Types for Safe Locking: Static Race Detection for Java | `1135-types-for-safe-locking-static-race-detection-for-java` |
| 1136 | 2008 | Practical Pluggable Types for Java | `1136-practical-pluggable-types-for-java` |
| 1137 | 2008 | A Theory of Typed Hygienic Macros | `1137-a-theory-of-typed-hygienic-macros` |
| 1138 | 2006 | LINQ: Reconciling Object, Relations and XML in the .NET Framework | `1138-linq-reconciling-object-relations-and-xml-in-the-net-framewo` |
| 1139 | 2006 | Gradual Typing for Functional Languages | `1139-gradual-typing-for-functional-languages` |
| 1140 | 2007 | Gradual Typing for Objects | `1140-gradual-typing-for-objects` |
| 1141 | 2008 | The Design and Implementation of Typed Scheme | `1141-the-design-and-implementation-of-typed-scheme` |
| 1142 | 2010 | Logical Types for Untyped Languages | `1142-logical-types-for-untyped-languages` |
| 1143 | 2015 | Refined Criteria for Gradual Typing | `1143-refined-criteria-for-gradual-typing` |
| 1144 | 2016 | Abstracting Gradual Typing | `1144-abstracting-gradual-typing` |
| 1145 | 2011 | Blame for All | `1145-blame-for-all` |
| 1146 | 2010 | Threesomes, With and Without Blame | `1146-threesomes-with-and-without-blame` |
| 1147 | 2017 | Migratory Typing: Ten Years Later | `1147-migratory-typing-ten-years-later` |
| 1148 | 2016 | Is Sound Gradual Typing Dead? | `1148-is-sound-gradual-typing-dead` |
| 1149 | 2014 | Design and Evaluation of Gradual Typing for Python | `1149-design-and-evaluation-of-gradual-typing-for-python` |
| 1150 | 2017 | Gradual Typing in an Open World: Gradual Typing for Python, Reticulated | `1150-gradual-typing-in-an-open-world-gradual-typing-for-python-re` |
| 1151 | 2015 | Safe & Efficient Gradual Typing for TypeScript | `1151-safe-efficient-gradual-typing-for-typescript` |
| 1152 | 2014 | Understanding TypeScript | `1152-understanding-typescript` |
| 1153 | 2014 | TypeScript Design Goals | `1153-typescript-design-goals` |
| 1154 | 2015 | Local Type Inference for JavaScript (Flow) | `1154-local-type-inference-for-javascript-flow` |
| 1155 | 2014 | Hack: Evolving PHP for Facebook Scale with Gradual Types | `1155-hack-evolving-php-for-facebook-scale-with-gradual-types` |
| 1156 | 1991 | Refinement Types for ML | `1156-refinement-types-for-ml` |
| 1157 | 1999 | Dependent Types in Practical Programming | `1157-dependent-types-in-practical-programming` |
| 1158 | 2008 | Liquid Types | `1158-liquid-types` |
| 1159 | 2014 | Refinement Types for Haskell | `1159-refinement-types-for-haskell` |
| 1160 | 2013 | Abstract Refinement Types | `1160-abstract-refinement-types` |
| 1161 | 2006 | Hybrid Type Checking | `1161-hybrid-type-checking` |
| 1162 | 2016 | Dependent Types and Multi-Monadic Effects in F* | `1162-dependent-types-and-multi-monadic-effects-in-f` |
| 1163 | 2004 | Applied Type System with Stateful Views | `1163-applied-type-system-with-stateful-views` |
| 1164 | 2017 | The Calculus of Dependent Lambda Eliminations (Cedille) | `1164-the-calculus-of-dependent-lambda-eliminations-cedille` |
| 1165 | 2016 | Dependent Types in Haskell: Theory and Practice | `1165-dependent-types-in-haskell-theory-and-practice` |
| 1166 | 2011 | OutsideIn(X): Modular Type Inference with Local Assumptions | `1166-outsidein-x-modular-type-inference-with-local-assumptions` |
| 1167 | 2006 | Simple Unification-Based Type Inference for GADTs | `1167-simple-unification-based-type-inference-for-gadts` |
| 1168 | 2003 | Guarded Recursive Datatype Constructors | `1168-guarded-recursive-datatype-constructors` |
| 1169 | 2016 | Session Types for Deadlock-Free Communication | `1169-session-types-for-deadlock-free-communication` |
| 1170 | 2008 | Multiparty Asynchronous Session Types | `1170-multiparty-asynchronous-session-types` |

## Open frontiers

- Tree Borrows stabilization vs production unsafe Rust
- Sound gradual typing at TypeScript scale
- Session types / effect systems in mainstream languages
