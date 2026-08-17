import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { compileCanvas } from "./evaluate.ts";

const sample = `import { H1, Stack, Text } from "cursor/canvas";
export default function Demo() {
  return (
    <Stack>
      <H1>Result compose surface</H1>
      <Text>ok</Text>
    </Stack>
  );
}
`;

const compiled = compileCanvas(sample);
assert.equal(compiled._tag, "Ok");
if (compiled._tag === "Ok") {
  const tree = compiled.value({});
  assert.ok(tree !== null && typeof tree === "object");
}

const missing = compileCanvas("export const x = 1;");
assert.equal(missing._tag, "Err");

const badImport = compileCanvas(`import { H1 } from "react";
export default function Demo() { return <H1>x</H1>; }
`);
assert.equal(badImport._tag, "Err");

const packed = compileCanvas(
  readFileSync(new URL("../../../canvases/result-compose-surface.canvas.tsx", import.meta.url), "utf8"),
);
assert.equal(packed._tag, "Ok");
if (packed._tag === "Ok") assert.ok(packed.value({}) !== null);

console.log("evaluate.test.ts ok");
