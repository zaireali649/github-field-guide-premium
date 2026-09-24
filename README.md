# GitHub Field Guide

An editorial, single-page field guide for a first-time developer: what Git and GitHub are, the vocabulary you meet in the first month, and the exact path from a folder on a laptop to a live site on Vercel.

Covers: Git vs GitHub, repository, local and remote, clone, README, branch and main, commit, push, pull, diff, pull request, merge, merge conflict, issue, fork, GitHub Actions, deploy, production, domain. Includes a filterable glossary and a six-question quiz, both keyboard-accessible.

## Run

```
npm install
npm run dev        # local dev server
npm run build      # type-check, then production build to dist/
npm run preview    # serve dist/ locally
npm test           # data and filter self-check (node --test)
```

Requires Node 18 or newer. No backend, no environment variables, no secrets.

## Stack

Vite + vanilla TypeScript. One HTML file, one stylesheet, one script, one data file. Fonts (Anton, Plus Jakarta Sans) are bundled from `@fontsource` packages so nothing loads from a third-party CDN at runtime.

## Deploy on Vercel

Import the repo. Framework preset: Vite. Build command `npm run build`, output directory `dist`. No further configuration.

## Images

`public/images/hero.png` and `public/images/chapter.png` are original images generated with Higgsfield GPT Image 2. WebP derivatives at 800w and 1600w were produced with ffmpeg and served through `<picture>` with the PNG as fallback. Originals are kept.

## Design provenance

Visual direction adapted from the MotionSites prompt collection:

`C:/Users/Ziggy/Dropbox/GitHub/motionsites-prompt-collection/prompts/superdesign-bold-editorial-design-style.md`

Adapted from that prompt:

- Dark navy base with alternating light stone sections for high-contrast rhythm
- Anton uppercase display type at viewport scale, with an outlined second line in the hero and footer
- Plus Jakarta Sans body at light and semibold weights
- Asymmetric 4/8 split layouts, offset feature image with a tinted backing square
- 1px borders instead of rounded cards, hover lines that extend from 40px to 64px
- Blurred ambient orbs, `mix-blend-mode: difference` fixed navigation, 10px/1000ms scroll reveals, `cubic-bezier(0.16, 1, 0.3, 1)` easing

Deliberately not reproduced: portfolio grid, testimonial carousel, fabricated credentials or client claims, crosshair cursor. The sage accent was kept; cyan and soft blue were replaced with a warm terracotta to match the generated imagery.
