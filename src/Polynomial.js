"use strict";

import type {PolynomialArguments} from "./Types";

const getArguments = (formula: string): PolynomialArguments => {
  const pol: PolynomialArguments = {
    coefficient1: 0,
    coefficient2: 0,
    coefficient3: 0,
    polDegree: 0,
  };

  if (formula[0] !== "-") {
    formula = `+${formula}`;
  }
  const args = formula.match(/([+-])([0-9\*^X]*)/g);
  if (args) {
    args.forEach((arg: string) => {
      if (arg.indexOf("X") >= 0) {
        const value = arg.match(/([+-])([0-9]*)/g);
        if (value && arg.indexOf("^") >= 0) {
          pol.coefficient3 = parseInt(getCorrectValue(value[0]), 10);
          pol.polDegree = 2;
        } else if (value) {
          pol.coefficient2 = parseInt(getCorrectValue(value[0]), 10);
          pol.polDegree = pol.polDegree > 1 ? pol.polDegree : 1;
        }
      } else {
        pol.coefficient1 = parseInt(arg, 10);
        pol.polDegree = pol.polDegree > 0 ? pol.polDegree : 0;
      }
    });
  }
  return pol;
};

const getCorrectValue = (value: string): string => {
  switch (value) {
    case "-": return "-1";
    case "+": return "+1";
    default: return value;
  }
};

const getReduced = (leftExpression: PolynomialArguments, rightExpression: PolynomialArguments): PolynomialArguments => {
  const reducedPolinomial: PolynomialArguments = {
    coefficient1: 0,
    coefficient2: 0,
    coefficient3: 0,
    polDegree: 0,
  };

  if (leftExpression.coefficient1 === 0 && leftExpression.coefficient2 === 0 && leftExpression.coefficient3 === 0) {
    return {...rightExpression};
  }

  if (leftExpression.polDegree === rightExpression.polDegree) {
    reducedPolinomial.polDegree = leftExpression.polDegree;
    if (reducedPolinomial.polDegree === 2) {
      reducedPolinomial.polDegree = leftExpression.coefficient3 - rightExpression.coefficient3 === 0 ?
        reducedPolinomial.polDegree - 1 :
        reducedPolinomial.polDegree;
    }
    if (reducedPolinomial.polDegree === 1) {
      reducedPolinomial.polDegree = leftExpression.coefficient2 - rightExpression.coefficient2 === 0 ?
        reducedPolinomial.polDegree - 1 :
        reducedPolinomial.polDegree;
    }
  } else {
    reducedPolinomial.polDegree = leftExpression.polDegree > rightExpression.polDegree ?
      leftExpression.polDegree :
      rightExpression.polDegree;
  }
  reducedPolinomial.coefficient1 = leftExpression.coefficient1 - rightExpression.coefficient1;
  reducedPolinomial.coefficient2 = leftExpression.coefficient2 - rightExpression.coefficient2;
  reducedPolinomial.coefficient3 = leftExpression.coefficient3 - rightExpression.coefficient3;
  return reducedPolinomial;
};

module.exports = {
  getArguments,
  getReduced,
};