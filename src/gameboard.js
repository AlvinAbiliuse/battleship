class gameboard {
	column = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	row = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
	board = {};
	setBoard = () => {
		this.column.forEach((i) => {
			this.row.forEach((j) => {
				this.board[`${i + "-" + j}`] = [false, "notOccupied"];
			});
		});
	};
	placeShips = ([ship, place]) => {};
	recieveAttack = (place) => {
		this.board[place][0] = true;
	};
}

export default gameboard;
module.exports = gameboard;
