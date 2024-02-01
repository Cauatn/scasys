import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ItemsProvider } from "./context/ItemsContext.tsx";
import { FiveaETP } from "./routes/5aETP/Page.tsx";
import { TrheeaNDP } from "./routes/3aNDP.tsx";
import { FouraF } from "./routes/4aF/Page.tsx";
import { SixaETP } from "./routes//6aETP/Page.tsx";
import { EightaETP } from "./routes/8aQOV.tsx";
import { TwentyFivePCTDA } from "./routes/25aPCDTA.tsx";
import { TwentyaCDE } from "./routes/20aCDE.tsx";
import { NineTeenaC } from "./routes/19aC.tsx";
import { AuthenticationPage } from "./routes/authentication/page.tsx";
import { TenaEACT } from "./routes/10aECT.tsx";
import { ElevenaACT } from "./routes/11aACT.tsx";
import { TwelveaCMH } from "./routes/12aCMH.tsx";
import { ThirteenaFeSeg } from "./routes/13aFESeg/Page.tsx";
import { FourteenFpSeg } from "./routes/14aFpSeg/Page.tsx";
import EightaPerg from "./routes/85aPR.tsx";
import SeventeenFcSeg from "./routes/17aFcSeg/Page.tsx";
import Fifeteen from "./routes/15aFFSeg/Page.tsx";
import SixteenFgSeg from "./routes/16aFgSeg/Page.tsx";
import TwentySixaPRI from "./routes/26aPRI/Page.tsx";
import TwentySevenaCR from "./routes/27aCR/Page.tsx";
import TenaPPWG from "./routes/10aPPWG/Page.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/authentication", element: <AuthenticationPage /> },
			{ path: "/procedure", element: <TrheeaNDP /> },
			{ path: "/1", element: <FouraF /> },
			{ path: "/2", element: <FiveaETP /> },
			{ path: "/3", element: <SixaETP /> },
			{ path: "/4", element: <EightaPerg /> },
			{ path: "/5", element: <EightaETP /> },
			{ path: "/6", element: <TenaPPWG /> },
			{ path: "/7", element: <TenaEACT /> },
			{ path: "/8", element: <ElevenaACT /> },
			{ path: "/9", element: <TwelveaCMH /> },
			{ path: "/10", element: <TwentyFivePCTDA /> },
			{ path: "/11", element: <TwentyaCDE /> },
			{ path: "/12", element: <NineTeenaC /> },
			{ path: "/13", element: <ThirteenaFeSeg /> },
			{ path: "/14", element: <FourteenFpSeg /> },
			{ path: "/16", element: <SixteenFgSeg /> },
			{ path: "/15", element: <Fifeteen /> },
			{ path: "/17", element: <SeventeenFcSeg /> },
			{ path: "/26", element: <TwentySixaPRI /> },
			{ path: "/27", element: <TwentySevenaCR /> },
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
