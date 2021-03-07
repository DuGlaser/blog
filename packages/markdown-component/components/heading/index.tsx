import React from 'react';
import styled from '@emotion/styled';

const BaseHeading = `
  margin: 0;
  padding: 0;

  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StyledH1 = styled.h1`
  ${BaseHeading}
  font-size: 2rem;
  line-height: 2.5rem;
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

export const H1: React.FC = ({ ...props }) => {
  return <StyledH1 {...props}>{props.children}</StyledH1>;
};

const StyledH2 = styled.h2`
  ${BaseHeading}
  font-size: 1.5rem;
  line-height: 2rem;
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

export const H2: React.FC = ({ ...props }) => {
  return <StyledH2 {...props}>{props.children}</StyledH2>;
};

const StyledH3 = styled.h3`
  ${BaseHeading}
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

export const H3: React.FC = ({ ...props }) => {
  return <StyledH3 {...props}>{props.children}</StyledH3>;
};

const StyledH4 = styled.h4`
  ${BaseHeading}
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const H4: React.FC = ({ ...props }) => {
  return <StyledH4 {...props}>{props.children}</StyledH4>;
};
