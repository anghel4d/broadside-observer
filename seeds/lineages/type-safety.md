# type-safety

**Charter.** Type systems and type safety that matter for real languages and tools—gradual/migratory typing and blame, refinement/liquid types (incl. Flux), dependent types in practice (Idris, F★, ATS, Dependent Haskell), Rust ownership formalizations (RustBelt / Oxide / Stacked·Tree Borrows / Prusti), TypeScript/Flow/Typed Lua, null-safety and pluggable types (Checker Framework, Spec♯, Kotlin), effect/capability systems (Frank, Effekt; Koka via `algebraic-effects`), session/linear/typestate/Pony, Wasm types + wasm-gc, typed SQL/LIQ (LINQ, Links, Ur/Web, EdgeQL), GADTs/phantom/typed generation (QuickChick), Scala DOT, and Python optional typing (MyPy/Pyre/Pytype / PEP 484).

Dedup note: core HM / System F / soft typing / Wright–Felleisen / Honda binary-session roots / TAPL already live on `foundations-of-computing`, `programming-language-foundations`, and `algebraic-effects`—`card:`-link them, do not remint. QuickCheck skipped (use QuickChick).

**seed_batch:** `to1000-types-2026-08-13` · pool `languages` · numbers **1308–1427** (120 cards; original exclusive 878–997 was preempted).

## Ordered spine

1. **Gradual / migratory / blame / GTP** — Siek–Taha, Typed Scheme/Racket, blame calculus, AGT, SNAPL criteria, Reticulated, Safe TypeScript.
2. **Refinement / liquid / hybrid** — Freeman–Pfenning, Liquid Types, LiquidHaskell, hybrid checking, Gradual Liquid, **Flux**.
3. **Dependent types in practice** — DML/ATS, **Idris**, F★, Dependent Haskell / singletons.
4. **Rust type system** — RustBelt, Oxide, Stacked Borrows, Tree Borrows, Patina, Miri, **Prusti**, session-typed Rust.
5. **TypeScript / Flow / Typed Lua** — Understanding TS, Safe TS, **Flow**, **Typed Lua**, set-theoretic TS foundations.
6. **Null safety / pluggable types** — Spec♯, non-null types, Checker Framework, Kotlin/Dart/TS strict null.
7. **Session / linear / typestate / Pony** — multiparty sessions, Wadler propositions-as-sessions, Linear Haskell, **Typestates**, **Pony** deny capabilities.
8. **Effects / capabilities** — Frank, Effekt, capturing types (Koka → `711` on algebraic-effects).
9. **Wasm + typed/certified compilers** — Wasm MVP types, mechanisation, WasmGC; TAL/CakeML/CompCert adjacent.
10. **Typed SQL / LIQ** — LINQ, Links, Ur/Web, EdgeQL, SQLx, Cheney–Lindley–Wadler theory.
11. **GADTs / phantom / typed generation** — Xi GADTs, GHC inference, **phantom types**, QuickChick (not QuickCheck).
12. **Scala DOT / Python checkers** — DOT soundness, Pyre/Pytype, PEP 484.

## Cards

