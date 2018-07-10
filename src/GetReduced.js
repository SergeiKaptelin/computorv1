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

  let degree = leftExpression.polDegree > rightExpression.polDegree ? leftExpression.polDegree : rightExpression.polDegree;
  while (reducedPolinomial.hasOwnProperty(`${degree}`) && reducedPolinomial[`${degree}`] === 0 && degree > -1) {
    degree -= 1;
  }
  reducedPolinomial.polDegree = degree;

  return reducedPolinomial;
};

module.exports = getReduced;