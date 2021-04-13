import styled from '@emotion/styled';

import { customScrollBar } from '@/utils/customScrollBar';

const markdownStyle = styled.div`
  color: #eaeaea;
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

  pre {
    background-color: transparent;
  }
`;

export const Wrapper = styled(markdownStyle)`
  width: 100%;
  height: 100%;
  padding: 2rem;
  overflow-y: auto;
  color: ${(props) => props.theme.color.gray};
  overflow-wrap: break-word;
  background-color: ${(props) => props.theme.color.base};

  ${customScrollBar}
`;
