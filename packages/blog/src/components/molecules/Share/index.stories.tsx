import { Meta } from '@storybook/react/types-6-0';

import { Share } from './index';

export default {
  title: 'molecules/Share',
  component: Share,
} as Meta;

export const Simple = () => {
  return <Share title="simple" />;
};
