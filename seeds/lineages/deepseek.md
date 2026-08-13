# deepseek

**Charter.** First-party DeepSeek-AI model, architecture, infrastructure, and formal-math papers — the lab stack from dense LLM through MoE/MLA, GRPO/R1, sparse attention, mHC, and V4 million-token context. Prefer this lineage for DeepSeek *authored* work. Third-party MLA teardowns, MHA2MLA, news explainers, and FlashMLA (a kernel repo, not a paper) stay out.

V3 (card `942`) was minted earlier in the categorical-deep-learning batch as the Weaves worked example; it keeps `pool: languages` and that lineage slug. New cards use `pool: agents`. Cite `942` rather than reminting V3.

## Ordered spine

1. **Dense start** — DeepSeek LLM 7B/67B (`974`).
2. **MoE specialization** — DeepSeekMoE fine-grained + shared experts (`975`); later loss-free balancing (`984`).
3. **Code / math / GRPO** — Coder (`976`) → Math + GRPO (`977`) → Coder-V2 on V2 (`981`).
4. **MLA + MoE at scale** — V2 236B/21B, 128K, MLA KV compression (`979`) → V3 671B/37B, MTP, loss-free (`942`).
5. **Reasoning RL** — R1 / R1-Zero on V3 (`988`); Math-V2 self-verification (`994`).
6. **Sparse attention** — NSA (ACL 2025 Best Paper, `990`) → V3.2 DSA (`995`) → V4 CSA+HCA (`999`).
7. **Residuals / memory** — mHC Birkhoff-constrained hyper-connections (`996`); Engram conditional memory (`997`).
8. **Million-token product** — V4-Pro / V4-Flash preview (`999`, arXiv 2606.19348) → **V4-Pro-0813 GA** hosted checkpoint (`1000`, 2026-08-13 changelog, no new arXiv).

## Side branches

- **Multimodal** — VL (`978`) → VL2 MoE+MLA (`987`); unified Janus (`985`) / JanusFlow (`986`) / Janus-Pro (`989`); OCR optical compression (`993`) / OCR 2 causal flow (`998`).
- **Formal math** — Prover (`980`) → V1.5 RLPAF+MCTS (`982`) → V2 on V3 (`991`).
- **Infra** — Fire-Flyer AI-HPC SC'24 (`983`, A100/3FS/HFReduce); V3 hardware ISCA'25 (`992`, H800/FP8/DualPipe).

## Cite-only (already on main, not reminted)

- `013-attention-is-all-you-need` — Vaswani et al. 2017
- `089` / `080` / `073` / `958` — FlashAttention 1–4
- `954-glu-variants-improve-transformer` — Shazeer GLU/SwiGLU
- `947-deep-residual-learning-for-image-recognition` — ResNet (mHC ancestor)
- `946-ai-and-memory-wall` — Gholami memory wall
- `942-deepseek-v3-technical-report` — already minted; cites now point at V2/R1/MoE/Math/V3.2

## Software (no cards)

- FlashMLA — https://github.com/deepseek-ai/FlashMLA (kernels for MLA / DSA, not a paper)
- DualPipe / DeepEP / 3FS — infra repos under https://github.com/deepseek-ai/open-infra-index
- Muon optimizer — Keller Jordan et al.; used by V4, not first-party DeepSeek
- DeepSeek-V3.1 / V3.1-Terminus / V4-Flash-0731 — API changelog entries only; no first-party arXiv. V4-Pro-0813 is card `1000` because it is the GA of the flagship.

## Cards in this mint (`deepseek-lab-2026-08-13`)

| Rank | Year | Title | Stem | arXiv |
|-----:|-----:|-------|------|-------|
| 974 | 2024 | DeepSeek LLM | `974-deepseek-llm-scaling-open-source-language-models` | 2401.02954 |
| 975 | 2024 | DeepSeekMoE | `975-deepseekmoe-towards-ultimate-expert-specialization` | 2401.06066 |
| 976 | 2024 | DeepSeek-Coder | `976-deepseek-coder-when-the-llm-meets-programming` | 2401.14196 |
| 977 | 2024 | DeepSeekMath / GRPO | `977-deepseekmath-pushing-limits-of-mathematical-reasoning` | 2402.03300 |
| 978 | 2024 | DeepSeek-VL | `978-deepseek-vl-towards-real-world-vision-language` | 2403.05525 |
| 979 | 2024 | DeepSeek-V2 | `979-deepseek-v2-economical-efficient-moe-language-model` | 2405.04434 |
| 980 | 2024 | DeepSeek-Prover | `980-deepseek-prover-advancing-theorem-proving` | 2405.14333 |
| 981 | 2024 | DeepSeek-Coder-V2 | `981-deepseek-coder-v2-breaking-closed-source-barrier` | 2406.11931 |
| 982 | 2024 | DeepSeek-Prover-V1.5 | `982-deepseek-prover-v1-5-proof-assistant-feedback` | 2408.08152 |
| 983 | 2024 | Fire-Flyer AI-HPC (SC24) | `983-fire-flyer-ai-hpc-cost-effective-software-hardware` | 2408.14158 |
| 984 | 2024 | Auxiliary-loss-free MoE balancing | `984-auxiliary-loss-free-load-balancing-for-moe` | 2408.15664 |
| 985 | 2024 | Janus | `985-janus-decoupling-visual-encoding-unified-multimodal` | 2410.13848 |
| 986 | 2024 | JanusFlow | `986-janusflow-autoregression-and-rectified-flow` | 2411.07975 |
| 987 | 2024 | DeepSeek-VL2 | `987-deepseek-vl2-moe-vision-language-models` | 2412.10302 |
| 942 | 2025 | DeepSeek-V3 *(already on main)* | `942-deepseek-v3-technical-report` | 2412.19437 |
| 988 | 2025 | DeepSeek-R1 | `988-deepseek-r1-incentivizing-reasoning-via-rl` | 2501.12948 |
| 989 | 2025 | Janus-Pro | `989-janus-pro-unified-multimodal-data-and-model-scaling` | 2501.17811 |
| 990 | 2025 | Native Sparse Attention | `990-native-sparse-attention-hardware-aligned` | 2502.11089 |
| 991 | 2025 | DeepSeek-Prover-V2 | `991-deepseek-prover-v2-formal-reasoning-via-rl` | 2504.21801 |
| 992 | 2025 | Insights into DeepSeek-V3 hardware | `992-insights-into-deepseek-v3-hardware-for-ai` | 2505.09343 |
| 993 | 2025 | DeepSeek-OCR | `993-deepseek-ocr-contexts-optical-compression` | 2510.18234 |
| 994 | 2025 | DeepSeekMath-V2 | `994-deepseekmath-v2-towards-self-verifiable-math` | 2511.22570 |
| 995 | 2025 | DeepSeek-V3.2 | `995-deepseek-v3-2-pushing-the-frontier-of-open-llms` | 2512.02556 |
| 996 | 2025 | mHC | `996-mhc-manifold-constrained-hyper-connections` | 2512.24880 |
| 997 | 2026 | Engram | `997-engram-conditional-memory-via-scalable-lookup` | 2601.07372 |
| 998 | 2026 | DeepSeek-OCR 2 | `998-deepseek-ocr-2-visual-causal-flow` | 2601.20552 |
| 999 | 2026 | DeepSeek-V4 | `999-deepseek-v4-million-token-context-intelligence` | 2606.19348 |
| 1000 | 2026 | DeepSeek-V4-Pro-0813 GA | `1000-deepseek-v4-pro-0813-ga` | *(changelog)* |
