# categorical-deep-learning

**Charter.** The algebra of deep-learning *architectures* — not just backprop — as a compositional / string-diagrammatic theory: neural circuit diagrams, axis-stride and array-broadcasted categories, Para for weights, weaves for tiled vs target axes, and the implementations (`pyncd` / `tsncd`) that make the terms executable. Prefer this lineage for Abbott–Zardini NCDs/Weaves and the CDL position/lenses/GDL neighbourhood. FlashAttention *kernels* already live on main (`105`/`096`/`089`) — **cite those stems, do not remint**. Selinger's graphical-languages survey is `133` — cite only. Attention is `014`.

This is Broadside's typed-tensor / notation-as-IR thread: architectures as terms, broadcasting as a category, diagrams that compile.

## Ordered spine

1. **Graphical / monoidal language** — Joyal–Street 1991 → Selinger 2010 (`133`, cite-only) → Piedeleu–Zanasi textbook → Wilson–Ghica–Zanasi strictification.
2. **Probability substrate** — Fritz et al. representable Markov categories / BorelStoch.
3. **Learning as Para/lenses** — Fong–Spivak–Tuyéras Backprop as Functor → Cruttwell et al. ESOP 2022 → Parametric Lenses 2024.
4. **CDL as a programme** — Shiebler–Gavranović–Wilson survey → Gavranović et al. ICML 2024 position.
5. **Geometry of architectures** — Bronstein et al. GDL; GAT; ResNet; AlexNet; named tensors / einops; Phuong–Hutter formal Transformer algorithms; Shazeer GLU.
6. **Diagram IR** — Abbott Neural Circuit Diagrams (TMLR 2024) → FlashAttention on a Napkin (TMLR 2025) → spherical-attention AGI 2025 → **Weaves, Wires, and Morphisms (2026)**.
7. **Worked models / kernels (cite existing FA)** — DeepSeek-V3 as the Weaves example; Gholami memory wall; Colfax CuTe layouts; FA-4 as the continuing kernel line. FA-1/2/3 and Vaswani: existing cards.
8. **Compositional engineering backdrop** — Zardini co-design thesis; Censi–Lorand–Zardini ACT4E book; Biamonte tensor-network lectures; Goodfellow textbook (informal baseline).

## Cards in this mint (`user-add-2026-08-13`)

| Rank | Year | Title | Stem |
|-----:|-----:|-------|------|
| 1197 | 2026 | Weaves, Wires, and Morphisms: Formalizing and Implementing the Algebra of Deep Learning | `1197-weaves-wires-and-morphisms-algebra-of-deep-learning` |
| 1198 | 2024 | Neural Circuit Diagrams: Robust Diagrams for the Communication, Implementation, and Analysis of Deep Learning Architectures | `1198-neural-circuit-diagrams` |
| 1199 | 2025 | FlashAttention on a Napkin: A Diagrammatic Approach to Deep Learning IO-Awareness | `1199-flashattention-on-a-napkin` |
| 1200 | 2025 | Accelerating Machine Learning Systems via Category Theory: Applications to Spherical Attention for Gene Regulatory Networks | `1200-accelerating-ml-systems-via-category-theory` |
| 1201 | 2019 | Lectures on Quantum Tensor Networks | `1201-lectures-on-quantum-tensor-networks` |
| 1202 | 2021 | Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges | `1202-geometric-deep-learning-grids-groups-graphs-geodesics` |
| 1203 | 2023 | Named Tensor Notation | `1203-named-tensor-notation` |
| 1204 | 2022 | Categorical Foundations of Gradient-Based Learning | `1204-categorical-foundations-of-gradient-based-learning` |
| 1205 | 2024 | Deep Learning with Parametric Lenses | `1205-deep-learning-with-parametric-lenses` |
| 1206 | 2025 | DeepSeek-V3 Technical Report | `1206-deepseek-v3-technical-report` |
| 1207 | 2019 | Backprop as Functor: A compositional perspective on supervised learning | `1207-backprop-as-functor-compositional-supervised-learning` |
| 1208 | 2023 | Representable Markov Categories and Comparison of Statistical Experiments in Categorical Probability | `1208-representable-markov-categories-statistical-experiments` |
| 1209 | 2024 | Position: Categorical Deep Learning is an Algebraic Theory of All Architectures | `1209-categorical-deep-learning-algebraic-theory-of-architectures` |
| 1210 | 2024 | AI and Memory Wall | `1210-ai-and-memory-wall` |
| 1211 | 2015 | Deep Residual Learning for Image Recognition | `1211-deep-residual-learning-for-image-recognition` |
| 1212 | 1991 | The Geometry of Tensor Calculus, I | `1212-the-geometry-of-tensor-calculus-i` |
| 1213 | 2017 | ImageNet classification with deep convolutional neural networks | `1213-imagenet-classification-with-deep-convolutional-neural-nets` |
| 1214 | 2022 | Formal Algorithms for Transformers | `1214-formal-algorithms-for-transformers` |
| 1215 | 2025 | An Introduction to String Diagrams for Computer Scientists | `1215-an-introduction-to-string-diagrams-for-computer-scientists` |
| 1216 | 2025 | Categorical foundations for CuTe layouts | `1216-categorical-foundations-for-cute-layouts` |
| 1217 | 2022 | Einops: Clear and Reliable Tensor Manipulations with Einstein-Like Notation | `1217-einops-clear-and-reliable-tensor-manipulations` |
| 1218 | 2020 | GLU Variants Improve Transformer | `1218-glu-variants-improve-transformer` |
| 1219 | 2021 | Category Theory in Machine Learning | `1219-category-theory-in-machine-learning` |
| 1220 | 2018 | Graph Attention Networks | `1220-graph-attention-networks` |
| 1221 | 2024 | String diagrams for strictification and coherence | `1221-string-diagrams-for-strictification-and-coherence` |
| 1222 | 2026 | FlashAttention-4: Algorithm and kernel pipelining co-design for asymmetric hardware scaling | `1222-flashattention-4` |
| 1223 | 2023 | Co-Design of Complex Systems: From Autonomy to Future Mobility Systems | `1223-co-design-of-complex-systems-zardini-phd` |
| 1224 | 2024 | Applied Compositional Thinking for Engineering | `1224-applied-compositional-thinking-for-engineering` |
| 1225 | 2016 | Deep Learning | `1225-deep-learning` |

## Cite-only (already on main)

- `014-attention-is-all-you-need` — Vaswani et al. 2017
- `105-flashattention-fast-and-memory-efficient-exact-attention-wit` — Dao et al. 2022
- `096-flashattention-2-faster-attention-with-better-parallelism-an` — Dao 2024
- `089-flashattention-3-fast-and-accurate-attention-with-asynchrony` — Shah et al. 2024
- `133-a-survey-of-graphical-languages-for-monoidal-categories` — Selinger 2010/2011

## Software (no cards)

- pyncd — https://github.com/mit-zardini-lab/pyncd
- tsncd — https://github.com/mit-zardini-lab/tsncd
