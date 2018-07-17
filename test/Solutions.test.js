const solutions = require("../dist/Solutions");

describe("polynomial degree is 0", () => {
  test("first coefficient is 0", () => {
    const polynomial = {
      "0": 0,
      polDegree: 0,
    };
    const result = {
      solutionMessage: "Every real is a solution",
    };
    expect(solutions(polynomial)).toEqual(result);
  });

  test("all coefficients is 0", () => {
    const polynomial = {
      "0": 0, "1": 0, "2": 0, "3": 0,
      polDegree: 0,
    };
    const result = {
      solutionMessage: "Every real is a solution",
    };
    expect(solutions(polynomial)).toEqual(result);
  });

  test("first coefficient is 1", () => {
    const polynomial = {
      "0": 1,
      polDegree: 0,
    };
    const result = {
      solutionMessage: "There are no solutions",
    };
    expect(solutions(polynomial)).toEqual(result);
  });

  test("first coefficient is -1", () => {
    const polynomial = {
      "0": -1,
      polDegree: 0,
    };
    const result = {
      solutionMessage: "There are no solutions",
    };
    expect(solutions(polynomial)).toEqual(result);
  });

  test("first coefficient is positive", () => {
    const polynomial = {
      "0": 5,
      polDegree: 0,
    };
    const result = {
      solutionMessage: "There are no solutions",
    };
    expect(solutions(polynomial)).toEqual(result);
  });

  test("first coefficient is negative", () => {
    const polynomial = {
      "0": -5,
      polDegree: 0,
    };
    const result = {
      solutionMessage: "There are no solutions",
    };
    expect(solutions(polynomial)).toEqual(result);
  });

  test("first coefficient is 1 and other is 0", () => {
    const polynomial = {
      "0": 1, "1": 0, "2": 0, "3": 0, "4": 0,
      polDegree: 0,
    };
    const result = {
      solutionMessage: "There are no solutions",
    };
    expect(solutions(polynomial)).toEqual(result);
  });

  test("first coefficient is -1 and other is 0", () => {
    const polynomial = {
      "0": -1, "1": 0, "2": 0, "3": 0, "4": 0,
      polDegree: 0,
    };
    const result = {
      solutionMessage: "There are no solutions",
    };
    expect(solutions(polynomial)).toEqual(result);
  });

  test("first coefficient is positive and other is 0", () => {
    const polynomial = {
      "0": 5, "1": 0, "2": 0, "3": 0, "4": 0,
      polDegree: 0,
    };
    const result = {
      solutionMessage: "There are no solutions",
    };
    expect(solutions(polynomial)).toEqual(result);
  });

  test("first coefficient is negative and other is 0", () => {
    const polynomial = {
      "0": -5, "1": 0, "2": 0, "3": 0, "4": 0,
      polDegree: 0,
    };
    const result = {
      solutionMessage: "There are no solutions",
    };
    expect(solutions(polynomial)).toEqual(result);
  });
});

describe("polynomial degree is 1", () => {
  test("first and second coefficient is positive", () => {
    const polynomial = {
      "0": 4,
      "1": 2,
      polDegree: 1,
    };
    const result = {
      solutionMessage: "The solution is:",
      x0: -2,
    };
    expect(solutions(polynomial)).toEqual(result);
  });

  test("first and second coefficient is negative", () => {
    const polynomial = {
      "0": -4,
      "1": -2,
      polDegree: 1,
    };
    const result = {
      solutionMessage: "The solution is:",
      x0: -2,
    };
    expect(solutions(polynomial)).toEqual(result);
  });

  test("first and second coefficient is 1", () => {
    const polynomial = {
      "0": 1,
      "1": 1,
      polDegree: 1,
    };
    const result = {
      solutionMessage: "The solution is:",
      x0: -1,
    };
    expect(solutions(polynomial)).toEqual(result);
  });

  test("first coefficient is 0", () => {
    const polynomial = {
      "0": 0,
      "1": -2,
      polDegree: 1,
    };
    const result = {
      solutionMessage: "The solution is:",
      x0: 0,
    };
    expect(solutions(polynomial)).toEqual(result);
  });
});

