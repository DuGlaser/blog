import React from 'react';
import rehypeToreact from 'rehype-react';
import breaks from 'remark-breaks';
import gfm from 'remark-gfm';
import toremark from 'remark-parse';
import remarkTorehype from 'remark-rehype';
import unified from 'unified';

export const parser = (mdText: string, components?: { [key: string]: any }) => {
  const result = unified()
    .use(toremark)
    .use(gfm)
    .use(breaks)
    .use(remarkTorehype)
    .use(rehypeToreact, {
      createElement: React.createElement,
      components,
    })
    .processSync(mdText).result as React.ReactElement;

  return result;
};
