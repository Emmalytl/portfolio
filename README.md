# Your Portfolio Site

A simple React portfolio site. This README walks you through
everything step by step — no prior deployment experience needed.

## 1. Edit your content

Open `src/App.jsx`. Near the top, edit:
- `YOUR_NAME`, `YOUR_TAGLINE`, `ABOUT_ME`
- `SKILLS` (a list — add/remove items freely)
- `PROJECTS` (a list of project objects — copy/paste the `{ ... }`
  blocks to add more, or delete one to remove a project)
- `CONTACT` (your email, GitHub, LinkedIn)

You don't need to touch any other file to update your content.

## 2. Run it locally (to preview before publishing)

You'll need [Node.js](https://nodejs.org) installed (any recent
version, e.g. 18+). Then, in a terminal, inside this folder:

```
npm install
npm run dev
```

This prints a local URL (usually `http://localhost:5173`) — open
it in your browser to see your site live. Every time you save a
file, the page auto-refreshes.

## 3. Put it on GitHub

1. Go to github.com and create a **new repository** (e.g. `portfolio`).
   Don't initialize it with a README (you already have one).
2. In `vite.config.js`, change:
   ```
   base: '/your-repo-name/'
   ```
   to match the exact name of the repo you just created, e.g.
   `base: '/portfolio/'`
3. In this folder, run:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

## 4. Publish it live with GitHub Pages

Run:
```
npm run deploy
```

This builds your site and pushes it to a special `gh-pages` branch
that GitHub uses to host it for free.

Then on GitHub: go to your repo → **Settings** → **Pages** (left
sidebar) → under "Branch", select `gh-pages` → Save.

After a minute or two, your site will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## 5. Updating later

Whenever you want to change something:
1. Edit `src/App.jsx`
2. Run `npm run deploy` again

That's it — no need to repeat the GitHub Pages settings step.
