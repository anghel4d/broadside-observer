---
title: "OpenAI's Lean construction of four-dimensional quantum Yang–Mills theory (OpenAI-YM-20261028)"
authors:
  - "OpenAI"
year: 2026
venue: "Lean 4 source release on GitHub, with validation by the Yang–Mills shepherding committee (Douglas, Gross, Jaffe, Klebanov, Nekrasov)"
arxiv: null
doi: null
source: "https://github.com/yang-mills-group/OpenAI-YM-20261028"
topics:
  - "yang-mills"
  - "constructive-qft"
  - "lattice-gauge-theory"
  - "lean4"
  - "formalized"
  - "ai-assisted-math"
  - "millennium-problems"
seed_rank: 2574
seed_batch: "curiosity-2026-11-13"
reviewed: "2026-11-13"
pool: "physics"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Validation of the OpenAI Yang–Mills construction (assessment-1)"
    url: "https://github.com/yang-mills-group/YM/blob/main/docs/assessment-1.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Proof by OpenAI of the existence of Quantum Yang-Mills Theory: 3rd Statement by the Shepherding Committee"
    url: "https://www.kitp.ucsb.edu/sites/default/files/3rd-Statement-About-Quantum-YangMills-Theory_Nov-9.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Yang–Mills informalization (Scott Armstrong, with Martin Hairer's humanise-yang-mills project)"
    url: "https://github.com/scottnarmstrong/yang-mills-informalization"
    year: 2026
    arxiv: null
    doi: null
see: []
---

# OpenAI's Lean construction of four-dimensional quantum Yang–Mills theory (OpenAI-YM-20261028)

## One-sentence takeaway

About a million lines of machine-written Lean construct, for every compact simple gauge group, a relativistic quantum field theory satisfying the Wightman axioms as a scaling limit of 4D Wilson lattice gauge theory. A committee chaired by David Gross confirms that this settles the existence half of the Yang–Mills problem as usually stated, but not the mass gap, and not uniqueness of the infinite-volume limit.

## Why it's lovely

This is the physics sequel to the Navier–Stokes episode: the theory behind the Standard Model now exists as a mathematical object, and the first copy is a formal proof that no human fully understands yet. The committee's own assessment says "We do not claim to fully understand the proof yet." The release reads like an archaeology site. There are 9,477 files whose folders record the order of development rather than the mathematical structure, objects with nicknames like `Treasury`, `Jewel` and `Sheet`, and an informal 1147-page proof that has not been released. Scott Armstrong and Martin Hairer's project is using agents to map the dependency graph into 8 parts and 32 units, and has posted a 244-page draft in natural language. For Broadside this is the clearest case yet of provenance-first knowledge. The artefact is checked by a kernel, a comparator and an axiom audit, and human understanding is being rebuilt afterwards, with tools, as a separate layer. The construction also mirrors engine practice in a precise way: discretise on a lattice, renormalise the observables, then prove that the continuum limit exists.

## Key ideas

- **Construction.** Wilson lattice gauge theories on 4-tori with spacing \(a\to0\) and \(\beta/\log(1/a)\) converging to the asymptotic-freedom value \(11C_G/(24\pi^2)\). Renormalised local gauge-invariant observables have correlations that converge at fixed volume, and then along a subsequence as the volume grows.
- **Reconstruction.** Any subsequential limit decomposes into pure phases, each proven to satisfy the Osterwalder–Schrader axioms. OS reconstruction, also formalised in the submission, gives Wightman QFTs with a unique vacuum, positive energy, Poincaré covariance and locality.
- **Evidence it is Yang–Mills rather than a free field.** A normalised stress tensor with its Ward identity, an operator product expansion with error bounds, and a stress-tensor-trace two-point function asymptotic to \(3\dim(\mathfrak g)/(\pi^4 r^8\log^2(1/r))\), which rules out the free Wick-type profiles.
- **Validation.** A clean rebuild, an axiom audit, a Comparator check, additional independent Lean checks of the problem requirements, and human review of the definitions. The committee used OpenAI's Astra model to help digest the code.
- **Not claimed.** A mass gap, uniqueness or subsequence-independence of the infinite-volume limit, clustering of the full limit, and agreement with perturbation theory to all orders.

## Caveats

Existence is only one half of the Clay problem, and the stronger half (the mass gap) remains open. The infinite-volume limit is only subsequential and is not shown to be unique. The shepherding committee was appointed by OpenAI, and its gatekeeping role has been criticised by some mathematicians (Scientific American). The 1147-page informal proof has not been released, so the human-readable story is still being written, by Armstrong, Hairer and others, using agents. I read the committee's statement, the first pages of assessment-1, the Armstrong informalization README and press coverage; I did not inspect the Lean source myself.

## Links

- Lean source (OpenAI-YM-20261028): https://github.com/yang-mills-group/OpenAI-YM-20261028
- Committee validation, assessment-1 (PDF): https://github.com/yang-mills-group/YM/blob/main/docs/assessment-1.pdf
- Committee 3rd statement, 9 Nov 2026 (PDF): https://www.kitp.ucsb.edu/sites/default/files/3rd-Statement-About-Quantum-YangMills-Theory_Nov-9.pdf
- Armstrong–Hairer informalization: https://github.com/scottnarmstrong/yang-mills-informalization
- Informalization HTML: https://mgubi.github.io/yang-mills-informalization/
- Scientific American coverage: https://www.scientificamerican.com/article/openais-shepherds-affirm-blockbuster-physics-result/
