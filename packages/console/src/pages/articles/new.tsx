import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import { AuthAction, withAuthUser } from 'next-firebase-auth';
import { useCallback, useState } from 'react';

import { FlatButton, OutlineButton } from '@/components/atoms';
import { TextFilled } from '@/components/atoms/TextFilled';
import { Editor, Preview } from '@/components/molecules';
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
    max-width: 1440px;

    display: flex;
    flex-direction: column;
  `,

  Header: styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 2rem;
  `,

  ButtonWrapper: styled.div`
    & :first-child {
      margin-right: 1rem;
    }
  `,

  TitleWrapper: styled.div`
    flex: 1;
    margin: 0 2rem 0 0;
  `,

  Content: styled.div`
    flex: 1;
    width: 100%;
    display: flex;

    overflow-y: auto;
  `,

  Border: styled.div`
    height: 100%;
    width: 3px;
    background-color: ${(props) => props.theme.color.base};
    opacity: 0.3;
  `,
};

const NewPage: NextPage = () => {
  const [editor, setEditor] = useState('');
  const theme = useTheme();

  const handleOnChange = useCallback((value) => {
    setEditor(value);
  }, []);

  return (
    <Layout>
      <S.Flex>
        <S.Wrapper>
          <S.Header>
            <S.TitleWrapper>
              <TextFilled
                textColor={theme.color.white}
                placeholder={'Title'}
                fontSize={'32px'}
              />
            </S.TitleWrapper>
            <S.ButtonWrapper>
              <OutlineButton
                borderColor={theme.color.primary}
                textColor={theme.color.primary}
              >
                情報
              </OutlineButton>
              <FlatButton
                bgColor={theme.color.primary}
                textColor={theme.color.white}
              >
                公開する
              </FlatButton>
            </S.ButtonWrapper>
          </S.Header>
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
