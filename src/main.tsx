import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TrheeaNDP } from "./routes/3aNDP.tsx";
import { FouraF } from "./routes/4aF.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <TrheeaNDP /> },
			{ path: "/inventario=1", element: <FouraF /> },
			{ path: "/inventario=2", element: <FiveaETP /> },
			{ path: "/inventario=3", element: <SixaETP /> },
			{ path: "/inventario=4", element: <EightaPerg /> },
			{ path: "/inventario=5", element: <EightaETP /> },
			{ path: "/inventario=6", element: <TenaPPWG /> },
			{ path: "/6", element: <TenaEACT /> },
			{ path: "/7", element: <ElevenaACT /> },
			{ path: "/9", element: <TwelveaCMH /> },
			{ path: "/metrical=25", element: <TwentyFivePCTDA /> },
			{ path: "/metrical=20", element: <TwentyaCDE /> },
			{ path: "/metrical=19", element: <NineTeenaC /> },
			{ path: "/form", element: <AuthenticationPage /> },
			{ path: "/13", element: <ThirteenaFeSeg /> },
			{ path: "/14", element: <FourteenFpSeg /> },
			{ path: "/15", element: <Fifeteen /> },
			{ path: "/17", element: <SeventeenFcSeg /> },
		],
	},
]);

import { ItemsProvider } from "./context/ItemsContext.tsx";
import { FiveaETP } from "./routes/5aETP.tsx";
import { SixaETP } from "./routes/6aETP.tsx";
import { EightaETP } from "./routes/8aQOV.tsx";
import { TwentyFivePCTDA } from "./routes/25aPCDTA.tsx";
import { TwentyaCDE } from "./routes/20aCDE.tsx";
import { NineTeenaC } from "./routes/19aC.tsx";
import { TenaPPWG } from "./routes/10aPPWG.tsx";
import { AuthenticationPage } from "./routes/authentication/page.tsx";
import { TenaEACT } from "./routes/10aECT.tsx";
import { ElevenaACT } from "./routes/11aACT.tsx";
import { TwelveaCMH } from "./routes/12aCMH.tsx";
import { ThirteenaFeSeg } from "./routes/13aFESeg/Page.tsx";
import { FourteenFpSeg } from "./routes/14aFpSeg/Page.tsx";
import EightaPerg from "./routes/85aPR.tsx";
import SeventeenFcSeg from "./routes/17aFcSeg/Page.tsx";
import Fifeteen from "./routes/15aFFSeg/Page.tsx";

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
