This repo is for demonstrating an issue with nextjs app directory and pages router being used simultaneously.

## To reproduce
- run `npm install`
- run `npm run build`
- run `npm start`
- open site at `http://localhost:3000/demo`
- click the `Pages example` link, this works
- click the `Landing page` link. The url is http://localhost:3000/demo but it opens http://localhost:3000/demo/demo instead