#! /usr/bin/env node

"use strict";

const colors = require("colors/safe");

const {usage} = require("./Notification");
const getArguments = require("./GetAgruments");
const reducedForm = require("./ReducedForm");
const getReduced = require("./GetReduced");
const solutions = require("./Solutions");
const validation = require("./Validation");

if (process.argv.length < 3 || process.argv.length > 5) {
  usage();
}
const formula = process.argv.slice(2).join("");
const expressions = formula.toUpperCase().split(" ").join("").split("=");
if (expressions.length !== 2) {
  usage();
}
validation(formula);

const leftExpression = getArguments(expressions[0]);
const rightExpression = getArguments(expressions[1]);
const reducedPolynomial = getReduced(leftExpression, rightExpression);

console.log(colors.cyan("Reduced form:"), colors.green(reducedForm(reducedPolynomial)));
console.log(colors.cyan("Polynomial degree:"), colors.green(reducedPolynomial.polDegree));

if (reducedPolynomial.polDegree > 2) {
  console.log(colors.america("The polynomial degree is strictly greater than 2, I can't solve."));
  process.exit(0);
}

const {discriminantMessage, discriminant, solutionMessage, x0, x1} = solutions(reducedPolynomial);
discriminantMessage && console.log(colors.cyan(discriminantMessage), colors.green(`${discriminant}`));
solutionMessage && console.log(colors.america(solutionMessage));
(x0 || x0 === 0) && console.log(colors.green(`${x0}`));
(x1 || x1 === 0) && console.log(colors.green(`${x1}`));
