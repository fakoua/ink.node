let assert = require("assert");
const utils = require("../dist/utils");

describe("Utils", function() {
  describe("hexToAnsi", function() {
    it("Testing hexToAnsi", function() {
      assert.equal(utils.hexToAnsi("#ff0000").r, 255);
      assert.equal(utils.hexToAnsi("ff0000").r, 255);
      assert.equal(utils.hexToAnsi(" #ff0000").r, 255);
      assert.equal(utils.hexToAnsi(" ff0000").r, 255);
      assert.equal(utils.hexToAnsi("#32640c").r, 50);
      assert.equal(utils.hexToAnsi("#32640c").g, 100);
      assert.equal(utils.hexToAnsi("#32640c").b, 12);
    });

    it("Testing rgbToAnsi", function() {
      assert.equal(utils.rgbToAnsi("rgb(1,1,1)").r, 1);
      assert.equal(utils.rgbToAnsi("rgb(1,1,1)").g, 1);
      assert.equal(utils.rgbToAnsi("rgb(1,1,1)").b, 1);
      assert.equal(utils.rgbToAnsi(" rgb(10,1,1)").r, 10);
      assert.equal(utils.rgbToAnsi(" rgb(12,1,1)  ").r, 12);
      assert.equal(utils.rgbToAnsi(" RGB(8,1,1)  ").r, 8);
      assert.equal(utils.rgbToAnsi(" RGB(8 , 1, 1)  ").r, 8);
    });

    it("Testing rgbToAnsi loop", function() {
      for (let r = 0; r < 256; r++) {
        let rgbCalculated = utils.rgbToAnsi(`rgb(${r}, 0, 0)`);
        let rgbReal = { r: r, g: 0, b: 0 };
        assert.equal(rgbCalculated.r, rgbReal.r);
      }
    });
  });

  describe("normalizeColorString", function() {
    it("Testing normalizeColorString", function() {
      assert.equal(utils.normalizeColorString(" hello "), "hello");
      assert.equal(utils.normalizeColorString(" #hello "), "hello");
      assert.equal(utils.normalizeColorString(" #he llo "), "hello");
      assert.equal(utils.normalizeColorString(" # hEllO "), "hello");
    });
  });
});
