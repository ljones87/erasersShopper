
## Setup


* `npm install`
* Create two postgres databases: `erasers` and `erasers-test`
  * By default, running `npm test` will use `boilermaker-test`, while regular development uses `boilermaker`
* Requires local secret file for google sign in to function properly
  * Its purpose is to attach the secret env variables that you'll use while developing
  * However, it's **very** important that you **not** push it to Github! Otherwise, *prying eyes* will find your secret API keys!

* Complete the step above with a real client ID and client secret from Google
  * You can get them here: https://console.developers.google.com/apis/credentials

## Start

`npm run start-dev` will make great things happen!

If you want to run the server and/or webpack separately, you can also `npm run start-server` and `npm run build-client`.

From there, just follow your bliss.

