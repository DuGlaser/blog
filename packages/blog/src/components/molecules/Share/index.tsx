import { useRouter } from 'next/router';
import {
  HatenaIcon,
  HatenaShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { config } from 'site.config';
import urljoin from 'url-join';

import * as S from './style';

export const Share: React.VFC<{ title: string }> = ({ title }) => {
  const router = useRouter();

  // NOTE: When you use Storybook, router is null
  const url = urljoin(config.site.url, router ? router.asPath : '');

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
