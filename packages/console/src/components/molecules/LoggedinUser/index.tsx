import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RefObject, useEffect, useRef, useState } from 'react';

import { Avatar, FloatingWindow } from '@/components/atoms';

import * as S from './style';

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

export const LoggedinUser: React.VFC<Props> = ({ logout, name, avatarSrc }) => {
  const [openWindow, setOpenWindow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const { top, right } = usePosition(ref);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        [ref, windowRef].every(
          (ref) => ref.current && !ref.current.contains(event.target as Node)
        )
      ) {
        setOpenWindow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      <S.FloatingWindowWrapper
        ref={windowRef}
        top={`${top}px`}
        right={`${right}px`}
      >
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
