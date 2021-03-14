import styled from '@emotion/styled';
import { Property } from 'csstype';

export type Props = {
  bgColor?: Property.BackgroundColor;
  textColor?: Property.Color;
  borderRadius?: Property.BorderRadius;
};

const StyledDiv = styled.div<Props>(
  {
    display: 'inline-block',

    boxShadow: `
    0 1px 1.4px rgba(0, 0, 0, 0.028),
    0 2.3px 3.4px rgba(0, 0, 0, 0.04),
    0 4.4px 6.4px rgba(0, 0, 0, 0.05),
    0 7.8px 11.4px rgba(0, 0, 0, 0.06),
    0 14.6px 21.3px rgba(0, 0, 0, 0.072),
    0 35px 51px rgba(0, 0, 0, 0.1)
    `,
  },
  ({ bgColor = 'white', textColor = 'black', borderRadius = '0.5em' }) => ({
    color: textColor,
    backgroundColor: bgColor,
    borderRadius,
  })
);

export const FloatingWindow: React.FC<Props> = ({ children, ...props }) => {
  return <StyledDiv {...props}>{children}</StyledDiv>;
};
