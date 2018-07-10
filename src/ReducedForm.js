"use strict";

const reducedForm = (reducedExp: any): string => {
  const {coefficient1, coefficient2, coefficient3} = reducedExp;
  let solution = "";
  const arg1 = coefficient1 === 0 ? undefined : `${coefficient1}`;
  if (arg1) {
    solution = `${arg1}`;
  }
  const arg2 = formattedArgument(coefficient2);
  if (arg2) {
    if (coefficient2 === 1 || coefficient2 === -1) {
      solution = `${signedValue(solution, coefficient2)} X`;
    } else {
      solution = `${solution} ${arg2} * X`;
    }
  }
  const arg3 = formattedArgument(coefficient3);
  if (arg3) {
    if (coefficient3 === 1 || coefficient3 === -1) {
      solution = `${signedValue(solution, coefficient3)} X^2`;
    } else {
      solution = `${solution} ${arg3} * X^2`;
    }
  }
  return (`${solution} = 0`);
};

const formattedArgument = (value: number): ?string => value === 0 ? undefined : `${sign(value)} ${Math.abs(value)}`;

const sign = (value: number): string => value < 0 ? "-" : "+";

const signedValue = (solution: string, value: number): string => `${solution} ${sign(value)}`;

module.exports = reducedForm;