import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className={
        localStorage.getItem("accessToken") === null
          ? "footerSuccessfulLogIn"
          : "footer"
      }
    >
      <div className="autoMargin">
        <div className="information">
          <Link to="/" className="delete-link-dom-decor">
            <p>HOME</p>
          </Link>
          <Link to="/cars" className="delete-link-dom-decor">
            <p>CARS</p>
          </Link>
          <p>NEWS</p>
          <p>CONTACTS</p>
          <p>HIRE</p>
          <p>SITE MAP</p>
          <p>CONDITIONS</p>
          <p>PRIVACY POLICY</p>
        </div>
        <hr />
        <div className="information1 color-text">
          <p>
            <i className="material-icons">place</i> mun. Chisinau, Bd. Dacia
            80/3 Chisinau
            <br /> International Airport Arrivals Hall - GoodRent office
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
            <i className="fas fa-clipboard-list bigger"></i> Work program:
            <br /> Monday-Sunday 24/7
          </p>
          <div className="icons">
            <i className="fab fa-cc-mastercard bigger1 color-mastercard"></i>
            <i className="fab fa-cc-visa bigger1 color-visa"></i>
          </div>
        </div>
        <hr />
        <div className="margin-bottom">
          <div>Copyright 2021. Creation of websites by Pavel Mereacre</div>

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
