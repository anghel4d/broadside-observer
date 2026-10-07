---
title: "Torus-packet equidistribution in prime, quartic, and sextic degrees"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 015; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Equidistribution-of-Prime-Degree-Torus-Packets-with-Arbitrary-Local-Type-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "lean4"
  - "formalized"
seed_rank: 1875
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Equidistribution of Prime-Degree Torus Packets with Arbitrary Local Type"
    url: "https://github.com/openai/math/blob/main/preprints/Equidistribution-of-Prime-Degree-Torus-Packets-with-Arbitrary-Local-Type-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Equidistribution of primitive quartic torus packets for arbitrary orders"
    url: "https://github.com/openai/math/blob/main/preprints/Equidistribution-of-Primitive-Quartic-Torus-Packets-for-Arbitrary-Orders-October-5-2026/quartic-torus-packets.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Equidistribution of Primitive Sextic Torus Packets"
    url: "https://github.com/openai/math/blob/main/preprints/Equidistribution-of-Primitive-Sextic-Torus-Packets-October-5-2026/primitive-sextic-torus-packets.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Torus-packet equidistribution in prime, quartic, and sextic degrees

## One-sentence takeaway

OpenAI's result family 015 (Number theory) claims: Proves Haar equidistribution without escape of mass for complete volume-weighted torus packets from totally real fields: arbitrary lattices and prescribed local types in fixed prime degree at least five, arbitrary-order Picard packets in primitive quartic fields, and maximal-order ideal-class packets in primitive sextic fields.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Here primitive means having no proper intermediate field; the relevant order or field discriminant tends to infinity.
- *Equidistribution of Prime-Degree Torus Packets with Arbitrary Local Type*: We prove the packet form of the higher-dimensional Duke equidistribution problem for totally real fields of any fixed prime degree at least five, allowing arbitrary local homothety types of full lattices. As the multiplier-order discriminant tends to infinity, the volume-weighted packet measures converge to Haar probability measure, with no escape of mass.
- *Equidistribution of primitive quartic torus packets for arbitrary orders*: Let K range over totally real quartic fields with no proper intermediate field, and let $\mathcal O$ be any order in K. We prove that the packets of periodic diagonal orbits attached to invertible $\mathcal O$-ideal classes, weighted by orbit volume, equidistribute with no escape of mass as $|\mathop{\mathrm{Disc}}\nolimits (\mathcal O)|$ tends to infinity. The proof combines measure rigidity with a cubic-resolvent estimate that remains uniform at primes dividing the order index.
- *Equidistribution of Primitive Sextic Torus Packets*: We prove that the complete ideal-class packets of maximal orders in totally real sextic fields with no proper intermediate fields become equidistributed, with no escape of mass, in the space of unimodular lattices as their field discriminants tend to infinity. The limit is Haar probability measure. Each packet includes all coordinate-sign translates and is weighted by diagonal-orbit volume.
- Lean scope (lean/docs/015.md): The formalization proves equidistribution of volume-weighted torus packets for totally real number fields of every fixed prime degree at least five. For any sequence of full lattices whose multiplier-order discriminants tend to infinity, the packet measures converge weakly to Haar probability measure and form a tight family, so no mass escapes.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Equidistribution of Prime-Degree Torus Packets with Arbitrary Local Type](https://github.com/openai/math/blob/main/preprints/Equidistribution-of-Prime-Degree-Torus-Packets-with-Arbitrary-Local-Type-September-24-2026/paper.pdf)
- Manuscript: [Equidistribution of primitive quartic torus packets for arbitrary orders](https://github.com/openai/math/blob/main/preprints/Equidistribution-of-Primitive-Quartic-Torus-Packets-for-Arbitrary-Orders-October-5-2026/quartic-torus-packets.pdf)
- Manuscript: [Equidistribution of Primitive Sextic Torus Packets](https://github.com/openai/math/blob/main/preprints/Equidistribution-of-Primitive-Sextic-Torus-Packets-October-5-2026/primitive-sextic-torus-packets.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/015.md
- Comparator statement (Equidistribution of prime-degree torus packets): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DukePrimeDegree.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
