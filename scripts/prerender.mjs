import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

async function run() {
  console.log('[prerender] Starting SSR prerendering...');

  const indexPath = fs.existsSync(path.resolve(root, 'dist/index.html'))
    ? path.resolve(root, 'dist/index.html')
    : path.resolve(root, 'dist/client/index.html');

  if (!fs.existsSync(indexPath)) {
    throw new Error(`[prerender] Target index.html not found at: ${indexPath}`);
  }

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base: '/chapter06/',
  });

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const appHtml = render();

    let template = fs.readFileSync(indexPath, 'utf-8');

    if (!template.includes('<div id="root">')) {
      throw new Error('[prerender] <div id="root"> not found in template');
    }

    if (!template.includes('<noscript')) {
      throw new Error('[prerender] <noscript> not found in template');
    }

    // Insert appHtml right after <div id="root">, before <noscript>
    template = template.replace('<div id="root">', `<div id="root">${appHtml}`);

    fs.writeFileSync(indexPath, template, 'utf-8');
    console.log(`[prerender] Successfully prerendered ${appHtml.length} bytes into ${indexPath}`);
  } finally {
    await vite.close();
  }
}

run().catch((err) => {
  console.error('[prerender] Failed to prerender:', err);
  process.exit(1);
});
