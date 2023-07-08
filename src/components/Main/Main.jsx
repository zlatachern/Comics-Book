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

const Main = () => (
  <main className='main'>
    <Container>
      <div className="section--first">
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
      </div>

    <SearchHero/>
    </Container>
  </main>
  

);

export default Main;