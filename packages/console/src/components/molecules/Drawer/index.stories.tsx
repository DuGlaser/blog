import styled from '@emotion/styled';
import { Meta } from '@storybook/react/types-6-0';

import { Drawer } from './index';

const S = {
  Wrapper: styled.div`
    height: 800px;
  `,
};

export default {
  title: 'Molecules/Drawer',
  component: Drawer,
} as Meta;

const Template = () => (
  <S.Wrapper>
    <Drawer />
  </S.Wrapper>
);

export const Simple = Template.bind({});
