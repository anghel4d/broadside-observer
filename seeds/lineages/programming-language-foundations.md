# programming-language-foundations

**Charter.** Canonical classics of programming languages, type theory, and semantics — Hindley–Milner and System F, Reynolds parametricity and definitional interpreters, Martin-Löf/CoC/LF, Scott–Strachey and Plotkin SOS/PCF, Cardelli/Abadi objects, Actors/π-calculus, Scheme/Prolog/Smalltalk/CLU roots, Hoare/Floyd/Dijkstra and Cousot abstract interpretation. Prefer this lineage for the perfects PL haul; do not steal `algebraic-effects` (monads/handlers living thread) — `card:`-link into it instead.

## Ordered spine

1. **Lambda / System F / polymorphism**
   - `637-towards-a-theory-of-type-structure` (1974)
   - `638-girard-system-f-une-extension-de-linterpretation-de-godel` (1971)
   - `639-the-system-f-of-variable-types-fifteen-years-later` (1986)
   - `628-the-principal-type-scheme-of-an-object-in-combinatory-logic` (1969)
   - `629-a-theory-of-type-polymorphism-in-programming` (1978)
   - `640-principal-type-schemes-for-functional-programs` (1982)
   - `641-types-abstraction-and-parametric-polymorphism` (1983)
   - `038-theorems-for-free` (existing corpus; cite-link only)
2. **Definitional interpreters / CPS / machines**
   - `630-definitional-interpreters-for-higher-order-programming-langu` (1972)
   - `642-definitional-interpreters-revisited` (1998)
   - `643-defunctionalization-at-work` (2001)
   - `690-a-functional-correspondence-between-evaluators-and-abstract-` (2003)
   - `617-the-mechanical-evaluation-of-expressions` (1964)
   - `665-control-operators-the-secd-machine-and-the-calculus` (1986)
   - `666-the-essence-of-compiling-with-continuations` (1993)
   - `667-compiling-with-continuations` (1992)
   - `674-rabbit-a-compiler-for-scheme` (1978)
   - `705-a-call-by-name-lambda-calculus-machine` (2007)
   - `706-the-zinc-experiment-an-economical-implementation-of-the-ml-l` (1990)
3. **Monads / type classes / Haskell**
   - `644-comprehending-monads` (1992)
   - `645-how-to-make-ad-hoc-polymorphism-less-ad-hoc` (1989)
   - `703-report-on-the-programming-language-haskell-a-non-strict-pure` (1992)
   - `704-the-implementation-of-functional-programming-languages` (1987)
   - `716-miranda-a-non-strict-functional-language-with-polymorphic-ty` (1985)
   - `035-notions-of-computation-and-monads` (existing corpus; cite-link only)
4. **Type theory / Curry–Howard / LF / CoC**
   - `647-the-formulae-as-types-notion-of-construction` (1980)
   - `648-an-intuitionistic-theory-of-types-predicative-part` (1975)
   - `649-constructive-mathematics-and-computer-programming` (1982)
   - `650-the-calculus-of-constructions` (1988)
   - `651-a-framework-for-defining-logics` (1993)
   - `652-proofs-and-types` (1989)
   - `653-programming-in-martin-l-f-s-type-theory-an-introduction` (1990)
   - `654-implementing-mathematics-with-nuprl` (1986)
   - `655-the-mathematical-language-automath-its-usage-and-some-of-its` (1970)
   - `720-inductive-definitions-in-the-system-coq-rules-and-properties` (1993)
5. **Denotational & operational semantics**
   - `615-fundamental-concepts-in-programming-languages` (1967)
   - `612-toward-a-mathematical-semantics-for-computer-languages` (1971)
   - `614-data-types-as-lattices` (1976)
   - `656-domains-for-denotational-semantics` (1982)
   - `627-call-by-name-call-by-value-and-the-lambda-calculus` (1975)
   - `657-lcf-considered-as-a-programming-language` (1977)
   - `658-a-structural-approach-to-operational-semantics` (1981)
   - `719-a-powerdomain-construction` (1976)
   - `659-natural-semantics` (1987)
   - `713-the-formal-semantics-of-programming-languages-an-introductio` (1993)
   - `714-semantics-of-programming-languages-structures-and-techniques` (1992)
