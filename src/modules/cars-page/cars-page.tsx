import { Link } from "react-router-dom";

function CarsPage() {
  return (
    <div className="backgroundCar">
      <div className="width-page-car">
        <h2 className="margin-h2-top">CAR RENTAL</h2>
        <div className="cars">
          <Link to="cars/Sedan" className="delete-link-dom-decor-cars-page">
            <img
              className="width-img"
              src="https://cdn.carbuzz.com/car-thumbnails/300x160/4000/500/4539.jpg"
              alt=""
            />
            <h1 className="mid-text-classes">BUSINESS</h1>
            <p className="mid-text-classes">CLASS</p>
          </Link>
          <Link to="cars/Suv" className="delete-link-dom-decor-cars-page">
            <img
              className="width-img"
              src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3A%2F%2Fcms.haymarketindia.net%2Fmodel%2Fuploads%2Fmodelimages%2FX5ModelImage.jpg&h=300&w=450&c=1"
              alt=""
            />
            <h1 className="mid-text-classes">SUV</h1>
            <p className="mid-text-classes">CLASS</p>
          </Link>
          <Link to="cars/Minivan" className="delete-link-dom-decor-cars-page">
            <img
              className="width-img"
              src="https://cars.usnews.com/static/images/Auto/izmo/i159613939/2020_dodge_grand_caravan_angularfront.jpg"
              alt=""
            />
            <h1 className="mid-text-classes">MINIVAN</h1>
            <p className="mid-text-classes">CLASS</p>
          </Link>
          <Link to="cars/PickUp" className="delete-link-dom-decor-cars-page">
            <img
              className="width-img width-img-eco-car"
              src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Nissan-Navara-dual-cab.png"
              alt=""
            />
            <h1 className="mid-text-classes">PICK UP</h1>
            <p className="mid-text-classes">CLASS</p>
          </Link>
        </div>
      </div>
      <div className="infoBeforeCars">
        <p className="color-change-silver">
          Look for comfortable cars with a clean interior and the necessary
          options for pleasant driving? Daily car rental from the company
          VIPRent is carried out with the delivery of vehicles in the
          municipality Chisinau and the airport area absolutely free, anytime,
          24 hours, 365 days a year.
        </p>
        <p className="color-change-silver">
          {" "}
          If you are interested in renting a car, prices and conditions, you are
          on the right page. The cost of the service depends on the class of the
          selected car and the rental period. We offer conditions favorable -
          the longer the rental period it is more advantageous to rent a car.
        </p>
        <h2>GoodRent car</h2>
        <p className="color-change-silver">
          The company's specialists analyzed the market prices and formed a
          convenient pricing policy for each of you. In the Depending on your
          needs, you can choose a car and rent a car for one day, from the
          classes presented, the following brands: Audi, BMW, Mercedes, Hyundai,
          Toyota, Volkswagen, Skoda, Nissan, KIA, Renault.
        </p>
      </div>
    </div>
  );
}

export { CarsPage };
