const colors = require("colors/safe");

const error = (message: string) => {
  console.log(colors.red(message));
  process.exit(0);
};

const usage = () => {
  console.log(colors.yellow("Usage: ./computor \"<exp> = <exp>\""));
  process.exit(0);
};

module.exports = {
  error,
  usage,
};