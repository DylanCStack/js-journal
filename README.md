# JS Gulp Intro

### Authored by Dylan Stackhouse and Andrew Delvin

## Description
A website built to test gulp technologies and the openweathermap API.
## Requirements
* node.js
## Setup
1. Clone or download the project from [github](https://github.com/DylanCStack/js-journal.git).
2. Navigate to the project root and run the command $ `npm install`. This will install all back-end dependencies.
3. When that finishes, run the command $ `bower install`. This will install all front-end dependencies.
4. Install the ["Allow-Control-Allow-Origin:\*"](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en) extension to google chrome.
4. Paste your own .env file into the root or create one containing `exports.apiKey = "YOUR_API_KEY"`, where YOUR_API_KEY is your api key to the BetterDoctors API, which can be acquired [here](https://developer.betterdoctor.com/) by creating your own account.
5. Finally, run the command $ `gulp serve`. This will compile all code into a browser readable format, start a local server, and open index.html in your default web browser.
## Technologies used
* BikeIndex API
* JavaScript
* node.js
  * gulp
  * bower
  * browserify
  * del
  * vinyl-source-stream
  * browser-sync
* Bootstrap
* JQuery
