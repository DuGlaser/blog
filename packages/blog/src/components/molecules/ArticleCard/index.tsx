import { Article } from '@blog/core';

import { Tag } from '@/components/atoms';

import * as S from './style';

export type Props = { article: Article };

export const ArticleCard: React.VFC<Props> = ({ article }) => {
  return (
    <S.Wrapper>
      <S.CreatedAt dateTime={article.created_at as string}>
        {article.created_at}
      </S.CreatedAt>
      <S.Title>{article.title}</S.Title>
      <S.Description>{article.description}</S.Description>
      <S.TagWrapper>
        {article.tags.map((tag) => (
          <Tag key={`article-${tag}`}>{tag}</Tag>
        ))}
      </S.TagWrapper>
    </S.Wrapper>
  );
};
