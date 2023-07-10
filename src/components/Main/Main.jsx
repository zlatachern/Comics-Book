import './main.scss';
import Container from '../Container/Container';
import Gallery from '../Gallery/Gallery';
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
import marvelUnlimited from '../../images/img_main/marvel_unlimited-two.jpg'
import hughJack from '../../images/img_main/hugh_jackman.png';


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

        <div className="addition--info">
        <Container>
          <div className="addition--info__content d-flex justify-content-between">
          <div className="addition--info__one d-flex align-items-center">
            <div className="addition--info__one--image">
              <img src={marvelUnlimited} alt="Marvel Unlimited" />
            </div>

            <div className="addition--info__one--text">
              <h4 className="heading--h4__color--white">Marvel Unlimited</h4>
              <p className='text--paragraph__white--color'>Marvel Unlimited is a digital paradise for comic book enthusiasts. With a vast collection of over 28,000 comics, it offers an immersive experience for fans to dive into the Marvel Universe.</p>
            </div>
          </div>


          <div className="addition--info__two d-flex align-items-center">
          <div className="addition--info__two--image">
              <img src={hughJack} alt="Marvel Unlimited" />
            </div>

            <div className="addition--info__one--text">
              <p className='text--paragraph__white--color'>
              <svg className="intro__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path style={{ fill: "#f6c24a" }}
                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                </path>
              </svg>
                When I was a boy, I Always Saw Myself As A Hero in Comic Books And In Movies. I Grew Up Believing This Dream.
                </p>
              <p className='text--paragraph__white--color'>Hugh Jackman</p>
            </div>
          </div>

          </div>
          </Container>
        </div>
      </div>

      <section className="section--second">
        <Container>
        <div className="box--comics__text">
          <h3 className="heading--h3">New on Marvel Unlimited</h3>
          <p className='text--paragraph mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vero sequi doloribus mollitia ducimus voluptates accusamus soluta inventore rem, debitis quod ipsum sunt ex laborum doloremque temporibus nemo exercitationem incidunt!</p>
        </div>

        <Gallery/>
        </Container>
      </section>

      <section className="section--third">
        <Container>
        <div className="section--third__content">
          <div className="text--heading">
            <h3 className="heading--h3">Search your character!</h3>
          </div>
          <p className='text--subtitles'>Discover the vast Marvel Universe and find information about your favorite characters. From iconic heroes to notorious villains, unleash your curiosity and embark on an adventure through Marvel's rich tapestry of storytelling. Enter the name of your desired character into the search bar above and let the journey begin!</p>

          <div className="box--card">
            <SearchHero/>
          </div>
        </div>
        </Container>
      </section>

      <div className="section--four">
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