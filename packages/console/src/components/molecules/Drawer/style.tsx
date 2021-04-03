import styled from '@emotion/styled';
import { Property } from 'csstype';

export const Wrapper = styled.div<{
  isOpen: boolean;
  minWidth?: Property.MinWidth;
  maxWidth?: Property.MaxWidth;
}>(({ isOpen, minWidth = 28 + 16 * 2, maxWidth = 240 }) => ({
  display: 'inline-block',
  padding: '16px',
  width: isOpen ? maxWidth : minWidth,
  height: '100%',
  background: 'black',
  transition: 'width 0.3s',
}));

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
`;

export const List = styled.ul`
  margin: 36px 0 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-right: 4px;
  margin-left: 4px;

  & + & {
    margin-top: 24px;
  }
`;

export const ItemText = styled.span<{ isOpen: boolean }>(({ isOpen }) => ({
  whiteSpace: 'nowrap',
  color: 'white',
  visibility: isOpen ? 'visible' : 'hidden',
  marginLeft: '10px',
}));
