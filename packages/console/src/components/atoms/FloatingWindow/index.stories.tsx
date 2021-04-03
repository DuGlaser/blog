import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react/types-6-0';

import { FloatingWindow, Props } from './index';

const S = {
  List: styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
  `,

  Item: styled.li`
    padding: 1em 2em;
    font-size: 1rem;

    :hover {
      background-color: lightblue;
      transition: background-color 0.3s;
    }
  `,
};

export default {
  title: 'Atoms/FloatingWindow',
  component: FloatingWindow,
} as Meta;

const Template: Story<Props> = ({ ...args }) => (
  <FloatingWindow {...args}>
    <S.List>
      <S.Item>Item1</S.Item>
      <S.Item>Item2</S.Item>
      <S.Item>Item3</S.Item>
    </S.List>
  </FloatingWindow>
);

export const Simple = Template.bind({});

Simple.args = {
  bgColor: 'white',
};
