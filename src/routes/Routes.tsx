import ThreePage from "@/pages/3A/Page";
import FourPage from "@/pages/4A/Page";
import Home from "@/pages/Home/Home";
import { Switch, Route } from "wouter";

const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/3a"} component={ThreePage} />
      <Route path={"/4a"} component={FourPage} />
    </Switch>
  );
};

export { Routes };
