"use strict";

const colors = require("colors/safe");

const error = (message: string) => {
  console.log(colors.red(message));
  process.exit(0);
};

const usage = () => {
  console.log(colors.yellow("Usage: ./computor \"<exp> = <exp>\""));
  console.log(colors.yellow("\texp - should be in format: ±a ± bx ± cx^2"));
  process.exit(0);
};

const message = (text: string) => {
  console.log(colors.cyan(text));
  process.exit(0);
};

module.exports = {
  error,
  usage,
  message,
};