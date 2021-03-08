import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { H1, H2, H3, H4 } from './index';

export default {
  title: 'markdown-component/Heading',
} as Meta;

export const Heading = () => {
  return (
    <div>
      <H1>Heading</H1>
      <H2>Heading</H2>
      <H3>Heading</H3>
      <H4>Heading</H4>
    </div>
  );
};
