import styled from '@emotion/styled';
import { Property } from 'csstype';
import React from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type StyledProps = {
  textColor?: Property.Color;
  fontSize?: Property.FontSize;
};

export type Props = InputProps & StyledProps;

const StyledInput = styled.input<StyledProps>(
  {
    border: 'none',
    outline: 'none',
    background: 'transparent',
    width: '100%',
  },
  ({ textColor, fontSize }) => ({
    fontSize,
    color: textColor,
  })
);

export const TextFilled = React.forwardRef<HTMLInputElement, Props>(
  function _FlatButton({ children, ...props }, ref) {
    return <StyledInput {...props} ref={ref} />;
  }
);
