---
title: "Abstracting Control"
authors:
  - "Olivier Danvy"
  - "Andrzej Filinski"
year: 1990
venue: "LFP"
arxiv: null
doi: "10.1145/91556.91622"
source: "https://doi.org/10.1145/91556.91622"
topics:
  - "delimited-continuations"
  - "shift-reset"
  - "cps"
  - "control-operators"
seed_rank: 1159
seed_batch: "archive-2026-08-24"
reviewed: "2026-08-24"
pool: "languages"
relevance_score: 10
lineage: delimited-control
cites:
  - title: "Handlers of Algebraic Effects"
    url: "https://doi.org/10.1007/978-3-642-00590-9_7"
    year: 2009
    arxiv: null
    doi: "10.1007/978-3-642-00590-9_7"
  - title: "The Essence of Compiling with Continuations"
    url: "https://doi.org/10.1145/173262.155113"
    year: 1993
    arxiv: null
    doi: "10.1145/173262.155113"
  - title: "Compiling with Continuations"
    url: "https://doi.org/10.1017/CBO9780511609619"
    year: 1992
    arxiv: null
    doi: "10.1017/CBO9780511609619"
  - title: "Control Operators, the SECD Machine, and the λ-Calculus"
    url: "https://doi.org/10.1007/3-540-16442-1_5"
    year: 1986
    arxiv: null
    doi: null
see:
  - "021-handlers-of-algebraic-effects"
  - "666-the-essence-of-compiling-with-continuations"
  - "667-compiling-with-continuations"
  - "665-control-operators-the-secd-machine-and-the-calculus"
---

# Abstracting Control

## One-sentence takeaway

`shift`/`reset` are what you get by *iterating* CPS: a prompt (`reset`) installs a meta-continuation, `shift` grabs the continuation up to that prompt, and algebraic effect handlers (21) still compile to this.

## Problem

The CPS/ANF shelf on main is dense: Plotkin (627), RABBIT (674), Appel (667), Flanagan ANF (666), Felleisen control/SECD (665), TAL (1001), typed closure conversion (1140). All of that is *undelimited* control — `call/cc` grabs the rest of the world. Effect handlers (21, 107, 112, 478) need a *slice* of the stack. Felleisen's prompts (1988) introduce a delimiter but not the CPS account you implement against. Handlers are the language; they are not the compilation target.

## Design

One idea: abstract control as a *hierarchy* of continuations, each an evaluation context around the next. One CPS transform gives ordinary continuations; two give Prolog-style backtracking; n give `shiftₙ`/`resetₙ`. `reset` is the prompt; `shift k. e` captures the continuation up to the nearest `reset`, binds it to `k`, and evaluates `e` with the reset continuation restored. The operators *denote* typed λ-terms in CPS, so they are themselves statically typed in ML/Scheme. The paper's one-pass CBV CPS conversion performs administrative reductions at translation time and is written, neatly, *with* `shift`/`reset`. η-reduction garbage-collects unused meta-continuations, so iterated CPS is not a code-size disaster.

## Evidence

ACM Conference on Lisp and Functional Programming, Nice, 1990, pp. 151–160, DOI `10.1145/91556.91622`. Filinski POPL 1994 ("Representing Monads") is the "monads are shift/reset" corollary — cite, do not mint. The 1992 MSCS "Representing Control" is the journal CPS study. Every handler-to-CPS compiler (Eff, Koka, OCaml 5) still starts here.

## Limitations

Dynamic `shift0`/`reset0` (the whole stack of prompts is inspectable) is a later variant; this paper is the static CPS-guided family. Undelimited `call/cc` is still what 665/667 talk about — do not collapse them. The hierarchy is a *specification*, not a VM instruction; the abstract machine is in the 2005 "operational foundation" follow-on (cite).

## Implications for Broadside

ano's `try`/`catch`, generators, and effect handlers should lower to `reset` (prompt at the handler) + `shift` (the operation), not to `call/cc`. That is also how you keep a GPU/job continuation from capturing "the rest of the editor." Compile handlers (21) to this; do not remint ANF, Appel, or TAL to say so.

## Bottom line

Mint delimited control. The CPS/ANF/TAL/closure-conversion shelf stays cited, not reminted. Filinski 1994 is a cite.

## Links

- DOI: [10.1145/91556.91622](https://doi.org/10.1145/91556.91622)
- ACM DL: https://dl.acm.org/doi/10.1145/91556.91622
