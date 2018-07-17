const reducedForm = require("../dist/ReducedForm");

describe("reduced form not contain arguments with 0 coefficient", () => {
  test("first coefficient is 0", () => {
    const polynomial = {
      "0": 0,
      "1": 2,
    };
    expect(reducedForm(polynomial)).toBe("2 * X = 0");
  });

  test("second coefficient is 0", () => {
    const polynomial = {
      "0": 6,
      "1": 0,
    };
    expect(reducedForm(polynomial)).toBe("6 = 0");
  });
});

describe("natural form", () => {
  describe("polinomial degree is 1", () => {
    test("no first coefficient and second is positive", () => {
      const polynomial = {
        "1": 8,
      };
      expect(reducedForm(polynomial)).toBe("8 * X = 0");
    });

    test("no first coefficient and second is negative", () => {
      const polynomial = {
        "1": -8,
      };
      expect(reducedForm(polynomial)).toBe("-8 * X = 0");
    });

    test("no first coefficient and second is -1", () => {
      const polynomial = {
        "1": -1,
      };
      expect(reducedForm(polynomial)).toBe("-X = 0");
    });

    test("no first coefficient and second is 1", () => {
      const polynomial = {
        "1": 1,
      };
      expect(reducedForm(polynomial)).toBe("X = 0");
    });

    test("no first coefficient and second is 0", () => {
      const polynomial = {
        "1": 0,
      };
      expect(reducedForm(polynomial)).toBe("0 = 0");
    });

    test("second coefficient is 1", () => {
      const polynomial = {
        "0": -2,
        "1": 1,
      };
      expect(reducedForm(polynomial)).toBe("-2 + X = 0");
    });

    test("second coefficient is -1", () => {
      const polynomial = {
        "0": -2,
        "1": -1,
      };
      expect(reducedForm(polynomial)).toBe("-2 - X = 0");
    });

    test("second coefficient is 0", () => {
      const polynomial = {
        "0": -2,
        "1": 0,
      };
      expect(reducedForm(polynomial)).toBe("-2 = 0");
    });

    test("first coefficient is 0 and second is 0", () => {
      const polynomial = {
        "0": 0,
        "1": 0,
      };
      expect(reducedForm(polynomial)).toBe("0 = 0");
    });

    test("second coefficient greater than 1", () => {
      const polynomial = {
        "0": 3,
        "1": 4,
      };
      expect(reducedForm(polynomial)).toBe("3 + 4 * X = 0");
    });

    test("second coefficient less than -1", () => {
      const polynomial = {
        "0": 3,
        "1": -4,
      };
      expect(reducedForm(polynomial)).toBe("3 - 4 * X = 0");
    });
  });

  // describe("polinomial degree is 2", () => {
  //
  // });
});