import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.color.base};
`;

export const Header = styled.div`
  color: ${(props) => props.theme.color.gray};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Title = styled.span`
  flex: 1;
  color: ${(props) => props.theme.color.white};
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 0.15rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;

  :hover {
    background-color: lightgrey;
    opacity: 0.5;
    transition: background-color 0.3s;
  }
`;

export const MetaWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const OutlineLabel = styled.div<{ isPublic: boolean }>`
  display: inline-block;
  padding: 2px 4px;
  color: ${(props) =>
    props.isPublic ? props.theme.color.primary : props.theme.color.gray};
  font-size: 1rem;
  border: 1px solid
    ${(props) =>
      props.isPublic ? props.theme.color.primary : props.theme.color.gray};
  border-radius: 4px;
`;
