"use strict";

const _ = require('lodash');

const getReduced = (leftExpression: any, rightExpression: any): any=> {
  let reducedPolinomial = {};
  _.merge(reducedPolinomial, rightExpression);
  for (const key in reducedPolinomial) {
    reducedPolinomial[key] = 0;
  }
  _.merge(reducedPolinomial, leftExpression);

  for (const key in rightExpression) {
    if (key !== 'polDegree') {
      reducedPolinomial[key] -= rightExpression[key];
    }
  }

  reducedPolinomial.polDegree = 0;
  for (const key in reducedPolinomial) {
    if (key !== 'polDegree' && reducedPolinomial[key] !== 0) {
      reducedPolinomial.polDegree = Number(key);
    }
  }

  return reducedPolinomial;
};

module.exports = getReduced;
