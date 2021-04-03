import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Preview, Props } from './index';

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 80vh;
  `,
};

export default {
  title: 'Molecules/Preview',
  component: Preview,
} as Meta;

const Template: Story<Props> = ({ ...args }) => {
  return (
    <S.Wrapper>
      <Preview {...args} />
    </S.Wrapper>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  value: '# Simple',
};
