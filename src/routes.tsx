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

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 		children: [
// 			{ path: "/", element: <AuthenticationPage /> },
// 			{ path: "/procedure", element: <TrheeaNDP /> },
// 			{ path: "/4", element: <FouraF /> },
// 			{ path: "/5", element: <FiveaETP /> },
// 			{ path: "/6", element: <SixaETP /> },
// 			{ path: "/7", element: <EightaPerg /> },
// 			{ path: "/8", element: <EightaETP /> },
// 			{ path: "/9", element: <TenaPPWG /> },
// 			{ path: "/10", element: <TenaECT /> },
// 			{ path: "/11", element: <ElevenaACT /> },
// 			{ path: "/12", element: <TwelveaCMH /> },
// 			{ path: "/13", element: <ThirteenaFeSeg /> },
// 			{ path: "/14", element: <FourteenFpSeg /> },
// 			{ path: "/15", element: <Fifeteen /> },
// 			{ path: "/16", element: <SixteenFgSeg /> },
// 			{ path: "/17", element: <SeventeenFcSeg /> },
// 			{ path: "/18", element: <EighteenNSeg /> },
// 			{ path: "/19", element: <NineTeenaC /> },
// 			{ path: "/20", element: <TwentyaCDE /> },
// 			{ path: "/21", element: <TwentyOneaAG /> },
// 			{ path: "/12", element: <TwentyTwoaPDCO /> },
// 			{ path: "/23", element: <TwentyThreeaAG /> },
// 			{ path: "/24", element: <TwentyFouraACD /> },
// 			{ path: "/25", element: <TwentyFivePCTDA /> },
// 			{ path: "/26", element: <TwentySixaPRI /> },
// 			{ path: "/27", element: <TwentySevenaCR /> },
// 			{ path: "/28", element: <TwentyEightaCR /> },
// 		],
// 	},
// ]);
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
