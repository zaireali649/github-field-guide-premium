export type Term = {
  term: string;
  short: string;
  long: string;
  example?: string;
  tags: string[];
};

export const TERMS: Term[] = [
  {
    term: 'Git',
    short: 'A program on your computer that records the history of your files.',
    long: 'Git is version control software. It runs locally, needs no internet, and tracks every saved snapshot (commit) of a project so you can compare, undo, and branch. Git existed before GitHub and works without it.',
    example: 'git --version',
    tags: ['foundations'],
  },
  {
    term: 'GitHub',
    short: 'A website that stores copies of Git projects and adds collaboration tools.',
    long: 'GitHub is a hosting service built around Git. It keeps a remote copy of your repository online and layers on pull requests, issues, code review, and automation. Storing code on GitHub does not by itself publish a website.',
    tags: ['foundations'],
  },
  {
    term: 'Repository (repo)',
    short: 'A project folder that Git is tracking, including its full history.',
    long: 'A repo is a normal folder plus a hidden .git directory where Git keeps every commit. One repo usually equals one project. It can live on your machine, on GitHub, or both.',
    example: 'git init',
    tags: ['foundations'],
  },
  {
    term: 'Local',
    short: 'The copy of the repo on your own computer.',
    long: 'Local means "here, on this machine." You edit files, run the site, and make commits locally. Nothing you do locally is visible to anyone until you push.',
    tags: ['foundations'],
  },
  {
    term: 'Remote',
    short: 'A copy of the repo stored somewhere else, usually on GitHub.',
    long: 'A remote is a named address Git can push to and pull from. The default remote is called origin. Your local repo and the remote can drift apart until you sync them.',
    example: 'git remote -v',
    tags: ['foundations'],
  },
  {
    term: 'Clone',
    short: 'Download a full copy of a remote repo, history included.',
    long: 'Cloning creates a local repo already connected to its remote. It is how you start working on a project that already exists on GitHub.',
    example: 'git clone https://github.com/user/project.git',
    tags: ['foundations'],
  },
  {
    term: 'README',
    short: 'The front page of a repo: what it is, how to run it.',
    long: 'README.md is a Markdown file GitHub shows automatically on the repo home page. Good READMEs state the purpose, how to install and run the project, and anything a newcomer must know.',
    tags: ['foundations'],
  },
  {
    term: 'Branch',
    short: 'A separate line of work inside the same repo.',
    long: 'A branch lets you make changes without touching the main line. You can have many branches at once. When the work is ready, you merge the branch back in.',
    example: 'git switch -c fix-header',
    tags: ['saving'],
  },
  {
    term: 'main',
    short: 'The default branch, usually the version considered stable.',
    long: 'main is just a branch with a conventional name (older repos use master). Many teams treat it as the source of truth and deploy production from it.',
    tags: ['saving'],
  },
  {
    term: 'Commit',
    short: 'A saved snapshot of your changes with a message explaining them.',
    long: 'A commit records exactly what changed, who changed it, when, and why. Commits are the units of history. Small, focused commits with clear messages make a project easy to understand later.',
    example: 'git add .\ngit commit -m "Fix header alignment on mobile"',
    tags: ['saving'],
  },
  {
    term: 'Push',
    short: 'Upload your local commits to the remote.',
    long: 'Push sends commits from your machine to GitHub. Until you push, your work exists only locally. Push is what makes collaboration and deployment possible.',
    example: 'git push origin main',
    tags: ['saving'],
  },
  {
    term: 'Pull',
    short: 'Download new commits from the remote and merge them into your local branch.',
    long: 'Pull is the reverse of push. It fetches what others have pushed and applies it locally. Pull before you start work so you build on the latest version.',
    example: 'git pull origin main',
    tags: ['saving'],
  },
  {
    term: 'Diff',
    short: 'The line-by-line difference between two versions of files.',
    long: 'A diff shows removed lines (usually red, prefixed with -) and added lines (green, prefixed with +). You read diffs to review your own changes before committing and to review other people’s pull requests.',
    example: 'git diff',
    tags: ['saving'],
  },
  {
    term: 'Pull request (PR)',
    short: 'A request on GitHub to merge one branch into another, open for review.',
    long: 'A PR bundles a branch’s commits, shows the diff, and gives people a place to comment and approve. It is a GitHub feature, not a Git command. Merging the PR applies the changes to the target branch.',
    tags: ['collaborating'],
  },
  {
    term: 'Merge',
    short: 'Combine the commits from one branch into another.',
    long: 'Merging brings a branch’s history into a target branch, typically main. If the same lines changed on both sides, Git cannot decide automatically and you get a conflict.',
    example: 'git merge fix-header',
    tags: ['collaborating'],
  },
  {
    term: 'Merge conflict',
    short: 'When two branches changed the same lines and Git needs a human to choose.',
    long: 'Git marks the conflicting region in the file with <<<<<<<, =======, and >>>>>>>. You edit the file to the version you want, remove the markers, then commit. Conflicts are normal, not a sign something broke.',
    tags: ['collaborating'],
  },
  {
    term: 'Issue',
    short: 'A GitHub ticket for a bug, task, or idea.',
    long: 'Issues are a to-do list attached to a repo. Each has a number, a discussion thread, and labels. PRs can reference issues so the fix and the report stay linked.',
    tags: ['collaborating'],
  },
  {
    term: 'Fork',
    short: 'Your own copy of someone else’s repo on GitHub.',
    long: 'Forking copies a repo into your GitHub account so you can change it freely. To offer changes back, you open a PR from your fork to the original. Forking happens on GitHub; cloning happens on your machine.',
    tags: ['collaborating'],
  },
  {
    term: 'GitHub Actions',
    short: 'Automation that runs scripts when something happens in the repo.',
    long: 'Actions are workflows defined in YAML files under .github/workflows. A common use is running tests on every push or PR. Actions can also deploy, but many hosts such as Vercel watch the repo themselves instead.',
    tags: ['shipping'],
  },
  {
    term: 'Deploy',
    short: 'Build the project and put the result on a server that serves it to the public.',
    long: 'Deploying takes your source code, runs the build step, and uploads the output to a host. GitHub stores code; a host like Vercel serves the built site. Deployment is the step that turns a repo into a live URL.',
    example: 'npm run build',
    tags: ['shipping'],
  },
  {
    term: 'Production',
    short: 'The live version real visitors use.',
    long: 'Production is the deployment tied to your real domain. Hosts usually also create preview deployments for each PR so you can check changes before they reach production.',
    tags: ['shipping'],
  },
  {
    term: 'Domain',
    short: 'The human-readable address of your site, like example.com.',
    long: 'You buy a domain from a registrar and point its DNS records at your host. The host then serves your production deployment at that address and issues an HTTPS certificate.',
    tags: ['shipping'],
  },
];

