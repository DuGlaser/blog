import styled from '@emotion/styled';

import { customScrollBar } from '@/utils/customScrollBar';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.base};
  color: ${(props) => props.theme.color.gray};
  padding: 2rem;

  overflow-y: auto;
  overflow-wrap: break-word;

  ${customScrollBar}

  h1, h2 {
    border-color: ${(props) => props.theme.color.gray};
  }

  pre {
    background-color: ${(props) => props.theme.color.bgColor};
  }

  blockquote {
    border-left-color: ${(props) => props.theme.color.gray};
  }
`;
