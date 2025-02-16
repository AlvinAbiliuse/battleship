let { ship } = require("./ship.js");

let ships = new ship();
let mockShips = jest.fn((shipHit) => {
	ships.shipHit.hit();
	return ships.shipHit.damage;
});

describe("gameboard", () => {
	test("hit() increases damage", () => {
		expect(mockGameboard("carrier")).toBe(1);
	});
});
