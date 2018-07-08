#! /usr/bin/env node

"use strict";

const colors = require("colors/safe");
const {usage} = require("./Notification");
const {getArguments, getReduced} = require("./Polynomial");
const {reducedForm} = require("./Solution");

if (process.argv.length < 3 || process.argv.length > 5) {
  usage();
}
const formula = process.argv.slice(2).join("").toUpperCase().split(" ").join("").split("=");
if (formula.length !== 2) {
  usage();
}
const leftExpression = getArguments(formula[0]);
const rightExpression = getArguments(formula[1]);
const reducedPolynomial = getReduced(leftExpression, rightExpression);

console.log(colors.blue("Reduced form:"), colors.green(reducedForm(reducedPolynomial)));
console.log(colors.blue("Polynomial degree:", colors.green(reducedPolynomial.polDegree)));
