import { Link } from "react-router-dom";

function CarsPage() {
  return (
    <div className="backgroundCar">
      <div className="width-page-car">
        <h2 className="margin-h2-top">CHIRIE DE MASINI AUTO</h2>
        <div className="cars">
          <Link
            to="cars/buisness-cars"
            className="delete-link-dom-decor-cars-page"
          >
            <img
              className="width-img"
              src="https://cdn.carbuzz.com/car-thumbnails/300x160/4000/500/4539.jpg"
              alt=""
            />
            <h1 className="mid-text-classes">BUISNESS</h1>
            <p className="mid-text-classes">CLASS</p>
          </Link>
          <Link to="cars/suv-cars" className="delete-link-dom-decor-cars-page">
            <img
              className="width-img"
              src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcms.haymarketindia.net%2Fmodel%2Fuploads%2Fmodelimages%2FX5ModelImage.jpg&h=300&w=450&c=1"
              alt=""
            />
            <h1 className="mid-text-classes">SUV</h1>
            <p className="mid-text-classes">CLASS</p>
          </Link>
          <Link
            to="cars/minivan-cars"
            className="delete-link-dom-decor-cars-page"
          >
            <img
              className="width-img"
              src="https://cars.usnews.com/static/images/Auto/izmo/i159613939/2020_dodge_grand_caravan_angularfront.jpg"
              alt=""
            />
            <h1 className="mid-text-classes">MINIVAN</h1>
            <p className="mid-text-classes">CLASS</p>
          </Link>
          <Link
            to="cars/economic-cars"
            className="delete-link-dom-decor-cars-page"
          >
            <img
              className="width-img width-img-eco-car"
              src="https://www.motortrend.com/uploads/sites/5/2020/06/2020-tesla-model-3.png?fit=around%7C875:492.1875"
              alt=""
            />
            <h1 className="mid-text-classes">ECONOMIC</h1>
            <p className="mid-text-classes">CLASS</p>
          </Link>
        </div>
      </div>
      <div className="infoBeforeCars">
        <p className="color-change-silver">
          Căutați mașini confortabile cu interior curat și opțiunile necesare
          pentru o conducere plăcută? Chiria zilnică de mașini de la compania
          VIPRent se efectuează cu livrarea de autovehicule în municipiul
          Chișinău și în zona aeroportului absolut gratuit, oricând, 24 de ore,
          365 de zile pe an.
        </p>
        <p className="color-change-silver">
          {" "}
          Dacă sunteți interesat în închirierea unei mașini, prețuri și
          condiții, vă aflați pe pagina potrivită. Costul serviciului depinde de
          clasa mașinii selectate și perioada de închiriere. Oferim condiții
          favorabile - cu cât perioada de închiriere este mai lungă, cu atât
          este mai avantajoasă închirierea automobilului.
        </p>
        <h2>Automobile de la GoodRent</h2>
        <p className="color-change-silver">
          Specialiștii companiei au analizat prețurile de pe piață și au format
          o politică de prețuri convenabila pentru fiecare dintre voi. În
          funcție de nevoile dvs., puteți alege o mașină și închiria automobilul
          pentru o zi, din clasele prezentate, următoarele mărci: Audi, BMW,
          Mercedes, Hyundai, Toyota, Volkswagen, Skoda, Nissan, KIA, Renault.
        </p>
      </div>
    </div>
  );
}
export { CarsPage };
