import { Code as _Code, Image } from '@blog/component';
import { Article } from '@blog/core';
import { parser } from '@blog/parser';
import { useTheme } from '@emotion/react';
import { useMemo } from 'react';

import { Tag } from '@/components/atoms';
import { formatDate } from '@/utils/formatDate';

import { Share } from '../Share';
import * as S from './style';

export type Props = { article: Article };

export const ArticleContent: React.VFC<Props> = ({ article }) => {
  const theme = useTheme();

  const createdAt = useMemo(
    () => formatDate(new Date(article.created_at)),
    [article.created_at]
  );
  const updatedAt = useMemo(
    () => formatDate(new Date(article.created_at)),
    [article.created_at]
  );

  const { element } = parser(article.body, {
    code: function Code({ children, ...props }: any) {
      return (
        <_Code
          textColor={theme.color.gray}
          bgColor={theme.color.bgColor}
          {...props}
        >
          {children}
        </_Code>
      );
    },
    img: Image,
  });

  return (
    <>
      <S.Title>{article.title}</S.Title>
      <S.MetaWrapper>
        {createdAt === updatedAt ? (
          <S.Time dateTime={createdAt}>投稿日 {createdAt}</S.Time>
        ) : (
          <S.Time dateTime={updatedAt}>更新日 {updatedAt}</S.Time>
        )}
      </S.MetaWrapper>
      <S.TagWrapper>
        {article.tags.map((tag) => (
          <Tag key={`article-${tag}`}>{tag}</Tag>
        ))}
      </S.TagWrapper>
      <S.Content>
        {element}
        <S.ShareWrapper>
          <Share title={article.title} />
        </S.ShareWrapper>
      </S.Content>
    </>
  );
};
