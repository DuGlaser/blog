import styled from '@emotion/styled';

import { customScrollBar } from '@/utils/customScrollBar';
import { markdownStyleMixin } from '@blog/util';

const markdownStyle = styled.div`
  ${(props) =>
    markdownStyleMixin({
      textColor: '#eaeaea',
      primaryColor: props.theme.color.primary,
    })}
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
