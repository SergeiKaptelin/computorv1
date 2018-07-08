# computorv1
 Program that solves polynomial equation
 
# How to install:
 ```sh
 npm install
 npm run flow:deps
 ```
 `npm install` - to install dependencies
 <br/>
 `npm run flow:deps` - will do `flow-typed install` and add packages to flow check
 
# How to use:
 ```sh
 npm start -- "<exp> = <exp>"
 ```
`exp` - should be in format: ±a ± bx ± cx^2

E.g.: 
 ```sh
 npm start -- "5 + 4 * X + X^2 = X^2"
 ```
 
