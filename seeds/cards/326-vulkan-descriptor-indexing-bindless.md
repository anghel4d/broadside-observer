---
title: "Vulkan Descriptor Indexing (Bindless)"
authors:
  - "Khronos Group"
year: 2018
venue: "Vulkan Spec"
arxiv: null
doi: null
source: "https://docs.vulkan.org/guide/latest/extensions/VK_EXT_descriptor_indexing.html"
topics:
  - vulkan
  - bindless
seed_rank: 326
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
cites:
  - title: "Mesh Shaders in the Vulkan Ecosystem"
    url: "https://developer.nvidia.com/blog/introduction-turing-mesh-shaders/"
    year: 2018
    arxiv: null
    doi: null
  - title: "Vulkan Memory Allocator (VMA)"
    url: "https://gpuopen.com/vulkan-memory-allocator/"
    year: 2017
    arxiv: null
    doi: null
see:
  - "097-mesh-shaders-in-the-vulkan-ecosystem"
  - "328-vulkan-memory-allocator-vma"
---

# Vulkan Descriptor Indexing (Bindless)

## One-sentence takeaway

`VK_EXT_descriptor_indexing` (core in Vulkan 1.2) lets shaders index unbounded descriptor arrays with non-uniform indices and update-after-bind, which is the API contract behind bindless GPU-driven rendering.

## Why it matters here

Anoptic’s GPU-driven path cannot rebind a descriptor set per draw; this extension is what makes material/instance tables addressable from a single bind and from mesh-shader / compute cull passes.

## Key ideas

- Features: runtime-sized descriptor arrays, partially bound arrays, variable descriptor counts, update-after-bind, and update-unused-while-pending.
- `VkPhysicalDeviceDescriptorIndexingFeatures` (or `VkPhysicalDeviceVulkan12Features.descriptorIndexing`) gates sampled-image / storage-buffer / etc. non-uniform indexing separately.
- Binding flags (`PARTIALLY_BOUND`, `UPDATE_AFTER_BIND`, `VARIABLE_DESCRIPTOR_COUNT`) are set per binding via `VkDescriptorSetLayoutBindingFlagsCreateInfo`; update-after-bind also needs matching pool and layout create flags.
- GLSL uses `GL_EXT_nonuniform_qualifier` and `nonuniformEXT(index)` when different invocations pick different array slots.
- Promoted to Vulkan 1.2 but still optional — check the feature bits. The old khronos.org/blog/descriptor-indexing URL now 404s.

## Caveats

## Links

- Guide: https://docs.vulkan.org/guide/latest/extensions/VK_EXT_descriptor_indexing.html
- Refpage: https://docs.vulkan.org/refpages/latest/refpages/source/VK_EXT_descriptor_indexing.html
