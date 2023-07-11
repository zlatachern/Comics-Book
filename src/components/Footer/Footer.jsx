import './footer.scss';
import Container from '../Container/Container';
import imgFooter from '../../images/img_main/marvel_insider.jpg';

const Footer = () => (
    <footer className="footer">
      <Container>
      <div className="footer__content d-flex align-items-center">
        <div className="form__comment">
          <h3 className="heading--h3__white--color">Write your offer</h3>
          <form action="" className='form footer__form d-flex flex-column'>
            <input type="email" name="" id="" placeholder='Write your email'></input>
            <input type="text" placeholder='Write your comment'></input>
            <button className='button--primary' type="submit">Send</button>
          </form>
        </div>

        <div className="footer__text">
          <h3 className="heading--h3__white--color mg-top">About Us</h3>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem minima ipsa, voluptate sequi amet blanditiis dolorum impedit, sunt ullam, corrupti quae quisquam ratione atque? Assumenda, molestiae amet veritatis corporis placeat odio in beatae dignissimos, natus maxime rem cumque unde!</p>
        </div>
      </div>
      </Container>
    </footer>
)

export default Footer