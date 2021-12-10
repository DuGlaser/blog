import Link from 'next/link';

import * as S from './style';

export const Header: React.VFC = () => {
  return (
    <S.Wrapper>
      <Link href="/" passHref>
        <S.WrapperAnchor>
          <S.Title>永遠にWIP</S.Title>
        </S.WrapperAnchor>
      </Link>
    </S.Wrapper>
  );
};
