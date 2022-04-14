import { Header, Footer } from 'components/common/common';

type MainLayoutProps = {
  children: JSX.Element;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
