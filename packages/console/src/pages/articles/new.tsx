import styled from '@emotion/styled';
import { NextPage } from 'next';
import { AuthAction, withAuthUser } from 'next-firebase-auth';

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

const NewPage: NextPage<unknown> = () => {
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
