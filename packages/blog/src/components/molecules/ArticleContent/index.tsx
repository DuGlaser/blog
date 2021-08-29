import { Code as _Code, Image } from '@blog/component';
import { Article } from '@blog/core';
import { parser } from '@blog/parser';
import { useTheme } from '@emotion/react';

import { Tag } from '@/components/atoms';

import { Share } from '../Share';
import * as S from './style';

export type Props = { article: Article };

export const ArticleContent: React.VFC<Props> = ({ article }) => {
  const theme = useTheme();

  const { element } = parser(article.body, {
    code: function Code({ children, ...props }: any) {
      return (
        <_Code textColor={'#ff6d6d'} bgColor={theme.color.bgColor} {...props}>
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
        {article.created_at === article.updated_at ? (
          <S.Time dateTime={article.created_at as string}>
            投稿日 {article.created_at}
          </S.Time>
        ) : (
          <S.Time dateTime={article.updated_at as string}>
            更新日 {article.updated_at}
          </S.Time>
        )}
      </S.MetaWrapper>
      <S.TagWrapper>
        {article.tags?.map((tag) => (
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
