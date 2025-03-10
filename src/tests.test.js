let { player } = require("./ship.js");

console.log(player);
let mockShips = jest.fn((shipHit) => {
	player[ship].shipHit.hit();
	return player[ship].shipHit.damage;
});

describe("gameboard", () => {
	test("hit() increases damage", () => {
		expect(mockShips("carrier")).toBe(1);
	});
});
