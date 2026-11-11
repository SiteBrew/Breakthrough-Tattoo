/*
 * Build-time server entry. See scripts/prerender.mjs.
 *
 * The site shipped <body><div id="root"></div></body>, so crawlers that do not
 * execute JavaScript saw an empty document, and the SEO audit could only
 * assess one page because there were no links in the HTML to follow.
 */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App.jsx';

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}
