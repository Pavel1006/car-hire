function LogIn() {
  return (
    <div>
      <form>
        <label className="div-log-in">
          <p>Firts name: </p>
          <input className="input-log-in" />
        </label>
        <label className="div-log-in">
          <p>Last name: </p>
          <input type="text" className="input-log-in" />
        </label>
        <label className="div-log-in">
          <p>Email: </p>
          <input type="text" className="input-log-in" />
        </label>
        <label className="div-log-in">
          <p>Password: </p>
          <input type="password" className="input-log-in" />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}
export { LogIn };
