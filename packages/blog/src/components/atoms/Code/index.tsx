import styled from '@emotion/styled';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
  className: string;
};

const StyledCode = styled.code`
  padding: 0.2em 0.4em;
  color: ${(props) => props.theme.color.gray};
  font-size: 0.9rem;
  background-color: ${(props) => props.theme.color.bgColor};
`;

const _Code: React.FC<Props> = ({ className, children }) => {
  if (!className) {
    return <StyledCode>{children}</StyledCode>;
  }

  const language = className.replace('language-', '');
  const content = children?.toString().trim();

  return (
    <div>
      <SyntaxHighlighter
        showLineNumbers={!!className}
        wrapLines={true}
        language={language}
        style={nord}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
};

export const Code: React.FC<Props> = React.memo<Props>(_Code);
