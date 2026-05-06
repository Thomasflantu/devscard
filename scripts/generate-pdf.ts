import { exec } from 'node:child_process';
import * as path from 'node:path';
import * as puppeteer from 'puppeteer';
import { pdfPage } from 'puppeteer-report';

const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const pdfTargets = [
  { url: 'http://localhost:3000/pdf', path: path.join(__dirname, '..', 'public', 'cv-nl.pdf') },
  { url: 'http://localhost:3000/en/pdf', path: path.join(__dirname, '..', 'public', 'cv-en.pdf') },
] as const;

const goTo = async (page: puppeteer.Page, url: string) => {
  await page.goto(url, { waitUntil: 'networkidle0' });
};

type GoToReturn = ReturnType<typeof goTo>;

interface RetryOptions {
  promise: () => GoToReturn;
  retries: number;
  retryTime: number;
}

const retry = async ({ promise, retries, retryTime }: RetryOptions): GoToReturn => {
  try {
    return await promise();
  } catch (error) {
    if (retries <= 0) throw error;

    await waitFor(retryTime);

    return await retry({ promise, retries: retries - 1, retryTime });
  }
};

const main = async () => {
  const child = exec('npm run dev');

  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  await page.setViewport({ width: 794, height: 1122, deviceScaleFactor: 2 });

  for (const target of pdfTargets) {
    await retry({
      promise: () => goTo(page, target.url),
      retries: 5,
      retryTime: 1000,
    });

    await pdfPage(page as never, {
      path: target.path,
      format: 'A4',
      printBackground: true,
      margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
    });
  }

  await browser.close();

  child.kill();
};

main();