| Stem | Year | Title |
|------|------|-------|
| `1308-gradual-typing-for-functional-languages` | 2006 | Gradual Typing for Functional Languages |
| `1309-gradual-typing-for-objects` | 2007 | Gradual Typing for Objects |
| `1310-the-design-and-implementation-of-typed-scheme` | 2008 | The Design and Implementation of Typed Scheme |
| `1311-logical-types-for-untyped-languages` | 2010 | Logical Types for Untyped Languages |
| `1312-refined-criteria-for-gradual-typing` | 2015 | Refined Criteria for Gradual Typing |
| `1313-abstracting-gradual-typing` | 2016 | Abstracting Gradual Typing |
| `1314-blame-for-all` | 2011 | Blame for All |
| `1315-threesomes-with-and-without-blame` | 2010 | Threesomes, With and Without Blame |
| `1316-migratory-typing-ten-years-later` | 2017 | Migratory Typing: Ten Years Later |
| `1317-is-sound-gradual-typing-dead` | 2016 | Is Sound Gradual Typing Dead? |
| `1318-design-and-evaluation-of-gradual-typing-for-python` | 2014 | Design and Evaluation of Gradual Typing for Python |
| `1319-gradual-typing-in-an-open-world-gradual-typing-for-python-re` | 2017 | Gradual Typing in an Open World: Gradual Typing for Python, Reticulated |
| `1320-safe-efficient-gradual-typing-for-typescript` | 2015 | Safe & Efficient Gradual Typing for TypeScript |
| `1321-understanding-typescript` | 2014 | Understanding TypeScript |
| `1322-refinement-types-for-ml` | 1991 | Refinement Types for ML |
| `1323-dependent-types-in-practical-programming` | 1999 | Dependent Types in Practical Programming |
| `1324-liquid-types` | 2008 | Liquid Types |
| `1325-refinement-types-for-haskell` | 2014 | Refinement Types for Haskell |
| `1326-abstract-refinement-types` | 2013 | Abstract Refinement Types |
| `1327-hybrid-type-checking` | 2006 | Hybrid Type Checking |
| `1328-dependent-types-and-multi-monadic-effects-in-f` | 2016 | Dependent Types and Multi-Monadic Effects in F* |
| `1329-applied-type-system-with-stateful-views` | 2004 | Applied Type System with Stateful Views |
| `1330-idris-a-general-purpose-dependently-typed-programming-langua` | 2013 | Idris, a General-Purpose Dependently Typed Programming Language: Design and Implementation |
| `1331-dependent-types-in-haskell-theory-and-practice` | 2016 | Dependent Types in Haskell: Theory and Practice |
| `1332-outsidein-x-modular-type-inference-with-local-assumptions` | 2011 | OutsideIn(X): Modular Type Inference with Local Assumptions |
| `1333-simple-unification-based-type-inference-for-gadts` | 2006 | Simple Unification-Based Type Inference for GADTs |
| `1334-guarded-recursive-datatype-constructors` | 2003 | Guarded Recursive Datatype Constructors |
| `1335-local-type-inference` | 2000 | Local Type Inference |
| `1336-typeful-programming` | 1989 | Typeful Programming |
| `1337-bidirectional-typing` | 2021 | Bidirectional Typing |
| `1338-complete-and-easy-bidirectional-typechecking-for-higher-rank` | 2013 | Complete and Easy Bidirectional Typechecking for Higher-Rank Polymorphism |
| `1339-practical-type-inference-for-arbitrary-rank-types` | 2007 | Practical Type Inference for Arbitrary-Rank Types |
| `1340-hm-x-type-inference-for-constraint-systems` | 1999 | HM(X) Type Inference for Constraint Systems |
| `1341-qualified-types-theory-and-practice` | 1994 | Qualified Types: Theory and Practice |
| `1342-flux-liquid-types-for-rust` | 2023 | Flux: Liquid Types for Rust |
| `1343-fast-and-precise-type-checking-for-javascript` | 2017 | Fast and Precise Type Checking for JavaScript |
| `1344-rustbelt-securing-the-foundations-of-the-rust-programming-la` | 2018 | RustBelt: Securing the Foundations of the Rust Programming Language |
| `1345-oxide-the-essence-of-memory-safety-in-rust` | 2019 | Oxide: The Essence of Memory Safety in Rust |
| `1346-stacked-borrows-an-aliasing-model-for-rust` | 2020 | Stacked Borrows: An Aliasing Model for Rust |
| `1347-tree-borrows` | 2023 | Tree Borrows |
| `1348-patina-a-formalization-of-the-rust-programming-language` | 2015 | Patina: A Formalization of the Rust Programming Language |
| `1349-mezzo-a-typed-language-for-safe-resource-sharing` | 2013 | Mezzo: a Typed Language for Safe Resource Sharing |
| `1350-vault-enforcing-trusted-systems-implementation-discipline` | 2001 | Vault: Enforcing Trusted Systems Implementation Discipline |
| `1351-adoption-and-focus-practical-linear-types-for-imperative-pro` | 2002 | Adoption and Focus: Practical Linear Types for Imperative Programming |
| `1352-cyclone-a-safe-dialect-of-c` | 2002 | Cyclone: A Safe Dialect of C |
| `1353-linear-haskell-practical-linearity-in-a-higher-order-impure-` | 2018 | Linear Haskell: Practical Linearity in a Higher-Order Impure Language |
| `1354-ownership-types-for-flexible-alias-protection` | 1998 | Ownership Types for Flexible Alias Protection |
| `1355-generic-universe-types` | 2007 | Generic Universe Types |
| `1356-the-spec-programming-system-an-overview` | 2004 | The Spec# Programming System: An Overview |
| `1357-declaring-and-checking-non-null-types-in-an-object-oriented-` | 2003 | Declaring and Checking Non-null Types in an Object-Oriented Language |
| `1358-practical-pluggable-types-for-java` | 2008 | Practical Pluggable Types for Java |
| `1359-nullaway-practical-type-based-null-safety-for-java` | 2019 | NullAway: Practical Type-Based Null Safety for Java |
| `1360-kotlin-null-safety` | 2016 | Kotlin Null-Safety |
| `1361-typescript-2-0-strict-null-checks` | 2016 | TypeScript 2.0 Strict Null Checks |
| `1362-sound-null-safety-in-dart` | 2020 | Sound Null Safety in Dart |
| `1363-pluggable-type-systems` | 2004 | Pluggable Type Systems |
| `1364-typed-memory-management-and-capability-calculi-for-resources` | 1999 | Typed Memory Management and Capability Calculi for Resources |
| `1365-wyvern-a-simple-typed-approach-to-capability-security` | 2014 | Wyvern: A Simple, Typed Approach to Capability Security |
| `1366-capturing-types` | 2023 | Capturing Types |
| `1367-do-be-do-be-do-frank-effects` | 2017 | Do Be Do Be Do: Frank Effects |
| `1368-links-web-programming-without-tiers` | 2006 | Links: Web Programming Without Tiers |
| `1369-effekt-capability-passing-style-for-type-and-effect-safe-ext` | 2020 | Effekt: Capability-Passing Style for Type- and Effect-Safe, Extensible Effect Handlers |
| `1370-from-datalog-to-flix-a-declarative-language-for-programming-` | 2016 | From Datalog to Flix: A Declarative Language for Programming with Types and Effects |
| `1371-multiparty-asynchronous-session-types` | 2008 | Multiparty Asynchronous Session Types |
| `1372-foundations-of-session-types-and-behavioural-contracts` | 2016 | Foundations of Session Types and Behavioural Contracts |
| `1373-lightweight-session-programming-in-scala` | 2016 | Lightweight Session Programming in Scala |
| `1374-protocol-descriptions-and-scribble-multiparty-sessions` | 2013 | Protocol Descriptions and Scribble Multiparty Sessions |
| `1375-propositions-as-sessions` | 2012 | Propositions as Sessions |
| `1376-a-semantics-for-propositions-as-sessions` | 2015 | A Semantics for Propositions-as-Sessions |
| `1377-context-free-session-types` | 2016 | Context-Free Session Types |
| `1378-bringing-the-web-up-to-speed-with-webassembly` | 2017 | Bringing the Web up to Speed with WebAssembly |
| `1379-mechanising-and-verifying-the-webassembly-specification` | 2018 | Mechanising and Verifying the WebAssembly Specification |
| `1380-webassembly-garbage-collection-and-reference-types` | 2023 | WebAssembly Garbage Collection and Reference Types |
| `1381-formal-verification-of-a-realistic-compiler` | 2009 | Formal Verification of a Realistic Compiler |
| `1382-the-cakeml-approach-to-compiler-correctness` | 2014 | The CakeML Approach to Compiler Correctness |
| `1383-cakeml-a-verified-implementation-of-ml` | 2016 | CakeML: A Verified Implementation of ML |
| `1384-when-good-components-go-bad-formally-secure-compilation` | 2018 | When Good Components Go Bad: Formally Secure Compilation |
| `1385-typed-closure-conversion` | 1996 | Typed Closure Conversion |
| `1386-from-system-f-to-typed-assembly-language` | 1999 | From System F to Typed Assembly Language |
| `1387-til-a-type-directed-optimizing-compiler-for-ml` | 1996 | TIL: A Type-Directed Optimizing Compiler for ML |
| `1388-ur-web-a-simple-model-for-programming-the-web` | 2015 | Ur/Web: A Simple Model for Programming the Web |
| `1389-sqlx-compile-time-checked-sql-for-rust` | 2020 | SQLx: Compile-Time Checked SQL for Rust |
| `1390-linq-reconciling-objects-relations-and-xml-in-the-net-framew` | 2006 | LINQ: Reconciling Objects, Relations and XML in the .NET Framework |
| `1391-declarative-programming-over-eventually-consistent-data-stor` | 2015 | Declarative Programming over Eventually Consistent Data Stores (Quelea) |
| `1392-edgeql-type-system-and-query-language` | 2019 | EdgeQL Type System and Query Language |
| `1393-a-practical-theory-of-language-integrated-query` | 2013 | A Practical Theory of Language-Integrated Query |
| `1394-java-and-scala-s-type-systems-are-unsound` | 2016 | Java and Scala's Type Systems are Unsound |
| `1395-the-essence-of-dependent-object-types` | 2016 | The Essence of Dependent Object Types |
| `1396-scala-soundness-and-the-dot-calculus-engineering` | 2016 | Scala Soundness and the DOT Calculus Engineering |
| `1397-taming-wildcards-in-java-s-type-system` | 2011 | Taming Wildcards in Java's Type System |
| `1398-truth-and-wildcards-in-java` | 2008 | Truth and Wildcards in Java |
| `1399-typescript-faq-type-system-behavior-and-soundness-limits` | 2018 | TypeScript FAQ: Type System Behavior and Soundness Limits |
| `1400-type-inference-for-records-in-a-natural-extension-of-ml` | 1989 | Type Inference for Records in a Natural Extension of ML |
| `1401-complete-type-inference-for-simple-objects` | 1987 | Complete Type Inference for Simple Objects |
| `1402-a-polymorphic-type-system-for-extensible-records-and-variant` | 1996 | A Polymorphic Type System for Extensible Records and Variants |
| `1403-the-essence-of-ml-type-inference-constraint-framework` | 2005 | The Essence of ML Type Inference (Constraint Framework) |
| `1404-gadts-meet-their-match` | 2011 | GADTs Meet Their Match |
| `1405-refinement-types-a-tutorial` | 2021 | Refinement Types: A Tutorial |
| `1406-gradual-liquid-type-inference` | 2018 | Gradual Liquid Type Inference |
| `1407-fast-and-precise-type-checking-for-javascript-flow` | 2015 | Fast and Precise Type Checking for JavaScript (Flow) |
| `1408-miri-an-interpreter-for-rust-mir` | 2019 | Miri: An Interpreter for Rust MIR |
| `1409-typed-memory-management-via-static-capabilities` | 2000 | Typed Memory Management via Static Capabilities |
| `1410-typed-lua-an-optional-type-system-for-lua` | 2014 | Typed Lua: An Optional Type System for Lua |
| `1411-session-types-for-rust` | 2015 | Session Types for Rust |
| `1412-stay-safe-under-panic-multiparty-session-types-for-rust` | 2020 | Stay Safe under Panic: Multiparty Session Types for Rust |
| `1413-system-f-with-type-equality-coercions` | 2007 | System F with Type Equality Coercions |
| `1414-safe-zero-cost-coercions-for-haskell` | 2014 | Safe Zero-Cost Coercions for Haskell |
| `1415-dependently-typed-programming-with-singletons` | 2012 | Dependently Typed Programming with Singletons |
| `1416-type-checking-with-open-type-functions` | 2008 | Type Checking with Open Type Functions |
| `1417-giving-haskell-a-promotion` | 2012 | Giving Haskell a Promotion |
| `1418-typestates-for-objects` | 2004 | Typestates for Objects |
| `1419-foundational-property-based-testing` | 2015 | Foundational Property-Based Testing |
| `1420-deny-capabilities-for-safe-fast-actors` | 2015 | Deny Capabilities for Safe, Fast Actors |
| `1421-towards-strongly-typed-set-theoretic-foundations-for-typescr` | 2017 | Towards Strongly Typed Set-Theoretic Foundations for TypeScript |
| `1422-leveraging-rust-types-for-modular-specification-and-verifica` | 2019 | Leveraging Rust Types for Modular Specification and Verification |
| `1423-type-classes-as-objects-and-implicits` | 2010 | Type Classes as Objects and Implicits |
| `1424-fun-with-phantom-types` | 2003 | Fun with Phantom Types |
| `1425-the-rustonomicon-the-dark-arts-of-unsafe-rust` | 2018 | The Rustonomicon: The Dark Arts of Unsafe Rust |
| `1426-pyre-and-pytype-gradual-typing-for-python-at-scale` | 2018 | Pyre and Pytype: Gradual Typing for Python at Scale |
| `1427-pep-484-type-hints` | 2014 | PEP 484 — Type Hints |

## External cite anchors (do not remint)

- `027-types-and-programming-languages`
- `138-session-types-as-intuitionistic-linear-propositions`
- `151-separation-logic-a-logic-for-shared-mutable-data-structures`
- `167-polymorphic-effect-systems`
- `711-koka-programming-with-row-polymorphic-effect-types`
- `918-a-syntactic-approach-to-type-soundness`
- `919-soft-typing` / `920-a-practical-soft-type-system-for-scheme`

