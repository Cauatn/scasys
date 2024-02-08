import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import "./index.css";
import TenaECT from "./routes/10aECT/Page";
import TenaPPWG from "./routes/10aPPWG/Page";
import ElevenaACT from "./routes/11aACT/Pages";
import TwelveaCMH from "./routes/12aCMH/Page";
import { ThirteenaFeSeg } from "./routes/13aFESeg/Page";
import { FourteenFpSeg } from "./routes/14aFpSeg/Page";
import Fifeteen from "./routes/15aFFSeg/Page";
import SixteenFgSeg from "./routes/16aFgSeg/Page";
import SeventeenFcSeg from "./routes/17aFcSeg/Page";
import EighteenNSeg from "./routes/18nSeg/Page";
import NineTeenaC from "./routes/19aCat/Page";
import TwentyaCDE from "./routes/20aCDE/Page";
import TwentyFivePCTDA from "./routes/20aPCTDA/Page";
import TwentyOneaAG from "./routes/21aAG/Page";
import TwentyTwoaPDCO from "./routes/22aPDCO/Page";
import TwentyThreeaAG from "./routes/23aFQN/Page";
import TwentyFouraACD from "./routes/24aACID/Page";
import TwentySixaPRI from "./routes/26aPRI/Page";
import TwentySevenaCR from "./routes/27aCR/Page";
import TwentyEightaCR from "./routes/28MTR/Page";
import TrheeaNDP from "./routes/3aNDP/Page";
import { FouraF } from "./routes/4aF/Page";
import { FiveaETP } from "./routes/5aETP/Page";
import { SixaETP } from "./routes/6aETP/Page";
import EightaPerg from "./routes/85aPR/Page";
import EightaETP from "./routes/8aQOV/Page";
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
          <Route path="/inventory" element={<TopNavbar />}>
            <Route index element={<FouraF />} />
            <Route path="2" element={<FiveaETP />} />
            <Route path="3" element={<SixaETP />} />
            <Route path="4" element={<EightaPerg />} />
            <Route path="5" element={<EightaETP />} /> //zezao veio ate aqui
          </Route>
          <Route path="/ppwg" element={<TopNavbar />}>
            <Route index element={<TenaPPWG />} /> //falta deixar essa pagina responsiva
          </Route>
          <Route path="/etc" element={<TopNavbar />}>
            <Route path="1" element={<TenaECT />} />
          </Route>
          <Route path="/atc" element={<TopNavbar />}>
            <Route path="1" element={<ElevenaACT />} />
          </Route>
          <Route path="/cmh" element={<TopNavbar />}>
            <Route path="1" element={<TwelveaCMH />} />
          </Route>
          <Route path="/ps" element={<TopNavbar />}>
            <Route path="1" element={<ThirteenaFeSeg />} />
            <Route path="2" element={<FourteenFpSeg />} />
            <Route path="3" element={<Fifeteen />} />
            <Route path="4" element={<SixteenFgSeg />} />
            <Route path="5" element={<SeventeenFcSeg />} />
            <Route path="6" element={<EighteenNSeg />} />
          </Route>
          <Route path="/ce" element={<TopNavbar />}>
            <Route path="1" element={<NineTeenaC />} />
          </Route>
          <Route path="/eec" element={<TopNavbar />}>
            <Route path="1" element={<TwentyaCDE />} />
          </Route>
          <Route path="/gw" element={<TopNavbar />}>
            <Route path="1" element={<TwentyOneaAG />} />
          </Route>
          <Route path="/oldp" element={<TopNavbar />}>
            <Route path="1" element={<TwentyTwoaPDCO />} />
            <Route path="2" element={<TwentyThreeaAG />} />
          </Route>
          <Route path="/ap" element={<TopNavbar />}>
            <Route path="1" element={<TwentyFouraACD />} />
          </Route>
          <Route path="/cdtpw" element={<TopNavbar />}>
            <Route path="1" element={<TwentyFivePCTDA />} />
          </Route>
          <Route path="/pri" element={<TopNavbar />}>
            <Route path="1" element={<TwentySixaPRI />} />
          </Route>
          <Route path="/rc" element={<TopNavbar />}>
            <Route path="1" element={<TwentySevenaCR />} />
            <Route path="2" element={<TwentyEightaCR />} />
          </Route>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </main>
    </Router>
  );
}
