import ThreePage from "@/pages/3A/Page";
import FourPage from "@/pages/4A/Page";
import FivePage from "@/pages/5A/Page";
import SixPage from "@/pages/6A/Page";
import Home from "@/pages/Home/Home";
import { Switch, Route } from "wouter";

const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/3a"} component={ThreePage} />
      <Route path={"/4a"} component={FourPage} />
      <Route path={"/5a"} component={FivePage} />
      <Route path={"/6a"} component={SixPage} />
    </Switch>
  );
};

export { Routes };
