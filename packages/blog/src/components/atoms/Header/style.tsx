import styled from '@emotion/styled';

export const Wrapper = styled.header`
  padding: 2rem 1.5rem;
  cursor: pointer;
`;

export const WrapperAnchor = styled.a`
  text-decoration: none;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.white};
  font-weight: bold;

  font-size: 2rem;
  line-height: 2rem;
`;
