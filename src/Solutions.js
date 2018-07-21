const solutions = (reducedPolynomial: any) => {
  const polynomial = {...reducedPolynomial};
  for (let i = 0; i < 3; i++) {
    if (!polynomial.hasOwnProperty(`${i}`)) {
      polynomial[`${i}`] = 0;
    }
  }

  const a = polynomial["0"] || 0;
  const b = polynomial["1"] || 0;
  const c = polynomial["2"] || 0;
  const {polDegree} = polynomial;
  const solution = {};

  if (polDegree === 0) {
    if (a === 0) {
      solution.solutionMessage = "Every real is a solution";
    } else {
      solution.solutionMessage = "There are no solutions";
    }
  } else if (polDegree === 1) {
    solution.x0 = - a / b;
    solution.solutionMessage = "The solution is:";
  } else if (polDegree === 2) {
    solution.discriminant = b * b - 4 * a * c;
    solution.discriminantMessage = "Discriminant is:";
    if (solution.discriminant > 0) {
      const dividendX0 = -b + Math.sqrt(solution.discriminant);
      const dividendX1 = -b - Math.sqrt(solution.discriminant);
      solution.x0 = dividendX0 === 0 ? 0 : dividendX0 / (2 * c);
      solution.x1 = dividendX1 === 0 ? 0 : dividendX1 / (2 * c);
      solution.solutionMessage = "Discriminant is strictly positive, the two solutions are:";
    } else if (solution.discriminant === 0) {
      solution.x0  = (b === 0 && a === 0) ? 0 : -b / (2 * a);
      solution.solutionMessage = "Discriminant is zero, the solution is:";
    } else {
      solution.x0 = `${-b / (2 * c)} + ${Math.abs(Math.sqrt(-solution.discriminant) / (2 * c))} * i`;
      solution.x1 = `${-b / (2 * c)} - ${Math.abs(Math.sqrt(-solution.discriminant) / (2 * c))} * i`;
      solution.solutionMessage = "Discriminant is strictly negative, the two solutions are:";
    }
  }
  return solution;
};

module.exports = solutions;