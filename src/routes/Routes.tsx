import Layout from "@/components/layout";
import ThreePage from "@/pages/3A/Page";
import FourPage from "@/pages/4A/Page";
import FivePage from "@/pages/5A/Page";
import SixPage from "@/pages/6A/Page";
import SevenPage from "@/pages/7A/Page";
import Home from "@/pages/Home/Home";

import { Routes as Switch, Route, Navigate } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<Layout />}>
        <Route path="3a" element={<ThreePage />} />
        <Route path="4a" element={<FourPage />} />
        <Route path="5a" element={<FivePage />} />
        <Route path="6a" element={<SixPage />} />
        <Route path="7a" element={<></>} />
      </Route>
    </Switch>
  );
};

export { AppRoutes };
