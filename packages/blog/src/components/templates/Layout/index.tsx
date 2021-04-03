import { Header } from '@/components/atoms';
import * as S from './style';

export const Layout: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>{children}</S.Content>
      <S.Footer>
        <small>© 2020 DuGlaser</small>
      </S.Footer>
    </S.Wrapper>
  );
};
