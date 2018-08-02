# computorv1
 Program that solves polynomial equation. [All task](computorv1.en.pdf)
 
## Install:
 ```sh
 make
 ```
 or
 ```sh
 npm install
 npm run flow:deps
 ```
 `npm install` - to install dependencies
 <br/>
 `npm run flow:deps` - will do `flow-typed install` and add packages to flow check
 
## Usage:
 ```sh
 ./computor "<exp> = <exp>"
 ```
 or
 ```sh
 npm start -- "<exp> = <exp>"
 ```
`exp` - should be in format: ±a ± bx ± cx^2

E.g.:
 ```sh
 ./computor "3 + 5x + 6x^2 = 0"
 ```
 or
 ```sh
 npm start -- "5 + 4 * X + X^2 = X^2"
 ```
 
## Tests:
 ```sh
 npm test
 ```
## Examples: 
![Example](/assets/example.jpg)
