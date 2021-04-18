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
    await axios.post(process.env.DISCORD_WEB_HOOK, message, config);
  } else {
    throw new Error("Not found discord_web_hook")
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { AuthUser } = await setAuthCookies(req, res);

    if (process.env.FIREBASE_ADMIN_ID) {
      throw new Error("Not found firebase_admin_id")
    }
    if (!AuthUser.id) {
      throw new Error("Not found AuthUser.id")
    }
    if (AuthUser.id === process.env.FIREBASE_ADMIN_ID) {
      await sendLog(AuthUser);
    }
  } catch (e) {
    return res.status(500).json({ error: e });
  }
  return res.status(200).json({ success: true });
};

export default handler;
