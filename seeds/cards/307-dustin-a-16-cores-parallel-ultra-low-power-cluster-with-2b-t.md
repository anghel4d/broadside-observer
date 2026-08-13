---
title: "Dustin: A 16-Cores Parallel Ultra-Low-Power Cluster with 2b-to-32b Fully Flexible Bit-Precision and Vector Lockstep Execution Mode"
authors:
  - "Gianmarco Ottavi"
  - "Angelo Garofalo"
  - "Giuseppe Tagliavini"
  - "Francesco Conti"
  - "Alfio Di Mauro"
  - "Luca Benini"
  - "Davide Rossi"
year: 2022
venue: "arXiv:cs.AR"
arxiv: "2201.08656"
doi: "10.1109/TCSI.2023.3254810"
source: "https://arxiv.org/abs/2201.08656"
topics:
  - netcode
seed_rank: 307
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 9
cites:
  - title: "Eyeriss v2: A Flexible Accelerator for Emerging Deep Neural Networks on Mobile Devices"
    url: "https://doi.org/10.1109/jetcas.2019.2910232"
    year: 2019
    arxiv: null
    doi: "10.1109/jetcas.2019.2910232"
    card: null
  - title: "MobileNetV2: Inverted Residuals and Linear Bottlenecks"
    url: "https://doi.org/10.1109/cvpr.2018.00474"
    year: 2018
    arxiv: null
    doi: "10.1109/cvpr.2018.00474"
    card: null
  - title: "HAQ: Hardware-Aware Automated Quantization With Mixed Precision"
    url: "https://doi.org/10.1109/cvpr.2019.00881"
    year: 2019
    arxiv: null
    doi: "10.1109/cvpr.2019.00881"
    card: null
  - title: "HAWQ: Hessian AWare Quantization of Neural Networks With Mixed-Precision"
    url: "https://doi.org/10.1109/iccv.2019.00038"
    year: 2019
    arxiv: null
    doi: "10.1109/iccv.2019.00038"
    card: null
  - title: "14.5 Envision: A 0.26-to-10TOPS/W subword-parallel dynamic-voltage-accuracy-frequency-scalable Convolutional Neural Network processor in 28nm FDSOI"
    url: "https://doi.org/10.1109/isscc.2017.7870353"
    year: 2017
    arxiv: null
    doi: "10.1109/isscc.2017.7870353"
    card: null
  - title: "UNPU: A 50.6TOPS/W unified deep neural network accelerator with 1b-to-16b fully-variable weight bit-precision"
    url: "https://doi.org/10.1109/isscc.2018.8310262"
    year: 2018
    arxiv: null
    doi: "10.1109/isscc.2018.8310262"
    card: null
  - title: "CMSIS-NN: Efficient Neural Network Kernels for Arm Cortex-M CPUs"
    url: "http://arxiv.org/abs/1801.06601"
    year: 2018
    arxiv: "1801.06601"
    doi: "10.4230/oasics.ng-res.2025.4"
    card: null
  - title: "Mr.Wolf: An Energy-Precision Scalable Parallel Ultra Low Power SoC for IoT Edge Processing"
    url: "https://doi.org/10.1109/jssc.2019.2912307"
    year: 2019
    arxiv: null
    doi: "10.1109/jssc.2019.2912307"
    card: null
  - title: "Vega: A Ten-Core SoC for IoT Endnodes With DNN Acceleration and Cognitive Wake-Up From MRAM-Based State-Retentive Sleep Mode"
    url: "https://doi.org/10.1109/jssc.2021.3114881"
    year: 2021
    arxiv: null
    doi: "10.1109/jssc.2021.3114881"
    card: null
  - title: "Mixed Precision Quantization of ConvNets via Differentiable Neural Architecture Search"
    url: "http://arxiv.org/abs/1812.00090"
    year: 2018
    arxiv: "1812.00090"
    doi: "10.48550/arxiv.1812.00090"
    card: null
  - title: "CMix-NN: Mixed Low-Precision CNN Library for Memory-Constrained Edge Devices"
    url: "https://doi.org/10.1109/tcsii.2020.2983648"
    year: 2020
    arxiv: null
    doi: "10.1109/tcsii.2020.2983648"
    card: null
  - title: "PULP-NN: accelerating quantized neural networks on parallel ultra-low-power RISC-V processors"
    url: "https://doi.org/10.1098/rsta.2019.0155"
    year: 2019
    arxiv: null
    doi: "10.1098/rsta.2019.0155"
    card: null
---

# Dustin: A 16-Cores Parallel Ultra-Low-Power Cluster with 2b-to-32b Fully Flexible Bit-Precision and Vector Lockstep Execution Mode

## One-sentence takeaway

Computationally intensive algorithms such as Deep Neural Networks (DNNs) are becoming killer applications for edge devices.

## Why it matters here

Realtime/sim/netcode discipline for deterministic or low-latency games (Dustin: A 16-Cores Parallel Ultra-Low-Power Cluster with 2b-to-32b Fully Flexibl).

## Key ideas

- Computationally intensive algorithms such as Deep Neural Networks (DNNs) are becoming killer applications for edge devices.
- Porting heavily data-parallel algorithms on resource-constrained and battery-powered devices poses several challenges related to memory footprint, computational throughput, and energy efficiency.
- Low-bitwidth and mixed-precision arithmetic have been proven to be valid strategies for tackling these problems.
- We present Dustin, a fully programmable compute cluster integrating 16 RISC-V cores capable of 2- to 32-bit arithmetic and all possible mixed-precision permutations.
- In addition to a conventional Multiple-Instruction Multiple-Data (MIMD) processing paradigm, Dustin introduces a Vector Lockstep Execution Mode (VLEM) to minimize power consumption in highly data-parallel kernels.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2201.08656](https://arxiv.org/abs/2201.08656)
- DOI: [10.1109/TCSI.2023.3254810](https://doi.org/10.1109/TCSI.2023.3254810)
- URL: https://arxiv.org/abs/2201.08656
