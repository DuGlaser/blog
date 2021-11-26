import express from 'express';
import fs from 'fs';
import path from 'path';
import * as playwright from 'playwright-aws-lambda';
import React from 'react';
import ReactDOM from 'react-dom/server';

const app = express();
app.disable('x-powered-by');

const styles = (font) => `
  @font-face {
    font-weight: bold;
    font-family: 'Dela Gothic One';
    src: url(data:font/ttf;charset=utf-8;base64,${font}) format('truetype');
  }

  html,
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 10%;
    font-family: 'Dela Gothic One', cursive;
    background-color: #16161a;
  }

  h1 {
    margin: 0 auto;
    color: #fffffe;
    font-size: 3.5rem;
    letter-spacing: 0.1rem;
  }
`;

const Content = (props) => {
  return (
    <html lang="ja">
      <head>
        <style dangerouslySetInnerHTML={{ __html: styles(props.font) }} />
      </head>
      <body>
        <h1>{props.title}</h1>
      </body>
    </html>
  );
};

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

const getFontFile = () => {
  const basePath = path.join(process.cwd(), 'public');
  const fontPath = path.join(basePath, 'DelaGothicOne-Regular.ttf');
  const font = fs.readFileSync(fontPath, { encoding: 'base64' });

  return font;
};

const renderOGImage = (title) => {
  const font = getFontFile();
  const element = React.createElement(Content, { title, font });
  const markup = ReactDOM.renderToStaticMarkup(element);
  return `<!doctype html>${markup}`;
};

app.get('/', async (req, res) => {
  const title = req.query.title;
  if (!title) {
    res.status(400).send('title is invalid');
    return;
  }

  const viewport = { width: 1200, height: 630 };

  const browser = await playwright.launchChromium(getLaunchOptions());
  const page = await browser.newPage({ viewport });

  const html = renderOGImage(req.query.title);
  await page.setContent(html, { waitUntil: 'domcontentloaded' });

  const image = await page.screenshot({ type: 'png' });
  await browser.close();

  res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate');
  res.setHeader('Content-Type', 'image/png');
  res.end(image);
});

app.listen('8080', () => {
  console.log('http://localhost:8080');
});
