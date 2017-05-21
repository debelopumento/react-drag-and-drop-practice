import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Square from "./Square";
import Knight from "./Knight";
import { moveKnight, canMoveKnight } from "./Game";

export default class Board extends PureComponent {
	static propTypes = {
		knightPosition: PropTypes.arrayOf(PropTypes.number.isRequred).isRequred
	};

	handleSquareClick(toX, toY) {
		if (canMoveKnight(toX, toY)) {
			moveKnight(toX, toY);
		}
	}

	renderSquare(i) {
		const x = i % 8;
		const y = Math.floor(i / 8);
		const black = (x + y) % 2 === 1;

		const [knightX, knightY] = this.props.knightPosition;
		const piece = x === knightX && y === knightY ? <Knight /> : null;

		return (
			<div
				key={i}
				style={{
					width: 50,
					height: 50
				}}
				onClick={() => this.handleSquareClick(x, y)}
			>
				<Square black={black}>
					{piece}
				</Square>
			</div>
		);
	}

	render() {
		const squares = [];
		for (let i = 0; i < 64; i++) {
			squares.push(this.renderSquare(i));
		}
		return (
			<div
				style={{
					width: 400,
					display: "flex",
					flexWrap: "wrap"
				}}
			>
				{squares}
			</div>
		);
	}
}
