---
title: "Phrasal Forms"
authors:
  - "Eugene E. McDonnell"
  - "Kenneth E. Iverson"
year: 1989
venue: "APL89 Conference, ACM SIGAPL APL Quote Quad 19(4), pp. 197–199"
arxiv: null
doi: "10.1145/75145.75172"
source: "https://www.jsoftware.com/papers/fork.htm"
topics:
  - tacit-programming
  - hooks-and-forks
  - function-trains
  - array-languages
  - combinatory-logic
seed_rank: 2237
seed_batch: "archive-2026-10-08"
reviewed: "2026-10-08"
pool: "languages"
relevance_score: 10
lineage: rank-polymorphism
cites:
  - title: "Operators"
    url: "https://doi.org/10.1145/357073.357074"
    year: 1979
    arxiv: null
    doi: "10.1145/357073.357074"
  - title: "Can Programming Be Liberated from the von Neumann Style? A Functional Style and Its Algebra of Programs"
    url: "https://doi.org/10.1145/359576.359579"
    year: 1978
    arxiv: null
    doi: "10.1145/359576.359579"
  - title: "Über die Bausteine der mathematischen Logik"
    url: "https://doi.org/10.1007/BF01448013"
    year: 1924
    arxiv: null
    doi: "10.1007/BF01448013"
see:
  - "156-operators"
  - "157-can-programming-be-liberated-from-the-von-neumann-style-a-fu"
---

# Phrasal Forms

## One-sentence takeaway

Juxtaposed verbs were ungrammatical in standard APL, so McDonnell and Iverson gave them a meaning. Two verbs form a **hook**, `(f g)⍵ ↔ ⍵ f (g ⍵)`, and three form a **fork**, `(f g h)⍵ ↔ (f ⍵) g (h ⍵)`. This makes point-free function composition a matter of plain syntax, and these forms became J's (and later BQN's) trains.

## Why it matters here

ano's array surface and its BQN twin rely on tacit composition, and this three-page paper is where the fork was introduced. It also explains why the fork is the right primitive: it is Curry's formalizing combinator Φ, the hook is Schönfinkel's S, and Backus's construction form `[f, g]` (157) is just the fork `f , g`. Any ano decision about train syntax (BQN kept the 3-train fork but made the 2-train mean "atop" rather than hook) should start from this definition, together with the verb-rank rules it reuses from Iverson's Operators (156) and Hui's Rank and Uniformity (1045).

## Key ideas

- **Phrasal forms.** Following the American Heritage Dictionary sense of a "phrasal verb", sequences of verbs that standard APL left meaningless are given new, conflict-free definitions.
- **Hook.** Monadic `(f g)⍵ ↔ ⍵ f g ⍵` and dyadic `⍺(f g)⍵ ↔ ⍺ f g ⍵`. This is the S combinator. Example: `(+÷)\3 7 16 ¯294` gives the continued-fraction convergents of π, and `=⌊` tests for integers.
- **Fork.** Monadic `(f g h)⍵ ↔ (f⍵) g (h⍵)` and dyadic `⍺(f g h)⍵ ↔ (⍺f⍵) g (⍺h⍵)`. This is Curry's Φ. Sums, products and quotients of functions (`f+h`, `f×h`), set union and intersection of predicates (`p∨q`, `p∧q`), relations such as `<∨=` for `≤`, and Backus's construction (`(-b)(+,-)√…` for both roots of a quadratic) all become forks.
- **Long trains.** Forks extend to any odd number of verbs, which group from the right, so `+,-,×,÷` applied monadically to 10 gives `10 ¯10 1 0.1`. Earlier "function array" proposals instead applied each verb to a different item of the argument, which required a first axis of length three.
- **Rank.** Hooks and forks get defined ranks: the maximum of their components' ranks, with the fork's rank corrected in the errata to use f and h. This plugs them into Iverson's verb-rank framework.

## Caveats

The jsoftware transcription carries an errata list that fixes real errors in the printed definitions: which verbs of the fork are used monadically or dyadically, the fork's rank, and several examples. Use the corrected forms. Trains trade readability for brevity, and dialects now differ on 2-trains: J keeps the hook, while Dyalog APL and BQN read a 2-train as atop. Not a remint of Iverson's Operators 156 or Notation 045.

## Links

- jsoftware transcription (HTML, with errata): https://www.jsoftware.com/papers/fork.htm
- Main text frame: https://www.jsoftware.com/papers/fork1.htm
- DOI (APL Quote Quad 19(4), 1989): https://doi.org/10.1145/75145.75172
