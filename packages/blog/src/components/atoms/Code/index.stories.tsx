import { Meta } from '@storybook/react/types-6-0';

import { Code } from './index';

export default {
  title: 'atoms/Code',
  component: Code,
} as Meta;

export const Simple = () => {
  return <Code className="language-js">console.log("simple")</Code>;
};
