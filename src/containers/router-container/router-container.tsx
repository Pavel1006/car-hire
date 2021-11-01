import { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { modules } from "../../modules";

import { NavBar } from "../../components/nav-bar";
import { Footer } from "../../components/footer";
import { SignUP } from "../../modules/sign-up/index";
import { LogIn } from "../../modules/log-in/index";
import { CarRentContext } from "../../context/CarRentProvider";

function RouterContainer() {
  const [register, setRegister] = useState(true);
  const { isLoggedIn } = useContext(CarRentContext);
  const handleCallback = (childData: boolean) => {
    setRegister(childData);
  };

  if (!isLoggedIn) {
    if (register) {
      return <SignUP parentCallback={handleCallback} register={register} />;
    }
    return <LogIn parentCallback={handleCallback} register={register} />;
  }
  return (
    <>
      <NavBar />
      <Switch>
        {modules.map((module) => (
          <Route {...module.routeProps} key={module.name} />
        ))}
      </Switch>
      <Footer />
    </>
  );
}
export { RouterContainer };
