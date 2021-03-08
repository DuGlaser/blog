import { NextPage } from 'next';
import { withAuthUser, AuthAction, useAuthUser } from 'next-firebase-auth';

const IndexPage: NextPage = () => {
  const AuthUser = useAuthUser();

  return (
    <div>
      <p>{AuthUser.id}</p>
      <p>index page</p>
    </div>
  );
};

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(IndexPage);
