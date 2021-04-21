function NavBar() {
  return (
    <div>
      <div className="baraDeSus">
        <p>
          mun.Chisinau, Bd. Dacia 80/3 Aeroportul International Chisinau Sala
          Sosiri - oficiu GoodRent
        </p>
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
      <div>
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
      </div>
    </div>
  );
}
export { NavBar };
