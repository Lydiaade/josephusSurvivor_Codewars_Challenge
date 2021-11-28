const josephusSurvivor = require("./main.js");
describe("Tests", () => {
  it("test 1", () => {
    expect(josephusSurvivor(7, 3)).toEqual(4);
  });
  it("test 2", () => {
    expect(josephusSurvivor(11, 19)).toEqual(10);
  });
  it("test 3", () => {
    expect(josephusSurvivor(1, 300)).toEqual(1);
  });
  it("test 4", () => {
    expect(josephusSurvivor(14, 2)).toEqual(13);
  });
  it("test 5", () => {
    expect(josephusSurvivor(100, 1)).toEqual(100);
  });
});
