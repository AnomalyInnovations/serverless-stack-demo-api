import AWS from "aws-sdk";
import util from "util";

// Log AWS SDK calls
AWS.config.logger = { log: debug };

let logs;
let timeoutTimer;

export function init(event, context) {
  logs = [];

  // Log API event
  debug("API event", {
    body: event.body,
    pathParameters: event.pathParameters,
    queryStringParameters: event.queryStringParameters,
  });

  // Start timeout timer
  timeoutTimer = setTimeout(() => {
    timeoutTimer && flush(new Error("Lambda will timeout in 100 ms"));
  }, context.getRemainingTimeInMillis() - 100);
}

export function end() {
  // Clear timeout timer
  clearTimeout(timeoutTimer);
  timeoutTimer = null;
}

export function flush(e) {
  logs.forEach(({ date, string }) => console.debug(date, string));
  console.error(e);
}

export default function debug() {
  logs.push({
    date: new Date(),
    string: util.format.apply(null, arguments),
  });
}
