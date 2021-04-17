import { Code as _Code, Image } from '@blog/component';
import { parser } from '@blog/parser';
import { useTheme } from '@emotion/react';
import { useMemo } from 'react';

import * as S from './style';

export type Props = {
  value: string;
};

export const Preview: React.VFC<Props> = ({ value }) => {
  const theme = useTheme();

  const mdText = useMemo(() => {
    const { element } = parser(value, {
      code: function Code({ children, ...props }: any) {
        return (
          <_Code
            textColor={theme.color.gray}
            bgColor={theme.color.bgColor}
            {...props}
          >
            {children}
          </_Code>
        );
      },
      img: Image,
    });
    return element;
  }, [value]);

  return <S.Wrapper>{mdText}</S.Wrapper>;
};
