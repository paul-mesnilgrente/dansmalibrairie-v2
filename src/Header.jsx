import logo from './images/logo_dans_ma_librairie.png';

import {
  FaFacebookSquare as FacebookIcon,
  FaInstagramSquare as InstagramIcon
} from 'react-icons/fa';

export default function Header() {
  return (
    <header id="page-header" className="header-background">
      <div className="container">
        <div className="row align-items-center justify-content-center py-3">
          <div className="col-md-8 order-md-2 text-center pb-3">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-md-4 order-md-1">
            <div className="row">
              <h1 className="col-12 display-5 fw-bold">
                Retrouvez-nous !
              </h1>
              <p className="lead">
                Vous nous trouverez sur place à Agen ou sur les réseaux sociaux pour commander
                vos livres.
              </p>
              <div className="col">
                <a
                  href="https://www.facebook.com/Dans-ma-librairie-297290237076305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-network me-3"
                >
                  <FacebookIcon size="4rem" />
                </a>
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
      </div>
    </header>
  );
}
