import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

const MainLayout = ({ children, style }) => {
  return (
    <div className="layout" style={style}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default MainLayout;
