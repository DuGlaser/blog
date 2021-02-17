import unified from 'unified';
import parse from 'remark-parse';
import remarkReact from 'remark-react';

export const parser = (mdText: string): string => {
  const result: string = unified()
    .use(parse)
    .use(remarkReact, {
      remarkreactComponents: {
        /** TODO: Add the custom component **/
      },
    })
    .processSync(mdText).result as string;

  return result;
};
