import { useTheme } from '@emotion/react';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

import { Article } from '@/types/article';

import * as S from './style';

export type Props = {
  article: Article;
};

export const ArticleCard: React.VFC<Props> = ({ article }) => {
  const theme = useTheme();
  const router = useRouter();

  const formatDate = (d: Date) => {
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();

    return `${year}/${month}/${date}`;
  };

  return (
    <S.Wrapper>
      <S.Header>更新日 {formatDate(new Date(article.updated_at))}</S.Header>
      <S.Content>
        <S.Title>{article.title ? article.title : 'タイトルなし'}</S.Title>
        <S.IconWrapper
          onClick={() =>
            router.push({
              pathname: '/articles/[articleId]',
              query: { articleId: article.id },
            })
          }
        >
          <FontAwesomeIcon
            icon={faPencilAlt}
            size={'1x'}
            color={theme.color.gray}
          />
        </S.IconWrapper>
      </S.Content>
      <S.MetaWrapper>
        <S.OutlineLabel isPublic={article.public}>
          {article.public ? '公開中' : '非公開'}
        </S.OutlineLabel>
      </S.MetaWrapper>
    </S.Wrapper>
  );
};
