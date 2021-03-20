import { NextPage } from 'next';
import { AuthAction, withAuthUser } from 'next-firebase-auth';

import { Layout } from '@/components/templates';
import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { Editor, Preview } from '@/components/molecules';

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
    max-width: 1440px;

    display: flex;
    flex-direction: column;
  `,

  Header: styled.div`
    margin-bottom: 2rem;
  `,

  Content: styled.div`
    flex: 1;
    width: 100%;
    display: flex;
  `,

  Border: styled.div`
    height: 100%;
    width: 3px;
    background-color: ${(props) => props.theme.color.gray};
    opacity: 0.3;
  `,
};

const NewPage: NextPage = () => {
  const [editor, setEditor] = useState('');

  const handleOnChange = useCallback((value) => {
    setEditor(value);
  }, []);

  return (
    <Layout>
      <S.Flex>
        <S.Wrapper>
          <S.Header></S.Header>
          <S.Content>
            <Editor value={editor} onChange={handleOnChange} />
            <S.Border />
            <Preview value={editor} />
          </S.Content>
        </S.Wrapper>
      </S.Flex>
    </Layout>
  );
};

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.RENDER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(NewPage);
