const stage = process.env.stage;
const resourcesStage = process.env.resourcesStage;
const adminPhoneNumber = "+14151234567";

const stageConfigs = {
  dev: {
    stripeKeyName: "/stripeSecretKey/test"
  },
  prod: {
    stripeKeyName: "/stripeSecretKey/live"
  }
};

const config = stageConfigs[stage] || stageConfigs.dev;

export default {
  stage,
  resourcesStage,
  adminPhoneNumber,
  ...config
};
