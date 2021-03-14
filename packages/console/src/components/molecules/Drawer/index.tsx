import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
  faBars,
  faPlus,
  faStickyNote,
} from '@fortawesome/free-solid-svg-icons';

export const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.FlexWrapper>
        <FontAwesomeIcon
          onClick={() => setIsOpen((cur) => !cur)}
          size={'2x'}
          icon={faBars}
          color={'gray'}
        />
        <S.List>
          <S.Item>
            <FontAwesomeIcon size={'lg'} icon={faPlus} color={'red'} />
            <S.ItemText isOpen={isOpen}>記事を追加</S.ItemText>
          </S.Item>
          <S.Item>
            <FontAwesomeIcon size={'lg'} icon={faStickyNote} color={'white'} />
            <S.ItemText isOpen={isOpen}>記事を管理</S.ItemText>
          </S.Item>
        </S.List>
      </S.FlexWrapper>
    </S.Wrapper>
  );
};
