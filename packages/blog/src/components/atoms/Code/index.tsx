import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
  className: string;
};

const _Code: React.FC<Props> = ({ className, children }) => {
  const language = className.replace('language-', '');
  const content = children?.toString().trim();
  return (
    <div>
      <SyntaxHighlighter
        showLineNumbers={true}
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
