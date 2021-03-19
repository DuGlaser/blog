import { parser } from '@blog/parser';
import { useMemo } from 'react';

import * as S from './style';

export type Props = {
  value: string;
};

export const Preview: React.VFC<Props> = ({ value }) => {
  const mdText = useMemo(() => {
    return parser(value);
  }, [value]);

  return <S.Wrapper>{mdText}</S.Wrapper>;
};
