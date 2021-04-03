import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
`;

export const Footer = styled.div`
  width: 100%;
  margin-top: auto;
  padding: 1rem 0;
  color: ${(props) => props.theme.color.gray};
  text-align: center;
`;
