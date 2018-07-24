"use strict";

const getArguments = (formula: string): any => {
  const pol = {};
  pol.polDegree = 0;

  if (formula[0] !== "-") {
    formula = `+${formula}`;
  }
  const args = formula.match(/([+-])([0-9\*^X.]*)/g);
  if (args) {
    args.forEach((arg: string) => {
      if (arg.indexOf("X") >= 0) {
        const coef = arg.match(/([+-])([0-9.]*)/g);
        if (coef && arg.indexOf("^") >= 0) {
          const regExp = /\^([0-9]*)/g;
          const degree = regExp.exec(arg);
          if (degree) {
            const degreeNumber = Number(degree[1]);
            addCoefficient(`${degreeNumber}`, coef[0], pol);
            pol.polDegree = pol.polDegree > degreeNumber ? pol.polDegree : degreeNumber;
          }
        } else if (coef) {
          addCoefficient("1", coef[0], pol);
          pol.polDegree = pol.polDegree > 1 ? pol.polDegree : 1;
        }
      } else {
        addCoefficient("0", arg, pol);
        pol.polDegree = pol.polDegree > 0 ? pol.polDegree : 0;
      }
    });
  }
  return pol;
};

const addCoefficient = (degree: string, coef: string, pol: any) => {
  const number = Number(getCorrectValue(coef));
  if (pol.hasOwnProperty(degree)) {
    pol[degree] += number;
  } else {
    pol[degree] = number;
  }
};

const getCorrectValue = (value: string): string => {
  switch (value) {
    case "-": return "-1";
    case "+": return "+1";
    default: return value;
  }
};

module.exports = getArguments;
