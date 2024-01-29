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
			{ path: "/inventario=4", element: <EightaETP /> },
			{ path: "/inventario=5", element: <NineaPGR /> },
			{ path: "/metrical=25", element: <TwentyFivePCTDA /> },
			{ path: "/metrical=20", element: <TwentyaCDE /> },
			{ path: "/metrical=19", element: <NineTeenaC /> },
			{ path: "/form", element: <AuthenticationPage /> },
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
import { NineaPGR } from "./routes/9aPGR.tsx";
import { AuthenticationPage } from "./routes/authentication/page.tsx";

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
