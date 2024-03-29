import 'firebase/auth';

import styled from '@emotion/styled';
import { NextPage } from 'next';
import { AuthAction, withAuthUser } from 'next-firebase-auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import firebase from '@/utils/firebase';

const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  `,
};

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

const LoginPage: NextPage<unknown> = () => {
  return (
    <S.Wrapper>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </S.Wrapper>
  );
};

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER,
})(LoginPage);
