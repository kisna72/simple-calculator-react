This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run the project run `npm install` and `npm start`

## Calculator App

This react application implements a simple calculator. Calculator has following component hierarchy. 

APP
 - Screen (Input Box + Results Box)
 - Input Components (dot,0-9)
 - Command Components (clear, divide, multiply, minus, add, equals)

Our state will live in App.js

Use Cases:
1. Enter Number 
2. Enter Command (When a command is hit, the input box clears but previous data is saved.)
3. Enter Second Number -> calculate results
4. Enter Second Command. (If the command is )

State:
We will need state to store all the numbers and operations the user enters. They get calculated immediately after a new command is entered. 

Approach
- Since state will probably need to be tweaked lets start there. 
- I need a simple Number Component and a Command Component. 