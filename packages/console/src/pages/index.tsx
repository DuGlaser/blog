import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AuthAction, withAuthUser } from 'next-firebase-auth';

import { FlatButton } from '@/components/atoms';
import { ArticleCard } from '@/components/molecules/ArticleCard';
import { Layout } from '@/components/templates';
import { useGetArticlesDataOnce } from '@/hooks';

const S = {
  Content: styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding-top: 3rem;
  `,

  ArticleCardWrapper: styled.div`
    margin-bottom: 2rem;
  `,

  Header: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  `,

  Title: styled.h2`
    color: ${(props) => props.theme.color.white};
    font-size: 2.4rem;
  `,
};

const IndexPage: NextPage = () => {
  const [value] = useGetArticlesDataOnce();
  const router = useRouter();
  const theme = useTheme();

  return (
    <Layout>
      <S.Content>
        <S.Header>
          <S.Title>Articles</S.Title>
          <FlatButton
            bgColor={theme.color.primary}
            textColor={theme.color.white}
            onClick={() => {
              router.push({
                pathname: '/articles/new',
              });
            }}
          >
            新規追加
          </FlatButton>
        </S.Header>
        {value
          ?.sort((a, b) => (b.updated_at as number) - (a.updated_at as number))
          .map((article) => (
            <S.ArticleCardWrapper key={article.id}>
              <ArticleCard article={article} />
            </S.ArticleCardWrapper>
          ))}
      </S.Content>
    </Layout>
  );
};

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(IndexPage);
