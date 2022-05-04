import Link from 'next/link';
import { useAuthUser } from 'next-firebase-auth';

import { LoggedinUser } from '@/components/molecules';

import * as S from './style';

export const Layout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const authUser = useAuthUser();

  if (authUser.firebaseUser?.email !== 'duglaser0618@gmail.com') {
    authUser.signOut();
  }

  return (
    <S.Wrapper>
      <S.Header>
        <Link href="/">
          <a style={{ textDecoration: 'none' }}>
            <S.Icon>管</S.Icon>
          </a>
        </Link>
        {authUser.firebaseUser && (
          <LoggedinUser
            name={authUser.firebaseUser.displayName || ''}
            avatarSrc={authUser.firebaseUser.photoURL || ''}
            logout={() => authUser.signOut()}
          />
        )}
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};
