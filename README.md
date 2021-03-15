# nodejs-filemanager

Made with node.js, redux.

Babel is used for ES6 syntax.

API read files from src/public path.

## How to use

/list - returns json of all files in src/public directory.

/scan - scans all files in src/public directory. If file is deleted it marks's active : false.

/download-state - downloads the state object.

## Install

npm install or yarn

## Development

npm run dev or yarn dev

## Start

npm run build && npm run start 

or yarn build && yarn start