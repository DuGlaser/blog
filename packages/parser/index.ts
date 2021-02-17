import React from 'react';
import unified from 'unified';
import toremark from 'remark-parse';
import remarkTorehype from 'remark-rehype';
import rehypeToreact, { ComponentOptions } from 'rehype-react';

export const parser = (
  mdText: string,
  components?: ComponentOptions<any>['components']
) => {
  const result = unified()
    .use(toremark)
    .use(remarkTorehype)
    .use(rehypeToreact, {
      createElement: React.createElement,
      components,
    })
    .processSync(mdText).result as React.ReactElement;

  return result;
};
