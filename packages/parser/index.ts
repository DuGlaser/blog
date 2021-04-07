import React from 'react';
import rehypeToreact from 'rehype-react';
import remark from 'remark';
import breaks from 'remark-breaks';
import gfm from 'remark-gfm';
import toremark from 'remark-parse';
import remarkTorehype from 'remark-rehype';
import strip from 'strip-markdown';
import unified from 'unified';

export const parser = (mdText: string, components?: { [key: string]: any }) => {
  const element = unified()
    .use(toremark)
    .use(gfm)
    .use(breaks)
    .use(remarkTorehype)
    .use(rehypeToreact, {
      createElement: React.createElement,
      components,
    })
    .processSync(mdText).result as React.ReactElement;

  const plainText = remark().use(strip).processSync(mdText).contents.toString();

  return { element, plainText };
};
