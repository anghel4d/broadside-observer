import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  applyCanvasChrome,
  buildHostTheme,
  buildTokens,
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
assert.equal(dark.palette, canvasPaletteDark);
assert.deepEqual(Object.keys(canvasPaletteDark), Object.keys(canvasPaletteLight));
assert.deepEqual(Object.keys(buildTokens(canvasPaletteDark)), Object.keys(buildTokens(canvasPaletteLight)));

const light = buildHostTheme("light");
assert.equal(light.kind, "light");
assert.equal(light.accent.primary, canvasPaletteLight.accent);
assert.equal(light.bg.editor, canvasPaletteLight.editor);
assert.equal(light.stroke.focused, canvasPaletteLight.strokeFocused);
assert.equal(light.fill.tertiary, buildTokens(canvasPaletteLight).fill.tertiary);
assert.notEqual(light.text.primary, dark.text.primary);
assert.notEqual(light.fill.tertiary, dark.fill.tertiary);

const fallback = useHostTheme();
assert.equal(fallback.kind, "dark");
assert.equal(fallback.accent.primary, canvasPaletteDark.accent);

{
  const el = { style: { background: "x", color: "" } };
  applyCanvasChrome(el, light);
  assert.equal(el.style.background, light.bg.editor);
  assert.equal(el.style.color, light.text.primary);
  applyCanvasChrome(el, dark);
  assert.equal(el.style.background, dark.bg.editor);
  assert.equal(el.style.color, dark.text.primary);
  assert.equal(dark.bg.editor, canvasPaletteDark.editor);
}

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
  assert.ok(host.includes("overflow: visible"), "canvas-host must not trap scroll in an inner bar");
  assert.equal(host.includes("background: transparent"), false, "host background comes from applyCanvasChrome");
  assert.equal(host.includes("text-transform"), false, "headings/labels must not be uppercased by the host");
  assert.equal(host.includes("--off-filter"), false, "callout-warning must not use site off-filter green");
  assert.ok(host.includes(".cv-stat-success"), "stat tone classes need CSS");
  assert.ok(host.includes(".cv-callout-warning"), "callout tone classes need CSS");
  assert.ok(host.includes(".cv-tr-success"), "table row tones need CSS");
  assert.ok(host.includes(toneHex.success));
  assert.ok(host.includes(toneHex.warning));
  assert.ok(host.includes(toneHex.info));
  assert.ok(host.includes(toneHex.danger));
  assert.ok(host.includes("margin-top: 2rem"), "Eq/pre/callout/table need a break between grey blocks");
  assert.ok(host.includes("white-space: pre"), "Eq-like divs are selected via white-space:pre");
  assert.equal(host.includes(".cv-h1 {\n  margin-top: 2rem"), false, "do not force 2rem onto headings");
  assert.equal(host.includes(".cv-text {\n  margin-top: 2rem"), false, "do not force 2rem onto Text");

  const reading = css.slice(css.indexOf(".reading-col {"), css.indexOf(".detail-dismiss {"));
  assert.ok(/\.reading-col\s*\{[^}]*max-width:\s*46rem/.test(reading), "List/Cards reading column stays 46rem");
  assert.ok(/\.reading-col\s*\{[^}]*width:\s*100%/.test(reading), "List/Cards reading column is centered");
  assert.ok(/\.reading-col\s*\{[^}]*margin-inline:\s*auto/.test(reading));
  assert.ok(
    /#app\[data-view="canvas"\]\s*\.reading-col\s*\{[^}]*max-width:\s*66rem/.test(reading),
    "desktop canvas reading column is a centered 66rem column",
  );
  assert.equal(
    /#app\[data-view="canvas"\]\s*\.reading-col\s*\{[^}]*width:/.test(reading),
    false,
    "canvas reading-col inherits width from .reading-col",
  );
  assert.equal(
    /#app\[data-view="canvas"\]\s*\.reading-col\s*\{[^}]*margin-inline:/.test(reading),
    false,
    "canvas reading-col inherits centering from .reading-col",
  );
  assert.equal(reading.includes("max-width: 46rem"), true);
  assert.equal(
    /#app\[data-view="canvas"\]\s*\.reading-col\s*\{[^}]*max-width:\s*none/.test(reading),
    false,
    "desktop canvas must not full-bleed the reading column",
  );
  assert.equal(
    /#app\[data-view="canvas"\]\s*\.reading-col\s*\{[^}]*padding/.test(reading),
    false,
    "reading-col must not add a nested inset",
  );
  assert.ok(
    /#app\[data-view="canvas"\]\s*\.detail-pane\s*\{[^}]*padding:\s*0 2rem 2rem/.test(css),
    "desktop canvas pane keeps side inset, not top padding",
  );
  assert.ok(/#app\[data-view="canvas"\]\s*\.detail-body\s*\{[^}]*padding:\s*0/.test(css));
  assert.ok(/\.detail-head\s*\{[^}]*position:\s*sticky/.test(css), "sticky head is the List/Cards rule");
  assert.ok(/\.detail-head\s*\{[^}]*background:\s*var\(--bg\)/.test(css), "sticky head fill is shared");
  assert.equal(
    /#app\[data-view="canvas"\]\s*\.detail-head\s*\{[^}]*background/.test(css),
    false,
    "canvas head reuses .detail-head fill instead of a second stick region",
  );
  assert.ok(
    /#app\[data-view="canvas"\]\s*\.detail-head\s*\{[^}]*padding-left:\s*2rem/.test(css),
    "desktop canvas head matches host word inset",
  );
  assert.ok(
    /#app\[data-view="canvas"\]\s*\.canvas-host,[\s\S]*?padding-left:\s*2rem/.test(reading),
    "desktop canvas-host pads words 2rem",
  );
  assert.ok(/#app\[data-view="canvas"\]\s*\.canvas-source[\s\S]*?padding-right:\s*2rem/.test(reading));

  const phone = css.slice(css.indexOf("@media (width <= 560px)"));
  assert.ok(phone.includes("padding-left: 0.75rem"), "phone list/cards inset stays 0.75rem");
  assert.ok(
    /#app\[data-view="canvas"\]\s*\.reading-col\s*\{[^}]*max-width:\s*none/.test(phone),
    "phone canvas reading column full-bleeds",
  );
  assert.ok(
    /#app\[data-view="canvas"\]\s*\.detail-pane\s*\{[^}]*padding:\s*0;/.test(phone),
    "phone canvas pane is full-bleed",
  );
  assert.ok(
    /#app\[data-view="canvas"\]\s*\.canvas-host,[\s\S]*?padding-left:\s*1rem/.test(phone),
    "phone canvas-host pads words 1rem",
  );
  assert.ok(/#app\[data-view="canvas"\]\s*\.canvas-source[\s\S]*?padding-right:\s*1rem/.test(phone));
  assert.equal(
    /#app\[data-view="canvas"\]\s*\.detail-pane\s*\{[^}]*padding:\s*0 2rem 2rem/.test(phone),
    false,
    "phone must not keep the desktop pane gutter",
  );
  assert.ok(phone.includes(".menu-toggle"), "phone hamburger rules live at 560px");
  assert.ok(phone.includes(".phone-bar"));
  assert.ok(phone.includes('[data-menu="open"]'));
  assert.ok(
    phone.includes("#app[data-view=\"canvas\"]:not([data-menu=\"open\"]) .browse-pane"),
    "phone canvas list lives in the hamburger, not a 12rem strip",
  );
}

console.log("theme.test.ts ok");
