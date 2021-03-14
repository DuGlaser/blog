import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  background-color: ${(props) => props.theme.color.bgColor};
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;

  height: 64px;
  padding: 16px;

  background-color: ${(props) => props.theme.color.base};
`;

export const Content = styled.div`
  display: flex;

  flex: 1;
`;
