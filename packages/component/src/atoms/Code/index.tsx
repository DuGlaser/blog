import styled from '@emotion/styled';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
  className?: string;
  textColor?: string;
  bgColor?: string;
};

const StyledCode = styled.code<Omit<Props, 'className'>>`
  padding: 0.2em 0.4em;
  color: ${(props) => props.textColor};
  font-size: 0.9rem;
  background-color: ${(props) => props.bgColor};
`;

const _Code: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
  textColor,
  bgColor,
}) => {
  if (!className) {
    return (
      <StyledCode textColor={textColor} bgColor={bgColor}>
        {children}
      </StyledCode>
    );
  }

  const language = className.replace('language-', '');
  const content = children?.toString().trim();

  return (
    <div>
      <SyntaxHighlighter wrapLines={true} language={language} style={nord}>
        {content}
      </SyntaxHighlighter>
    </div>
  );
};

export const Code: React.FC<React.PropsWithChildren<Props>> = React.memo<React.PropsWithChildren<Props>>(_Code);
