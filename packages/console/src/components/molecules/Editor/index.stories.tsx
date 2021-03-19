import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ChangeEvent, useCallback, useState } from 'react';

import { Editor, Props } from './index';

const S = {
  Wrapper: styled.div`
    height: 80vh;
    width: 100%;
  `,
};

export default {
  title: 'Molecules/Editor',
  component: Editor,
} as Meta;

const Template: Story<Props> = () => {
  const [value, setValue] = useState('');

  const handleOnchange = useCallback((v) => {
    setValue(v);
  }, []);

  console.log({ value });

  return (
    <S.Wrapper>
      <Editor value={value} onChange={handleOnchange} />
    </S.Wrapper>
  );
};

export const Simple = Template.bind({});
