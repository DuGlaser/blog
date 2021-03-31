import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ArticleCard, Props } from './index';

const S = {
  Wrapper: styled.div`
    width: 500px;
  `,
};

export default {
  title: 'Molecules/ArticleCard',
  component: ArticleCard,
} as Meta;

const Template: Story<Props> = ({ ...args }) => (
  <S.Wrapper>
    <ArticleCard {...args} />
  </S.Wrapper>
);

export const Simple = Template.bind({});

Simple.args = {
  article: {
    id: 'id',
    title: 'title',
    body: 'body',
    public: true,
  },
};
