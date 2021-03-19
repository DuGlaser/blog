import { Meta, Story } from '@storybook/react/types-6-0';

import { Layout } from './index';

export default {
  title: 'Template/Layout',
  component: Layout,
} as Meta;

const Template = () => <Layout />;

export const Simple = Template.bind({});
