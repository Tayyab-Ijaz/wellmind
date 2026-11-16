/**
 * caseStudyText.js — turns the paragraph text of a case study into scannable points.
 * Pure functions (no React) so they can be tested in Node.
 */

// ends with an abbreviation or a single-capital initial, so the "sentence" isn't really finished
const ABBREV = /(?:\b(?:e\.g|i\.e|vs|etc|approx|fig|no|st|dr|inc|ltd)|\b[A-Z])\.$/;

/** Split a paragraph into sentences without breaking on decimals ("0.875") or abbreviations. */
export function splitSentences(text) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  if (!clean) return [];
  const raw = [];
  const re = /[\s\S]+?[.!?](?=\s+[A-Z0-9"“(]|\s*$)/g;
  let m;
  let last = 0;
  while ((m = re.exec(clean))) { raw.push(m[0].trim()); last = re.lastIndex; }
  const rest = clean.slice(last).trim();
  if (rest) raw.push(rest);
  const out = [];
  for (const s of raw) {
    const prev = out[out.length - 1];
    if (prev && (ABBREV.test(prev) || s.length < 30)) out[out.length - 1] = `${prev} ${s}`;
    else out.push(s);
  }
  return out;
}

/** Merge neighbouring sentences until there are at most `max` points. */
export function limitPoints(points, max) {
  const out = [...points];
  while (out.length > max) {
    // merge the two shortest neighbours to keep the points balanced
    let idx = 0;
    let best = Infinity;
    for (let i = 0; i < out.length - 1; i += 1) {
      const len = out[i].length + out[i + 1].length;
      if (len < best) { best = len; idx = i; }
    }
    out.splice(idx, 2, `${out[idx]} ${out[idx + 1]}`);
  }
  return out;
}

/** "Bold lead: the rest" → { lead, rest }. Leaves ordinary sentences alone. */
export function leadIn(sentence) {
  const m = sentence.match(/^([^:.—–]{6,64}?)(?::\s| — | – )(.+)$/);
  return m ? { lead: m[1], rest: m[2] } : { lead: null, rest: sentence };
}

/** First sentence, shortened for use as a subtitle. */
export function firstSentence(text, maxLen = 230) {
  const first = splitSentences(text)[0] || '';
  if (first.length <= maxLen) return first;
  const cut = first.slice(0, maxLen);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

/** Challenge → { lead, bullets }. Short paragraphs stay as a single paragraph. */
export function challengePoints(text) {
  const s = splitSentences(text);
  if (s.length < 3) return { lead: s.join(' '), bullets: [] };
  return { lead: s[0], bullets: limitPoints(s.slice(1), 5) };
}

/** Approach → ordered steps. */
export function solutionSteps(text) {
  const s = splitSentences(text);
  return s.length < 2 ? s : limitPoints(s, 6);
}
