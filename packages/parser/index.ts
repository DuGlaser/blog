import React from 'react';
import rehypeToreact from 'rehype-react';
import { remark } from 'remark';
import breaks from 'remark-breaks';
import gfm from 'remark-gfm';
import toremark from 'remark-parse';
import remarkTorehype from 'remark-rehype';
import strip from 'strip-markdown';
import { unified } from 'unified';

import { imageSize } from './src/imageSize';

export const parser = (mdText: string, components?: { [key: string]: any }) => {
  const element = unified()
    .use(toremark)
    .use(gfm)
    .use(breaks)
    .use(imageSize)
    .use(remarkTorehype)
    .use(rehypeToreact, {
      createElement: React.createElement,
      components,
    })
    .processSync(mdText).result as React.ReactElement;

  const plainText = remark().use(strip).processSync(mdText).toString();

  return { element, plainText };
};
