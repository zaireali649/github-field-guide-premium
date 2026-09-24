import '@fontsource/anton/400.css';
import '@fontsource-variable/plus-jakarta-sans';
import './style.css';
import { TERMS, QUIZ, type Term } from './glossary';

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

/* ---------- Scroll reveal ---------- */
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduced && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
}

/* ---------- Glossary ---------- */
export function filterTerms(terms: Term[], q: string): Term[] {
  const n = q.trim().toLowerCase();
  if (!n) return terms;
  return terms.filter((t) => `${t.term} ${t.short} ${t.long} ${t.tags.join(' ')}`.toLowerCase().includes(n));
}

function highlight(text: string, q: string): string {
  const safe = esc(text);
  const n = q.trim();
  if (!n) return safe;
  const re = new RegExp(n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig');
  return safe.replace(re, (m) => `<mark>${m}</mark>`);
}

function renderGlossary(q = '') {
  const list = document.getElementById('glossary-list');
  const count = document.getElementById('q-count');
  if (!list || !count) return;
  const hits = filterTerms(TERMS, q);
  count.textContent = q.trim() ? `${hits.length} of ${TERMS.length} terms` : `${TERMS.length} terms`;
  if (!hits.length) {
    list.innerHTML = `<p class="empty">Nothing matches. Try a shorter word.</p>`;
    return;
  }
  list.innerHTML = hits
    .map(
      (t) => `
    <details${q.trim() ? ' open' : ''}>
      <summary>
        <span class="t">${highlight(t.term, q)}</span>
        <span class="s">${highlight(t.short, q)}</span>
        <span class="i" aria-hidden="true">+</span>
      </summary>
      <div class="body">
        <p>${highlight(t.long, q)}</p>
        ${t.example ? `<pre><code>${esc(t.example)}</code></pre>` : ''}
      </div>
    </details>`,
    )
    .join('');
}

const q = document.getElementById('q') as HTMLInputElement | null;
q?.addEventListener('input', () => renderGlossary(q.value));
renderGlossary();

/* ---------- Quiz ---------- */
const root = document.getElementById('quiz-root');
if (root) {
  let i = 0;
  let score = 0;
  let picked: number | null = null;
  let checked = false;

  const draw = () => {
    if (i >= QUIZ.length) {
      root.innerHTML = `
        <div class="quiz__result">
          <p class="quiz__progress">Result</p>
          <p class="display">${score}/${QUIZ.length}</p>
          <p class="lead">${
            score === QUIZ.length
              ? 'All six. You know the vocabulary. Go make a repo.'
              : score >= 4
                ? 'Solid. Reread the ones you missed in the glossary above and you are set.'
                : 'That is the point of the guide. Scroll back to chapter one and go again.'
          }</p>
          <div class="quiz__actions"><button class="btn" type="button" data-act="restart">Start over</button></div>
        </div>`;
      return;
    }
    const qz = QUIZ[i]!;
    root.innerHTML = `
      <p class="quiz__progress">Question ${i + 1} of ${QUIZ.length} · Score ${score}</p>
      <form>
        <fieldset>
          <legend>${esc(qz.prompt)}</legend>
          ${qz.choices
            .map(
              (c, k) => `
            <label class="opt${checked ? (k === qz.answer ? ' correct' : k === picked ? ' wrong' : '') : ''}">
              <input type="radio" name="a" value="${k}" ${picked === k ? 'checked' : ''} ${checked ? 'disabled' : ''} />
              <span>${esc(c)}</span>
            </label>`,
            )
            .join('')}
        </fieldset>
        <div class="quiz__actions">
          ${
            checked
              ? `<button class="btn" type="button" data-act="next">${i + 1 === QUIZ.length ? 'See result' : 'Next'}</button>`
              : `<button class="btn" type="submit" ${picked === null ? 'disabled' : ''}>Check</button>`
          }
        </div>
        ${
          checked
            ? `<p class="quiz__feedback" role="status">${picked === qz.answer ? 'Correct.' : 'Not quite.'} ${esc(qz.why)}</p>`
            : ''
        }
      </form>`;
    if (checked) root.querySelector<HTMLButtonElement>('[data-act]')?.focus();
  };

  root.addEventListener('change', (e) => {
    const t = e.target as HTMLInputElement;
    if (t.name === 'a') {
      picked = Number(t.value);
      root.querySelector<HTMLButtonElement>('button[type=submit]')!.disabled = false;
    }
  });
  root.addEventListener('submit', (e) => {
    e.preventDefault();
    if (picked === null || checked) return;
    checked = true;
    if (picked === QUIZ[i]!.answer) score++;
    draw();
  });
  root.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-act]');
    if (!b) return;
    if (b.dataset.act === 'next') i++;
    if (b.dataset.act === 'restart') {
      i = 0;
      score = 0;
    }
    picked = null;
    checked = false;
    draw();
    root.querySelector<HTMLInputElement>('input')?.focus();
  });
  draw();
}
