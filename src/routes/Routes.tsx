import useBearStore from "@/context/teste";
import Page from "@/pages/3A/Page";
import Home from "@/pages/Home/Home";
import { Switch, Route, Link } from "wouter";

const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/3a"} component={Page} />
    </Switch>
  );
};

export { Routes };
