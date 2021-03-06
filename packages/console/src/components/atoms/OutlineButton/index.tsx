import styled from '@emotion/styled';
import { Property } from 'csstype';
import React from 'react';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type StyledProps = {
  textColor?: Property.Color;
  borderColor?: Property.Color;
  padding?: Property.Padding;
};

export type Props = ButtonProps & StyledProps;

const StyledButton = styled.button<StyledProps>(
  {
    border: 'none',
    borderRadius: '.4em',
    backgroundColor: 'transparent',
  },
  ({ textColor, borderColor, padding = '0.5em 2em' }) => ({
    padding,
    color: textColor,
    border: `2px solid ${borderColor}`,
  })
);

export const OutlineButton = React.forwardRef<HTMLButtonElement, Props>(
  function _FlatButton({ children, ...props }, ref) {
    return (
      <StyledButton {...props} ref={ref}>
        {children}
      </StyledButton>
    );
  }
);
