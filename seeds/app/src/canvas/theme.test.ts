import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  buildHostTheme,
  canvasPaletteDark,
  canvasPaletteLight,
  toneFill,
  toneHex,
  useHostTheme,
} from "./theme.ts";
import { Callout, Stat, Table } from "./primitives.ts";
import type { VNode } from "./h.ts";

assert.equal(toneHex.success, "#1F8A65");
assert.equal(toneHex.warning, "#E8A33D");
assert.equal(toneHex.info, "#2E79B5");
assert.equal(toneHex.danger, "#CF2D56");

const dark = buildHostTheme("dark");
assert.equal(dark.kind, "dark");
assert.equal(dark.accent.primary, canvasPaletteDark.accent);
assert.equal(dark.bg.elevated, canvasPaletteDark.elevated);
assert.equal(dark.fill.tertiary, canvasPaletteDark.fillTertiary);
assert.equal(dark.stroke.focused, canvasPaletteDark.strokeFocused);
assert.equal(dark.text.primary, canvasPaletteDark.foreground);
assert.notEqual(dark.accent.primary, dark.text.primary);

const light = buildHostTheme("light");
assert.equal(light.kind, "light");
assert.equal(light.accent.primary, canvasPaletteLight.accent);
assert.equal(light.bg.editor, "#FCFCFC");
assert.equal(light.stroke.focused, canvasPaletteLight.strokeFocused);

const fallback = useHostTheme();
assert.equal(fallback.kind, "dark");
assert.equal(fallback.tokens.accent.primary, canvasPaletteDark.accent);

assert.equal(toneFill("success"), "rgba(31,138,101,0.12)");
assert.equal(toneFill("warning"), "rgba(232,163,61,0.14)");
assert.equal(toneFill("info", 0.4), "rgba(46,121,181,0.4)");

function asNode(child: unknown): VNode {
  assert.ok(child !== null && typeof child === "object" && "type" in child);
  return child as VNode;
}

const successStat = asNode(Stat({ value: "27", label: "public names", tone: "success" }));
const successValue = asNode(successStat.children[0]);
const successLabel = asNode(successStat.children[1]);
assert.equal((successValue.props.style as { color: string }).color, "#1F8A65");
assert.equal((successLabel.props.style as { color: string }).color, dark.text.tertiary);

const warningStat = asNode(Stat({ value: "2", label: "deleted collisions", tone: "warning" }));
const warningValue = asNode(warningStat.children[0]);
assert.equal((warningValue.props.style as { color: string }).color, "#E8A33D");

const infoCallout = asNode(Callout({ tone: "info", title: "HEAD is not this spelling yet", children: "note" }));
const calloutStyle = infoCallout.props.style as { background: string; border: string; color: string };
assert.equal(calloutStyle.background, toneFill("info"));
assert.equal(calloutStyle.border, `1px solid ${toneFill("info", 0.4)}`);
assert.equal(calloutStyle.color, dark.text.primary);
const calloutBody = asNode(infoCallout.children[0]);
const calloutTitle = asNode(calloutBody.children[0]);
assert.equal((calloutTitle.props.style as { color: string }).color, "#2E79B5");

const table = asNode(
  Table({
    headers: ["a", "b"],
    rows: [["1", "2"]],
    rowTone: ["success"],
  }),
);
const tbody = asNode(asNode(table.children[0]).children[1]);
const row = asNode(tbody.children[0]);
assert.equal((row.props.style as { background: string }).background, toneFill("success"));
const td = asNode(row.children[0]);
assert.equal((td.props.style as { background: string }).background, toneFill("success"));

{
  const css = readFileSync(new URL("../style.css", import.meta.url), "utf8");
  const hostStart = css.indexOf(".canvas-host {");
  const hostEnd = css.indexOf(".off-filter {");
  assert.ok(hostStart >= 0 && hostEnd > hostStart);
  const host = css.slice(hostStart, hostEnd);
  assert.equal(host.includes("var(--ink)"), false, "canvas-host must not force site ink");
  assert.equal(host.includes("var(--muted)"), false, "canvas-host must not force site muted");
  assert.equal(host.includes("var(--panel"), false, "canvas-host must not paint with site panels");
  assert.equal(host.includes("height: auto"), false, "canvas SVG must not be height:auto");
  assert.equal(css.includes(".canvas-host svg"), false, "do not scale canvas SVG independently of HTML nodes");
  assert.ok(host.includes("div:has(> svg)"), "FlowDiagram relative box needs a host selector");
  assert.ok(host.includes("margin-inline: auto"), "FlowDiagram relative box must center");
  assert.equal(host.includes("text-transform"), false, "headings/labels must not be uppercased by the host");
  assert.equal(host.includes("--off-filter"), false, "callout-warning must not use site off-filter green");
  assert.ok(host.includes(".cv-stat-success"), "stat tone classes need CSS");
  assert.ok(host.includes(".cv-callout-warning"), "callout tone classes need CSS");
  assert.ok(host.includes(".cv-tr-success"), "table row tones need CSS");
  assert.ok(host.includes(toneHex.success));
  assert.ok(host.includes(toneHex.warning));
  assert.ok(host.includes(toneHex.info));
  assert.ok(host.includes(toneHex.danger));
}

console.log("theme.test.ts ok");
