import { useRouteMatch } from "react-router";

function Cars() {
  const router = useRouteMatch<{ type: string }>();
  console.log(router.params.type);
  return <div>MinivanCars</div>;
}
export { Cars };
