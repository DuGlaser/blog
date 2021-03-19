import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.color.base};
  border-radius: 0.5rem;
  resize: none;

  color: ${(props) => props.theme.color.gray};
  padding: 2rem;

  div {
    background-color: ${(props) => props.theme.color.base};
  }
`;
