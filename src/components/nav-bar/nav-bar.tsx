import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarRentContext } from "../../context/CarRentProvider";
type NavBarProps = {
  // successfulLogInFC: (childData: boolean) => void;
};
function NavBar(props: NavBarProps) {
  const [close, setClose] = useState(false);
  const { setIsLoggedIn } = useContext(CarRentContext);
  const closeNavBar = () => {
    setClose(!close);
  };
  const cleanLocaleStorage = () => {
    localStorage.removeItem("accessToken");
    // props.successfulLogInFC(true);
    setIsLoggedIn(false);
  };
  return (
    <div>
      <div className="barDeSus3">
        <div className="barDeSus">
          <p>
            mun. Chisinau, Bd. Dacia 80/3 Chisinau International Airport
            Arrivals Hall - GoodRent office
          </p>

          <div className="barDeSus2">
            <select className="del-decor-select-language-nav-bar">
              <option value="en">EN</option>
              <option value="ro">RO</option>
              <option value="ru">RU</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className="navBar2">
          <nav className="navBar">
            <button
              className="nav-bar-button bigger-button"
              onClick={closeNavBar}
            >
              <i
                className={close === false ? "fas fa-bars" : "fas fa-times"}
              ></i>
            </button>
            <div>
              <Link to="/" className="link-hire-button-two-nav-bar">
                <h1>
                  GOOD<span className="colorOrg">RENT</span>
                </h1>
              </Link>
            </div>
            <div className="div-width-link-from-pages">
              <Link to="/" className="changeColor">
                <span>HOME </span>
              </Link>
              <Link to="/cars" className="changeColor">
                <span>CARS</span>
              </Link>
              <span className="changeColor">SERVICES</span>
              <span className="changeColor">NEWS</span>
              <span className="changeColor">CONTACTS</span>
            </div>
            <div className="douaColoane">
              <p>
                <span className="maiMic">(+373)</span>68900001
              </p>
              <p>
                <span className="maiMic">(+373)</span>78080010
              </p>
              <button
                onClick={cleanLocaleStorage}
                className="navButtons1 link-rezervare-button2"
              >
                Log out
              </button>

              <i className="fas fa-user-circle user-icon-bigger"></i>
            </div>
            <select className="delDecor2">
              <option value="en">EN</option>
              <option value="ro">RO</option>
              <option value="ru">RU</option>
            </select>
          </nav>
        </div>
      </div>
      <div>
        {close === true ? (
          <div className="toggleNavBar" onClick={closeNavBar}>
            <Link to="/" className="changeColor">
              <span className="changeColor">HOME </span>
            </Link>
            <Link to="/cars" className="changeColor">
              <span className="changeColor">CARS</span>
            </Link>
            <span className="changeColor">SERVICES</span>
            <span className="changeColor">NEWS</span>
            <span className="changeColor margin-bottom-span-nav-bar">
              CONTACTS
            </span>
            <div className="log-out-design">
              <button
                onClick={cleanLocaleStorage}
                className="navButtons1 link-rezervare-button2 "
              >
                Log out
              </button>

              <i className="fas fa-user-circle user-icon-bigger inline-icon-user"></i>
            </div>
          </div>
        ) : (
          <p className="dispNone"></p>
        )}
      </div>
    </div>
  );
}
export { NavBar };
