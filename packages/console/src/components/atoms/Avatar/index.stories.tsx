import styled from '@emotion/styled';
import { Meta } from '@storybook/react/types-6-0';

import { Avatar } from './index';

const S = {
  Wrapper: styled.div`
    width: 100px;
    height: 100px;
  `,
};

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as Meta;

export const Button: React.VFC = () => {
  return (
    <S.Wrapper>
      <Avatar src="https://avatars.githubusercontent.com/u/50506482?s=460&u=a60e432ada11bac6628803a0cf91114c5810d295&v=4" />
    </S.Wrapper>
  );
};
