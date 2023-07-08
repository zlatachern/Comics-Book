import { bubble as Menu } from 'react-burger-menu';
import React, { useState, useEffect } from 'react';
import './burger.scss';
import FormButton from '../FormButton/FormButton';

const Burger = () => {
  const [shouldShowMenu, setShouldShowMenu] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 768;
      setShouldShowMenu(isSmallScreen);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Вызываем функцию handleResize для проверки размера окна при монтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  return (
    <Menu isOpen={isMenuOpen} onStateChange={handleStateChange}>
      <nav className='nav'>
        <ul className='nav__list--burger'>
          <li className='nav__item'><a className='nav__link' href="ht">Home</a></li>
          <li className='nav__item'><a className='nav__link' href="ht">Account</a></li>
          <li className='nav__item'><a className='nav__link' href="ht">Games</a></li>
          {shouldShowMenu && <FormButton />}
        </ul>
      </nav>
    </Menu>
  );
};

export default Burger;