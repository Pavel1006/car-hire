import { FetchData } from "../../services/sign-up.service";

function SignUP() {
  const submitSignUP = (e: any) => {
    e.preventDefault();
    const arrInput = [...e.target.elements].filter(
      (input: any) => input instanceof HTMLInputElement
    );
    const submitValues: Record<string, string> = {};
    for (const input of arrInput) {
      submitValues[input.id] = input.value;
    }
    //console.log(submitValues);
    const lastName = submitValues.lastName;
    const firstName = submitValues.firstName;
    const email = submitValues.email;
    const password = submitValues.password;
    FetchData(lastName, firstName, email, password);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitSignUP(e);
        }}
      >
        <label className="div-log-in">
          <p>First name: </p>
          <input id="firstName" className="input-log-in" />
        </label>
        <label className="div-log-in">
          <p>Last name: </p>
          <input type="text" id="lastName" className="input-log-in" />
        </label>
        <label className="div-log-in">
          <p>Email: </p>
          <input type="text" id="email" className="input-log-in" />
        </label>
        <label className="div-log-in">
          <p>Password: </p>
          <input type="password" id="password" className="input-log-in" />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}
export { SignUP };
