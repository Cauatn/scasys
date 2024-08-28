import useBearStore from "@/context/teste";
import Home from "@/pages/Home/Home";
import { Switch, Route, Link } from "wouter";

const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/teste"} component={BearCounter} />
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
