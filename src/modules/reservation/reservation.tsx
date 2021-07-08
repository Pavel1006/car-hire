function Reservation() {
  return (
    <div className="rezervare-bigg-div">
      <div className="div-log-in">
        {" "}
        <p>fuel:</p>
        <input className="input-log-in" type="text" />
      </div>
      <div className="div-log-in">
        <p> body:</p>
        <input className="input-log-in" type="text" />
      </div>
      <div className="div-log-in">
        <p>photos:</p> <input className="input-log-in" type="text" />
      </div>
      <div className="div-log-in">
        <p>brand:</p> <input className="input-log-in" type="text" />
      </div>
      <div className="div-log-in">
        <p>color:</p> <input className="input-log-in" type="text" />
      </div>
      <div className="div-log-in">
        <p>fabricationYear:</p> <input className="input-log-in" type="text" />
      </div>
      <div className="div-log-in">
        <p>registrationNumber:</p>{" "}
        <input className="input-log-in" type="text" />
      </div>
      <div className="div-log-in">
        <p>model:</p>
        <input className="input-log-in" type="text" />
      </div>
      <div className="div-log-in">
        <p>numberOfSeats:</p>
        <input className="input-log-in" type="text" />
      </div>
      <div className="div-log-in">
        <p>numberOfDoors:</p>
        <input className="input-log-in" type="text" />
      </div>
      <div className="div-log-in">
        <p>airCoditioning:</p>
        <select className="input-log-in" name="" id="">
          <option>yes</option>
          <option>no</option>
        </select>
      </div>
      <div className="div-log-in">
        <p>pricePerDay:</p>
        <input className="input-log-in" type="text" />
      </div>
      <div className="div-log-in">
        <p>id:</p>
        <input className="input-log-in" type="text" />
      </div>
    </div>
  );
}

export { Reservation };
