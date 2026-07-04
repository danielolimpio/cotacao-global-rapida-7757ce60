import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { setupPwaInstall } from './lib/pwaInstall'

const container = document.getElementById("root")!;

// If the container already has prerendered markup (SSG build), hydrate it.
// Otherwise fall back to a normal client-side render (dev mode).
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}

setupPwaInstall();


