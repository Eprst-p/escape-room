import { Header, Footer } from 'components/common/common';
import React from 'react';

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
