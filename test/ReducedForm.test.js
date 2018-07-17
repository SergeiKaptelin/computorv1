const reducedForm = require("../dist/ReducedForm");

describe("natural form", () => {
  describe("polinomial degree is 0", () => {
    test("first coefficient is positive", () => {
      const polynomial = {
        "0": 8,
      };
      expect(reducedForm(polynomial)).toBe("8 = 0");
    });

    test("first coefficient is negative", () => {
      const polynomial = {
        "0": -8,
      };
      expect(reducedForm(polynomial)).toBe("-8 = 0");
    });

    test("first coefficient is -1", () => {
      const polynomial = {
        "0": -1,
      };
      expect(reducedForm(polynomial)).toBe("-1 = 0");
    });

    test("first coefficient is 1", () => {
      const polynomial = {
        "0": 1,
      };
      expect(reducedForm(polynomial)).toBe("1 = 0");
    });

    test("first coefficient is 0", () => {
      const polynomial = {
        "0": 0,
      };
      expect(reducedForm(polynomial)).toBe("0 = 0");
    });
  });

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

    test("first coefficient is 0", () => {
      const polynomial = {
        "0": 0,
        "1": -4,
      };
      expect(reducedForm(polynomial)).toBe("-4 * X = 0");
    });
  });

  describe("polinomial degree is 2", () => {
    test("no first and second coefficient and third is positive", () => {
      const polynomial = {
        "2": 8,
      };
      expect(reducedForm(polynomial)).toBe("8 * X^2 = 0");
    });

    test("no first and second coefficient and third is negative", () => {
      const polynomial = {
        "2": -8,
      };
      expect(reducedForm(polynomial)).toBe("-8 * X^2 = 0");
    });

    test("third coefficient greater than 1", () => {
      const polynomial = {
        "0": 3,
        "1": 4,
        "2": 5,
      };
      expect(reducedForm(polynomial)).toBe("3 + 4 * X + 5 * X^2 = 0")
    });

    test("no first and second coefficient and third is -1", () => {
      const polynomial = {
        "2": -1,
      };
      expect(reducedForm(polynomial)).toBe("-X^2 = 0");
    });

    test("no first and second coefficient and third is 1", () => {
      const polynomial = {
        "2": 1,
      };
      expect(reducedForm(polynomial)).toBe("X^2 = 0");
    });

    test("no first and second coefficient and third is 0", () => {
      const polynomial = {
        "2": 0,
      };
      expect(reducedForm(polynomial)).toBe("0 = 0");
    });

    test("third coefficient is 1", () => {
      const polynomial = {
        "1": -2,
        "2": 1,
      };
      expect(reducedForm(polynomial)).toBe("-2 * X + X^2 = 0");
    });

    test("third coefficient is -1", () => {
      const polynomial = {
        "1": -2,
        "2": -1,
      };
      expect(reducedForm(polynomial)).toBe("-2 * X - X^2 = 0");
    });

    test("third coefficient is 0", () => {
      const polynomial = {
        "1": -2,
        "2": 0,
      };
      expect(reducedForm(polynomial)).toBe("-2 * X = 0");
    });

    test("first, second and third coefficient is 0", () => {
      const polynomial = {
        "0": 0,
        "1": 0,
        "2": 0,
      };
      expect(reducedForm(polynomial)).toBe("0 = 0");
    });

    test("all three coefficients greater than 1", () => {
      const polynomial = {
        "0": 3,
        "1": 4,
        "2": 5,
      };
      expect(reducedForm(polynomial)).toBe("3 + 4 * X + 5 * X^2 = 0");
    });

    test("all three coefficient less than -1", () => {
      const polynomial = {
        "0": -3,
        "1": -4,
        "2": -5,
      };
      expect(reducedForm(polynomial)).toBe("-3 - 4 * X - 5 * X^2 = 0");
    });

    test("only first is positive", () => {
      const polynomial = {
        "0": 3,
        "1": -4,
        "2": -5,
      };
      expect(reducedForm(polynomial)).toBe("3 - 4 * X - 5 * X^2 = 0");
    });

    test("only second is positive", () => {
      const polynomial = {
        "0": -3,
        "1": 4,
        "2": -5,
      };
      expect(reducedForm(polynomial)).toBe("-3 + 4 * X - 5 * X^2 = 0");
    });

    test("only third is positive", () => {
      const polynomial = {
        "0": -3,
        "1": -4,
        "2": 5,
      };
      expect(reducedForm(polynomial)).toBe("-3 - 4 * X + 5 * X^2 = 0");
    });

    test("only first is negative", () => {
      const polynomial = {
        "0": -3,
        "1": 4,
        "2": 5,
      };
      expect(reducedForm(polynomial)).toBe("-3 + 4 * X + 5 * X^2 = 0");
    });

    test("only second is negative", () => {
      const polynomial = {
        "0": 3,
        "1": -4,
        "2": 5,
      };
      expect(reducedForm(polynomial)).toBe("3 - 4 * X + 5 * X^2 = 0");
    });

    test("only third is negative", () => {
      const polynomial = {
        "0": 3,
        "1": 4,
        "2": -5,
      };
      expect(reducedForm(polynomial)).toBe("3 + 4 * X - 5 * X^2 = 0");
    });

    test("all three coefficients is 1", () => {
      const polynomial = {
        "0": 1,
        "1": 1,
        "2": 1,
      };
      expect(reducedForm(polynomial)).toBe("1 + X + X^2 = 0");
    });

    test("all three coefficients is -1", () => {
      const polynomial = {
        "0": -1,
        "1": -1,
        "2": -1,
      };
      expect(reducedForm(polynomial)).toBe("-1 - X - X^2 = 0");
    });

    test("first coefficient is 0", () => {
      const polynomial = {
        "0": 0,
        "1": -4,
        "2": 4,
      };
      expect(reducedForm(polynomial)).toBe("-4 * X + 4 * X^2 = 0");
    });

    test("second coefficient is 0", () => {
      const polynomial = {
        "0": -4,
        "1": 0,
        "2": 4,
      };
      expect(reducedForm(polynomial)).toBe("-4 + 4 * X^2 = 0");
    });

    test("third coefficient is 0", () => {
      const polynomial = {
        "0": -4,
        "1": 4,
        "2": 0,
      };
      expect(reducedForm(polynomial)).toBe("-4 + 4 * X = 0");
    });
  });
});