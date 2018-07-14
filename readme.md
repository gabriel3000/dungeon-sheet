## Lastpass.cdn

This repo is for 3rd party resources that may not be otherwise allowed on logmein's secure properties.

The idea is that we can add resources to this domain: https://cdn.lmiutil.com
And then refference that domain via an iframe

This provides a level of abstraction and security that me need!

## Get started with this repo

Clone the repo and run `npm install` (make sure you have npm and node)
After that, you should beable to run `node app.js`

server runs on port localhost:8080 and serves the contents of the "lmiutils" folder

Add a subfolder to this directory if one hasnt been created for your project yet. Then navigate to the html resources you add there!

***