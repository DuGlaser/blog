import styled from '@emotion/styled';
import { markdownStyleMixin } from '@blog/util';

const markdownStyle = styled.div`
  ${(props) =>
    markdownStyleMixin({
      textColor: props.theme.color.lightGrey,
      primaryColor: props.theme.color.primary,
    })}
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  color: ${(props) => props.theme.color.lightGrey};
  font-size: 2rem;
  text-align: center;
`;

export const MetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color.gray};
`;

export const Time = styled.time`
  text-align: center;
`;

export const Content = styled(markdownStyle)`
  margin-top: 32px;
  padding: 1.5rem 1.5rem;
  background-color: ${(props) => props.theme.color.base};
  border-radius: 8px;

  & div :first-child {
    margin-top: 0;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: -1em;
  font-weight: bold;
  font-size: 1.3rem;

  & :nth-of-type(n) {
    margin-bottom: 1em;
  }
  & :not(:last-of-type) {
    margin-right: 1em;
  }
`;

export const ShareWrapper = styled.div`
  margin-top: 2rem;
`;
