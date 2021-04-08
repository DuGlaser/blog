import { NextApiRequest, NextApiResponse } from 'next';
import { launchChromium } from 'playwright-aws-lambda';

import { config } from '../site.config';

const getLaunchOptions = () => {
  if (process.env.NODE_ENV !== 'production') {
    return {
      args: [],
      executablePath: '/usr/bin/google-chrome-stable',
      headless: true,
    };
  } else {
    return {
      headless: true,
    };
  }
};

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.query.title && typeof req.query.title === 'string') {
    const viewport = { width: 1200, height: 630 };
    const browser = await launchChromium(getLaunchOptions());
    const context = await browser.newContext({
      viewport,
    });
    const page = await context.newPage();
    await page.goto(`${config.site.url}/og?title=${req.query.title}`, {
      waitUntil: 'networkidle',
    });
    await page.setViewportSize({ ...viewport });
    const imageBuffer = await page.screenshot({
      type: 'png',
    });

    await browser.close();
    res.setHeader('Content-Type', 'image/png');
    res.setHeader(
      'Cache-Control',
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );
    res.send(imageBuffer);
  }
}
