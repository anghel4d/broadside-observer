# programming-language-foundations

**Charter.** Canonical classics of programming languages, type theory, and semantics — Hindley–Milner and System F, Reynolds parametricity and definitional interpreters, Martin-Löf/CoC/LF, Scott–Strachey and Plotkin SOS/PCF, Cardelli/Abadi objects, Actors/π-calculus, Scheme/Prolog/Smalltalk/CLU roots, Hoare/Floyd/Dijkstra and Cousot abstract interpretation. Prefer this lineage for the perfects PL haul; do not steal `algebraic-effects` (monads/handlers living thread) — `card:`-link into it instead.

## Ordered spine

1. **Lambda / System F / polymorphism**
   - `888-towards-a-theory-of-type-structure` (1974)
   - `889-girard-system-f-une-extension-de-linterpretation-de-godel` (1971)
   - `890-the-system-f-of-variable-types-fifteen-years-later` (1986)
   - `891-the-principal-type-scheme-of-an-object-in-combinatory-logic` (1969)
   - `892-a-theory-of-type-polymorphism-in-programming` (1978)
   - `893-principal-type-schemes-for-functional-programs` (1982)
   - `894-types-abstraction-and-parametric-polymorphism` (1983)
   - `039-theorems-for-free` (existing corpus; cite-link only)
2. **Definitional interpreters / CPS / machines**
   - `895-definitional-interpreters-for-higher-order-programming-langu` (1972)
   - `896-definitional-interpreters-revisited` (1998)
   - `897-defunctionalization-at-work` (2001)
   - `951-a-functional-correspondence-between-evaluators-and-abstract` (2003)
   - `931-the-mechanical-evaluation-of-expressions` (1964)
   - `923-control-operators-the-secd-machine-and-the-calculus` (1986)
   - `924-the-essence-of-compiling-with-continuations` (1993)
   - `925-compiling-with-continuations` (1992)
   - `935-rabbit-a-compiler-for-scheme` (1978)
   - `969-a-call-by-name-lambda-calculus-machine` (2007)
   - `970-the-zinc-experiment-an-economical-implementation-of-the-ml-l` (1990)
3. **Monads / type classes / Haskell**
   - `898-comprehending-monads` (1992)
   - `899-how-to-make-ad-hoc-polymorphism-less-ad-hoc` (1989)
   - `967-report-on-the-programming-language-haskell-a-non-strict-pure` (1992)
   - `968-the-implementation-of-functional-programming-languages` (1987)
   - `980-miranda-a-non-strict-functional-language-with-polymorphic-ty` (1985)
   - `036-notions-of-computation-and-monads` (existing corpus; cite-link only)
4. **Type theory / Curry–Howard / LF / CoC**
   - `901-the-formulae-as-types-notion-of-construction` (1980)
   - `902-an-intuitionistic-theory-of-types-predicative-part` (1975)
   - `903-constructive-mathematics-and-computer-programming` (1982)
   - `904-the-calculus-of-constructions` (1988)
   - `905-a-framework-for-defining-logics` (1993)
   - `906-proofs-and-types` (1989)
   - `907-programming-in-martin-l-f-s-type-theory-an-introduction` (1990)
   - `908-implementing-mathematics-with-nuprl` (1986)
   - `909-the-mathematical-language-automath-its-usage-and-some-of-its` (1970)
   - `984-inductive-definitions-in-the-system-coq-rules-and-properties` (1993)
5. **Denotational & operational semantics**
   - `910-fundamental-concepts-in-programming-languages` (1967)
   - `911-toward-a-mathematical-semantics-for-computer-languages` (1971)
   - `912-data-types-as-lattices` (1976)
   - `913-domains-for-denotational-semantics` (1982)
   - `914-call-by-name-call-by-value-and-the-calculus` (1975)
   - `915-lcf-considered-as-a-programming-language` (1977)
   - `916-a-structural-approach-to-operational-semantics` (1981)
   - `983-a-powerdomain-construction` (1976)
   - `917-natural-semantics` (1987)
   - `977-the-formal-semantics-of-programming-languages-an-introductio` (1993)
   - `978-semantics-of-programming-languages-structures-and-techniques` (1992)
