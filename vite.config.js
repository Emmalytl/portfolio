import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This config tells Vite how to build the project.
// The "base" setting controls where the app expects its files to live.
//
// - Deploying to VERCEL (or Netlify, or your own domain)? Use '/' —
//   these platforms serve your site from the root of the domain.
// - Deploying to GITHUB PAGES instead? Change this to '/your-repo-name/'
//   (matching your exact repo name), because GitHub Pages serves sites
//   from a sub-path like https://yourusername.github.io/your-repo-name/
export default defineConfig({
  plugins: [react()],
  base: '/',
})
