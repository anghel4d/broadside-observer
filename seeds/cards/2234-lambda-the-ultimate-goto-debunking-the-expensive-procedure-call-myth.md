---
title: "Debunking the 'Expensive Procedure Call' Myth, or, Procedure Call Implementations Considered Harmful, or, Lambda: The Ultimate GOTO"
authors:
  - "Guy Lewis Steele Jr."
year: 1977
venue: "MIT AI Lab Memo AIM-443; Proceedings of the 1977 ACM Annual Conference (ACM '77), pp. 153–162"
arxiv: null
doi: "10.1145/800179.810196"
source: "https://www.cs.tufts.edu/comp/150FP/archive/guy-steele/ultimate-goto.pdf"
topics:
  - tail-calls
  - procedure-call-implementation
  - interpreters
  - structured-programming
  - lisp-scheme
seed_rank: 2234
seed_batch: "archive-2026-10-08"
reviewed: "2026-10-08"
pool: "languages"
relevance_score: 9
lineage: programming-language-foundations
cites:
  - title: "Scheme: An Interpreter for Extended Lambda Calculus"
    url: "https://dspace.mit.edu/handle/1721.1/5794"
    year: 1975
    arxiv: null
    doi: null
  - title: "Lambda: The Ultimate Imperative (AI Memo 353)"
    url: "https://dspace.mit.edu/handle/1721.1/5790"
    year: 1976
    arxiv: null
    doi: null
  - title: "Structured Programming with go to Statements"
    url: "https://doi.org/10.1145/356635.356640"
    year: 1974
    arxiv: null
    doi: "10.1145/356635.356640"
  - title: "Flow Diagrams, Turing Machines and Languages with Only Two Formation Rules"
    url: "https://doi.org/10.1145/355592.365646"
    year: 1966
    arxiv: null
    doi: "10.1145/355592.365646"
  - title: "Viewing Control Structures as Patterns of Passing Messages"
    url: "https://doi.org/10.1016/0004-3702(77)90033-9"
    year: 1977
    arxiv: null
    doi: "10.1016/0004-3702(77)90033-9"
  - title: "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I"
    url: "https://doi.org/10.1145/367177.367199"
    year: 1960
    arxiv: null
    doi: "10.1145/367177.367199"
see:
  - "673-scheme-an-interpreter-for-extended-lambda-calculus"
  - "598-structured-programming-with-go-to-statements"
  - "625-flow-diagrams-turing-machines-and-languages-with-only-two-fo"
  - "683-viewing-control-structures-as-patterns-of-passing-messages"
  - "575-recursive-functions-of-symbolic-expressions-and-their-comput"
  - "511-the-calculi-of-lambda-conversion"
---

# Debunking the "Expensive Procedure Call" Myth, or, Lambda: The Ultimate GOTO

## One-sentence takeaway

A procedure call in tail position is just a GOTO that passes arguments, so a compiler that emits a JUMP instead of PUSHJ/POPJ makes calls as cheap as branches. With that guarantee, procedures can express any flowchart and any loop, without extra variables or a growing stack.

## Why it matters here

ano's interpreter and any GRID COMMAND scripting VM have to choose whether proper tail calls are guaranteed. This memo is the original argument for doing so. With guaranteed tail calls, unit-AI state machines can be written as mutually tail-calling procedures (one per state, see Statecharts 2236), interpreter dispatch loops and continuation-passing code run in constant stack, and "loop" stops being a separate primitive. It sits directly between the live Scheme cards (673 interpreter, 674 Rabbit) and threaded-code dispatch (1437).

## Key ideas

- **Tail call = JUMP.** If a function's last act is to call F, the sequence `PUSHJ F; POPJ` can become `JUMP F`. The callee returns straight to the caller's caller, and the useless return address is never pushed. Seen this way, PUSHJ is a peephole optimisation of PUSH plus JUMP, not the other way around.
- **Stack hygiene before the jump.** Stack-allocated temporaries must be popped *before* the tail call rather than after, so the call and return can fuse. The memo notes where this fails: when the callee may refer to stack-allocated structures or dynamic bindings of the caller.
- **The cost is folklore.** The memo quotes measurements: a PL/I optimising compiler pushing 336 bytes per call, and Yourdon's 198 µs per PL/I call on a 360/50. Against these it sets compiled MacLISP, whose calls are fast and whose numerical code beat DEC's FORTRAN compiler in Fateman's timing tests.
- **Stylistic freedom.** Any flowchart can be written as a "structured" program, without introducing extra variables, by making each node a procedure and each edge a tail call. Iteration constructs like `while` are definable as tail-recursive procedures.
- **Concept vs construct.** Steele concludes that the trouble with both GOTO and procedure calls comes from tying abstract programming concepts (iteration, state transition, subroutine) to single concrete language constructs.

## Caveats

The cost model is the PDP-10 and 1970s compilers. Modern call cost is dominated by calling conventions, register saves, inlining and branch prediction, so measure before believing either side. Guaranteed tail calls erase stack frames, which makes debugging and stack traces harder, and they interact with destructors, dynamic scope and stack-allocated data (the memo's own exceptions). Read alongside Knuth 598 and Böhm–Jacopini 625, which it engages, rather than as a stand-alone theory. Card written from an OCR of the scanned memo.

## Links

- Memo PDF (scanned, Tufts course archive mirror): https://www.cs.tufts.edu/comp/150FP/archive/guy-steele/ultimate-goto.pdf
- MIT DSpace record (AIM-443): https://dspace.mit.edu/handle/1721.1/5753
- ACM '77 conference version DOI: https://doi.org/10.1145/800179.810196
