import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import "./index.css";
import TrheeaNDP from "./routes/3aNDP/Page";
import { FouraF } from "./routes/4aF/Page";
import { FiveaETP } from "./routes/5aETP/Page";
import { SixaETP } from "./routes/6aETP/Page";
import EightaPerg from "./routes/85aPR/Page";
import NotFound from "./routes/NotFound/Page";
import { AuthenticationPage } from "./routes/authentication/page";

export default function AppRouter() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<AuthenticationPage />} />
          <Route path="/" element={<TopNavbar toggleReturnButton={false} />}>
            <Route path="procedure" element={<TrheeaNDP />} />
          </Route>
          <Route path="/inventario" element={<TopNavbar />}>
            <Route path="1" element={<FouraF />} />
            <Route path="2" element={<FiveaETP />} />
            <Route path="3" element={<SixaETP />} />
            <Route path="4" element={<EightaPerg />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}
