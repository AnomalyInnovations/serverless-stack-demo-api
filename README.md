# Serverless Stack Demo API [![Seed Status](https://api.seed.run/serverless-stack/serverless-stack-demo-api/stages/prod/build_badge)](https://console.seed.run/serverless-stack/serverless-stack-demo-api)

The [Serverless Stack Guide](http://serverless-stack.com/#guide) is a free comprehensive resource to creating full-stack serverless applications. We create a [note taking app](http://demo2.serverless-stack.com) from scratch.

This repo is for the serverless backend API that we build over the course of the tutorial. You can find the repo for the frontend React app [here](https://github.com/AnomalyInnovations/serverless-stack-demo-client). And the repo for the tutorial [here](https://github.com/AnomalyInnovations/serverless-stack-com).

This repo is split into:

- **services**: [Serverless Framework](https://github.com/serverless/serverless) services
- **infrastructure**: An [SST](https://github.com/serverless-stack/serverless-stack) app

#### Steps

To support the different chapters and steps of the tutorial; we use branches to represent the project codebase at the various points. Here is an index of the various chapters and branches in order.

- [Initialize the Backend Repo](../../tree/initialize-the-backend-repo)
- [Handle API Gateway CORS Errors](../../tree/handle-api-gateway-cors-errors)
- [Deploy Your Serverless Infrastructure](../../tree/deploy-your-serverless-infrastructure)

#### Usage

To use this repo locally you need to have the [Serverless framework](https://serverless.com) installed.

```bash
$ npm install serverless -g
```

Clone this repo.

```bash
$ git clone https://github.com/AnomalyInnovations/serverless-stack-demo-api
```

Head over to the `infrastructure/` directory and install the npm packages.

``` bash
$ npm install
```

And build the SST app.

``` bash
$ npx sst build
```

Then deploy it to your AWS account

``` bash
$ npx sst deploy
```

Then head over to `services/notes/`. And run a single API endpoint locally.

```bash
$ serverless invoke local --function list --path event.json
```

Where, `event.json` contains the request event info and looks something like this.

```json
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

Finally, run this to deploy to the API to your AWS account.

```bash
$ serverless deploy
```

The API service refers to an `.env` file for secret environment variables that are not checking in to the repo. Make sure to create one before deploying - https://serverless-stack.com/chapters/load-secrets-from-env.html.

---

This repo is maintained by [Serverless Stack](https://serverless-stack.com).

[email]: mailto:hello@serverless-stack.com
