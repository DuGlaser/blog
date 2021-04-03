import styled from '@emotion/styled';
import { Property } from 'csstype';

export const Wrapper = styled.div`
  display: inline-block;
  height: 100%;
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Username = styled.span(({ theme }) => ({
  color: theme.color.gray,
  fontSize: '1.2rem',
  marginInlineStart: '0.8rem',
}));

export const OpenWindowIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  margin-inline-start: 0.4rem;

  :hover {
    background-color: lightgrey;
    opacity: 0.5;
    transition: background-color 0.3s;
  }
`;

export const FloatingWindowWrapper = styled.div<{
  top: Property.Top;
  right: Property.Left;
}>(({ top, right }) => ({
  position: 'absolute',
  top,
  right,
}));

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  padding: 0.8em 1.5em;
  font-size: 1rem;
  cursor: pointer;
`;
