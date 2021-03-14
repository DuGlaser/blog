import { Layout } from '@/components/templates';
import { NextPage } from 'next';
import { AuthAction, useAuthUser, withAuthUser } from 'next-firebase-auth';

const IndexPage: NextPage = () => {
  const AuthUser = useAuthUser();

  if (!AuthUser.firebaseUser) {
    return null;
  }

  return (
    <Layout
      name={AuthUser.firebaseUser.displayName || ''}
      avatarSrc={AuthUser.firebaseUser.photoURL || ''}
      logout={() => AuthUser.signOut()}
    ></Layout>
  );
};

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(IndexPage);
