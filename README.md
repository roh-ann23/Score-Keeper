![Screenshot 2024-05-03 202020](https://github.com/roh-ann23/Score-Keeper/assets/158121284/2b4f4eb1-fa98-40f9-bfe9-7a8a6e1bda05)

# Score Keeper App

A simple score keeper app built with JavaScript and React.

## Overview

This app helps you keep track of scores and wickets during a cricket match. It allows you to add runs and wickets dynamically, displaying the score, wickets, and a ball-by-ball commentary.

## Features

- Add runs from 0 to 6 with corresponding buttons.
- Add wickets with a dedicated button.
- Display total score and wickets.
- Provide a ball-by-ball commentary with runs and optional commentary text.
- Submit commentary for each ball.

## Installation

To run this app locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) in your web browser.

## Usage

1. Click on the buttons to add runs or wickets.
2. Optionally, provide commentary for each ball.
3. Click "Submit" to record the ball.

## Sample Code

```javascript
// Sample JavaScript code snippet from the app

// Function to add runs
function addScore(num){
    hit = num;
    reactElement.render(<App />);
}

// Function to add wicket
function addWicket(){
    hit = 'w';
    reactElement.render(<App />);
}
