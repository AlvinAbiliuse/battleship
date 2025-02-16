let { ship } = require("./ship.js");

let mockShips = jest.fn((shipHit) => {
	let ships = new ship();
	ships.shipHit.hit();
	return ships.shipHit.damage;
});

describe("gameboard", () => {
	test("hit() increases damage", () => {
		expect(mockGameboard("carrier")).toBe(1);
	});
});
