import assert from "node:assert/strict";
import { cssStyleValue, svgAttributeName } from "./h.ts";

assert.equal(cssStyleValue("width", 640), "640px");
assert.equal(cssStyleValue("height", 412), "412px");
assert.equal(cssStyleValue("left", 24), "24px");
assert.equal(cssStyleValue("top", 96), "96px");
assert.equal(cssStyleValue("fontSize", 14), "14px");
assert.equal(cssStyleValue("borderRadius", 6), "6px");
assert.equal(cssStyleValue("gap", 4), "4px");
assert.equal(cssStyleValue("padding", 10), "10px");

assert.equal(cssStyleValue("opacity", 0.5), "0.5");
assert.equal(cssStyleValue("fontWeight", 600), "600");
assert.equal(cssStyleValue("zIndex", 3), "3");
assert.equal(cssStyleValue("flex", 1), "1");
assert.equal(cssStyleValue("lineHeight", 1.2), "1.2");
assert.equal(cssStyleValue("strokeWidth", 1.4), "1.4");

assert.equal(cssStyleValue("width", 0), "0");
assert.equal(cssStyleValue("inset", 0), "0");
assert.equal(cssStyleValue("position", "absolute"), "absolute");
assert.equal(cssStyleValue("lineHeight", "13px"), "13px");
assert.equal(cssStyleValue("width", undefined), undefined);
assert.equal(cssStyleValue("display", false), undefined);
assert.equal(cssStyleValue("width", Number.NaN), undefined);

assert.equal(svgAttributeName("strokeWidth"), "stroke-width");
assert.equal(svgAttributeName("markerEnd"), "marker-end");
assert.equal(svgAttributeName("strokeDasharray"), "stroke-dasharray");
assert.equal(svgAttributeName("fillOpacity"), "fill-opacity");
assert.equal(svgAttributeName("clipPath"), "clip-path");
assert.equal(svgAttributeName("markerWidth"), "markerWidth");
assert.equal(svgAttributeName("markerHeight"), "markerHeight");
assert.equal(svgAttributeName("refX"), "refX");
assert.equal(svgAttributeName("refY"), "refY");
assert.equal(svgAttributeName("viewBox"), "viewBox");
assert.equal(svgAttributeName("d"), "d");
assert.equal(svgAttributeName("fill"), "fill");
assert.equal(svgAttributeName("stroke"), "stroke");

console.log("h.test.ts ok");
