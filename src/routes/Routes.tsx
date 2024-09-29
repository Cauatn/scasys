import Layout from "@/components/layout";
import ThreePage from "@/pages/3A/Page";
import FourPage from "@/pages/4A/Page";
import FivePage from "@/pages/5A/Page";
import SixPage from "@/pages/6A/Page";
import SevenPage from "@/pages/7A/Page";
import EigthPage from "@/pages/8A/Page";
import Auth from "@/pages/Auth/Auth";
import Home from "@/pages/Home/Home";

import { Routes as Switch, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/app" element={<Layout />}>
        <Route path="3a" element={<ThreePage />} />
        <Route path="4a" element={<FourPage />} />
        <Route path="5a" element={<FivePage />} />
        <Route path="6a" element={<SixPage />} />
        <Route path="7a" element={<SevenPage />} />
        <Route path="8a" element={<EigthPage />} />
      </Route>
    </Switch>
  );
};

export { AppRoutes };
