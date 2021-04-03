import styled from '@emotion/styled';

const HEADER_HEIGHT = '64px';

export const Wrapper = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: ${HEADER_HEIGHT};
  padding: 16px;
  background-color: ${(props) => props.theme.color.base};
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${(props) => props.theme.color.base};
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 50%;
  cursor: pointer;
  aspect-ratio: 1/1;
`;

export const Content = styled.div`
  height: 1px;
  min-height: calc(100vh - ${HEADER_HEIGHT});
`;
