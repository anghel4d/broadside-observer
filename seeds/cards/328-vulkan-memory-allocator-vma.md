---
title: "Vulkan Memory Allocator (VMA)"
authors:
  - "AMD GPUOpen"
year: 2017
venue: "GPUOpen"
arxiv: null
doi: null
source: "https://gpuopen.com/vulkan-memory-allocator/"
topics:
  - vulkan
  - memory-allocation
seed_rank: 328
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites:
  - title: "Vulkan Descriptor Indexing (Bindless)"
    url: "https://docs.vulkan.org/guide/latest/extensions/VK_EXT_descriptor_indexing.html"
    year: 2018
    arxiv: null
    doi: null
  - title: "Mesh Shaders in the Vulkan Ecosystem"
    url: "https://developer.nvidia.com/blog/introduction-turing-mesh-shaders/"
    year: 2018
    arxiv: null
    doi: null
see:
  - "326-vulkan-descriptor-indexing-bindless"
  - "097-mesh-shaders-in-the-vulkan-ecosystem"
---

# Vulkan Memory Allocator (VMA)

## One-sentence takeaway

VMA is AMD’s production Vulkan heap layer: it suballocates `VkDeviceMemory` into blocks, picks memory types, and can defragment, so an engine does not call `vkAllocateMemory` per buffer.

## Why it matters here

Anoptic’s Vulkan backend needs one opinionated device-local / host-visible allocator; VMA is the library every engine actually ships rather than rolling buddy-on-device-memory from scratch.

## Key ideas

- Vulkan requires the app to choose a memory type, respect `bufferImageGranularity`, and keep allocation counts low. VMA owns those constraints.
- Allocations go through pools of large `VkDeviceMemory` blocks with TLSF-style suballocation; dedicated allocations are used when the driver prefers them (large images).
- `VmaAllocation` tracks mapping, persistently mapped HOST_VISIBLE memory, and budget queries against `VK_EXT_memory_budget`.
- Optional defragmentation moves allocations and issues the needed `vkBind*` / copy commands so the engine can compact heaps between levels.
- Header-only C++ (`vk_mem_alloc.h`) plus a C API; source at GPUOpen / GPUOpen-LibrariesAndSDKs/VulkanMemoryAllocator.

## Caveats

## Links

- Landing: https://gpuopen.com/vulkan-memory-allocator/
- Repo: https://github.com/GPUOpen-LibrariesAndSDKs/VulkanMemoryAllocator
