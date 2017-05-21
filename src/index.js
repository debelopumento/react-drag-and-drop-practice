import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Knight from "./Knight";
import Square from "./Square";
import Board from "./Board";
import { observe } from "./Game";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

observe(knightPosition =>
	ReactDOM.render(
		<Board knightPosition={knightPosition} />,
		document.getElementById("root")
	)
);

registerServiceWorker();
