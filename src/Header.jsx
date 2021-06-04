import logo from './logo.png';

import { FaFacebookSquare as FacebookIcon } from 'react-icons/fa';
import { FaInstagramSquare as InstagramIcon } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="container-fluid" id="page-header">
      <div className="row align-items-center justify-content-center">
        <div className="col-6 text-center">
          <img src={logo} alt="logo" />
        </div>
        <div className="col-6">
          <div className="row">
            <h1 className="col-12 display-5 fw-bold">
              Retrouvez-nous !
            </h1>
            <p className="lead">
              Vous nous trouverez à Agen ou sur les réseaux sociaux ou vous pouvez commander
              nos livres.
            </p>
            <div className="col text-center">
              <a
                href="https://www.facebook.com/Dans-ma-librairie-297290237076305"
                target="_blank"
                rel="noopener noreferrer"
                className="social-network"
              >
                <FacebookIcon size="4rem" />
              </a>
            </div>
            <div className="col text-center">
              <a
                href="https://www.instagram.com/dans_ma_librairie/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-network"
              >
                <InstagramIcon size="4rem" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
