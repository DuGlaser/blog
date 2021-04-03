import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
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
  display: flex;
  flex: 1;
  width: 100%;
  overflow-y: auto;
`;

export const Border = styled.div`
  width: 3px;
  height: 100%;
  background-color: ${(props) => props.theme.color.base};
  opacity: 0.3;
`;

export const FloatingWindowWrapper = styled.div`
  position: absolute;
  right: 24px;
  bottom: 24px;
`;

export const FloatingWindowText = styled.div`
  padding: 0.5rem 2rem;
`;
