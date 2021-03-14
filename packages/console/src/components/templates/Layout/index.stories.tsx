import { Meta, Story } from '@storybook/react/types-6-0';
import { Layout, Props } from './index';

export default {
  title: 'Template/Layout',
  component: Layout,
} as Meta;

const Template: Story<Props> = ({ ...args }) => <Layout {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  logout: () => console.log('logout'),
  name: 'duglaser',
  avatarSrc:
    'https://avatars.githubusercontent.com/u/50506482?s=460&u=a60e432ada11bac6628803a0cf91114c5810d295&v=4',
};
