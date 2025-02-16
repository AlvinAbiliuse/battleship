export default class gameboard {
	column = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	row = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
	board = {};
	setBoard = () => {
		for (let i = 0; i < 10; i++) {
			for (let j in this.row) {
				this.board[`${this.column[i] + this.row[j]}`] = false;
			}
		}
	};
}
