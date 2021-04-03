import { Meta } from '@storybook/react/types-6-0';

import { Tag } from './index';

export default {
  title: 'atoms/Tag',
  component: Tag,
} as Meta;

export const Simple = () => {
  return <Tag>tag</Tag>;
};
