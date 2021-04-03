import styled from '@emotion/styled';

const StyledDiv = styled.div`
  display: inline-block;
  padding: 4px 16px;
  color: ${(props) => props.theme.color.white};
  font-size: 0.75em;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 4px;
`;

export const Tag: React.FC = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};
