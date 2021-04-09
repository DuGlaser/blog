import styled from '@emotion/styled';

const markdownStyle = styled.div`
  color: ${(props) => props.theme.color.lightGrey};
  letter-spacing: 0.05em;

  h1,
  h2,
  h3,
  h4 {
    margin-top: 2.3em;
    margin-bottom: 0.5em;
    padding-bottom: 0.4em;
  }

  h1 {
    font-size: 1.7rem;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  h2 {
    font-size: 1.5rem;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  a {
    color: ${(props) => props.theme.color.primary};
    text-decoration: none;
    word-break: break-all;

    :hover {
      text-decoration: underline;
    }
  }

  p {
    margin-top: 1em;
    font-size: 1rem;
    line-height: 2em;
  }

  li {
    margin: 0.5em 0;
  }

  ul,
  ol {
    margin: 1.4rem 0;
  }
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
