"use strict";

const _ = require('lodash');

const {errorWithPosition, usage} = require("./Notification");

let ERRORS = [];

const addMultipleErrors = (matches: any, formula: string, errorKey: string, withMatches: boolean = false) => {
  const uniqueMatches = _.uniq(matches);
  uniqueMatches.forEach((match: string) => {
    if (withMatches) {
      locations(match, formula).forEach((index: number) => addError(errorKey, index, formula, match));
    } else {
      locations(match, formula).forEach((index: number) => addError(errorKey, index, formula));
    }
  });
};

const locations = (substring: string, str: string) => {
  const indexes = [];
  let i = -1;
  while(( i = str.indexOf(substring, i + 1)) >= 0) {
    indexes.push(i);
  }
  return indexes;
};

const addError = (key: string, index: number, formula: string, message: string = "") => {
  ERRORS.push({key, index, formula, message});
};

const checkFormat = (formula: string) => {
  const wrongFormatWithSpace = formula.match(/(?:[0-9]|X)\ (?:[0-9]|X)/ig);
  wrongFormatWithSpace && addMultipleErrors(wrongFormatWithSpace, formula, "wrongFormat", true);
  const expressions = formula.split("=");
  expressions.forEach((expression: string, index: number) => {
    const lastIndex = expression.length - 1;
    const isEndSign = ["+", "-", "*", ".", "^"].indexOf(expression[lastIndex]) >= 0;
    const isStartSign = ["*", ".", "^"].indexOf(expression[0]) >= 0;
    if (isEndSign) {
      const indexInFormula = index === 0 ? lastIndex : formula.length - 1;
      addError("wrongEndSign", indexInFormula, formula, formula[indexInFormula]);
    }
    if (isStartSign) {
      const indexInFormula = index === 0 ? 0 : formula.length - expression.length;
      addError("wrongStartSign", indexInFormula, formula, formula[indexInFormula]);
    }
    checkArgWithDegree(formula, expression, index === 0);
    const mustHave = /(?:[0-9]|X)/i.test(expression);
    !mustHave && usage();
  });
};

const checkArgWithDegree = (formula: string, expression: string, isFirstExpression) => {
  const degreeIndexes = locations("^", expression);
  const trimmedExpr = expression.split(" ").join("");
  const trimmedDegreeIndexes = locations("^", trimmedExpr);
  trimmedDegreeIndexes.forEach((trimmedDegreeIndex: number, index: number) => {
    const indexInFormula = isFirstExpression ? degreeIndexes[index] : formula.length - expression.length + degreeIndexes[index];
    if (trimmedDegreeIndex === 0 || trimmedDegreeIndex === trimmedExpr.length - 1) {
      addError("argsWithDegree", indexInFormula, formula);
    }
  });
};

const checkFormulaStructure = (formula: string) => {
  const formulaChars = formula.split("");
  if (!formulaStructure(formula)) {
    formulaChars.forEach((char: string, index: number) => {
      if (!allowedChar(char)) {
        addError("notAllowedChar", index, formula, char);
      }
    });
  }
};

const allowedChar = (char) => /[X0-9\+\-\*\.\^\ \=]/i.test(char);

const formulaStructure = (str) => str && /^[X0-9\+\-\*\.\^\ ]+=[X0-9\+\-\*\.\^\ ]{1,3}$/i.test(str);

const badFloat = (formula: string) => {
  const signDotSign = /[X\+\-\*\.\^\ ]\.[X\+\-\*\.\^\ ]/i.exec(formula);
  const signDot = /[X\+\-\*\.\^\ ]\./i.exec(formula);
  const dotSign = /\.[X\+\-\*\.\^\ ]/i.exec(formula);
  if (signDotSign) {
    addMultipleErrors(signDotSign, formula, "badFloat", true);
  } else if (signDot) {
    addMultipleErrors(signDot, formula, "badFloat", true);
  } else if (dotSign) {
    addMultipleErrors(dotSign, formula, "badFloat", true);
  }
};

const checkMultipleSigns = (formula: string) => {
  const multipleSigns = formula.match(/[\+\-\*\.\^]\ ?[\+\-\*\.\^]/g);
  const multipleSpaces = formula.match(/[\ ][\ ]/g);
  multipleSigns && addMultipleErrors(multipleSigns, formula, "toMuchSigns", true);
  multipleSpaces && addMultipleErrors(multipleSpaces, formula, "toMuchSigns", true);
};

const argumentsWithDegree = (formula: string) => {
  const badArgs = formula.match(/[0-9\+\-\*\.]?\ ?\^\ ?[X\+\-\*\.]?/ig);
  if (badArgs) {
    const invalidArgs = badArgs.filter((badArgument: string) => {
      return (badArgument !== " ^" && badArgument !== "^ " && badArgument !== " ^ " && badArgument !== "^");
    });
    invalidArgs && addMultipleErrors(invalidArgs, formula, "argsWithDegree", true);
  }

  const trimmedFormula = formula.split(" ").join("");
  const multArgsWithoutSign = trimmedFormula.match(/x\^[0-9]x\^[0-9]/ig);
  multArgsWithoutSign && addMultipleErrors(multArgsWithoutSign, trimmedFormula, "multArgsWithDegree");

  const floatDegree = formula.match(/\^\ ?[0-9]\.[0-9]/g);
  floatDegree && addMultipleErrors(floatDegree, formula, "floatDegree", true);
};

const checkMultiplication = (formula: string) => {
  const unknownAndUnknown = formula.match(/(?:X\ ?\*\ ? X|X\ ?X)/ig);
  const numberAndNumber = formula.match(/[0-9]\ ?\*\ ?[0-9]/ig);
  const unknownAndNumber = formula.match(/(?:X\ ?\*\ ?[0-9]|X[0-9])/ig);
  unknownAndUnknown && addMultipleErrors(unknownAndUnknown, formula, "badMultiplication", true);
  numberAndNumber && addMultipleErrors(numberAndNumber, formula, "badMultiplication", true);
  unknownAndNumber && addMultipleErrors(unknownAndNumber, formula, "badMultiplication", true);
};

const validation = (formula: string) => {
  checkFormat(formula);
  checkFormulaStructure(formula);
  badFloat(formula);
  checkMultipleSigns(formula);
  argumentsWithDegree(formula);
  checkMultiplication(formula);
  if (ERRORS.length > 0) {
    errorWithPosition(ERRORS);
  }
};

module.exports = validation;
