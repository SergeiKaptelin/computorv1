#! /usr/bin/env node

"use strict";

const colors = require("colors/safe");
const {usage, message} = require("./Notification");
const getArguments = require("./GetAgruments");
const reducedForm = require("./ReducedForm");
const getReduced = require("./GetReduced");

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

console.log(colors.cyan("Reduced form:"), colors.green(reducedForm(reducedPolynomial)));
console.log(colors.cyan("Polynomial degree:", colors.green(reducedPolynomial.polDegree)));

if (reducedPolynomial.polDegree > 2) {
  message("The polynomial degree is stricly greater than 2, I can't solve.");
}
