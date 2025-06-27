import { projectSummaries } from "./aiPrompts";

/**
 * Helper to convert a string to kebab-case suitable for URL anchors.
 */
function kebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ") // remove non-alphanumerics
    .trim()
    .replace(/\s+/g, "-");
}

/**
 * Very naive check for a heading-like line inside the raw case-study text.
 * We treat any line that is title-cased and shorter than ~60 chars as a section heading.
 */
function isHeading(line: string): boolean {
  if (!line) return false;
  if (line.length > 60) return false;
  // Starts with a capital letter and contains no terminal punctuation.
  return /^[A-Z][A-Za-z0-9 \-&]*$/.test(line.trim());
}

export interface CitationInfo {
  id: string;            // e.g. "designer-onboarding#problem-framing"
  slug: string;          // project slug
  heading: string;       // section heading text
  url: string;           // full external URL
  label: string;         // human-readable label for source list
}

/**
 * Build a citation map from projectSummaries at module load. Kept in memory.
 */
function buildCitationMap(): Record<string, CitationInfo> {
  const map: Record<string, CitationInfo> = {};

  for (const proj of projectSummaries) {
    const { slug, fullText } = proj;

    const lines = fullText.split("\n");
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!isHeading(line)) continue;

      const anchor = kebabCase(line);
      const id = `${slug}#${anchor}`;

      // Avoid duplicates if the same heading appears more than once.
      if (map[id]) continue;

      const url = `https://samchang.design/${slug}#${anchor}`;
      // Create a nicely cased project name from slug: designer-onboarding -> Designer-Onboarding
      const projectTitle = slug
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join("-");

      map[id] = {
        id,
        slug,
        heading: line,
        url,
        label: `${projectTitle} – ${line}`,
      };
    }
  }

  return map;
}

export const citationMap: Record<string, CitationInfo> = buildCitationMap();

/**
 * Replace citation tokens (e.g. [[cite:designer-onboarding#problem-framing]]) with
 * numeric references and append a formatted Sources list.
 */
export function applyCitationFormatting(raw: string): string {
  const used: string[] = [];

  // Replace inline markers with numbered references
  let transformed = raw.replace(/\[\[cite:([^\]]+)\]\]/g, (_, id: string) => {
    const idx = used.indexOf(id);
    if (idx !== -1) {
      return `[${idx + 1}]`;
    }
    if (!citationMap[id]) {
      // Unknown id, drop marker.
      return "";
    }
    used.push(id);
    return `[${used.length}]`;
  });

  if (used.length) {
    transformed += "\n\nSources\n";
    used.forEach((id, i) => {
      const info = citationMap[id];
      transformed += `[${i + 1}] ${info.label} (${info.url})\n`;
    });
  }

  return transformed;
} 