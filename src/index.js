import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Knight from "./Knight";
import Square from "./Square";
import Board from "./Board";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
	<Board knightPosition={[0, 0]} />,
	document.getElementById("root")
);
registerServiceWorker();
