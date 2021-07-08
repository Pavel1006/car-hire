import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="autoMargin">
        <div className="information">
          <Link to="/" className="delete-link-dom-decor">
            <p>ACASA</p>
          </Link>
          <Link to="/cars" className="delete-link-dom-decor">
            <p>AUTOMOBILE</p>
          </Link>
          <p>NOUTATI</p>
          <p>CONTACTE</p>
          <p>REZERVARE</p>
          <p>HARTA SITE-ULUI</p>
          <p>CONDITII</p>
          <p>POLITICA DE CONFIDENTIALITATE</p>
        </div>
        <hr />
        <div className="information1 color-text">
          <p>
            <i className="material-icons">place</i> mun.Chisinau, Bd. Dacia 80/3
            Aeroportul International <br />
            Sala Sosiri - oficiu GoodRent
          </p>
          <p>
            <i className="material-icons">local_phone</i> (+373)68900001 <br />
            (+373)48080010
          </p>
          <p>
            <span className="bolt-text">@</span> Email: <br />
            something@goodrent.md
          </p>
          <p>
            <i className="fas fa-clipboard-list bigger"></i> Program de lucru:{" "}
            <br /> Luni-Duminica 24/7
          </p>
          <div className="icons">
            <i className="fab fa-cc-mastercard bigger1 color-mastercard"></i>
            <i className="fab fa-cc-visa bigger1 color-visa"></i>
          </div>
        </div>
        <hr />
        <div className="margin-bottom">
          <div>
            Copyright 2021. Realizare site-uri web by Pavel Mereacre
            <div className="pavel_icons">
              <i>/</i>
              <i>\</i>
              <i>/</i>
              <i className="e">
                <div>E</div>
              </i>
              <i className="o">
                <div>o</div>
              </i>
              <div className="div_invisible"></div>
            </div>
          </div>

          <div className="media">
            <a
              href="https://www.instagram.com/pavell_.m/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram bigger color-insta"></i>
            </a>
            <a
              href="https://twitter.com/pavel76722904"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter bigger color-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/pavel.mereacre.393/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f bigger color-facebook"></i>
            </a>
            <a
              href="https://www.tiktok.com/@pavelmereacre675?lang=en&is_copy_url=1&is_from_webapp=v1"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-tiktok bigger color-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Footer };