describe("polynomial degree is 2", () => {
  describe("discriminant greater than 0", () => {
    test("first coefficient is 0, second and third is 1", () => {
      const polynomial = {
        "0": 0,
        "1": 1,
        "2": 1,
        polDegree: 2,
      };
      const result = {
        discriminantMessage: "Discriminant is:",
        discriminant: 1,
        solutionMessage: "Discriminant is strictly positive, the two solutions are:",
        x0: 0,
        x1: -1,
      };
      expect(solutions(polynomial)).toEqual(result);
    });

    test("first coefficient is 0, second and third is -1", () => {
      const polynomial = {
        "0": 0,
        "1": -1,
        "2": -1,
        polDegree: 2,
      };
      const result = {
        discriminantMessage: "Discriminant is:",
        discriminant: 1,
        solutionMessage: "Discriminant is strictly positive, the two solutions are:",
        x0: -1,
        x1: 0,
      };
      expect(solutions(polynomial)).toEqual(result);
    });

    test("first coefficient is 0, second is 1 and third is -1", () => {
      const polynomial = {
        "0": 0,
        "1": 1,
        "2": -1,
        polDegree: 2,
      };
      const result = {
        discriminantMessage: "Discriminant is:",
        discriminant: 1,
        solutionMessage: "Discriminant is strictly positive, the two solutions are:",
        x0: 0,
        x1: 1,
      };
      expect(solutions(polynomial)).toEqual(result);
    });

    test("first coefficient is 0, second is -1 and third is 1", () => {
      const polynomial = {
        "0": 0,
        "1": -1,
        "2": 1,
        polDegree: 2,
      };
      const result = {
        discriminantMessage: "Discriminant is:",
        discriminant: 1,
        solutionMessage: "Discriminant is strictly positive, the two solutions are:",
        x0: 1,
        x1: 0,
      };
      expect(solutions(polynomial)).toEqual(result);
    });
  });

  describe("discriminant is equal to 0", () => {
    test("first and second coefficient is 0 and third is 1", () => {
      const polynomial = {
        "0": 0,
        "1": 0,
        "2": 1,
        polDegree: 2,
      };
      const result = {
        discriminantMessage: "Discriminant is:",
        discriminant: 0,
        solutionMessage: "Discriminant is zero, the solution is:",
        x0: 0,
      };
      expect(solutions(polynomial)).toEqual(result);
    });

    test("first and second coefficient is 0 and third is -1", () => {
      const polynomial = {
        "0": 0,
        "1": 0,
        "2": -1,
        polDegree: 2,
      };
      const result = {
        discriminantMessage: "Discriminant is:",
        discriminant: 0,
        solutionMessage: "Discriminant is zero, the solution is:",
        x0: 0,
      };
      expect(solutions(polynomial)).toEqual(result);
    });

    test("first and second coefficient is 0 and third is positive", () => {
      const polynomial = {
        "0": 0,
        "1": 0,
        "2": 10,
        polDegree: 2,
      };
      const result = {
        discriminantMessage: "Discriminant is:",
        discriminant: 0,
        solutionMessage: "Discriminant is zero, the solution is:",
        x0: 0,
      };
      expect(solutions(polynomial)).toEqual(result);
    });

    test("first and second coefficient is 0 and third is negative", () => {
      const polynomial = {
        "0": 0,
        "1": 0,
        "2": -10,
        polDegree: 2,
      };
      const result = {
        discriminantMessage: "Discriminant is:",
        discriminant: 0,
        solutionMessage: "Discriminant is zero, the solution is:",
        x0: 0,
      };
      expect(solutions(polynomial)).toEqual(result);
    });
  });

  describe("discriminant less than 0", () => {
    test("all coefficients is 1", () => {
      const polynomial = {
        "0": 1,
        "1": 1,
        "2": 1,
        polDegree: 2,
      };
      const result = {
        discriminantMessage: "Discriminant is:",
        discriminant: -3,
        solutionMessage: "Discriminant is strictly negative, the two solutions are:",
        x0: "-0.5 + 0.8660254037844386 * i",
        x1: "-0.5 - 0.8660254037844386 * i",
      };
      expect(solutions(polynomial)).toEqual(result);
    });

    test("all coefficients is -1", () => {
      const polynomial = {
        "0": -1,
        "1": -1,
        "2": -1,
        polDegree: 2,
      };
      const result = {
        discriminantMessage: "Discriminant is:",
        discriminant: -3,
        solutionMessage: "Discriminant is strictly negative, the two solutions are:",
        x0: "-0.5 + 0.8660254037844386 * i",
        x1: "-0.5 - 0.8660254037844386 * i",
      };
      expect(solutions(polynomial)).toEqual(result);
    });
  });
});

describe("random polynomials", () => {
  test("3x^2 - 75 = 0", () => {
    const polynomial = {
      "0": -75,
      "2": 3,
      polDegree: 2,
    };
    const result = {
      discriminantMessage: "Discriminant is:",
      discriminant: 900,
      solutionMessage: "Discriminant is strictly positive, the two solutions are:",
      x0: 5,
      x1: -5,
    };
    expect(solutions(polynomial)).toEqual(result);
  });

  test("2x^2 + 3x - 5 = 0", () => {
    const polynomial = {
      "0": -5,
      "1": 3,
      "2": 2,
      polDegree: 2,
    };
    const result = {
      discriminantMessage: "Discriminant is:",
      discriminant: 49,
      solutionMessage: "Discriminant is strictly positive, the two solutions are:",
      x0: 1,
      x1: -2.5,
    };
    expect(solutions(polynomial)).toEqual(result);
  });

  test("2x^2 - 3x + 5 = 0", () => {
    const polynomial = {
      "0": 5,
      "1": -3,
      "2": 2,
      polDegree: 2,
    };
    const result = {
      discriminantMessage: "Discriminant is:",
      discriminant: -31,
      solutionMessage: "Discriminant is strictly negative, the two solutions are:",
      x0: "0.75 + 1.3919410907075054 * i",
      x1: "0.75 - 1.3919410907075054 * i",
    };
    expect(solutions(polynomial)).toEqual(result);
  });
});