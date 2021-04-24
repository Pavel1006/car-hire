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
        <div></div>
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
          <h2 className="margin-h2-top">CHIRIE DE MASINI AUTO</h2>
          <div className="cars">
            <div className="decorCar">
              <img
                className="width-img"
                src="https://cdn.carbuzz.com/car-thumbnails/300x160/4000/500/4539.jpg"
                alt=""
              />
              <h1 className="mid-text-classes">BUISNESS</h1>
              <p className="mid-text-classes">CLASS</p>
            </div>
            <div className="decorCar">
              <img
                className="width-img"
                src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcms.haymarketindia.net%2Fmodel%2Fuploads%2Fmodelimages%2FX5ModelImage.jpg&h=300&w=450&c=1"
                alt=""
              />
              <h1 className="mid-text-classes">SUV</h1>
              <p className="mid-text-classes">CLASS</p>
            </div>
            <div className="decorCar">
              <img
                className="width-img"
                src="https://cars.usnews.com/static/images/Auto/izmo/i159613939/2020_dodge_grand_caravan_angularfront.jpg"
                alt=""
              />
              <h1 className="mid-text-classes">MINIVAN</h1>
              <p className="mid-text-classes">CLASS</p>
            </div>
            <div className="decorCar">
              <img
                className="width-img"
                src="https://images.hgmsites.net/hug/2021-tesla-model-3_100777876_h.jpg"
                alt=""
              />
              <h1 className="mid-text-classes">ELECTRIC</h1>
              <p className="mid-text-classes">CLASS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="autoMargin">
          <div className="information">
            <p>DESPRE NOI</p>
            <p>AUTOMOBILE</p>
            <p>NOUTATI</p>
            <p>CONTACTE</p>
            <p>REZERVARE</p>
            <p>HARTA SITE-ULUI</p>
            <p>CONDITII</p>
            <p>POLITICA DE CONFIDENTIALITATE</p>
          </div>
          <hr />
          <div className="information color-text">
            <p>
              <i className="material-icons">place</i> mun.Chisinau, Bd. Dacia
              80/3 Aeroportul International <br />
              Sala Sosiri - oficiu GoodRent
            </p>
            <p>
              <i className="material-icons">local_phone</i> (+373)68900001{" "}
              <br />
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
            <p>Copyright 2021. Realizare site-uri web Pavel</p>
            <div className="media">
              <i className="fab fa-instagram bigger color-insta"></i>
              <i className="fab fa-twitter bigger color-twitter"></i>
              <i className="fab fa-facebook-f bigger color-facebook"></i>
              <i className="fab fa-tiktok bigger color-tiktok"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Homepage };
