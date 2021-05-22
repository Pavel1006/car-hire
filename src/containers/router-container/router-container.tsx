import { Switch, Route } from "react-router-dom";
import { modules } from "../../modules";

import { NavBar } from "../../components/nav-bar";
import { Footer } from "../../components/footer";

function RouterContainer() {
  return (
    <div>
      <NavBar />
      <Switch>
        {modules.map((module) => (
          <Route {...module.routeProps} />
        ))}
      </Switch>
      <Footer />
    </div>
  );
}
export { RouterContainer };
