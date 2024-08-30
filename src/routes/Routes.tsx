import Page from "@/pages/3A/Page";
import Home from "@/pages/Home/Home";
import { Switch, Route } from "wouter";

const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/3a"} component={Page} />
    </Switch>
  );
};

export { Routes };
