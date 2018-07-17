"use strict";

const _ = require('lodash')

const reducedForm = (reducedPolynomial: any): string => {
  let solution = "";
  const polynomial = {};
  _.keys(reducedPolynomial).forEach((key: string) => {
    if (reducedPolynomial[key] !== 0) {
      polynomial[key] = reducedPolynomial[key];
    }
  });
  if (_.isEmpty(polynomial)) {
    return "0 = 0";
  }
  if (polynomial.hasOwnProperty("0")) {
    solution = `${polynomial["0"]}`;
  }
  if (polynomial.hasOwnProperty("1")) {
    const coef = polynomial["1"];
    if (isFirst(polynomial, "1")) {
      if (coef === 1 || coef === -1) {
        solution = coef === 1 ? "X" : "-X";
      } else {
        solution = `${coef} * X`;
      }
    } else if (coef === 1 || coef === -1) {
      solution = `${solution} ${sign(coef)} X`;
    } else {
      solution = `${solution} ${formattedArgument(coef)} * X`;
    }
  }


  // const {coefficient1, coefficient2, coefficient3} = reducedExp;
  // let solution = "";
  // const arg1 = coefficient1 === 0 ? undefined : `${coefficient1}`;
  // if (arg1) {
  //   solution = `${arg1}`;
  // }
  // const arg2 = formattedArgument(coefficient2);
  // if (arg2) {
  //   if (coefficient2 === 1 || coefficient2 === -1) {
  //     solution = `${signedValue(solution, coefficient2)} X`;
  //   } else {
  //     solution = `${solution} ${arg2} * X`;
  //   }
  // }
  // const arg3 = formattedArgument(coefficient3);
  // if (arg3) {
  //   if (coefficient3 === 1 || coefficient3 === -1) {
  //     solution = `${signedValue(solution, coefficient3)} X^2`;
  //   } else {
  //     solution = `${solution} ${arg3} * X^2`;
  //   }
  // }
  return (`${solution} = 0`);
};

const isFirst = (reducedPolynomial: any, key: string) => _.keys(reducedPolynomial)[0] === key;

const formattedArgument = (value: number): string => value === 0 ? "" : `${sign(value)} ${Math.abs(value)}`;

const sign = (value: number): string => value < 0 ? "-" : "+";

module.exports = reducedForm;