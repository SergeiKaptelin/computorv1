"use strict";

const _ = require('lodash');

const {abs} = require("./Mathematic");

const reducedForm = (reducedPolynomial: any): string => {
  let solution = "";
  const polynomial = {};

  _.keys(reducedPolynomial).forEach((key: string) => {
    if (reducedPolynomial[key] !== 0) {
      polynomial[key] = reducedPolynomial[key];
    }
  });

  if (isOnlyPolDegree(polynomial) || _.isEmpty(polynomial)) {
    return "0 = 0";
  }
  if (polynomial.hasOwnProperty("0")) {
    solution = `${polynomial["0"]}`;
  }

  const pol = {};
  _.keys(polynomial).forEach((key: string) => {
    if (key !== "0" && key !== "polDegree") {
      pol[key] = polynomial[key];
    }
  });
  _.keys(pol).forEach((key: string) => {
    const coef = pol[key];
    if (isFirst(polynomial, key)) {
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
    if (key !== "1") {
      solution = `${solution}^${key}`;
    }
  });

  return (`${solution} = 0`);
};

const isOnlyPolDegree = (polynomial: any): boolean => {
  const keys = _.keys(polynomial);
  return keys.length === 1 && keys[0] === "polDegree";
};

const isFirst = (reducedPolynomial: any, key: string) => _.keys(reducedPolynomial)[0] === key;

const formattedArgument = (value: number): string => value === 0 ? "" : `${sign(value)} ${abs(value)}`;

const sign = (value: number): string => value < 0 ? "-" : "+";

module.exports = reducedForm;
