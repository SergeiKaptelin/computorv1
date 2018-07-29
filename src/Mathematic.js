"use strict";

const sqrt = (a: number) => {
  const epsilon = 0.000001;
  let guess = a / 2;
  while (abs(guess * guess - a) > epsilon)
  {
    const r = a / guess;
    guess = (guess + r) / 2;
  }
  return guess;
};

const abs = (a: number) => a < 0 ? -a : a;

module.exports = {
  sqrt,
  abs,
};
