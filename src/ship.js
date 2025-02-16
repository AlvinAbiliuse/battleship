export default class ship {
	carrier = {
		size: 5,
		damage: 0,
		hit: () => this.carrier.damage++,
		isSunk: () => this.carrier.damage === this.carrier.size,
	};
	battleship = {
		size: 4,
		damage: 0,
		hit: () => this.battleship.damage++,
		isSunk: () => this.battleship.damage === this.battleship.size,
	};
	destroyer = {
		size: 3,
		damage: 0,
		hit: () => this.destroyer.damage++,
		isSunk: () => this.destroyer.damage === this.destroyer.size,
	};
	submarine = {
		size: 3,
		damage: 0,
		hit: () => this.submarine.damage++,
		isSunk: () => this.submarine.damage === this.submarine.size,
	};
	patrolBoat = {
		size: 2,
		damage: 0,
		hit: () => this.patrolBoat.damage++,
		isSunk: () => this.patrolBoat.damage === this.patrolBoat.size,
	};
}
