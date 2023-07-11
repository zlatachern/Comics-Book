import './list.scss';

const List = () => (
  <nav className='nav'>
    <ul className='nav__list'>
      <li className='nav__item position-relative'><a className='nav__link' href="ht">Home</a></li>
      <li className='nav__item position-relative'><a className='nav__link' href="ht">Сharacter</a></li>
      <li className='nav__item position-relative'><a className='nav__link' href="ht">Games</a></li>
    </ul>
  </nav>
)

export default List;