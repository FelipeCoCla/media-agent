import { chromium } from 'playwright-core';
import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHROME_PATHS = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser'
];

function findChrome() {
  for (const p of CHROME_PATHS) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

// Simple static file server for clean ES module loading
function startStaticServer(baseDir) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqPath = decodeURI(req.url.split('?')[0]);
      if (reqPath === '/') reqPath = '/src/slides.html';
      
      const filePath = path.join(baseDir, reqPath);

      if (!fs.existsSync(filePath)) {
        res.statusCode = 404;
        res.end('Not Found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.mjs': 'text/javascript',
        '.css': 'text/css',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.svg': 'image/svg+xml',
        '.pdf': 'application/pdf',
      };

      res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
      res.setHeader('Access-Control-Allow-Origin', '*');
      fs.createReadStream(filePath).pipe(res);
    });

    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port;
      resolve({ server, port });
    });
  });
}

async function renderCarousel() {
  const chromePath = findChrome();
  if (!chromePath) {
    throw new Error('Google Chrome not found on system.');
  }

  const outputDir = path.resolve(__dirname, 'dist');
  const slidesOutputDir = path.resolve(outputDir, 'slides');
  fs.mkdirSync(slidesOutputDir, { recursive: true });

  const { server, port } = await startStaticServer(__dirname);
  const targetUrl = `http://127.0.0.1:${port}/src/slides.html`;

  console.log(`Starting local server at: http://127.0.0.1:${port}`);
  console.log(`Launching Chrome from: ${chromePath}`);

  const browser = await chromium.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
  });

  const context = await browser.newContext({
    viewport: { width: 1080, height: 1350 },
    deviceScaleFactor: 2, // 2x Retina Crispness
  });

  const page = await context.newPage();

  console.log(`Loading slides from: ${targetUrl}`);
  await page.goto(targetUrl, { waitUntil: 'networkidle' });

  // Wait for dynamic slide rendering to complete
  await page.waitForFunction(() => window.__CAROUSEL_READY__ === true);
  await page.waitForSelector('.slide');
  await page.waitForTimeout(500); // Allow fonts & images to settle

  const slides = await page.$$('.slide');
  console.log(`Found ${slides.length} slides. Capturing high-res PNGs...`);

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const slideNumber = String(i + 1).padStart(2, '0');
    const outputPath = path.join(slidesOutputDir, `${slideNumber}.png`);

    await slide.screenshot({
      path: outputPath,
      type: 'png',
    });

    console.log(`  ✓ Exported: dist/slides/${slideNumber}.png (1080x1350)`);
  }

  console.log('Generating combined PDF...');
  const pdfPath = path.join(outputDir, 'carousel.pdf');
  
  await page.pdf({
    path: pdfPath,
    width: '1080px',
    height: '1350px',
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
    pageRanges: `1-${slides.length}`,
  });

  console.log(`  ✓ Exported: dist/carousel.pdf`);

  await browser.close();
  server.close();

  console.log(`\n🎉 Carousel Render Complete! Files located in: ${outputDir}\n`);
}

renderCarousel().catch((err) => {
  console.error('Render failed:', err);
  process.exit(1);
});
