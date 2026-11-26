---
title: "Dancing dervishes, spinning skirts and whirling waves"
authors:
  - "Paul R. Kaneelil"
  - "Sifan Yin"
  - "L. Mahadevan"
year: 2026
venue: "arXiv preprint (cond-mat.soft)"
arxiv: "2611.33429"
doi: null
source: "https://arxiv.org/abs/2611.33429"
version_reviewed: "v1"
topics:
  - "elastic-sheets"
  - "rotating-membranes"
  - "soft-matter"
  - "cloth-dynamics"
  - "scaling-laws"
seed_rank: 2735
seed_batch: "curiosity-2026-11-27"
reviewed: "2026-11-27"
pool: "physics"
relevance_score: 7
cites:
  - title: "Dancing dervishes, spinning skirts and whirling waves"
    url: "https://arxiv.org/abs/2611.33429"
    year: 2026
    arxiv: "2611.33429"
    doi: null
see: []
---

# Dancing dervishes, spinning skirts and whirling waves

## One-sentence takeaway

A heavy soft circular sheet spun about its centre (a lab stand-in for a whirling dervish's tunic or a Kathak dancer's skirt) passes through three states as spin increases: draped rotation, flat, then a "whirling" state whose wavy shape rotates *backwards* relative to the sheet. Simple scaling laws mark the boundaries between them.

## Why it's lovely

It starts from a photograph of a dancer at three tempos and ends with a three-dimensional phase diagram. The surprising state is the last one. At high spin the saddle-shaped pattern drifts retrograde, slower than the sheet carrying it, because a backward-travelling bending wave becomes nearly stationary in the lab frame. The draped-to-flat transition sits where centrifugal and gravitational accelerations balance (So = c₁·Gr). The flat-to-whirling boundary follows So = c₂(Gr/ε)^{2/3}, and the experiments fit an exponent of 0.60 (95% CI 0.50–0.70) against the predicted 2/3. For Anoptic this is a ready-made test suite for spinning cloth. Any cloth or shell solver should reproduce draping, flattening and retrograde whirling at the right dimensionless thresholds, and the paper says which dimensionless groups matter.

## Key ideas

- **Three archetypal states.** Gravity-dominated draped rotation, a flat state, and whirling with retrograde pattern rotation (Ω_s/Ω drops below 1). Depending on parameters, sheets follow either draped → flat → whirling or draped → whirling.
- **Measurement.** Sheets of HDPE, rubber and vinyl polysiloxane, clamped at the centre on a DC motor, imaged with Fourier-transform profilometry (projected fringes plus a high-speed camera) for 3D shapes and kymographs.
- **Control parameters.** Three dimensionless groups (ε, Gr, So). So/Gr = Ω²R/g sets the draped-to-flat transition.
- **Whirling criterion.** Linearizing out-of-plane perturbations about the steady state gives the condition for the backward wave to stand still in the lab frame, which yields the 2/3 scaling with gravity and a constant threshold without it.

## Caveats

This is a v1 preprint (24 Nov 2026, 10 pp.), not refereed. I read the abstract, the experimental description and the scaling section. By the authors' account the minimal model leaves out aerodynamics and underestimates critical speeds, so numerical results are scaled by ≈ 5.5 to match the gravity-dominated data, and HDPE and rubber sheets deviate. Large-amplitude whirling needs an external energy source not in the linear theory, and the dancer is not at a true steady state. The authors disclose using Claude Opus 5.5 and GPT-6 Luna for symbolic manipulation and MATLAB code, with results verified independently.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.33429
- PDF: https://arxiv.org/pdf/2611.33429
