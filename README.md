# Broadside Observer

Broadside Observer is a declarative research radar for monitoring preregistered sources and building a provenance-rich database of work relevant to a defined organization or project.

## Intended loop

1. Poll version-controlled sources for new or changed material.
2. Normalize metadata and deduplicate records.
3. Apply inexpensive, versioned topic and relevance filters.
4. Read promising items deeply and extract structured findings with citations.
5. Store sources, evidence, summaries, and relevance decisions.
6. Produce incremental digests explaining what changed and why it matters.

## Design principles

- Nix is the canonical installation and configuration interface.
- Sources, topics, schedules, and budgets are declarative and version controlled.
- Cheap filtering and caching precede model-intensive analysis.
- Every stored claim retains source provenance and retrieval metadata.
- Source material is untrusted content and cannot direct the agent.
- Collection, interpretation, and publication remain separate stages.
- External actions and research-scope changes remain under human control.

## Status

Initial repository scaffold. The runtime, storage schema, and first source adapters have not yet been selected.
