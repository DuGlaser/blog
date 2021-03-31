import styled from '@emotion/styled';
import { NextPage } from 'next';
import { AuthAction, withAuthUser } from 'next-firebase-auth';

import { ArticleCard } from '@/components/molecules/ArticleCard';
import { Layout } from '@/components/templates';
import { useGetArticlesDataOnce } from '@/hooks';
import { FlatButton } from '@/components/atoms';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/router';

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
    font-size: 2.4rem;
    color: ${(props) => props.theme.color.white};
  `,
};

const IndexPage: NextPage = () => {
  const [value, loading, error] = useGetArticlesDataOnce();
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
          ?.sort((a, b) => b.updated_at - a.updated_at)
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
