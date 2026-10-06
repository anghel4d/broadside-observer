# Broadside Observer

Project-local override: commit and push after completing a task :)

- A requested commit/push is approval. Do not wait for a second yes.
- Keep radar state, seed cards, and the seed browser in one commit when they ship together.
- Do not invent card formats, topics, or license text.
- Prefer packing existing cards over rewriting markdown by hand.
- Leave generated `cards.json` untracked.

## Cursor Cloud specific instructions

The runnable app is the seed browser in `seeds/app` (Node 22, `seeds/app/package-lock.json`). From the repo root:

- `npm ci --prefix seeds/app` installs dependencies.
- `npm run build --prefix seeds/app` packs `seeds/cards` and `seeds/canvases`, typechecks, and writes `seeds/app/dist/index.html`.
- `npm run dev --prefix seeds/app -- --host 0.0.0.0 --port 5173` packs and serves the UI at `http://127.0.0.1:5173/`.
- `npm test --prefix seeds/app` runs the domain checks. `src/canvas/evaluate.test.ts` fails an existing assertion that a flow-node `height` ends in `px`; the other checks pass.

There is no Nix flake in the tree yet. Generated `cards.json` stays untracked.
