# Arduino-Node

This Node.js server is under ongoing development. The server runs locally to maintain communication between a simple web app and an Arduino esp32 device. In it's first iteration, the app allows the user to initiate a blinking led light sequence that runs continuously until stopped by the user.

More to come!

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install the necessary dependancies in the `package.json` file. 

## Usage

To start a local server, open command line and run `node app.js`. Next, navigate to `localhost:3000` in a browser. A connected esp32 device is required to run the led light pin sequence. 
