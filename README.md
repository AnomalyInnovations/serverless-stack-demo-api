# Serverless Stack Demo API [![Seed Status](https://api.seed.run/serverless-stack/serverless-stack-demo-api/stages/prod/build_badge)](https://console.seed.run/serverless-stack/serverless-stack-demo-api)

[Serverless Stack](http://serverless-stack.com) is a free comprehensive guide to creating full-stack serverless applications. We create a [note taking app](http://demo2.serverless-stack.com) from scratch.

The main part of the guide uses [SST](https://github.com/serverless-stack/serverless-stack). We also have an alternative version that uses Serverless Framework. This repo is the source for the Serverless Framework version of the backend. There's a [frontend React client that connects to this as well](https://github.com/AnomalyInnovations/serverless-stack-demo-client).

#### Usage

To use this repo locally you need to have the [Serverless framework](https://serverless.com) installed.

``` bash
$ npm install serverless -g
```

Clone this repo and install the NPM packages.

``` bash
$ git clone https://github.com/AnomalyInnovations/serverless-stack-demo-api
$ npm install
```

Run a single API on local.

``` bash
$ serverless invoke local --function list --path event.json
```

Where, `event.json` contains the request event info and looks something like this.

``` json
{
  "requestContext": {
    "authorizer": {
      "claims": {
        "sub": "USER-SUB-1234"
      }
    }
  }
}
```

Finally, run this to deploy to your AWS account.

``` bash
$ serverless deploy
```

This project refers to an `.env` file for secret environment variables that are not checking in to the repo. Make sure to create one before deploying - https://serverless-stack.com/chapters/load-secrets-from-env.html.

---

This repo is maintained by [Anomaly Innovations](https://anoma.ly); makers of [Seed](https://seed.run) and [Serverless Stack](https://serverless-stack.com).

[Email]: mailto:contact@anoma.ly
