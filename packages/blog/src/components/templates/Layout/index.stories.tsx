import { Meta } from '@storybook/react/types-6-0';

import { Layout } from './index';

export default {
  title: 'templates/Layout',
  component: Layout,
} as Meta;

export const Simple = () => {
  return <Layout />;
};
