import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { H1 } from './index';

export default {
  title: 'markdown-component/Heading',
} as Meta;

export const Heading = () => {
  return (
    <div>
      <H1>Heading</H1>
    </div>
  );
};
