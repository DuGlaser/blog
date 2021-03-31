import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react/types-6-0';

import { FlatButton, Props } from './index';

export default {
  title: 'Atoms/FlatButton',
  component: FlatButton,
} as Meta;

const Template: Story<Props> = ({ children, ref, ...args }) => (
  <FlatButton {...args}>{children}</FlatButton>
);

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Big = Template.bind({});

Small.args = {
  textColor: 'white',
  bgColor: 'hotpink',
  children: 'FlatButton',
  style: { fontSize: '12px' },
};

Medium.args = {
  textColor: 'white',
  bgColor: 'hotpink',
  children: 'FlatButton',
  style: { fontSize: '16px' },
};

Big.args = {
  textColor: 'white',
  bgColor: 'hotpink',
  children: 'FlatButton',
  style: { fontSize: '24px' },
};
