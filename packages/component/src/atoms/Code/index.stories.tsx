import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { Code } from './index';

export default {
  title: 'atoms/Code',
  component: Code,
} as Meta;

export const Simple = () => {
  return <Code className="language-js">console.log("simple")</Code>;
};

export const SingleQuote = () => {
  return (
    <Code textColor={'#94a1b2'} bgColor={'#16161a'}>
      console.log("simple")
    </Code>
  );
};
