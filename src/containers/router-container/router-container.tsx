import { Switch, Route } from "react-router-dom";
import { modules } from "../../modules";

function RouterContainer() {
  return (
    <div>
      <Switch>
        {modules.map((module) => (
          <Route {...module.routeProps} />
        ))}
      </Switch>
    </div>
  );
}
export { RouterContainer };
