import { NextPage } from 'next';
import Link from 'next/link';
import { AuthAction, useAuthUser, withAuthUser } from 'next-firebase-auth';

import { Layout } from '@/components/templates';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Link href="/articles/new">hoge</Link>
    </Layout>
  );
};

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(IndexPage);
