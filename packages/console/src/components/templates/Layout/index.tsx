import { useAuthUser } from 'next-firebase-auth';

import { LoggedinUser } from '@/components/molecules';

import * as S from './style';

export const Layout: React.FC = ({ children }) => {
  const authUser = useAuthUser();

  return (
    <S.Wrapper>
      <S.Header>
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
