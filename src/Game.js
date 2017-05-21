let knightPosition = [0, 0];
let observer = null;

function emitChange() {
	observer(knightPosition);
}

export function observe(o) {
	if (observer) {
		throw new Error("Multiple observers not implemented");
	}
	observer = o;
	emitChange();
}

export function canMoveKnight(toX, toY) {
	const [x, y] = knightPosition;
	const distanceX = toX - x;
	const distanceY = toY - y;

	return (
		(Math.abs(distanceX) === 2 && Math.abs(distanceY) === 1) ||
		(Math.abs(distanceX) === 1 && Math.abs(distanceY) === 2)
	);
}

export function moveKnight(toX, toY) {
	knightPosition = [toX, toY];
	emitChange();
}
