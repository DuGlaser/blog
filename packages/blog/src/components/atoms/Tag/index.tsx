import styled from '@emotion/styled';

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 4px;
  color: ${(props) => props.theme.color.white};
  display: inline-block;
  font-size: 0.75em;
  padding: 4px 16px;
`;

export const Tag: React.FC = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};
