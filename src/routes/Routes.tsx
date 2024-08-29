import useBearStore from "@/context/teste";
import Page from "@/pages/3A/Page";
import Home from "@/pages/Home/Home";
import { Switch, Route, Link } from "wouter";

const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/3a"} component={Page} />
      <Route path={"/teste2"} component={BearCounter} />
    </Switch>
  );
};

function BearCounter() {
  const bears = useBearStore((state) => state.bears);

  return (
    <>
      <Controls />
      <h1>{bears} around here ...</h1>
      <Link href="/teste2">asd</Link>
    </>
  );
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}

export { Routes };
