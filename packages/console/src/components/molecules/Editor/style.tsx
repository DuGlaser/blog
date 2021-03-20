import styled from '@emotion/styled';

export const Textarea = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 2rem;
  background-color: ${(props) => props.theme.color.base};
  border: none;
  color: ${(props) => props.theme.color.gray};
  resize: none;
  outline: none;
`;
