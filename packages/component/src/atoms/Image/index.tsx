import styled from '@emotion/styled';
import React from 'react';

type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const StyledImage = styled.img`
  width: 100%;
  max-width: ${(props) => props.width}px;
  height: auto;
  aspect-ratio: ${(props) => props.width} / ${(props) => props.height};
`;

export const Image: React.VFC<ImageProps> = ({ ...props }) => {
  return <StyledImage loading={'lazy'} {...props} />;
};
