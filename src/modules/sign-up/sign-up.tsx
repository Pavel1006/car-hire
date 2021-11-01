import { useState } from "react";

import { SignUpService } from "../../services/sign-up.service";

type SignUpProps = {
  register: boolean;
  parentCallback: (childData: boolean) => void;
};
function SignUP(props: SignUpProps) {
  const [showPassword, setShowPassword] = useState(true);
  // console.log(props.register);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const changePageLogIn = () => {
    props.parentCallback(false);
  };
  const submitSignUP = (e: any) => {
    e.preventDefault();
    const arrInput = [...e.target.elements].filter(
      (input: any) => input instanceof HTMLInputElement
    );
    const submitValues: Record<string, string> = {};
    for (const input of arrInput) {
      submitValues[input.id] = input.value;
    }
    //constants for service Sign Up
    const lastName = submitValues.lastName;
    const firstName = submitValues.firstName;
    const email = submitValues.email;
    const password = submitValues.password;
    SignUpService(lastName, firstName, email, password);
    console.log(submitValues);
  };
  //
  const [title, setTitle] = useState("");
  console.log(title);
  ///Upper Case
  const arrUpperCase = [];
  function isUpper(str: string) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
  }
  for (let i = 0; i < title.length; i++) {
    if (isUpper(title.charAt(i))) {
      arrUpperCase.push(true);
    } else {
      arrUpperCase.push(false);
    }
  }
  const resultsUpperCase = arrUpperCase.filter((value) => value === true);

  ////  lower Case
  let arrLowerCase = [];
  function isLower(str: string) {
    return !/[A-Z]/.test(str) && /[a-z]/.test(str);
  }
  for (let i = 0; i < title.length; i++) {
    if (isLower(title.charAt(i))) {
      arrLowerCase.push(true);
    } else {
      arrLowerCase.push(false);
    }
  }
  const resultsLowerCase = arrLowerCase.filter((value) => value === true);

  /////// Numbers
  let arrIsNumber = [];
  for (let i = 0; i < title.length; i++) {
    if (isNaN(parseInt(title.charAt(i), 10))) {
      arrIsNumber.push(false);
    } else {
      arrIsNumber.push(true);
    }
  }
  const resultsIsNumber = arrIsNumber.filter((value) => value === true);

  //symbols
  let symbols = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
  //            ^                                       ^
  let symbolResults = symbols.test(title);
  //

  return (
    <div className="center-log-in-sign-up1">
      <div className="align-center-log-in">
        <div>
          <h2 className="margin-bigger-log-in">Sign Up</h2>
        </div>
        <form
          onSubmit={(e) => {
            submitSignUP(e);
          }}
        >
          <label className="div-log-in">
            <div className="flex-information-log-in">
              <p className="font-weight-p">First name </p>
              <p>
                {" "}
                Already have an account!
                <span className="link-design" onClick={changePageLogIn}>
                  Log In
                </span>
              </p>
            </div>
            <input id="firstName" className="input-log-in" />
          </label>
          <label className="div-log-in">
            <p className="font-weight-p">Last name </p>
            <input type="text" id="lastName" className="input-log-in" />
          </label>
          <label className="div-log-in">
            <p className="font-weight-p">Email </p>
            <input type="text" id="email" className="input-log-in" />
          </label>
          <label className="div-log-in">
            <div className="flex-information-log-in">
              <p className="font-weight-p">Password </p>
              <div className="mid-toggle-hide">
                {showPassword === false ? (
                  <div className="">
                    <i className="far fa-eye smallerIconEye"></i>
                    <span className="cursor-span" onClick={toggleShowPassword}>
                      show
                    </span>
                  </div>
                ) : (
                  <div className="mid-toggle-hide">
                    <i className="far fa-eye-slash smallerIconEye mid-toggle-hide"></i>
                    <span className="cursor-span" onClick={toggleShowPassword}>
                      hide
                    </span>
                  </div>
                )}
              </div>
            </div>
            <input
              type={showPassword === true ? "password" : "text"}
              id="password"
              className="input-log-in"
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <ul className="grid-ul-description-password">
            <li
              className={
                resultsLowerCase[0] === true
                  ? "text-decoration-silver"
                  : "text-decoration-orange"
              }
            >
              <span>One lowercase character</span>
            </li>
            <li
              className={
                resultsIsNumber[0] === true
                  ? "text-decoration-silver"
                  : "text-decoration-orange"
              }
            >
              <span>One number</span>
            </li>
            <li
              className={
                resultsUpperCase[0] === true
                  ? "text-decoration-silver"
                  : "text-decoration-orange"
              }
            >
              <span>One uppercase character</span>
            </li>

            <li
              className={
                symbolResults === true
                  ? "text-decoration-silver"
                  : "text-decoration-orange"
              }
            >
              {" "}
              <span> One special character</span>
            </li>
            <li
              className={
                title.length >= 8
                  ? "text-decoration-silver"
                  : "text-decoration-orange"
              }
            >
              {" "}
              <span>8 characters minimum </span>
            </li>
          </ul>

          <button
            type="submit"
            onClick={changePageLogIn}
            className="design-button-log-in"
          >
            <h3>Sign Up</h3>
          </button>
        </form>
      </div>
    </div>
  );
}
export { SignUP };
