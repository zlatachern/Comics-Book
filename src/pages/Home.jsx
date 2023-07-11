import React, { useContext } from 'react';
import MainLayout from '../Layout/mainlayout';
import { ThemeContext } from '../App';

const Home = () => {
  const theme = useContext(ThemeContext);

  console.log('theme :>> ', theme);

  return (
    <>
      <MainLayout />
    </>
  );
};

export default Home;
