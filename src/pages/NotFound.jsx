import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';
import imgError from '../images/img_main/error.jpg';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{ backgroundColor: '#bdbfbe', height: '100vh' }}>
      <img src={imgError} alt="Erroe" style={{ display: 'block', margin: 'auto'  }}/>
      <p className="text--paragraph" style={{ textAlign: 'center' }}>Sorry, an unexpected error has occurred.</p>
      <p className="text--paragraph" style={{ textAlign: 'center' }}>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className="heading--h3" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }} to="/">Go to Home</Link>
    </div>
  );
}