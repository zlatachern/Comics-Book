import React, { useContext } from 'react';
import MainLayout from '../Layout/mainlayout';
import { ThemeContext } from '../App';

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const darkThemeStyle = {
    backgroundColor: '#000',
    color: '#fff',
  };

  return (
    <>
      <MainLayout style={isDarkMode ? darkThemeStyle : null} />
    </>
  );
};

export default Home;

