import { Avatar, FloatingWindow } from '@/components/atoms';
import { RefObject, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './style';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export type Props = {
  logout: () => void;
  name: string;
  avatarSrc: string;
};

const usePosition = (posRef: RefObject<HTMLElement>) => {
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(0);

  useEffect(() => {
    if (posRef.current) {
      const { bottom, right } = posRef.current.getBoundingClientRect();
      const { innerWidth } = window;
      setRight(innerWidth - right);
      setTop(bottom);
    }
  }, [posRef]);

  return { top, right };
};

// TODO: FloatingWindow以外をクリックしたときに閉じるようにしたい
export const LoggedinUser: React.VFC<Props> = ({ logout, name, avatarSrc }) => {
  const [openWindow, setOpenWindow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { top, right } = usePosition(ref);

  return (
    <S.Wrapper>
      <S.RowWrapper>
        <Avatar src={avatarSrc} />
        <S.Username>{name}</S.Username>
        <S.OpenWindowIconWrapper
          ref={ref}
          onClick={() => {
            setOpenWindow((cur) => !cur);
          }}
        >
          <FontAwesomeIcon icon={faChevronDown} color={'gray'} />
        </S.OpenWindowIconWrapper>
      </S.RowWrapper>
      <S.FloatingWindowWrapper top={`${top}px`} right={`${right}px`}>
        {openWindow && (
          <FloatingWindow>
            <S.List>
              <S.Item onClick={logout}>ログアウト</S.Item>
            </S.List>
          </FloatingWindow>
        )}
      </S.FloatingWindowWrapper>
    </S.Wrapper>
  );
};
