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
  justify-content: center;
  align-items: center;

  height: 100%;
  aspect-ratio: 1/1;

  font-size: 1.2rem;
  color: ${(props) => props.theme.color.base};

  border-radius: 50%;
  background-color: ${(props) => props.theme.color.white};

  cursor: pointer;
`;

export const Content = styled.div`
  min-height: calc(100vh - ${HEADER_HEIGHT});
  height: 1px;
`;
