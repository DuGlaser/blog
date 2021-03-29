import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 2rem;
`;

export const ButtonWrapper = styled.div`
  & :first-of-type {
    margin-right: 1rem;
  }
`;

export const TitleWrapper = styled.div`
  flex: 1;
  margin: 0 2rem 0 0;
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;

  overflow-y: auto;
`;

export const Border = styled.div`
  height: 100%;
  width: 3px;
  background-color: ${(props) => props.theme.color.base};
  opacity: 0.3;
`;

export const FloatingWindowWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
`;

export const FloatingWindowText = styled.div`
  padding: 0.5rem 2rem;
`;