6. **Type soundness / soft typing / ML details**
   - `660-a-syntactic-approach-to-type-soundness` (1994)
   - `661-soft-typing` (1991)
   - `662-a-practical-soft-type-system-for-scheme` (1997)
   - `672-type-inference-for-polymorphic-references` (1990)
   - `710-simple-imperative-polymorphism` (1995)
   - `712-polymorphic-type-schemes-and-recursive-definitions` (1984)
   - `671-type-inference-with-polymorphic-recursion` (1993)
   - `711-on-the-type-structure-of-standard-ml` (1993)
   - `646-practical-foundations-for-programming-languages` (2016)
   - `715-advanced-topics-in-types-and-programming-languages` (2005)
   - `026-types-and-programming-languages` (existing corpus; cite-link only)
   - `137-the-definition-of-standard-ml-revised` (existing corpus; cite-link only)
7. **Objects / ADTs / classes**
   - `668-on-understanding-types-data-abstraction-and-polymorphism` (1985)
   - `669-a-theory-of-objects` (1996)
   - `670-abstract-types-have-existential-type` (1988)
   - `686-programming-with-abstract-data-types` (1974)
   - `685-a-history-of-clu` (1993)
   - `718-simula-an-algol-based-simulation-language` (1966)
   - `680-the-early-history-of-smalltalk` (1993)
   - `681-design-principles-behind-smalltalk` (1981)
   - `682-smalltalk-80-the-language-and-its-implementation` (1983)
   - `687-self-the-power-of-simplicity` (1987)
   - `688-a-denotational-semantics-of-inheritance-and-its-correctness` (1989)
   - `689-mixin-based-inheritance` (1990)
8. **Actors / process calculi / concurrent languages**
   - `683-viewing-control-structures-as-patterns-of-passing-messages` (1977)
   - `684-actors-a-model-of-concurrent-computation-in-distributed-syst` (1986)
   - `695-a-calculus-of-mobile-processes-i` (1992)
   - `697-the-chemical-abstract-machine` (1992)
   - `696-the-join-calculus-a-language-for-distributed-mobile-programm` (2000)
   - `698-mobile-ambients` (2000)
   - `699-concurrent-programming-in-ml` (1999)
   - `700-making-reliable-distributed-systems-in-the-presence-of-softw` (2003)
   - `043-a-calculus-of-communicating-systems` (existing corpus; cite-link only)
   - `046-communicating-sequential-processes` (existing corpus; cite-link only)
9. **Linear logic dynamics / games**
   - `143-computational-interpretations-of-linear-logic` (1993)
   - `691-geometry-of-interaction-i-interpretation-of-system-f` (1989)
   - `692-the-lazy-lambda-calculus` (1990)
   - `693-on-full-abstraction-for-pcf-i-ii-and-iii` (2000)
   - `694-full-abstraction-for-pcf-ajm` (2000)
   - `040-linear-logic` (existing corpus; cite-link only)
   - `147-interaction-nets` (existing corpus; cite-link only)
10. **Logic programming / Lisp / Scheme**
   - `575-recursive-functions-of-symbolic-expressions-and-their-comput` (1960)
   - `673-scheme-an-interpreter-for-extended-lambda-calculus` (1975)
   - `674-rabbit-a-compiler-for-scheme` (1978)
   - `675-the-revised-5-report-on-the-algorithmic-language-scheme` (1998)
   - `676-the-evolution-of-lisp` (1993)
   - `677-predicate-logic-as-programming-language` (1974)
   - `678-algorithm-logic-control` (1979)
   - `679-prolog-in-10-figures` (1985)
11. **Axiomatic semantics / abstract interpretation / verified compilers**
   - `626-assigning-meanings-to-programs` (1967)
   - `592-an-axiomatic-basis-for-computer-programming` (1969)
   - `591-guarded-commands-nondeterminacy-and-formal-derivation-of-pro` (1975)
   - `701-abstract-interpretation-a-unified-lattice-model-for-static-a` (1977)
   - `702-principles-of-program-analysis` (1999)
   - `717-program-development-by-stepwise-refinement` (1971)
   - `707-formal-certification-of-a-compiler-back-end-or-programming-a` (2006)
   - `709-the-essence-of-algol` (1981)
   - `708-the-lambda-calculus-its-syntax-and-semantics` (1984)
   - `616-the-next-700-programming-languages` (1966)
   - `663-on-the-expressive-power-of-programming-languages` (1991)
   - `664-a-calculus-for-assignments-and-control-flow` (1987)

## Broadside cards in this thread (this batch)

