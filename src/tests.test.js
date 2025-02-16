const { ships } = require("./ship.js");

let ship = new ships();
let mockShips = jest.fn((shipHit) => {
	gb.shipHit.hit();
	return gb.ship.damage;
});

describe("gameboard", () => {
	test("hit() increases damage", () => {
		expect(mockGameboard("carrier")).toBe(1);
	});
});
