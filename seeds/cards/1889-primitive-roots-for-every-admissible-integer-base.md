---
title: "Primitive roots for every admissible integer base"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 029; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Primitive-roots-for-every-admissible-integer-base-October-4-2026/primitive-roots-all-integer-bases.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "unformalized"
seed_rank: 1889
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Primitive roots for every admissible integer base"
    url: "https://github.com/openai/math/blob/main/preprints/Primitive-roots-for-every-admissible-integer-base-October-4-2026/primitive-roots-all-integer-bases.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Simultaneous primitive roots: a conditional lower bound for prime bases"
    url: "https://github.com/openai/math/blob/main/preprints/Simultaneous-primitive-roots-a-conditional-lower-bound-for-prime-bases-October-4-2026/simultaneous-primitive-roots-conditional-lower-bound-prime-bases.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Primitive roots for every admissible integer base

## One-sentence takeaway

OpenAI's result family 029 (Number theory) claims: Proves the infinitude assertion in Artin's primitive root conjecture for every integer a that is neither −1 nor a square.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): For each such base, at least $c_a x/(\log x)^2$ primes in every sufficiently large interval $(x,2x)$ have primitive root a, with $c_a\gt 0$.
- *Primitive roots for every admissible integer base*: We prove the infinitude assertion in Artin's primitive root conjecture: for every integer a that is neither −1 nor a square, there are at least $c_a x/(\log x)^2$ primes in $(x,2x)$ with primitive root a, for some $c_a\gt 0$ and every sufficiently large x.
- *Simultaneous primitive roots: a conditional lower bound for prime bases*: For every fixed finite set of distinct positive primes, we prove that at least $cx/(\log x)^2$ primes in $(x,2x)$ have every member of the set as a primitive root, for some c > 0 and all sufficiently large x. The result assumes four explicitly stated analytic and sieve inputs from the companion paper on primitive roots for admissible integer bases.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Primitive roots for every admissible integer base](https://github.com/openai/math/blob/main/preprints/Primitive-roots-for-every-admissible-integer-base-October-4-2026/primitive-roots-all-integer-bases.pdf)
- Manuscript: [Simultaneous primitive roots: a conditional lower bound for prime bases](https://github.com/openai/math/blob/main/preprints/Simultaneous-primitive-roots-a-conditional-lower-bound-for-prime-bases-October-4-2026/simultaneous-primitive-roots-conditional-lower-bound-prime-bases.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
