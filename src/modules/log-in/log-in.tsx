import { useContext, useState } from "react";
import { CarRentContext } from "../../context/CarRentProvider";
import { LogInService } from "../../services/log-in.service";

type LogInProps = {
  register: boolean;
  parentCallback: (childData: boolean) => void;
};
function LogIn(props: LogInProps) {
  const [showPassword, setShowPassword] = useState(true);
  // console.log(props.register);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const changePageSignUp = () => {
    props.parentCallback(true);
  };
  const { setIsLoggedIn } = useContext(CarRentContext);
  const submitLogIn = (e: any) => {
    e.preventDefault();
    const arrInput = [...e.target.elements].filter(
      (input: any) => input instanceof HTMLInputElement
    );
    const submitValues: Record<string, string> = {};
    for (const input of arrInput) {
      submitValues[input.id] = input.value;
    }
    const saveTokenInLocalStorage = (tokenDetails: any) => {
      localStorage.setItem("accessToken", JSON.stringify(tokenDetails));
      setIsLoggedIn(true);
    };
    const email = submitValues.email;
    const password = submitValues.password;
    LogInService(email, password)
      .then((response) => {
        if (response.status === 401) {
          alert("try again");
          return;
        }
        saveTokenInLocalStorage(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(submitValues);
  };
  return (
    <div className="">
      <div className="align-center-log-in">
        <div>
          <h2 className="margin-bigger-log-in">Log In</h2>
        </div>
        <form
          onSubmit={(e) => {
            submitLogIn(e);
          }}
        >
          <label className="div-log-in">
            <div className="flex-information-log-in">
              <p className="eliminate-margin-p-tag">Email </p>
              <p className="eliminate-margin-p-tag1">
                Need an account?
                <span className="link-design" onClick={changePageSignUp}>
                  Sign up
                </span>
              </p>
            </div>
            <input id="email" className="input-log-in" />
          </label>
          <label className="div-log-in">
            <div className="flex-information-log-in">
              <p className="eliminate-margin-p-tag">Password </p>
              <div>
                {showPassword === false ? (
                  <div>
                    <i className="far fa-eye smallerIconEye"></i>
                    <span className="cursor-span" onClick={toggleShowPassword}>
                      show
                    </span>
                  </div>
                ) : (
                  <div>
                    <i className="far fa-eye-slash smallerIconEye"></i>
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
            />
          </label>

          <button
            type="submit"
            className="design-button-log-in"
            // onClick={successfulLogInFCM}
          >
            <h3>Log In</h3>
          </button>
        </form>
      </div>
    </div>
  );
}
export { LogIn };
