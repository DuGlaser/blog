import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleCard, Props } from './index';

export default {
  title: 'molecules/ArticleCard',
  component: ArticleCard,
} as Meta;

const Wrapper = styled.div`
  width: 400px;
`;

const Template: Story<Props> = ({ ...args }) => {
  return (
    <Wrapper>
      <ArticleCard {...args} />
    </Wrapper>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  article: {
    id: '',
    public: true,
    title: 'Simple',
    body: '',
    tags: ['CLI', 'Go'],
    updated_at: 0,
    created_at: Date.now(),
  },
};
