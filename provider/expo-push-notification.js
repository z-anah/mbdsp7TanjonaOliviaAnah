const { Expo } = require("expo-server-sdk");
const config = require("../config/index");

let notification = (req, res) => {
  try {
    const { tokens, title, body, data } = req.body;
    let expo = new Expo({
      // accessToken: process.env.EXPO_ACCESS_TOKEN
    });
    let messages = [];
    let somePushTokens = tokens;
    for (let pushToken of somePushTokens) {
      // Each push token looks like ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]
      if (!Expo.isExpoPushToken(pushToken))
        throw new Error(
          `Push token ${pushToken} is not a valid Expo push token`
        );

      messages.push({
        to: pushToken,
        sound: "default",
        title,
        body,
        data,
      });
    }
    let chunks = expo.chunkPushNotifications(messages);
    let tickets = [];
    (async () => {
      for (let chunk of chunks) {
        try {
          let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
          console.log(ticketChunk);
          tickets.push(...ticketChunk);
        } catch (error) {
          console.error(error);
        }
      }
    })();

    let receiptIds = [];
    for (let ticket of tickets) {
      if (ticket.id) {
        receiptIds.push(ticket.id);
      }
    }

    let receiptIdChunks = expo.chunkPushNotificationReceiptIds(receiptIds);
    (async () => {
      for (let chunk of receiptIdChunks) {
        let receipts = await expo.getPushNotificationReceiptsAsync(chunk);
        console.log(receipts);
        for (let receiptId in receipts) {
          let { status, message, details } = receipts[receiptId];
          if (status === "ok") {
            continue;
          } else if (status === "error") {
            let err = `There was an error sending a notification: ${message}`;
            if (details && details.error) {
              err += `\nThe error code is ${details.error}`;
            }
            throw new Error(err);
          }
        }
      }
    })();

    res.send({
      status: true,
      message: config.msg[req.body.loc || "FR"].info.MSG_I0006,
      data,
    });
  } catch (error) {
    res.send({
      status: false,
      message: config.msg[req.body.loc || "FR"].error.MSG_E0007,
      desc: error.message,
    });
  }
};

module.exports = { notification };
