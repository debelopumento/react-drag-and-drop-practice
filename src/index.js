import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Knight from "./Knight";
import Square from "./Square";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
	<Square black>
		<Knight />
	</Square>,
	document.getElementById("root")
);
registerServiceWorker();
