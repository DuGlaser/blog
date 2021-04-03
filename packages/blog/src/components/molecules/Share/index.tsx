import { useRouter } from 'next/router';
import path from 'path';
import {
  HatenaIcon,
  HatenaShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { config } from 'site.config';

import * as S from './style';

export const Share: React.VFC<{ title: string }> = ({ title }) => {
  const router = useRouter();
  const url = path.join(config.siteUrl, router.asPath);

  return (
    <S.Wrapper>
      <S.ShareButtonWrapper>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>
      </S.ShareButtonWrapper>
      <S.ShareButtonWrapper>
        <HatenaShareButton url={url} title={title}>
          <HatenaIcon size={40} round />
        </HatenaShareButton>
      </S.ShareButtonWrapper>
    </S.Wrapper>
  );
};
