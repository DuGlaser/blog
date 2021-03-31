import styled from '@emotion/styled';
import { NextPage } from 'next';
import { AuthAction, withAuthUser } from 'next-firebase-auth';

import { ArticleEditor } from '@/components/organisms';
import { Layout } from '@/components/templates';

const S = {
  Flex: styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Wrapper: styled.div`
    height: 95%;
    width: 95%;
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

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.RENDER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(NewPage);
