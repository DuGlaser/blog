import { NextPage } from 'next';
import { AuthAction, withAuthUser } from 'next-firebase-auth';

import { Layout } from '@/components/templates';
import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { Editor, Preview } from '@/components/molecules';

const S = {
  Wrapper: styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  FlexItem: styled.div`
    flex: 1;
    height: 100%;
    padding: 5rem;
  `,
};

const NewPage: NextPage = () => {
  const [editor, setEditor] = useState('');

  const handleOnChange = useCallback((value) => {
    setEditor(value);
  }, []);

  return (
    <Layout>
      <S.Wrapper>
        <S.FlexItem>
          <Editor value={editor} onChange={handleOnChange} />
        </S.FlexItem>
        <S.FlexItem>
          <Preview value={editor} />
        </S.FlexItem>
      </S.Wrapper>
    </Layout>
  );
};

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.RENDER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(NewPage);
