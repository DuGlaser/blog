import styled from '@emotion/styled';

import { Header } from '@/components/atoms';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;

  width: 100%;
  max-width: 1024px;

  margin: 0 auto;
  padding: 16px;
`;

const Footer = styled.div`
  margin-top: auto;
  padding: 1rem 0;

  text-align: center;
  color: ${(props) => props.theme.color.gray};

  width: 100%;
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer>
        <small>© 2020 DuGlaser</small>
      </Footer>
    </Wrapper>
  );
};
