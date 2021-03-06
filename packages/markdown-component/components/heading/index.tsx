import React from 'react';
import styled from '@emotion/styled';

const BaseHeading = `
  
`;

const StyledH1 = styled.h1``;

export const H1: React.FC = ({ ...props }) => {
  return <StyledH1 {...props}>{props.children}</StyledH1>;
};

const StyledH2 = styled.h2``;

export const H2: React.FC = ({ ...props }) => {
  return <StyledH2 {...props}>{props.children}</StyledH2>;
};

const StyledH3 = styled.h3``;

export const H3: React.FC = ({ ...props }) => {
  return <StyledH3 {...props}>{props.children}</StyledH3>;
};

const StyledH4 = styled.h4``;

export const H4: React.FC = ({ ...props }) => {
  return <StyledH4 {...props}>{props.children}</StyledH4>;
};

const StyledH5 = styled.h5``;

export const H5: React.FC = ({ ...props }) => {
  return <StyledH5 {...props}>{props.children}</StyledH5>;
};