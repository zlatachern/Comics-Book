import { bubble as Menu } from 'react-burger-menu';
import React from 'react';
import './burger.scss';

import FormButton from '../FormButton/FormButton';

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowMenu: window.innerWidth <= 768,
      isMenuOpen: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      shouldShowMenu: window.innerWidth <= 768
    });
  };

  handleMenuClick = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  render() {
    const { shouldShowMenu, isMenuOpen } = this.state;

    if (!shouldShowMenu) {
      return null;
    }

    return (
      <Menu isOpen={isMenuOpen} onStateChange={state => this.setState({ isMenuOpen: state.isOpen })}>
        <nav className='nav'>
          <ul className='nav__list--burger'>
            <li className='nav__item'><a className='nav__link' href="/">Home</a></li>
            <li className='nav__item'><a className='nav__link' href="/characters">Characters</a></li>
            {shouldShowMenu && window.innerWidth <= 540 && <FormButton/>}
          </ul>
        </nav>
      </Menu>
    );
  }
}

export default Burger;