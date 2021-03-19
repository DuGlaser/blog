import styled from '@emotion/styled';

export const Textarea = styled.textarea`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.color.base};
  border-radius: 0.5rem;
  border: none;
  resize: none;

  color: ${(props) => props.theme.color.gray};
  padding: 2rem;
`;
