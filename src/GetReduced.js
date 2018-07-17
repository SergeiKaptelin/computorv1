"use strict";

const _ = require('lodash');

const getReduced = (leftExpression: any, rightExpression: any): any=> {
  const reducedPolinomial = {};
  _.merge(reducedPolinomial, rightExpression);
  _.merge(reducedPolinomial, leftExpression);

  for (let key in rightExpression) {
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