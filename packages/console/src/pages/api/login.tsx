import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { setAuthCookies } from 'next-firebase-auth';

import initAuth from '@/utils/initAuth';

initAuth();

const sendLog = async (log: any) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  };

  const message = {
    username: 'blog-console bot',
    content: JSON.stringify(log),
  };

  if (process.env.DISCORD_WEB_HOOK) {
    const res = await axios.post(process.env.DISCORD_WEB_HOOK, message, config);
    console.log({ res });
  } else {
    console.log('DISCORD_WEB_HOOK is undefined');
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { AuthUser } = await setAuthCookies(req, res);

    if (!process.env.FIREBASE_ADMIN_ID) {
      console.log('FIREBASE_ADMIN_ID is undefined');
      return res.status(200).json({ success: true });
    }

    if (AuthUser.id === process.env.FIREBASE_ADMIN_ID) {
      await sendLog(AuthUser);
      return res.status(200).json({ success: true });
    }

    return res.status(200).json({ success: true });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: 'Unexpected error.' });
  }
};

export default handler;
