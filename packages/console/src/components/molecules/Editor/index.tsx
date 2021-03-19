import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/vim';
import 'codemirror/theme/monokai.css';
import React from 'react';
import * as S from './style';

export type Props = {
  value: string;
  onChange: (v: string) => void;
};

export const Editor: React.VFC<Props> = ({ value, onChange }) => {
  return (
    <S.Wrapper>
      <CodeMirror
        value={value}
        onChange={(instance) => {
          onChange(instance.getValue());
        }}
        options={{
          theme: 'monokai',
          keyMap: 'vim',
          mode: 'markdown',
          lineNumbers: false,
        }}
      />
    </S.Wrapper>
  );
};
