import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ShareButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color.white};
  & + & {
    margin-left: 1rem;
  }
`;
