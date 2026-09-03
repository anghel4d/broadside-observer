# tone-mapping

**Charter.** Display-referred operators that map HDR linear light onto SDR/HDR displays with a perceptual (not merely photographic) curve. Reinhard 409 is the 2002 parent already in the catalog without a lineage file; this thread starts at GT7's UCS-aware production operator.

## Ordered spine

1. **Photographic global** — Reinhard et al. 2002 (card 409, bibliography here).
2. **Per-channel GT** — Uchimura & Suzuki SIGGRAPH Asia 2018 Gran Turismo Sport (bibliography only; do not mint).
3. **GT7 color-volume** — Yasutomi / Suzuki / Uchimura SIGGRAPH 2025 PBS course (this mint, 1565): GT curve V2 × ICtCp/Jzazbz blend, MIT C++.

## Cards in this mint (`user-ao-post-2026-09-03`)

| Rank | Year | Title | Stem |
|-----:|-----:|-------|------|
| 1565 | 2025 | Driving Toward Reality: Physically Based Tone Mapping and Perceptual Fidelity in Gran Turismo 7 | `1565-driving-toward-reality-physically-based-tone-mapping-and-perceptual-fide` |

## Open frontiers

- Vulkan fullscreen compute port of `gt7_tone_mapping.cpp` (Rec.2020 in, PQ or sRGB out)
- Whether Anoptic bakes a 3D LUT or evaluates the curve+UCS blend per pixel
- Do not mint Hable Uncharted 2 as a second generic TM; 409 covers that role