6. **Type soundness / soft typing / ML details**
   - `918-a-syntactic-approach-to-type-soundness` (1994)
   - `919-soft-typing` (1991)
   - `920-a-practical-soft-type-system-for-scheme` (1997)
   - `930-type-inference-for-polymorphic-references` (1990)
   - `974-simple-imperative-polymorphism` (1995)
   - `976-polymorphic-type-schemes-and-recursive-definitions` (1984)
   - `929-type-inference-with-polymorphic-recursion` (1993)
   - `975-on-the-type-structure-of-standard-ml` (1993)
   - `900-practical-foundations-for-programming-languages` (2016)
   - `979-advanced-topics-in-types-and-programming-languages` (2005)
   - `027-types-and-programming-languages` (existing corpus; cite-link only)
   - `154-the-definition-of-standard-ml-revised` (existing corpus; cite-link only)
7. **Objects / ADTs / classes**
   - `926-on-understanding-types-data-abstraction-and-polymorphism` (1985)
   - `927-a-theory-of-objects` (1996)
   - `928-abstract-types-have-existential-type` (1988)
   - `947-programming-with-abstract-data-types` (1974)
   - `946-a-history-of-clu` (1993)
   - `982-simula-an-algol-based-simulation-language` (1966)
   - `941-the-early-history-of-smalltalk` (1993)
   - `942-design-principles-behind-smalltalk` (1981)
   - `943-smalltalk-80-the-language-and-its-implementation` (1983)
   - `948-self-the-power-of-simplicity` (1987)
   - `949-a-denotational-semantics-of-inheritance-and-its-correctness` (1989)
   - `950-mixin-based-inheritance` (1990)
8. **Actors / process calculi / concurrent languages**
   - `944-viewing-control-structures-as-patterns-of-passing-messages` (1977)
   - `945-actors-a-model-of-concurrent-computation-in-distributed-syst` (1986)
   - `956-a-calculus-of-mobile-processes-i` (1992)
   - `958-the-chemical-abstract-machine` (1992)
   - `957-the-join-calculus-a-language-for-distributed-mobile-programm` (2000)
   - `959-mobile-ambients` (2000)
   - `960-concurrent-programming-in-ml` (1999)
   - `961-making-reliable-distributed-systems-in-the-presence-of-softw` (2003)
   - `044-a-calculus-of-communicating-systems` (existing corpus; cite-link only)
   - `047-communicating-sequential-processes` (existing corpus; cite-link only)
9. **Linear logic dynamics / games**
   - `160-computational-interpretations-of-linear-logic` (1993)
   - `952-geometry-of-interaction-i-interpretation-of-system-f` (1989)
   - `953-the-lazy-lambda-calculus` (1990)
   - `954-on-full-abstraction-for-pcf-i-ii-and-iii` (2000)
   - `955-full-abstraction-for-pcf-ajm` (2000)
   - `041-linear-logic` (existing corpus; cite-link only)
   - `164-interaction-nets` (existing corpus; cite-link only)
10. **Logic programming / Lisp / Scheme**
   - `933-recursive-functions-of-symbolic-expressions-and-their-comput` (1960)
   - `934-scheme-an-interpreter-for-extended-lambda-calculus` (1975)
   - `935-rabbit-a-compiler-for-scheme` (1978)
   - `936-the-revised-5-report-on-the-algorithmic-language-scheme` (1998)
   - `937-the-evolution-of-lisp` (1993)
   - `938-predicate-logic-as-programming-language` (1974)
   - `939-algorithm-logic-control` (1979)
   - `940-prolog-in-10-figures` (1985)
11. **Axiomatic semantics / abstract interpretation / verified compilers**
   - `963-assigning-meanings-to-programs` (1967)
   - `962-an-axiomatic-basis-for-computer-programming` (1969)
   - `964-guarded-commands-nondeterminacy-and-formal-derivation-of-pro` (1975)
   - `965-abstract-interpretation-a-unified-lattice-model-for-static-a` (1977)
   - `966-principles-of-program-analysis` (1999)
   - `981-program-development-by-stepwise-refinement` (1971)
   - `971-formal-certification-of-a-compiler-back-end-or-programming-a` (2006)
   - `973-the-essence-of-algol` (1981)
   - `972-the-lambda-calculus-its-syntax-and-semantics` (1984)
   - `932-the-next-700-programming-languages` (1966)
   - `921-on-the-expressive-power-of-programming-languages` (1991)
   - `922-a-calculus-for-assignments-and-control-flow` (1987)

## Broadside cards in this thread (this batch)