export type QuizQuestion = {
  prompt: string;
  choices: string[];
  answer: number;
  why: string;
};

export const QUIZ: QuizQuestion[] = [
  {
    prompt: 'Which one runs on your computer without any internet connection?',
    choices: ['GitHub', 'Git', 'A pull request', 'A domain'],
    answer: 1,
    why: 'Git is local software. GitHub, PRs, and domains all live online.',
  },
  {
    prompt: 'You pushed your code to GitHub. Is your website live now?',
    choices: ['Yes, pushing publishes it', 'Only if the branch is called main', 'No, a host still has to build and serve it', 'Yes, but only on weekdays'],
    answer: 2,
    why: 'GitHub stores code. A host such as Vercel has to deploy it before anyone can visit a URL.',
  },
  {
    prompt: 'What does a commit contain?',
    choices: ['A snapshot of changes plus a message', 'A copy of the whole internet', 'Only the file names', 'A request for review'],
    answer: 0,
    why: 'A commit records what changed, who, when, and why. Review requests are pull requests.',
  },
  {
    prompt: 'Which command uploads your local commits to the remote?',
    choices: ['git pull', 'git clone', 'git push', 'git diff'],
    answer: 2,
    why: 'Push sends commits up. Pull brings them down. Clone downloads a whole repo. Diff just shows differences.',
  },
  {
    prompt: 'Two people edited the same line on different branches. When merging, Git will...',
    choices: ['Pick the newest one silently', 'Delete both', 'Stop and report a merge conflict', 'Email your manager'],
    answer: 2,
    why: 'Git never guesses on overlapping edits. You resolve the conflict by hand, then commit.',
  },
  {
    prompt: 'Fork vs clone: which statement is true?',
    choices: ['Both happen on your laptop', 'Fork copies on GitHub; clone copies to your machine', 'Clone copies on GitHub; fork copies to your machine', 'They are the same word'],
    answer: 1,
    why: 'Forking makes a copy under your GitHub account. Cloning downloads a repo to your computer.',
  },
];
