import React from 'react';

import * as S from './style';

type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

type StyleProps = {
  value: string;
  onChange: (v: string) => void;
};

export type Props = TextareaProps & StyleProps;

export const Editor = React.forwardRef<HTMLTextAreaElement, Props>(
  function _Editor({ onChange, ...props }, ref) {
    return (
      <S.Textarea
        ref={ref}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        {...props}
      />
    );
  }
);
