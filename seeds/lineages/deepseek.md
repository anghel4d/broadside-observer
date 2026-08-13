# deepseek

**Charter.** First-party DeepSeek-AI model, architecture, infrastructure, and formal-math papers — the lab stack from dense LLM through MoE/MLA, GRPO/R1, sparse attention, mHC, and V4 million-token context. Prefer this lineage for DeepSeek *authored* work. Third-party MLA teardowns, MHA2MLA, news explainers, and FlashMLA (a kernel repo, not a paper) stay out.

V3 (card `1206`) was minted earlier in the categorical-deep-learning batch as the Weaves worked example; it keeps `pool: languages` and that lineage slug. New cards use `pool: agents`. Cite `1206` rather than reminting V3.

## Ordered spine

1. **Dense start** — DeepSeek LLM 7B/67B (`1238`).
2. **MoE specialization** — DeepSeekMoE fine-grained + shared experts (`1239`); later loss-free balancing (`1248`).
3. **Code / math / GRPO** — Coder (`1240`) → Math + GRPO (`1241`) → Coder-V2 on V2 (`1245`).
4. **MLA + MoE at scale** — V2 236B/21B, 128K, MLA KV compression (`1243`) → V3 671B/37B, MTP, loss-free (`1206`).
5. **Reasoning RL** — R1 / R1-Zero on V3 (`1252`); Math-V2 self-verification (`1258`).
6. **Sparse attention** — NSA (ACL 2025 Best Paper, `1254`) → V3.2 DSA (`1259`) → V4 CSA+HCA (`1263`).
7. **Residuals / memory** — mHC Birkhoff-constrained hyper-connections (`1260`); Engram conditional memory (`1261`).
8. **Million-token product** — V4-Pro / V4-Flash preview (`1263`, arXiv 2606.19348) → **V4-Pro-0813 GA** hosted checkpoint (`1264`, 2026-08-13 changelog, no new arXiv).

## Side branches

- **Multimodal** — VL (`1242`) → VL2 MoE+MLA (`1251`); unified Janus (`1249`) / JanusFlow (`1250`) / Janus-Pro (`1253`); OCR optical compression (`1257`) / OCR 2 causal flow (`1262`).
- **Formal math** — Prover (`1244`) → V1.5 RLPAF+MCTS (`1246`) → V2 on V3 (`1255`).
- **Infra** — Fire-Flyer AI-HPC SC'24 (`1247`, A100/3FS/HFReduce); V3 hardware ISCA'25 (`1256`, H800/FP8/DualPipe).

## Cite-only (already on main, not reminted)

- `014-attention-is-all-you-need` — Vaswani et al. 2017
- `105` / `096` / `089` / `1222` — FlashAttention 1–4
- `1218-glu-variants-improve-transformer` — Shazeer GLU/SwiGLU
- `1211-deep-residual-learning-for-image-recognition` — ResNet (mHC ancestor)
- `1210-ai-and-memory-wall` — Gholami memory wall
- `1206-deepseek-v3-technical-report` — already minted; cites now point at V2/R1/MoE/Math/V3.2

## Software (no cards)

- FlashMLA — https://github.com/deepseek-ai/FlashMLA (kernels for MLA / DSA, not a paper)
- DualPipe / DeepEP / 3FS — infra repos under https://github.com/deepseek-ai/open-infra-index
- Muon optimizer — Keller Jordan et al.; used by V4, not first-party DeepSeek
- DeepSeek-V3.1 / V3.1-Terminus / V4-Flash-0731 — API changelog entries only; no first-party arXiv. V4-Pro-0813 is card `1264` because it is the GA of the flagship.

## Cards in this mint (`deepseek-lab-2026-08-13`)

