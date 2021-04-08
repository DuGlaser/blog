import fs from 'fs';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import path from 'path';

import { theme } from '@/utils/theme';

export const getStaticProps: GetStaticProps = async () => {
  const fontPath = path.resolve(
    process.cwd(),
    './assets/DelaGothicOne-Regular.ttf'
  );
  const font = fs.readFileSync(fontPath, { encoding: 'base64' });

  return {
    props: {
      font: font,
    },
  };
};

const OgPage: NextPage<{ font: string }> = ({ font }) => {
  const router = useRouter();
  const { title } = router.query;
  return (
    <>
      <style jsx>{`
        @font-face {
          font-weight: bold;
          font-family: 'Dela Gothic One';
          src: url(data:font/ttf;charset=utf-8;base64,${font})
            format('truetype');
        }

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          padding: 0 10%;
          font-family: 'Dela Gothic One', cursive;
          background-color: ${theme.color.bgColor};
        }

        h1 {
          margin: 0 auto;
          color: ${theme.color.white};
          font-size: 3.5rem;
          letter-spacing: 0.1rem;
        }
      `}</style>
      <div>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default OgPage;