| Stem | Year | Role |
|------|------|------|
| `637-towards-a-theory-of-type-structure` | 1974 | system-f |
| `638-girard-system-f-une-extension-de-linterpretation-de-godel` | 1971 | system-f |
| `639-the-system-f-of-variable-types-fifteen-years-later` | 1986 | system-f |
| `628-the-principal-type-scheme-of-an-object-in-combinatory-logic` | 1969 | hindley-milner |
| `629-a-theory-of-type-polymorphism-in-programming` | 1978 | hindley-milner |
| `640-principal-type-schemes-for-functional-programs` | 1982 | hindley-milner |
| `641-types-abstraction-and-parametric-polymorphism` | 1983 | parametricity |
| `630-definitional-interpreters-for-higher-order-programming-langu` | 1972 | definitional-interpreters |
| `642-definitional-interpreters-revisited` | 1998 | definitional-interpreters |
| `643-defunctionalization-at-work` | 2001 | defunctionalization |
| `644-comprehending-monads` | 1992 | monads |
| `645-how-to-make-ad-hoc-polymorphism-less-ad-hoc` | 1989 | type-classes |
| `646-practical-foundations-for-programming-languages` | 2016 | pfpl |
| `647-the-formulae-as-types-notion-of-construction` | 1980 | curry-howard |
| `648-an-intuitionistic-theory-of-types-predicative-part` | 1975 | martin-lof |
| `649-constructive-mathematics-and-computer-programming` | 1982 | martin-lof |
| `650-the-calculus-of-constructions` | 1988 | coc |
| `651-a-framework-for-defining-logics` | 1993 | logical-framework |
| `652-proofs-and-types` | 1989 | proofs-and-types |
| `653-programming-in-martin-l-f-s-type-theory-an-introduction` | 1990 | martin-lof |
| `654-implementing-mathematics-with-nuprl` | 1986 | nuprl |
| `655-the-mathematical-language-automath-its-usage-and-some-of-its` | 1970 | automath |
| `615-fundamental-concepts-in-programming-languages` | 1967 | strachey |
| `612-toward-a-mathematical-semantics-for-computer-languages` | 1971 | denotational-semantics |
| `614-data-types-as-lattices` | 1976 | domain-theory |
| `656-domains-for-denotational-semantics` | 1982 | domain-theory |
| `627-call-by-name-call-by-value-and-the-lambda-calculus` | 1975 | plotkin |
| `657-lcf-considered-as-a-programming-language` | 1977 | pcf |
| `658-a-structural-approach-to-operational-semantics` | 1981 | sos |
| `659-natural-semantics` | 1987 | natural-semantics |
| `660-a-syntactic-approach-to-type-soundness` | 1994 | type-soundness |
| `661-soft-typing` | 1991 | soft-typing |
| `662-a-practical-soft-type-system-for-scheme` | 1997 | soft-typing |
| `663-on-the-expressive-power-of-programming-languages` | 1991 | expressiveness |
| `664-a-calculus-for-assignments-and-control-flow` | 1987 | control-operators |
| `665-control-operators-the-secd-machine-and-the-calculus` | 1986 | cek |
| `666-the-essence-of-compiling-with-continuations` | 1993 | cps |
| `667-compiling-with-continuations` | 1992 | cps |
| `668-on-understanding-types-data-abstraction-and-polymorphism` | 1985 | cardelli |
| `669-a-theory-of-objects` | 1996 | object-calculi |
| `670-abstract-types-have-existential-type` | 1988 | existential-types |
| `671-type-inference-with-polymorphic-recursion` | 1993 | polymorphic-recursion |
| `672-type-inference-for-polymorphic-references` | 1990 | references |
| `617-the-mechanical-evaluation-of-expressions` | 1964 | secd |
| `616-the-next-700-programming-languages` | 1966 | iswim |
| `575-recursive-functions-of-symbolic-expressions-and-their-comput` | 1960 | lisp |
| `673-scheme-an-interpreter-for-extended-lambda-calculus` | 1975 | scheme |
| `674-rabbit-a-compiler-for-scheme` | 1978 | rabbit |
| `675-the-revised-5-report-on-the-algorithmic-language-scheme` | 1998 | scheme |
| `676-the-evolution-of-lisp` | 1993 | lisp |
| `677-predicate-logic-as-programming-language` | 1974 | prolog |
| `678-algorithm-logic-control` | 1979 | logic-programming |
| `679-prolog-in-10-figures` | 1985 | prolog |
| `680-the-early-history-of-smalltalk` | 1993 | smalltalk |
| `681-design-principles-behind-smalltalk` | 1981 | smalltalk |
| `682-smalltalk-80-the-language-and-its-implementation` | 1983 | smalltalk |
| `683-viewing-control-structures-as-patterns-of-passing-messages` | 1977 | actors |
| `684-actors-a-model-of-concurrent-computation-in-distributed-syst` | 1986 | actors |
| `685-a-history-of-clu` | 1993 | clu |
| `686-programming-with-abstract-data-types` | 1974 | abstract-data-types |
| `687-self-the-power-of-simplicity` | 1987 | self |
| `688-a-denotational-semantics-of-inheritance-and-its-correctness` | 1989 | inheritance |
| `689-mixin-based-inheritance` | 1990 | mixins |
| `690-a-functional-correspondence-between-evaluators-and-abstract-` | 2003 | abstract-machines |
| `143-computational-interpretations-of-linear-logic` | 1993 | linear-logic |
| `691-geometry-of-interaction-i-interpretation-of-system-f` | 1989 | geometry-of-interaction |
| `692-the-lazy-lambda-calculus` | 1990 | lazy-evaluation |
| `693-on-full-abstraction-for-pcf-i-ii-and-iii` | 2000 | game-semantics |
| `694-full-abstraction-for-pcf-ajm` | 2000 | game-semantics |
| `695-a-calculus-of-mobile-processes-i` | 1992 | pi-calculus |
| `696-the-join-calculus-a-language-for-distributed-mobile-programm` | 2000 | join-calculus |
| `697-the-chemical-abstract-machine` | 1992 | cham |
| `698-mobile-ambients` | 2000 | ambients |
| `699-concurrent-programming-in-ml` | 1999 | concurrent-ml |
| `700-making-reliable-distributed-systems-in-the-presence-of-softw` | 2003 | erlang |
| `592-an-axiomatic-basis-for-computer-programming` | 1969 | hoare-logic |
| `626-assigning-meanings-to-programs` | 1967 | floyd |
| `591-guarded-commands-nondeterminacy-and-formal-derivation-of-pro` | 1975 | guarded-commands |
| `701-abstract-interpretation-a-unified-lattice-model-for-static-a` | 1977 | abstract-interpretation |
| `702-principles-of-program-analysis` | 1999 | program-analysis |
| `703-report-on-the-programming-language-haskell-a-non-strict-pure` | 1992 | haskell |
| `704-the-implementation-of-functional-programming-languages` | 1987 | functional-compilers |
| `705-a-call-by-name-lambda-calculus-machine` | 2007 | krivine-machine |
| `706-the-zinc-experiment-an-economical-implementation-of-the-ml-l` | 1990 | zinc |
| `707-formal-certification-of-a-compiler-back-end-or-programming-a` | 2006 | compcert |
| `708-the-lambda-calculus-its-syntax-and-semantics` | 1984 | lambda-calculus |
| `709-the-essence-of-algol` | 1981 | algol |
| `710-simple-imperative-polymorphism` | 1995 | value-restriction |
| `711-on-the-type-structure-of-standard-ml` | 1993 | sml |
| `712-polymorphic-type-schemes-and-recursive-definitions` | 1984 | polymorphic-recursion |
| `713-the-formal-semantics-of-programming-languages-an-introductio` | 1993 | semantics |
| `714-semantics-of-programming-languages-structures-and-techniques` | 1992 | semantics |
| `715-advanced-topics-in-types-and-programming-languages` | 2005 | types |
| `716-miranda-a-non-strict-functional-language-with-polymorphic-ty` | 1985 | miranda |
| `717-program-development-by-stepwise-refinement` | 1971 | wirth |
| `718-simula-an-algol-based-simulation-language` | 1966 | simula |
| `719-a-powerdomain-construction` | 1976 | powerdomains |
| `720-inductive-definitions-in-the-system-coq-rules-and-properties` | 1993 | coq |

## Essential cites outside this lineage

| Stem | Why cited |
|------|-----------|
| `026-types-and-programming-languages` | TAPL textbook already present |
| `038-theorems-for-free` | Wadler parametricity already present |
| `035-notions-of-computation-and-monads` / `037-…` | Moggi monads — algebraic-effects lineage |
| `040-linear-logic` | Girard LL already present |
| `137-the-definition-of-standard-ml-revised` | SML Definition already present |
| `021-handlers-of-algebraic-effects` et al. | Living effects/handlers thread |

## Batch

Seed batch: `perfects-pl-2026-08-13` · pool `languages` · numbers 637–733 · claimed in `_pools/lineage_ranges.json` as `perfects-pl-types`.

