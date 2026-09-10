import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This config tells Vite how to build the project.
// The "base" setting is IMPORTANT for GitHub Pages:
// GitHub Pages serves your site from a sub-path like
// https://yourusername.github.io/your-repo-name/
// so we need to tell the app that its files live inside "/your-repo-name/"
// instead of at the root "/". Change "your-repo-name" below to match
// the exact name of the GitHub repo you create.
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