| Stem | Year | Role |
|------|------|------|
| `888-towards-a-theory-of-type-structure` | 1974 | system-f |
| `889-girard-system-f-une-extension-de-linterpretation-de-godel` | 1971 | system-f |
| `890-the-system-f-of-variable-types-fifteen-years-later` | 1986 | system-f |
| `891-the-principal-type-scheme-of-an-object-in-combinatory-logic` | 1969 | hindley-milner |
| `892-a-theory-of-type-polymorphism-in-programming` | 1978 | hindley-milner |
| `893-principal-type-schemes-for-functional-programs` | 1982 | hindley-milner |
| `894-types-abstraction-and-parametric-polymorphism` | 1983 | parametricity |
| `895-definitional-interpreters-for-higher-order-programming-langu` | 1972 | definitional-interpreters |
| `896-definitional-interpreters-revisited` | 1998 | definitional-interpreters |
| `897-defunctionalization-at-work` | 2001 | defunctionalization |
| `898-comprehending-monads` | 1992 | monads |
| `899-how-to-make-ad-hoc-polymorphism-less-ad-hoc` | 1989 | type-classes |
| `900-practical-foundations-for-programming-languages` | 2016 | pfpl |
| `901-the-formulae-as-types-notion-of-construction` | 1980 | curry-howard |
| `902-an-intuitionistic-theory-of-types-predicative-part` | 1975 | martin-lof |
| `903-constructive-mathematics-and-computer-programming` | 1982 | martin-lof |
| `904-the-calculus-of-constructions` | 1988 | coc |
| `905-a-framework-for-defining-logics` | 1993 | logical-framework |
| `906-proofs-and-types` | 1989 | proofs-and-types |
| `907-programming-in-martin-l-f-s-type-theory-an-introduction` | 1990 | martin-lof |
| `908-implementing-mathematics-with-nuprl` | 1986 | nuprl |
| `909-the-mathematical-language-automath-its-usage-and-some-of-its` | 1970 | automath |
| `910-fundamental-concepts-in-programming-languages` | 1967 | strachey |
| `911-toward-a-mathematical-semantics-for-computer-languages` | 1971 | denotational-semantics |
| `912-data-types-as-lattices` | 1976 | domain-theory |
| `913-domains-for-denotational-semantics` | 1982 | domain-theory |
| `914-call-by-name-call-by-value-and-the-calculus` | 1975 | plotkin |
| `915-lcf-considered-as-a-programming-language` | 1977 | pcf |
| `916-a-structural-approach-to-operational-semantics` | 1981 | sos |
| `917-natural-semantics` | 1987 | natural-semantics |
| `918-a-syntactic-approach-to-type-soundness` | 1994 | type-soundness |
| `919-soft-typing` | 1991 | soft-typing |
| `920-a-practical-soft-type-system-for-scheme` | 1997 | soft-typing |
| `921-on-the-expressive-power-of-programming-languages` | 1991 | expressiveness |
| `922-a-calculus-for-assignments-and-control-flow` | 1987 | control-operators |
| `923-control-operators-the-secd-machine-and-the-calculus` | 1986 | cek |
| `924-the-essence-of-compiling-with-continuations` | 1993 | cps |
| `925-compiling-with-continuations` | 1992 | cps |
| `926-on-understanding-types-data-abstraction-and-polymorphism` | 1985 | cardelli |
| `927-a-theory-of-objects` | 1996 | object-calculi |
| `928-abstract-types-have-existential-type` | 1988 | existential-types |
| `929-type-inference-with-polymorphic-recursion` | 1993 | polymorphic-recursion |
| `930-type-inference-for-polymorphic-references` | 1990 | references |
| `931-the-mechanical-evaluation-of-expressions` | 1964 | secd |
| `932-the-next-700-programming-languages` | 1966 | iswim |
| `933-recursive-functions-of-symbolic-expressions-and-their-comput` | 1960 | lisp |
| `934-scheme-an-interpreter-for-extended-lambda-calculus` | 1975 | scheme |
| `935-rabbit-a-compiler-for-scheme` | 1978 | rabbit |
| `936-the-revised-5-report-on-the-algorithmic-language-scheme` | 1998 | scheme |
| `937-the-evolution-of-lisp` | 1993 | lisp |
| `938-predicate-logic-as-programming-language` | 1974 | prolog |
| `939-algorithm-logic-control` | 1979 | logic-programming |
| `940-prolog-in-10-figures` | 1985 | prolog |
| `941-the-early-history-of-smalltalk` | 1993 | smalltalk |
| `942-design-principles-behind-smalltalk` | 1981 | smalltalk |
| `943-smalltalk-80-the-language-and-its-implementation` | 1983 | smalltalk |
| `944-viewing-control-structures-as-patterns-of-passing-messages` | 1977 | actors |
| `945-actors-a-model-of-concurrent-computation-in-distributed-syst` | 1986 | actors |
| `946-a-history-of-clu` | 1993 | clu |
| `947-programming-with-abstract-data-types` | 1974 | abstract-data-types |
| `948-self-the-power-of-simplicity` | 1987 | self |
| `949-a-denotational-semantics-of-inheritance-and-its-correctness` | 1989 | inheritance |
| `950-mixin-based-inheritance` | 1990 | mixins |
| `951-a-functional-correspondence-between-evaluators-and-abstract` | 2003 | abstract-machines |
| `160-computational-interpretations-of-linear-logic` | 1993 | linear-logic |
| `952-geometry-of-interaction-i-interpretation-of-system-f` | 1989 | geometry-of-interaction |
| `953-the-lazy-lambda-calculus` | 1990 | lazy-evaluation |
| `954-on-full-abstraction-for-pcf-i-ii-and-iii` | 2000 | game-semantics |
| `955-full-abstraction-for-pcf-ajm` | 2000 | game-semantics |
| `956-a-calculus-of-mobile-processes-i` | 1992 | pi-calculus |
| `957-the-join-calculus-a-language-for-distributed-mobile-programm` | 2000 | join-calculus |
| `958-the-chemical-abstract-machine` | 1992 | cham |
| `959-mobile-ambients` | 2000 | ambients |
| `960-concurrent-programming-in-ml` | 1999 | concurrent-ml |
| `961-making-reliable-distributed-systems-in-the-presence-of-softw` | 2003 | erlang |
| `962-an-axiomatic-basis-for-computer-programming` | 1969 | hoare-logic |
| `963-assigning-meanings-to-programs` | 1967 | floyd |
| `964-guarded-commands-nondeterminacy-and-formal-derivation-of-pro` | 1975 | guarded-commands |
| `965-abstract-interpretation-a-unified-lattice-model-for-static-a` | 1977 | abstract-interpretation |
| `966-principles-of-program-analysis` | 1999 | program-analysis |
| `967-report-on-the-programming-language-haskell-a-non-strict-pure` | 1992 | haskell |
| `968-the-implementation-of-functional-programming-languages` | 1987 | functional-compilers |
| `969-a-call-by-name-lambda-calculus-machine` | 2007 | krivine-machine |
| `970-the-zinc-experiment-an-economical-implementation-of-the-ml-l` | 1990 | zinc |
| `971-formal-certification-of-a-compiler-back-end-or-programming-a` | 2006 | compcert |
| `972-the-lambda-calculus-its-syntax-and-semantics` | 1984 | lambda-calculus |
| `973-the-essence-of-algol` | 1981 | algol |
| `974-simple-imperative-polymorphism` | 1995 | value-restriction |
| `975-on-the-type-structure-of-standard-ml` | 1993 | sml |
| `976-polymorphic-type-schemes-and-recursive-definitions` | 1984 | polymorphic-recursion |
| `977-the-formal-semantics-of-programming-languages-an-introductio` | 1993 | semantics |
| `978-semantics-of-programming-languages-structures-and-techniques` | 1992 | semantics |
| `979-advanced-topics-in-types-and-programming-languages` | 2005 | types |
| `980-miranda-a-non-strict-functional-language-with-polymorphic-ty` | 1985 | miranda |
| `981-program-development-by-stepwise-refinement` | 1971 | wirth |
| `982-simula-an-algol-based-simulation-language` | 1966 | simula |
| `983-a-powerdomain-construction` | 1976 | powerdomains |
| `984-inductive-definitions-in-the-system-coq-rules-and-properties` | 1993 | coq |

## Essential cites outside this lineage

| Stem | Why cited |
|------|-----------|
| `027-types-and-programming-languages` | TAPL textbook already present |
| `039-theorems-for-free` | Wadler parametricity already present |
| `036-notions-of-computation-and-monads` / `038-…` | Moggi monads — algebraic-effects lineage |
| `041-linear-logic` | Girard LL already present |
| `154-the-definition-of-standard-ml-revised` | SML Definition already present |
| `022-handlers-of-algebraic-effects` et al. | Living effects/handlers thread |

## Batch

Seed batch: `perfects-pl-2026-08-13` · pool `languages` · numbers 888–984 · claimed in `_pools/lineage_ranges.json` as `perfects-pl-types`.

