import styled from '@emotion/styled';
import { NextPage } from 'next';
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';

import { ArticleEditor } from '@/components/organisms';
import { Layout } from '@/components/templates';

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

const NewPage: NextPage = () => {
  return (
    <Layout>
      <S.Flex>
        <S.Wrapper>
          <ArticleEditor />
        </S.Wrapper>
      </S.Flex>
    </Layout>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
  if (AuthUser.id !== process.env.FIREBASE_ADMIN_ID) {
    throw `Invalid user ${AuthUser.email}`;
  }

  return {
    props: {},
  };
});

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.RENDER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(NewPage);
