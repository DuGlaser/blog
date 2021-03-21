import styled from '@emotion/styled';

const HEADER_HEIGHT = '64px';

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

  height: ${HEADER_HEIGHT};
  padding: 16px;

  background-color: ${(props) => props.theme.color.base};
`;

export const Content = styled.div`
  height: calc(100vh - ${HEADER_HEIGHT});
`;
