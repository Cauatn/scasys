import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ItemsProvider } from "./context/ItemsContext.tsx";
import { FiveaETP } from "./routes/5aETP/Page.tsx";
import { FouraF } from "./routes/4aF/Page.tsx";
import { SixaETP } from "./routes/6aETP/Page.tsx";
import { AuthenticationPage } from "./routes/authentication/page.tsx";
import TwelveaCMH from "./routes/12aCMH/Page.tsx";
import { ThirteenaFeSeg } from "./routes/13aFESeg/Page.tsx";
import { FourteenFpSeg } from "./routes/14aFpSeg/Page.tsx";
import EightaPerg from "./routes/85aPR/Page.tsx";
import SeventeenFcSeg from "./routes/17aFcSeg/Page.tsx";
import Fifeteen from "./routes/15aFFSeg/Page.tsx";
import SixteenFgSeg from "./routes/16aFgSeg/Page.tsx";
import TwentySixaPRI from "./routes/26aPRI/Page.tsx";
import TwentySevenaCR from "./routes/27aCR/Page.tsx";
import TenaPPWG from "./routes/10aPPWG/Page.tsx";
import TenaECT from "./routes/10aECT/Page.tsx";
import ElevenaACT from "./routes/11aACT/Pages.tsx";
import EighteenNSeg from "./routes/18nSeg/Page.tsx";
import NineTeenaC from "./routes/19aCat/Page.tsx";
import TwentyaCDE from "./routes/20aCDE/Page.tsx";
import TwentyOneaAG from "./routes/21aAG/Page.tsx";
import TwentyTwoaPDCO from "./routes/22aPDCO/Page.tsx";
import TwentyThreeaAG from "./routes/23aFQN/Page.tsx";
import TwentyFouraACD from "./routes/24aACID/Page.tsx";
import TwentyFivePCTDA from "./routes/20aPCTDA/Page.tsx";
import TwentyEightaCR from "./routes/28MTR/Page.tsx";
import TrheeaNDP from "./routes/3aNDP/Page.tsx";
import EightaETP from "./routes/8aQOV/Page.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <AuthenticationPage /> },
			{ path: "/procedure", element: <TrheeaNDP /> },
			{ path: "/4", element: <FouraF /> },
			{ path: "/5", element: <FiveaETP /> },
			{ path: "/6", element: <SixaETP /> },
			{ path: "/7", element: <EightaPerg /> },
			{ path: "/8", element: <EightaETP /> },
			{ path: "/9", element: <TenaPPWG /> },
			{ path: "/10", element: <TenaECT /> },
			{ path: "/11", element: <ElevenaACT /> },
			{ path: "/12", element: <TwelveaCMH /> },
			{ path: "/13", element: <ThirteenaFeSeg /> },
			{ path: "/14", element: <FourteenFpSeg /> },
			{ path: "/15", element: <Fifeteen /> },
			{ path: "/16", element: <SixteenFgSeg /> },
			{ path: "/17", element: <SeventeenFcSeg /> },
			{ path: "/18", element: <EighteenNSeg /> },
			{ path: "/19", element: <NineTeenaC /> },
			{ path: "/20", element: <TwentyaCDE /> },
			{ path: "/21", element: <TwentyOneaAG /> },
			{ path: "/12", element: <TwentyTwoaPDCO /> },
			{ path: "/23", element: <TwentyThreeaAG /> },
			{ path: "/24", element: <TwentyFouraACD /> },
			{ path: "/25", element: <TwentyFivePCTDA /> },
			{ path: "/26", element: <TwentySixaPRI /> },
			{ path: "/27", element: <TwentySevenaCR /> },
			{ path: "/28", element: <TwentyEightaCR /> },
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<ItemsProvider>
				<RouterProvider router={router} />
			</ItemsProvider>
		</React.StrictMode>,
	);
} else {
	console.error("Root element with ID 'root' not found in the DOM");
}
