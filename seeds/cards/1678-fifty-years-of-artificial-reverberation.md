---
title: "Fifty Years of Artificial Reverberation"
authors: ["Vesa Välimäki", "Julian D. Parker", "Lauri Savioja", "Julius O. Smith", "Jonathan S. Abel"]
year: 2012
venue: "IEEE TASLP"
arxiv: null
doi: "10.1109/TASL.2012.2189567"
source: "https://doi.org/10.1109/TASL.2012.2189567"
topics: [reverb-parametric]
seed_rank: 1678
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "engines"
relevance_score: 9
lineage: artificial-reverberation
cites:
  - title: "Natural Sounding Artificial Reverberation"
    url: "https://www.aes.org/e-lib/browse.cfm?elib=14658"
    year: 1961
    arxiv: null
    doi: null
  - title: "About This Reverberation Business"
    url: "https://www.aes.org/e-lib/browse.cfm?elib=2901"
    year: 1979
    arxiv: null
    doi: null
see:
  - "1747-circulant-and-elliptic-feedback-delay-networks-for-artificial"
  - "1720-scattering-delay-networks-for-artificial-reverberation"
---

# Fifty Years of Artificial Reverberation

## One-sentence takeaway

Välimäki et al. 2012: fifty-year map of artificial reverberation from Schroeder comb/allpass through FDNs, convolution, and physical room models.

## Why it matters here

GRID COMMAND will ship *some* reverb: FDN/SDN on a budget, convolution of a baked IR, or a wave/GA sim. This IEEE TASLP survey is the menu — read it before inventing a 'new' tank. Ties JOS / Abel / Savioja / Parker.

## Key ideas

- **Schroeder → Moorer → Jot FDN → SDN.** The parametric-reverb spine (see Rocchesso 1997, De Sena 2015).
- **Convolution vs recursive.** IR playback vs cheap IIR tanks.
- **Physical vs perceptual.** Room solvers vs 'it sounds like a hall.'
- **IEEE TASLP 2012.** Harvest 175 cites; the survey card for this lineage.

## Caveats

Survey, not an algorithm. 2012 cutoff (pre-neural reverb, pre-SDN 2015 details). Does not replace Triton or MagLS.

## Links

- DOI: https://doi.org/10.1109/TASL.2012.2189567
