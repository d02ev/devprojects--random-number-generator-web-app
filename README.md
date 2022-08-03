# Random Number Generator Web App

## Project Specifications

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Approach](#approach)
- [Tech Stack Used](#tech-stack-used)
- [Links](#links)

### Introduction

There are various use cases for a Random Number Generator. You could do a random dice roll or get a random quote.

### Requirements

- An input box to assign how many dice to roll.
- A drop down box to select the sides of the dice (for example d4, d6, d8, d10, d12, d20).
- An output to show # of dice rolled, the type of dice (d4, d6 ..), the total count of the dices rolled.
- Output the details (number) of the individual dice rolls (Possibly using a foreach loop).

### Approach

Although the original project was suggested to be completed using PHP, HTML and CSS, but for my approach I used NodeJS, EJS, Bootstrap and ExpressJS.

The approach to the problem is pretty straightforward, there are 2 inputs to read from:

- Input for the number of dice rolled (Simple input box).
- Input for type of dice rolled (Simple dropdown box).

Approach:

- Create 2 variables to store values from the input.
- Create an empty array that holds number of dice random numbers generated for a type of die.
- Conditionals to check for the random number range according to the type of die. For example, a **D4** die will have faces with number **1, 2, 3 and 4**, so the range for this die will be **4**.

- A for loop which iterates number of dice times and populates the array one by one with a new random number generated at each iteration.

- The array generated and the inputs are then rendered to the page using **EJS**.

### Tech Stack Used

- Production Dependencies:

  - [NodeJS](https://www.nodejs.org/)
  - [Express](https://www.expressjs.com/)
  - [Body Parser](https://www.npmjs.com/package/body-parser)
  - [EJS](https://www.ejs.co/)

- Dev Dependencies:

  - [Nodemon](https://www.npmjs.com/package/nodemon)

### Links

Project URL: [Random number generator web app](https://www.codementor.io/projects/web/random-number-generator-web-app-bz042v8kll)

Solution URL: [Roll It!](https://rollitdp.herokuapp.com/)