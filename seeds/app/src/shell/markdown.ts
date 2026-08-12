import { escapeHtml } from "./html.ts";

function renderInline(value: string): string {
  let html = escapeHtml(value);
  html = html.replace(/`([^`]+)`/gu, "<code>$1</code>");
  html = html.replace(
    /\[([^\]]+)\]\((https?:[^)\s]+)\)/gu,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
  );
  html = html.replace(
    /(^|[\s>(])(https?:\/\/[^\s<]+)/gu,
    '$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>',
  );
  html = html.replace(/\*\*([^*]+)\*\*/gu, "<strong>$1</strong>");
  html = html.replace(/(^|[^*])\*([^*]+)\*(?!\*)/gu, "$1<em>$2</em>");
  return html;
}

/** View morphism: section markdown → escaped HTML. Not a general MD engine. */
export function renderMarkdown(markdown: string): string {
  const source = markdown.trim();
  if (source.length === 0) return '<p class="empty-section">—</p>';

  return source
    .split(/\n{2,}/u)
    .map((block) => {
      const lines = block.split("\n").filter((line) => line.trim().length > 0);
      if (lines.length === 0) return "";
      const isList = lines.every((line) => /^\s*[-*]\s+/u.test(line));
      if (isList) {
        const items = lines
          .map((line) => `<li>${renderInline(line.replace(/^\s*[-*]\s+/u, ""))}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }
      return `<p>${lines.map((line) => renderInline(line)).join("<br />")}</p>`;
    })
    .join("");
}
