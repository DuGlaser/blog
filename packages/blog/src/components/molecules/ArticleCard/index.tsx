import { Tag } from '@/components/atoms';
import { formatDate } from '@/utils/formatDate';
import { Article } from '@blog/core';
import { useMemo } from 'react';
import * as S from './style';

export type Props = { article: Article };

export const ArticleCard: React.VFC<Props> = ({ article }) => {
  const formattedDate = useMemo(() => {
    const d = new Date(article.created_at);
    return formatDate(d);
  }, [article.created_at]);

  return (
    <S.Wrapper>
      <S.CreatedAt dateTime={formattedDate}>{formattedDate}</S.CreatedAt>
      <S.Title>{article.title}</S.Title>
      <S.TagWrapper>
        {article.tags.map((tag) => (
          <Tag key={`article-${tag}`}>{tag}</Tag>
        ))}
      </S.TagWrapper>
    </S.Wrapper>
  );
};
