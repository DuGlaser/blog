import { Meta } from '@storybook/react/types-6-0';

import { Header } from './index';

export default {
  title: 'molecules/Header',
  component: Header,
} as Meta;

export const Simple = () => {
  return <Header />;
};
