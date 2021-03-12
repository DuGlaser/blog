import styled from '@emotion/styled';
import React from 'react';
import { Property } from 'csstype';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type StyledProps = {
  textColor?: Property.Color;
  bgColor?: Property.BackgroundColor;
};

export type Props = ButtonProps & StyledProps;

const StyledButton = styled.button<StyledProps>(
  {
    padding: '.5em 1em',

    border: 'none',
    borderRadius: '.25em',
  },
  ({ textColor, bgColor }) => ({
    color: textColor,
    backgroundColor: bgColor,
  })
);

export const FlatButton = React.forwardRef<HTMLButtonElement, Props>(
  function _FlatButton({ children, ...props }, ref) {
    return (
      <StyledButton {...props} ref={ref}>
        {children}
      </StyledButton>
    );
  }
);
