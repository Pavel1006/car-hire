import { FetchData } from "../../services/log-in.service";

function LogIn() {
  const submitLogIn = (e: any) => {
    e.preventDefault();
    const arrInput = [...e.target.elements].filter(
      (input: any) => input instanceof HTMLInputElement
    );
    const submitValues: Record<string, string> = {};
    for (const input of arrInput) {
      submitValues[input.id] = input.value;
    }
    const email = submitValues.email;
    const password = submitValues.password;
    FetchData(email, password);
    //console.log(submitValues);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitLogIn(e);
        }}
      >
        <label className="div-log-in">
          <p>Email: </p>
          <input id="email" className="input-log-in" />
        </label>
        <label className="div-log-in">
          <p>Password: </p>
          <input type="password" id="password" className="input-log-in" />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export { LogIn };
