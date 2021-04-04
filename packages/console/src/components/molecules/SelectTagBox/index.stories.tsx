import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react/types-6-0';
import { useCallback, useState } from 'react';

import { SelectTagBox } from './index';

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 80vh;
  `,
};

export default {
  title: 'Molecules/SelectTagBox',
  component: SelectTagBox,
} as Meta;

const Template: Story = () => {
  const [value, setValue] = useState([]);

  const handleOnchange = useCallback((v) => {
    setValue(v);
  }, []);

  return (
    <S.Wrapper>
      <SelectTagBox value={value} handleChangeValue={handleOnchange} />
    </S.Wrapper>
  );
};

export const Simple = Template.bind({});
