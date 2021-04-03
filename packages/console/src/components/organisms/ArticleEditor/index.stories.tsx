import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react/types-6-0';
import { useCallback, useState } from 'react';

import { ArticleEditor, Props } from './index';

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 80vh;
  `,
};

export default {
  title: 'Organisms/ArticleEditor',
  component: ArticleEditor,
} as Meta;

const Template: Story<Props> = ({ ...args }) => {
  return (
    <S.Wrapper>
      <ArticleEditor {...args} />
    </S.Wrapper>
  );
};

export const Secret = Template.bind({});
export const Public = Template.bind({});

Secret.args = {
  article: {
    public: false,
    title: 'Secret',
    body: '# Secret',
  },
};

Public.args = {
  article: {
    public: true,
    title: 'Public',
    body: '# Public',
  },
};
