import SearchHero from '../components/SearchHero/SearchHero';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';

const Characters = () => (
  <>
    <Header/>
    <section className="section--third">
      <Container>
        <div className="section--third__content">
          <div className="text--heading">
            <h3 className="heading--h3__white--color">Search your character!</h3>
          </div>
          <p className='text--subtitles__white--color'>Discover the vast Marvel Universe and find information about your favorite characters. From iconic heroes to notorious villains, unleash your curiosity and embark on an adventure through Marvel's rich tapestry of storytelling. Enter the name of your desired character into the search bar above and let the journey begin!</p>

          <div className="box--card">
            <SearchHero/>
          </div>
        </div>
      </Container>
    </section>
    <footer className="footer">
      <Footer></Footer>
    </footer>
    
  </>
);

export default Characters;