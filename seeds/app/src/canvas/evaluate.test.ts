import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { compileCanvas } from "./evaluate.ts";
import { applyStyle, cssPropertyName, cssStyleValue, svgAttributeName, type Child, type VNode } from "./h.ts";
import { highlightCanvasElement, highlightCanvasSource, resolveCanvasLanguage } from "./highlight.ts";
import { toneFill, toneHex } from "./theme.ts";

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
  const box = diagram.props.style as { width: number; height: number; left?: number; top?: number };
  assert.ok(box.width > 200, "diagram width must be a real layout size");
  assert.ok(box.height > 200, "diagram height must be a real layout size");
  const boxCss: Record<string, string> = {};
  applyStyle({ style: { setProperty(name, value) { boxCss[name] = value; } } }, box);
  assert.equal(boxCss.width, `${box.width}px`);
  assert.equal(boxCss.height, `${box.height}px`);
  assert.equal(boxCss.position, "relative");

  const nodeBox = nodes.find((node) => {
    const style = node.props.style as
      | { position?: string; left?: number; top?: number; width?: number; height?: number }
      | undefined;
    return (
      style?.position === "absolute" &&
      typeof style.left === "number" &&
      typeof style.top === "number" &&
      typeof style.width === "number" &&
      typeof style.height === "number"
    );
  });
  assert.ok(nodeBox !== undefined, "flow nodes must have numeric left/top");
  const nodeCss: Record<string, string> = {};
  applyStyle({ style: { setProperty(name, value) { nodeCss[name] = value; } } }, nodeBox.props.style);
  assert.equal(nodeCss.left, `${cssStyleValue("left", (nodeBox.props.style as { left: number }).left)}`);
  assert.equal(nodeCss.top, `${cssStyleValue("top", (nodeBox.props.style as { top: number }).top)}`);
  assert.equal(nodeCss.width?.endsWith("px"), true);
  assert.equal(nodeCss.height?.endsWith("px"), true);

  const svg = nodes.find((node) => node.type === "svg");
  assert.ok(svg !== undefined, "FlowDiagram must emit an svg");
  assert.equal(svg.props.width, box.width);
  assert.equal(svg.props.height, box.height);
  assert.ok(
    nodes.some((node) => node.type === "path" && typeof node.props.d === "string"),
    "FlowDiagram must emit cubic edge paths",
  );
  const edge = nodes.find(
    (node) => node.type === "path" && typeof node.props.d === "string" && node.props.markerEnd !== undefined,
  );
  assert.ok(edge !== undefined, "edge paths must carry camelCase SVG JSX attrs");
  assert.equal(typeof edge.props.strokeWidth, "number");
  assert.equal(typeof edge.props.markerEnd, "string");
  assert.equal(svgAttributeName("strokeWidth"), "stroke-width");
  assert.equal(cssPropertyName("fontSize"), "font-size");
  assert.equal(svgAttributeName("markerEnd"), "marker-end");
  assert.equal(svgAttributeName("strokeDasharray"), "stroke-dasharray");
  const marker = nodes.find((node) => node.type === "marker");
  assert.ok(marker !== undefined);
  assert.equal(marker.props.markerWidth, "8");
  assert.equal(marker.props.refX, "7");

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
  const successStat = nodes.find((node) => node.type === "div" && String(node.props.class).includes("cv-stat-success"));
  assert.ok(successStat !== undefined);

  const warningValue = nodes.find((node) => node.children[0] === "2");
  assert.ok(warningValue !== undefined);
  assert.equal((warningValue.props.style as { color: string }).color, toneHex.warning);

  const infoTitle = nodes.find((node) => node.children[0] === "HEAD is not this spelling yet");
  assert.ok(infoTitle !== undefined);
  assert.equal((infoTitle.props.style as { color: string }).color, toneHex.info);

  assert.equal(nodes.filter((node) => node.type === "pre").length, 42);
  const warningCallout = nodes.find(
    (node) => node.type === "aside" && String(node.props.class).includes("cv-callout-warning"),
  );
  assert.ok(warningCallout !== undefined);
  assert.equal((warningCallout.props.style as { background: string }).background, toneFill("warning"));

  const successRow = nodes.find(
    (node) => node.type === "tr" && String(node.props.class ?? "").includes("cv-tr-success"),
  );
  assert.ok(successRow !== undefined);
  const successCell = successRow.children[0];
  assert.ok(successCell !== null && typeof successCell === "object" && "props" in successCell);
  assert.equal((successCell.props.style as { background: string }).background, toneFill("success"));
}

{
  const cppSrc = "auto parse() noexcept -> ano::Result<Texture, Error> { return {}; }";
  assert.equal(resolveCanvasLanguage(cppSrc), "cpp");
  const cpp = highlightCanvasSource(cppSrc, "cpp");
  assert.ok(cpp.includes("<span"), "C++ must emit Shiki token spans");
  assert.ok(/style="color:/i.test(cpp), "C++ tokens must carry theme colors");
  assert.equal(cpp.includes("<pre"), false, "inline structure must not wrap another pre");

  const sampleBlock = "ano::Result<Texture, ResourceError>";
  assert.equal(resolveCanvasLanguage(sampleBlock), "cpp");
  assert.ok(/style="color:/i.test(highlightCanvasSource(sampleBlock)));

  const haskell = highlightCanvasSource("main :: IO ()\nmain = putStrLn \"ok\"", "haskell");
  assert.ok(/style="color:/i.test(haskell), "Haskell must emit Shiki token colors");

  assert.equal(resolveCanvasLanguage("#include <expected>\nint main() { return 0; }"), "cpp");
  assert.equal(resolveCanvasLanguage("const x = 1;", "language-tsx"), "typescript");

  const eq = "Result(V, E) = V + E\nD --reify--> W";
  assert.equal(resolveCanvasLanguage(eq), "plaintext", "algebra/Eq lines must stay plaintext");
  const eqHtml = highlightCanvasSource(eq);
  assert.equal(eqHtml, eq);
  assert.equal(/style="color:/i.test(eqHtml), false, "Eq-like pre must not be rainbowed");

  const pre = {
    className: "language-cpp",
    classList: {
      names: new Set<string>(),
      contains(name: string) {
        return this.names.has(name);
      },
      add(name: string) {
        this.names.add(name);
      },
    },
    textContent: "int main() { return 0; }",
    innerHTML: "int main() { return 0; }",
    parentElement: null,
  };
  highlightCanvasElement(pre);
  assert.ok(/style="color:/i.test(pre.innerHTML), "language-cpp pre must gain token spans");
  assert.ok(pre.classList.contains("shiki"));

  const unlabeled = {
    className: "",
    classList: {
      names: new Set<string>(),
      contains(name: string) {
        return this.names.has(name);
      },
      add(name: string) {
        this.names.add(name);
      },
    },
    textContent: sampleBlock,
    innerHTML: sampleBlock,
    parentElement: null,
  };
  highlightCanvasElement(unlabeled);
  assert.ok(/style="color:/i.test(unlabeled.innerHTML), "unlabeled C++ pre must gain token spans");

  const eqPre = {
    className: "",
    classList: {
      names: new Set<string>(),
      contains(name: string) {
        return this.names.has(name);
      },
      add(name: string) {
        this.names.add(name);
      },
    },
    textContent: eq,
    innerHTML: eq,
    parentElement: null,
  };
  highlightCanvasElement(eqPre);
  assert.equal(eqPre.innerHTML, eq, "plaintext/Eq-like pre must keep original text");
  assert.ok(eqPre.classList.contains("shiki"));
}

console.log("evaluate.test.ts ok");
