# categorical-deep-learning

**Charter.** The algebra of deep-learning *architectures* — not just backprop — as a compositional / string-diagrammatic theory: neural circuit diagrams, axis-stride and array-broadcasted categories, Para for weights, weaves for tiled vs target axes, and the implementations (`pyncd` / `tsncd`) that make the terms executable. Prefer this lineage for Abbott–Zardini NCDs/Weaves and the CDL position/lenses/GDL neighbourhood. FlashAttention *kernels* already live on main (`089`/`080`/`073`) — **cite those stems, do not remint**. Selinger's graphical-languages survey is `117` — cite only. Attention is `013`.

This is Broadside's typed-tensor / notation-as-IR thread: architectures as terms, broadcasting as a category, diagrams that compile.

## Ordered spine

1. **Graphical / monoidal language** — Joyal–Street 1991 → Selinger 2010 (`117`, cite-only) → Piedeleu–Zanasi textbook → Wilson–Ghica–Zanasi strictification.
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
| 933 | 2026 | Weaves, Wires, and Morphisms: Formalizing and Implementing the Algebra of Deep Learning | `933-weaves-wires-and-morphisms-algebra-of-deep-learning` |
| 934 | 2024 | Neural Circuit Diagrams: Robust Diagrams for the Communication, Implementation, and Analysis of Deep Learning Architectures | `934-neural-circuit-diagrams` |
| 935 | 2025 | FlashAttention on a Napkin: A Diagrammatic Approach to Deep Learning IO-Awareness | `935-flashattention-on-a-napkin` |
| 936 | 2025 | Accelerating Machine Learning Systems via Category Theory: Applications to Spherical Attention for Gene Regulatory Networks | `936-accelerating-ml-systems-via-category-theory` |
| 937 | 2019 | Lectures on Quantum Tensor Networks | `937-lectures-on-quantum-tensor-networks` |
| 938 | 2021 | Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges | `938-geometric-deep-learning-grids-groups-graphs-geodesics` |
| 939 | 2023 | Named Tensor Notation | `939-named-tensor-notation` |
| 940 | 2022 | Categorical Foundations of Gradient-Based Learning | `940-categorical-foundations-of-gradient-based-learning` |
| 941 | 2024 | Deep Learning with Parametric Lenses | `941-deep-learning-with-parametric-lenses` |
| 942 | 2025 | DeepSeek-V3 Technical Report | `942-deepseek-v3-technical-report` |
| 943 | 2019 | Backprop as Functor: A compositional perspective on supervised learning | `943-backprop-as-functor-compositional-supervised-learning` |
| 944 | 2023 | Representable Markov Categories and Comparison of Statistical Experiments in Categorical Probability | `944-representable-markov-categories-statistical-experiments` |
| 945 | 2024 | Position: Categorical Deep Learning is an Algebraic Theory of All Architectures | `945-categorical-deep-learning-algebraic-theory-of-architectures` |
| 946 | 2024 | AI and Memory Wall | `946-ai-and-memory-wall` |
| 947 | 2015 | Deep Residual Learning for Image Recognition | `947-deep-residual-learning-for-image-recognition` |
| 948 | 1991 | The Geometry of Tensor Calculus, I | `948-the-geometry-of-tensor-calculus-i` |
| 949 | 2017 | ImageNet classification with deep convolutional neural networks | `949-imagenet-classification-with-deep-convolutional-neural-nets` |
| 950 | 2022 | Formal Algorithms for Transformers | `950-formal-algorithms-for-transformers` |
| 951 | 2025 | An Introduction to String Diagrams for Computer Scientists | `951-an-introduction-to-string-diagrams-for-computer-scientists` |
| 952 | 2025 | Categorical foundations for CuTe layouts | `952-categorical-foundations-for-cute-layouts` |
| 953 | 2022 | Einops: Clear and Reliable Tensor Manipulations with Einstein-Like Notation | `953-einops-clear-and-reliable-tensor-manipulations` |
| 954 | 2020 | GLU Variants Improve Transformer | `954-glu-variants-improve-transformer` |
| 955 | 2021 | Category Theory in Machine Learning | `955-category-theory-in-machine-learning` |
| 956 | 2018 | Graph Attention Networks | `956-graph-attention-networks` |
| 957 | 2024 | String diagrams for strictification and coherence | `957-string-diagrams-for-strictification-and-coherence` |
| 958 | 2026 | FlashAttention-4: Algorithm and kernel pipelining co-design for asymmetric hardware scaling | `958-flashattention-4` |
| 959 | 2023 | Co-Design of Complex Systems: From Autonomy to Future Mobility Systems | `959-co-design-of-complex-systems-zardini-phd` |
| 960 | 2024 | Applied Compositional Thinking for Engineering | `960-applied-compositional-thinking-for-engineering` |
| 961 | 2016 | Deep Learning | `961-deep-learning` |

## Cite-only (already on main)

- `013-attention-is-all-you-need` — Vaswani et al. 2017
- `089-flashattention-fast-and-memory-efficient-exact-attention-wit` — Dao et al. 2022
- `080-flashattention-2-faster-attention-with-better-parallelism-an` — Dao 2024
- `073-flashattention-3-fast-and-accurate-attention-with-asynchrony` — Shah et al. 2024
- `117-a-survey-of-graphical-languages-for-monoidal-categories` — Selinger 2010/2011

## Software (no cards)

- pyncd — https://github.com/mit-zardini-lab/pyncd
- tsncd — https://github.com/mit-zardini-lab/tsncd
