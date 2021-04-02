import { Header } from '@/components/atoms';
import styled from '@emotion/styled';

const Content = styled.div`
  width: 100%;
  max-width: 1024px;

  margin: 0 auto;
  padding: 16px;
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};
