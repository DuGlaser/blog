import * as S from './style';
import { Drawer, LoggedinUser } from '@/components/molecules';

export type Props = {
  logout: () => void;
  name: string;
  avatarSrc: string;
};

export const Layout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <S.Wrapper>
      <S.Header>
        <LoggedinUser {...props} />
      </S.Header>
      <S.Content>
        <Drawer />
        {children}
      </S.Content>
    </S.Wrapper>
  );
};
