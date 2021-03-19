import { parser } from '@blog/parser';
import * as S from './style';
import { useMemo } from 'react';

export type Props = {
  value: string;
};

export const Preview: React.VFC<Props> = ({ value }) => {
  const mdText = useMemo(() => {
    return parser(value);
  }, [value]);

  return <S.Wrapper>{mdText}</S.Wrapper>;
};
