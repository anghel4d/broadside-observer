---
title: "The space of equators has infinite Hofer's diameter"
authors:
  - "Leonid Polterovich"
  - "Egor Shelukhin"
year: 2026
venue: "arXiv preprint (math.SG)"
arxiv: "2610.31940"
doi: null
source: "https://arxiv.org/abs/2610.31940"
topics:
  - "symplectic-geometry"
  - "hofer-geometry"
  - "floer-theory"
  - "geometric-group-theory"
  - "ai-assisted-proof"
seed_rank: 2434
seed_batch: "curiosity-2026-10-27"
reviewed: "2026-10-27"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "The space of equators has infinite Hofer's diameter"
    url: "https://arxiv.org/abs/2610.31940"
    year: 2026
    arxiv: "2610.31940"
    doi: null
see: ["2198-symplectic-ball-packing-in-higher-dimensions"]
---

# The space of equators has infinite Hofer's diameter

## One-sentence takeaway

On the area-one sphere, circles that cut it into two halves of area 1/2 can be arbitrarily far apart in Hofer's energy metric: iterating one Hamiltonian map moves an equator at linear speed forever. This settles a folklore question from 1991 (Problem 32 in McDuff–Salamon), and the authors say the AI found the key lemma.

## Why it's lovely

The question sounds almost too simple. Every equator can be slid onto every other by an area-preserving flow, and Hofer's metric charges the total oscillation of the Hamiltonian you use. Is there a bound on how much it can cost? No. The proof chain is pretty too: an embedding of the free group on two letters into Ham(S²) that is bi-Lipschitz for the conjugation-invariant word norm, built from Lagrangian Floer theory on the fourth symmetric product of the sphere plus braid combinatorics. The AI statement is explicit and worth recording: the authors gave long prompts to ChatGPT 6 Astra, the model came up with the key Strip Lemma and wrote all the proofs, and the authors cleaned and simplified them. It is a clear case of the AI-assisted mathematics this library has been following.

## Key ideas

- **Equator theorem.** There are f ∈ Ham(S²), an equator E₀ and c, C > 0 with c|m − n| ≤ d_E(fᵐE₀, fⁿE₀) ≤ C|m − n|.
- **Big commutators.** There are A, B with ‖[Aᵐ, Bᵐ]‖_H ≥ cm, which answers a McDuff–Polterovich question on the sphere.
- **Far from autonomous.** The iterates fⁿ stay at Hofer distance ≥ cn from every time-independent Hamiltonian flow, which settles McDuff–Salamon Problem 22 for S².
- **Free group inside Ham.** A monomorphism Φ: F₂ → Ham(S²) with ν_F(v⁻¹w) ≤ d_H(Φv, Φw) ≤ 4ν_F(v⁻¹w); the other three results follow from it by short reductions.
- **Engine.** A Strip Lemma in Lagrangian Floer theory on Sym⁴(S²) turns braid and half-twist data into Hofer lower bounds; the iterated map is a pseudo-Anosov, an idea prompted by Jia–Webb.

## Caveats

Not yet refereed, and the proofs were produced by an AI and then checked and simplified by two leading experts in the field. There is no formal verification. The Floer machinery is heavy, so outsiders have to trust the experts. I read the introduction and the AI statement, not the Floer sections.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.31940
- PDF: https://arxiv.org/pdf/2610.31940
