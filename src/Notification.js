"use strict";

const colors = require("colors/safe");

const validationError = (key: string, message: string) => {
  switch(key) {
    case "notAllowedChar":
      return `Character \"${message}\" is not allowed, you could use only this characters "0123456789+-*.^ xX="`;
    case "toMuchSigns":
      return `Multiple signs not allowed \"${message}\", valid example: \"7 + X * 9 - 45x^2 = -4.5 - x + X^2\"`;
    case "badFloat":
      return `Bad float number \"${message}\", valid float example: 3.14`;
    case "argsWithDegree":
      return message ?
        `Invalid argument with degree \"${message}\", valid example: \"x^2\" or \"X ^ 4\"` :
        "Invalid argument with degree, valid example: \"x^2\" or \"X ^ 4\"";
    case "badMultiplication":
      return `Multiplication is bad \"${message}\", valid multiplication exampled: \"5 * X\" or \"5x\"`;
    case "wrongFormat":
      return `Wrong polynomial format \"${message}\", valid example: \"7 + X * 9 - 45x^2 = -4.5 - x + X^2\"`;
    case "multArgsWithDegree":
      return "Please remove multiplication arguments with degree";
    case "wrongEndSign":
      return `This sign \"${message}\" not allowed in the end of expression`;
    case "wrongStartSign":
      return `This sign \"${message}\" not allowed at the start of expression`;
    case "floatDegree":
      return `Float degree \"${message}\" now allowed`;
    default:
      return "Something went wrong";
  }
};

const position = (index: number) => {
  let pos = "🠅";
  for (let i = index; i > 0; i = i - 1) {
    pos = `_${pos}`;
  }
  return pos;
};

const error = (message: string) => {
  console.log(colors.red(message));
  process.exit(0);
};

const usage = () => {
  console.log(colors.yellow("Usage: ./computor \"<exp> = <exp>\""));
  console.log(colors.yellow("\texp - should be in format: ±a ± bx ± cx^2"));
  process.exit(0);
};

const errorWithPosition = (errors: any) => {
  errors.forEach((error) => {
    console.log(colors.red("ERROR!"), validationError(error.key, error.message));
    console.log();
    console.log(error.formula);
    console.log(colors.red(position(error.index)));
    console.log();
  });
  process.exit(0);
};

module.exports = {
  error,
  usage,
  errorWithPosition,
};
