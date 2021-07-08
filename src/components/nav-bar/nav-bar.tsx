import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="barDeSus3">
        <div className="barDeSus">
          <p>
            mun.Chisinau, Bd. Dacia 80/3 Aeroportul International Chisinau Sala
            Sosiri - oficiu GoodRent
          </p>
          <div className="barDeSus2">
            <span>
              <Link to="/sign-up" className="log-out-change-color">
                Sign up |{" "}
              </Link>
            </span>
            <span>
              <Link to="/log-in" className="log-out-change-color">
                {" "}
                Log in |{" "}
              </Link>
            </span>
            <select className="delDecore">
              <option value="ro">RO</option>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className="navBar2">
          <nav className="navBar">
            <button className="nav-bar-button bigger-button">
              <i className="fas fa-bars"></i>
            </button>
            <div>
              <h1>
                GOOD<span className="colorOrg">RENT</span>
              </h1>
            </div>
            <div className="marimea">
              <Link to="/" className="changeColor">
                <span>ACASA </span>
              </Link>
              <Link to="/cars" className="changeColor">
                <span>AUTOMOBILE</span>
              </Link>
              <span className="changeColor">SERVICII</span>
              <span className="changeColor">NOUTATI</span>
              <span className="changeColor">CONTACTE</span>
            </div>
            <div className="douaColoane">
              <p>
                <span className="maiMic">(+373)</span>68900001
              </p>
              <p>
                <span className="maiMic">(+373)</span>78080010
              </p>
              <button className="navButtons1">CAUTARE </button>

              <button className="navButtons2">
                <Link to="/Reservation" className="link-rezervare-button2">
                  REZERVARE
                </Link>
              </button>
            </div>
            <select className="delDecor2">
              <option value="ro">RU</option>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
          </nav>
        </div>
      </div>
    </div>
  );
}
export { NavBar };
