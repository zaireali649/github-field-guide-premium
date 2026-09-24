# GitHub Field Guide — Fable 5.1 implementation brief

Build a premium, fully functional educational website for Zaire's brother, a first-time developer learning GitHub terminology and how websites get deployed. This is a NEW standalone repo and NEW Vercel project, not an edit to the previous github-terms-guide site. Implement yourself with Claude CLI Fable 5.1. Do not create the GitHub repo or deploy; Hermes will handle those.

## Actual source prompt
Read `C:/Users/Ziggy/Dropbox/GitHub/motionsites-prompt-collection/prompts/superdesign-bold-editorial-design-style.md` and explicitly adapt its dark editorial palette, massive typographic hierarchy, asymmetric composition, restrained atmospheric depth, and high-contrast section rhythm. Do not blindly reproduce the source portfolio/gallery/testimonials or fabricated credentials. Include a README provenance note linking the source prompt path and describing what was adapted.

## Existing assets
Higgsfield GPT Image 2 generated two original images downloaded locally to `public/images/hero.png` and `public/images/chapter.png`. Use these meaningfully: hero visual and a secondary chapter/story visual. Optimize delivery if feasible (WebP conversion or responsive sizing), preserve originals if conversion fails. Do not use remote URLs at runtime.

## Design and learning content
An editorial field guide named 'GitHub Field Guide' with visually striking dark navy/stone palette, sage and warm terracotta restrained accents, substantial typographic character, generous rhythm, sharp borders rather than generic cards. Premium but genuinely readable on phone. Site should teach Git vs GitHub, repo, local/remote, clone, README, branch/main, commit, push, pull, diff, PR, merge, conflict, issue, fork, GitHub Actions, deploy, production, domain. Correctly differentiate Git and GitHub; GitHub hosting is not itself website deployment. Explain a practical local -> GitHub -> Vercel flow, with accurate concise examples. Add working interactive micro-quiz or expandable glossary/search with actual keyboard-accessible controls. No fake stats, testimonials, awards, product claims, broken links, or unexplained jargon. Real educational content is priority, not merely a landing-page hero.

## Technical constraints
Choose smallest maintainable React/Vite/TypeScript stack, or static HTML if it produces equivalent premium outcome quickly. Use semantic markup and keyboard focus styling, reduced-motion support, responsive 320px+. No secret tokens, no backend. Add README with run/build instructions and source prompt provenance. Run build/tests locally if feasible, and report exact verification. Focus on excellent visual execution rather than framework complexity. Do not touch any directories outside this project except read-only source prompt.
