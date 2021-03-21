import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react/types-6-0';

import { OutlineButton, Props } from './index';

export default {
  title: 'Atoms/OutlineButton',
  component: OutlineButton,
} as Meta;

const Template: Story<Props> = ({ children, ref, ...args }) => (
  <OutlineButton {...args}>{children}</OutlineButton>
);

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Big = Template.bind({});

Small.args = {
  textColor: 'hotpink',
  borderColor: 'hotpink',
  children: 'OutlineButton',
  style: { fontSize: '12px' },
};

Medium.args = {
  textColor: 'hotpink',
  borderColor: 'hotpink',
  children: 'OutlineButton',
  style: { fontSize: '16px' },
};

Big.args = {
  textColor: 'hotpink',
  borderColor: 'hotpink',
  children: 'OutlineButton',
  style: { fontSize: '24px' },
};
