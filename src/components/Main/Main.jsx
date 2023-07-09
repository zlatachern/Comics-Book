import './main.scss';
import Container from '../Container/Container';
import imageOne from '../../images/img_hero/img_1.png'
import imageTwo from '../../images/img_hero/img_2.png'
import imageThree from '../../images/img_hero/img_3.png'
import imageFour from '../../images/img_hero/img_4.png'
import imageFive from '../../images/img_hero/img_5.png'
import imageSix from '../../images/img_hero/img_6.png'
import imageSeven from '../../images/img_hero/img_7.png'
import imageEight from '../../images/img_hero/img_8.png'
import imageNine from '../../images/img_hero/img_9.png'
import imageTen from '../../images/img_hero/img_10.png'
import imageEleven from '../../images/img_hero/img_11.png'
import SearchHero from '../SearchHero/SearchHero';
import SearchComics from '../SearchComics/SearchComics';

const Main = () => (
  <main className='main'>
      <div className="section--first">
        <Container>
        <div className="text-box__one mb-5 d-flex align-items-center justify-content-between">
          <h1 className="heading--h1">Comics</h1>

          <div className="text--ligthing">
            <h4 className="heading--h4">Bring your childhood back</h4>
            <div class="z">
              <div class="lg lightning-border"></div>
              <div class="lg lightning"></div>
            </div>
          </div>
        </div>

        <div className="text-box__two d-flex align-items-center justify-content-between">

          <div className="box--photos">

            <div className="box--photos__one d-flex align-items-center justify-content-between mb-4">

              <div className="box--photos__one__size">
                <img src={imageOne} alt="" />
              </div>
              <div className="box--photos__one__size--small">
                <img src={imageTwo} alt="" />
              </div>
              <div className="box--photos__one__size">
                <img src={imageThree} alt="" />
              </div>

              <div className="box--photos__one__size--small">
                <img src={imageFour} alt="" />
              </div>

            </div>

            <div className="box--photos__two d-flex align-items-center justify-content-between mb-4">

              <div className="box--photos__one__size">
                <img src={imageFive} alt="" />
              </div>
              <div className="box--photos__one__size--small">
                <img src={imageSix} alt="" />
              </div>
              <div className="box--photos__one__size">
                <img src={imageSeven} alt="" />
              </div>

            </div>

            <div className="box--photos__one d-flex align-items-center justify-content-between">

              <div className="box--photos__one__size">
                <img src={imageEight} alt="" />
              </div>
              <div className="box--photos__one__size--small">
                <img src={imageNine} alt="" />
              </div>
              <div className="box--photos__one__size">
                <img src={imageTen} alt="" />
              </div>
              <div className="box--photos__one__size--small">
                <img src={imageEleven} alt="" />
              </div>

            </div>

          </div>

          <h1 className="heading--h1__two">Books</h1>
        </div>
        </Container>
      </div>

      <section className="section--second">
        <Container>

        <div className="text--heading">
          <h3 className="heading--h3">Search your character!</h3>
        </div>
        <p className='text--subtitles'>Discover the vast Marvel Universe and find information about your favorite characters. From iconic heroes to notorious villains, unleash your curiosity and embark on an adventure through Marvel's rich tapestry of storytelling. Enter the name of your desired character into the search bar above and let the journey begin!</p>

        <div className="box--card">
          <SearchHero/>
        </div>
        </Container>
      </section>

      <div className="section--third">
        <Container>
        <div className="text--heading">
          <h3 className="heading--h3">Search your character!</h3>
        </div>
        <p className='text--subtitles'>Discover the vast Marvel Universe and find information about your favorite characters. From iconic heroes to notorious villains, unleash your curiosity and embark on an adventure through Marvel's rich tapestry of storytelling. Enter the name of your desired character into the search bar above and let the journey begin!</p>

        <SearchComics/>
        </Container>
      </div>
    
    
  </main>
  

);

export default Main;