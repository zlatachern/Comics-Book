import './list.scss';

const List = () => (
  <nav className='nav'>
    <ul className='nav__list'>
      <li className='nav__item position-relative'><a className='nav__link' href="/">Home</a></li>
      <li className='nav__item position-relative'><a className='nav__link' href="/characters">Сharacters</a></li>
      <li className='nav__item position-relative'><a className='nav__link' href="/games">Games</a></li>
    </ul>
  </nav>
)

export default List;