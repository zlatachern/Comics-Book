import SearchHero from '../components/SearchHero/SearchHero';

const Characters = ({ children }) => (
  <>
    <SearchHero>
      {children}
    </SearchHero>
  </>
);

export default Characters;