import './footer.scss';
import Container from '../Container/Container';
import Facebook from '../../images/img_contact/facebook.svg';
import Insta from '../../images/img_contact/instagram.svg';
import Twitter from '../../images/img_contact/twitter.svg';

const Footer = () => {
  const handleSubmit = (e) => {
  e.preventDefault();
  }

    return (
      <footer className="footer">
        <Container>
        <div className="footer__content d-flex align-items-center">
          <div className="form__comment">
            <h3 className="heading--h3__white--color">Write your offer</h3>
            <form action="" className='form footer__form d-flex flex-column' onSubmit={handleSubmit}>
              <input type="email" name="" id="" placeholder='Write your email'></input>
              <input type="text" placeholder='Write your comment'></input>
              <button className='button--primary' type="submit">Send</button>
            </form>
          </div> 

          <div className="footer__text">
            <h3 className="heading--h3__white--color mg-top">About Us</h3>
            <p className='footer__text--paragraph'>Stay connected with us to discover exclusive interviews, behind-the-scenes content, and in-depth analysis of the latest Marvel releases. We're here to celebrate the magic of Marvel with fellow fans and foster a community that shares the same love for these incredible stories.</p>

            <div className="box--social d-flex">
              <a href="https://www.facebook.com/Marvel/"><img className='box--social__svg' src={Facebook} alt="Facebook" /></a>
              <a href="https://www.instagram.com/marvel/"><img className='box--social__svg' src={Insta} alt="Insta" /></a>
              <a href="https://twitter.com/MarvelStudios"><img className='box--social__svg' src={Twitter} alt="Twitter" /></a>
            </div>
          </div> 
        </div>
        </Container>
      </footer>
  )
}

export default Footer