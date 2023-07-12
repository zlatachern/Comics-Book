import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

const MainLayout = ({ children, isDarkMode, toggleTheme }) => {
  const darkThemeStyle = {
    backgroundColor: '#000',
    color: '#fff',
  };

  return (
    <div className="layout" style={isDarkMode ? darkThemeStyle : null}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default MainLayout;
