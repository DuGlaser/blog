import Link from 'next/link';

import * as S from './style';

export const Header = () => {
  return (
    <S.Wrapper>
      <Link href="/">
        <S.WrapperAnchor>
          <S.Title>永遠にWIP</S.Title>
        </S.WrapperAnchor>
      </Link>
    </S.Wrapper>
  );
};
