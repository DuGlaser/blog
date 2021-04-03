import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 20px 18px 24px;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.color.base};
  border-radius: 4px;
  cursor: pointer;
  @media (min-width: 800px) {
    border-radius: 8px;
  }
`;

export const CreatedAt = styled.time`
  display: inline-block;
  margin-bottom: 8px;
  color: ${(props) => props.theme.color.white};
  font-size: 1.125em;
`;

export const Title = styled.h2`
  margin-bottom: 18px;
  color: ${(props) => props.theme.color.white};
  font-size: 1.5em;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -1em;
  margin-bottom: -1em;
  font-weight: bold;
  font-size: 1.2rem;

  & :nth-of-type(n) {
    margin-bottom: 1em;
  }
  & :not(:last-of-type) {
    margin-right: 1em;
  }
`;
