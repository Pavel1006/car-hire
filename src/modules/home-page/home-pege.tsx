import { NavBar } from "../../nav-bar";

function Homepage() {
  return (
    <div className="body">
      {/*<NavBar />*/}
      <div className="baraDeSus">
        <p>
          mun.Chisinau, Bd. Dacia 80/3 Aeroportul International Chisinau Sala
          Sosiri - oficiu GoodRent
        </p>{" "}
        <div className="baraDeSus2">
          <span>Autentificare |</span>
          <span> Iregistrare |</span>
          <select className="delDecore">
            <option value="ro">RU</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
        </div>
      </div>
      <div className="background">
        <nav className="navBar">
          <div>
            <h1>
              GOOD<span className="colorOrg">RENT</span>
            </h1>
          </div>
          <div className="marimea">
            <span className="changeColor">DESPRE NOI </span>
            <span className="changeColor">AUTOMOBILE</span>
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
            <button className="navButtons1">CAUTARE</button>
            <button className="navButtons2">REZERVARE</button>
          </div>
        </nav>
        <div className="bordDeInchiriere">
          <div className="backOrg">
            <h2>ARENDA MASINI IN CHISINAU</h2>
            <p className="somller-text">
              INTALNIRE LA AEROPORT SI ALTE SERVICII
            </p>
          </div>
          <div className="inchiriere">
            <select className="elimDecor">
              <option value="">Locatie preluare</option>
              <option value="">Chisinau Aeroport </option>
              <option value="">Chisinau Centru </option>
            </select>
            <div className="grid-row">
              <input className="deleFocus" type="text" placeholder="dd/mm/yy" />
              <input className="deleFocus" type="text" placeholder="00:00" />
            </div>
            <select className="elimDecor">
              <option value="">Locatie predare </option>
              <option value="">Chisinau Aeroport </option>
              <option value="">Chisinau Centru </option>
            </select>
            <div className="grid-row">
              <input className="deleFocus" type="text" placeholder="dd/mm/yy" />
              <input className="deleFocus" type="text" placeholder="00:00" />
            </div>
            <input className="deleFocus" type="text" placeholder="Virsta" />
            <button className="autoButton">ALEGE AUTOMOBIL</button>
          </div>
        </div>
      </div>
      <div className="backgroundCar">
        <div className="width-page-car">
          <h2>CHIRIE DE MASINI AUTO</h2>
          <div className="cars">
            <div className="decorCar">
              <img
                className="width-img"
                src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcms.haymarketindia.net%2Fmodel%2Fuploads%2Fmodelimages%2FRXModelImage.jpg&h=300&w=450&q=100"
                alt=""
              />
              <h1 className="mid-text-classes">LEXUS</h1>
              <p className="mid-text-classes">CLASS</p>
            </div>
            <div className="decorCar">
              <img
                className="width-img"
                src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcms.haymarketindia.net%2Fmodel%2Fuploads%2Fmodelimages%2FX5ModelImage.jpg&h=300&w=450&c=1"
                alt=""
              />
              <h1 className="mid-text-classes">BMW</h1>
              <p className="mid-text-classes">CLASS</p>
            </div>
            <div className="decorCar">
              <img
                className="width-img"
                src="https://cars.usnews.com/static/images/Auto/izmo/i113293111/2019_audi_a6_angularfront.jpg"
                alt=""
              />
              <h1 className="mid-text-classes">AUDI</h1>
              <p className="mid-text-classes">CLASS</p>
            </div>
            <div className="decorCar">
              <img
                className="width-img"
                src="https://images.carandbike.com/car-images/large/mercedes-benz/g-class/mercedes-benz-g-class.jpg?v=3"
                alt=""
              />
              <h1 className="mid-text-classes">MERCEDES-BENZ</h1>
              <p className="mid-text-classes">CLASS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Homepage };
