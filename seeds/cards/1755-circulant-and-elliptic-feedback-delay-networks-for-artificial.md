---
title: "Circulant and Elliptic Feedback Delay Networks for Artificial Reverberation"
authors: ["Davide Rocchesso", "Julius O. Smith"]
year: 1997
venue: "IEEE Transactions on Speech and Audio Processing"
arxiv: null
doi: "10.1109/89.554268"
source: "https://doi.org/10.1109/89.554268"
topics: [reverb-parametric]
seed_rank: 1755
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "engines"
relevance_score: 9
lineage: artificial-reverberation
cites:
  - title: "An analysis/synthesis approach to real-time artificial reverberation"
    url: "https://www.aes.org/e-lib/browse.cfm?elib=5743"
    year: 1992
    arxiv: null
    doi: null
see:
  - "1686-fifty-years-of-artificial-reverberation"
  - "1728-scattering-delay-networks-for-artificial-reverberation"
---

# Circulant and Elliptic Feedback Delay Networks for Artificial Reverberation

## One-sentence takeaway

Circulant and elliptic feedback delay networks (Rocchesso & Smith 1997): the linear-algebra view of Jot-style FDNs that still run in every game reverb.

## Why it matters here

The DSP tank. Anoptic default FX send: FDN with a unitary/circulant matrix, not a 2 s convolution, unless the IR is baked. Harvest parametric reverb; pairs with 50-years survey and SDN.

## Key ideas

- **FDN structure.** Delay lines + feedback matrix (circulant/elliptic classes).
- **IEEE Trans. Speech and Audio 1997.** JOS coauthor.
- **Realtime IIR reverb.** Cheap, stable if the matrix is lossless.
- **No geometry** unless you set delays from a room (that's SDN 2015).

## Caveats

Perceptual, unforced by a mesh. Modal density vs size is a tuning art. Not convolution of Allen–Berkley. Not Triton.

## Links

- DOI: https://doi.org/10.1109/89.554268
