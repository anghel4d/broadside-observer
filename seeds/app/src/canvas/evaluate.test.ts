import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { compileCanvas } from "./evaluate.ts";
import type { Child, VNode } from "./h.ts";
import { toneHex } from "./theme.ts";

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
  readFileSync(new URL("../../../canvases/anoptic-api-algebr-2026-08-17.tsx", import.meta.url), "utf8"),
);
assert.equal(packed._tag, "Ok");
if (packed._tag === "Ok") {
  const tree = packed.value({});
  assert.ok(tree !== null);

  const nodes: VNode[] = [];
  const walk = (child: Child): void => {
    if (child === null || child === undefined || typeof child === "boolean") return;
    if (Array.isArray(child)) {
      for (const item of child) walk(item);
      return;
    }
    if (typeof child !== "object" || !("type" in child)) return;
    nodes.push(child);
    for (const item of child.children) walk(item);
  };
  walk(tree);

  const diagram = nodes.find((node) => {
    const style = node.props.style as { position?: string; width?: number; height?: number } | undefined;
    return style?.position === "relative" && typeof style.width === "number" && typeof style.height === "number";
  });
  assert.ok(diagram !== undefined, "FlowDiagram relative box must be in the tree");
  const box = diagram.props.style as { width: number; height: number };
  assert.ok(box.width > 200, "diagram width must be a real layout size");
  assert.ok(box.height > 200, "diagram height must be a real layout size");

  const svg = nodes.find((node) => node.type === "svg");
  assert.ok(svg !== undefined, "FlowDiagram must emit an svg");
  assert.equal(svg.props.width, box.width);
  assert.equal(svg.props.height, box.height);
  assert.ok(
    nodes.some((node) => node.type === "path" && typeof node.props.d === "string"),
    "FlowDiagram must emit cubic edge paths",
  );

  const labels = new Set(
    nodes
      .filter((node) => node.type === "span")
      .flatMap((node) => node.children)
      .filter((child): child is string => typeof child === "string"),
  );
  for (const label of ["API shape", "algebra", "Result(V, E)", "Function", "and_then", "pair", "src / owner"]) {
    assert.ok(labels.has(label), `missing flow node ${label}`);
  }

  const successValue = nodes.find((node) => node.children[0] === "27");
  assert.ok(successValue !== undefined);
  assert.equal((successValue.props.style as { color: string }).color, toneHex.success);

  const warningValue = nodes.find((node) => node.children[0] === "2");
  assert.ok(warningValue !== undefined);
  assert.equal((warningValue.props.style as { color: string }).color, toneHex.warning);

  const infoTitle = nodes.find((node) => node.children[0] === "HEAD is not this spelling yet");
  assert.ok(infoTitle !== undefined);
  assert.equal((infoTitle.props.style as { color: string }).color, toneHex.info);
}

console.log("evaluate.test.ts ok");
