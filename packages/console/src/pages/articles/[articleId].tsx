import styled from '@emotion/styled';
import { NextPage } from 'next';
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';

import { ArticleEditor } from '@/components/organisms';
import { Layout } from '@/components/templates';
import { useGetArticleData } from '@/hooks';

type Props = {
  articleId: string;
};

const S = {
  Flex: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,

  Wrapper: styled.div`
    width: 95%;
    height: 95%;
  `,
};

const ArticlePage: NextPage<Props> = ({ articleId }) => {
  const [value, loading] = useGetArticleData(articleId);

  return (
    <Layout>
      <S.Flex>
        <S.Wrapper>{!loading && <ArticleEditor article={value} />}</S.Wrapper>
      </S.Flex>
    </Layout>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser, params }) => {
  if (AuthUser.id !== process.env.FIREBASE_ADMIN_ID) {
    throw `Invalid user ${AuthUser.email}`;
  }

  const articleId = params?.articleId as string;

  return {
    props: {
      articleId,
    },
  };
});

export default withAuthUser<Props>({
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(ArticlePage);
