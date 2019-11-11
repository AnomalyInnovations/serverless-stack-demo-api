
let config = {
  development: {
    STRIPE_SECRET_KEY: ""
  },
  staging : {
    STRIPE_SECRET_KEY: ""
  },
  production : {
    STRIPE_SECRET_KEY : ""
  }
}

const environment = process.env.ENVIRONMENT;
let finalconfig:any;
switch(environment) {
  case 'development':
    finalconfig = config.development;
  break
  case 'staging':
    finalconfig = config.staging;
  break;
  case 'production':
    finalconfig = config.production;
  break;
  default : 
    finalconfig = config.development;
  break;
}

export default finalconfig;