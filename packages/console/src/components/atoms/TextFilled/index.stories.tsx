import { Meta, Story } from '@storybook/react/types-6-0';

import { Props, TextFilled } from './index';

export default {
  title: 'Atoms/TextFilled',
  component: TextFilled,
} as Meta;

const Template: Story<Omit<Props, 'ref'>> = ({ ...args }) => (
  <TextFilled {...args} />
);

export const Simple = Template.bind({});

Simple.args = {
  fontSize: '24px',
  placeholder: 'hoge',
};
