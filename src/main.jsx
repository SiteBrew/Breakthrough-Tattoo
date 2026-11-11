import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

const el = document.getElementById('root')

/* Every route is prerendered to real HTML, so hydrate over that markup
   instead of discarding it. createRoot is the fallback for `vite dev`. */
if (el.hasChildNodes()) hydrateRoot(el, tree)
else createRoot(el).render(tree)
