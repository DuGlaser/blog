import React from 'react';

import * as S from './style';

export type Props = {
  value: string;
  onChange: (v: string) => void;
};

export const Editor: React.VFC<Props> = ({ value, onChange }) => {
  return (
    <S.Textarea
      value={value}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        onChange(e.target.value)
      }
    />
  );
};
