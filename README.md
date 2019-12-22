This project was created with tutorial [Plan, Code, and Deploy a Startup in 2 Hours](https://www.youtube.com/watch?v=lauywdXKEXI&list=WL&index=7)<br />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Architecture
/client : React front end<br />
/api : Node Express API to consume Redis data<br />
/worker : Cron worker to fetch data and save it to Redis<br />

## Available Scripts
Install required packages by running:

### `npm install`

To start cron job, you can run:

### `node worker/index.js`

To start api, you can run:

### `node api/index.js`

In the client directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
