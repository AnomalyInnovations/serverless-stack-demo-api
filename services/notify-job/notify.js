import AWS from "../../libs/aws-sdk";
import config from "../../config";

export async function main(event, context) {
  // Parse SNS data
  const { amount, description } = JSON.parse(event.Records[0].Sns.Message);

  const sns = new AWS.SNS();
  await sns
    .publish({
      Message: `Charged ${amount} for ${description}`,
      PhoneNumber: config.adminPhoneNumber
    })
    .promise();

  return { status: true };
}
