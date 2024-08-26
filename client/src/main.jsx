import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import store from "./redux/store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<ThemeProvider>
			{/* ToastConatiner For Status -- Error, Success, Failed */}
			<ToastContainer className="z-50" />
			<RouterProvider router={router} />
		</ThemeProvider>
	</Provider>
);
