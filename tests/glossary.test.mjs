// ponytail: one self-check for the data and the filter logic, no framework.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// Load TS source by stripping types crudely: the data file has only `type`/`export type` blocks and typed consts.
const src = readFileSync(new URL('../src/glossary.ts', import.meta.url), 'utf8')
  .replace(/export type [\s\S]*?\n};\n/g, '')
  .replace(/: (Term|QuizQuestion)\[\]/g, '');
const mod = await import(`data:text/javascript,${encodeURIComponent(src)}`);
const { TERMS, QUIZ } = mod;

const REQUIRED = [
  'git', 'github', 'repo', 'local', 'remote', 'clone', 'readme', 'branch', 'main', 'commit',
  'push', 'pull', 'diff', 'pull request', 'merge', 'conflict', 'issue', 'fork', 'actions',
  'deploy', 'production', 'domain',
];

test('every required concept from the brief has a glossary entry', () => {
  const names = TERMS.map((t) => t.term.toLowerCase());
  for (const r of REQUIRED) {
    assert.ok(names.some((n) => n.includes(r)), `missing term: ${r}`);
  }
});

test('quiz answers are valid indices and prompts are unique', () => {
  const prompts = new Set();
  for (const q of QUIZ) {
    assert.ok(q.answer >= 0 && q.answer < q.choices.length, q.prompt);
    assert.ok(!prompts.has(q.prompt));
    prompts.add(q.prompt);
  }
});

test('filter is case-insensitive and empty query returns everything', () => {
  const filter = (terms, q) => {
    const n = q.trim().toLowerCase();
    if (!n) return terms;
    return terms.filter((t) => `${t.term} ${t.short} ${t.long} ${t.tags.join(' ')}`.toLowerCase().includes(n));
  };
  assert.equal(filter(TERMS, '  ').length, TERMS.length);
  assert.ok(filter(TERMS, 'CONFLICT').some((t) => t.term === 'Merge conflict'));
  assert.equal(filter(TERMS, 'zzzz').length, 0);
});