| Rank | Year | Title | Stem | arXiv |
|-----:|-----:|-------|------|-------|
| 1238 | 2024 | DeepSeek LLM | `1238-deepseek-llm-scaling-open-source-language-models` | 2401.02954 |
| 1239 | 2024 | DeepSeekMoE | `1239-deepseekmoe-towards-ultimate-expert-specialization` | 2401.06066 |
| 1240 | 2024 | DeepSeek-Coder | `1240-deepseek-coder-when-the-llm-meets-programming` | 2401.14196 |
| 1241 | 2024 | DeepSeekMath / GRPO | `1241-deepseekmath-pushing-limits-of-mathematical-reasoning` | 2402.03300 |
| 1242 | 2024 | DeepSeek-VL | `1242-deepseek-vl-towards-real-world-vision-language` | 2403.05525 |
| 1243 | 2024 | DeepSeek-V2 | `1243-deepseek-v2-economical-efficient-moe-language-model` | 2405.04434 |
| 1244 | 2024 | DeepSeek-Prover | `1244-deepseek-prover-advancing-theorem-proving` | 2405.14333 |
| 1245 | 2024 | DeepSeek-Coder-V2 | `1245-deepseek-coder-v2-breaking-closed-source-barrier` | 2406.11931 |
| 1246 | 2024 | DeepSeek-Prover-V1.5 | `1246-deepseek-prover-v1-5-proof-assistant-feedback` | 2408.08152 |
| 1247 | 2024 | Fire-Flyer AI-HPC (SC24) | `1247-fire-flyer-ai-hpc-cost-effective-software-hardware` | 2408.14158 |
| 1248 | 2024 | Auxiliary-loss-free MoE balancing | `1248-auxiliary-loss-free-load-balancing-for-moe` | 2408.15664 |
| 1249 | 2024 | Janus | `1249-janus-decoupling-visual-encoding-unified-multimodal` | 2410.13848 |
| 1250 | 2024 | JanusFlow | `1250-janusflow-autoregression-and-rectified-flow` | 2411.07975 |
| 1251 | 2024 | DeepSeek-VL2 | `1251-deepseek-vl2-moe-vision-language-models` | 2412.10302 |
| 1206 | 2025 | DeepSeek-V3 *(already on main)* | `1206-deepseek-v3-technical-report` | 2412.19437 |
| 1252 | 2025 | DeepSeek-R1 | `1252-deepseek-r1-incentivizing-reasoning-via-rl` | 2501.12948 |
| 1253 | 2025 | Janus-Pro | `1253-janus-pro-unified-multimodal-data-and-model-scaling` | 2501.17811 |
| 1254 | 2025 | Native Sparse Attention | `1254-native-sparse-attention-hardware-aligned` | 2502.11089 |
| 1255 | 2025 | DeepSeek-Prover-V2 | `1255-deepseek-prover-v2-formal-reasoning-via-rl` | 2504.21801 |
| 1256 | 2025 | Insights into DeepSeek-V3 hardware | `1256-insights-into-deepseek-v3-hardware-for-ai` | 2505.09343 |
| 1257 | 2025 | DeepSeek-OCR | `1257-deepseek-ocr-contexts-optical-compression` | 2510.18234 |
| 1258 | 2025 | DeepSeekMath-V2 | `1258-deepseekmath-v2-towards-self-verifiable-math` | 2511.22570 |
| 1259 | 2025 | DeepSeek-V3.2 | `1259-deepseek-v3-2-pushing-the-frontier-of-open-llms` | 2512.02556 |
| 1260 | 2025 | mHC | `1260-mhc-manifold-constrained-hyper-connections` | 2512.24880 |
| 1261 | 2026 | Engram | `1261-engram-conditional-memory-via-scalable-lookup` | 2601.07372 |
| 1262 | 2026 | DeepSeek-OCR 2 | `1262-deepseek-ocr-2-visual-causal-flow` | 2601.20552 |
| 1263 | 2026 | DeepSeek-V4 | `1263-deepseek-v4-million-token-context-intelligence` | 2606.19348 |
| 1264 | 2026 | DeepSeek-V4-Pro-0813 GA | `1264-deepseek-v4-pro-0813-ga` | *(changelog)* |
