/**
 * @param {String} message
 */
const postMessageToSlack = (message) => {
  const slackWebhookUrl = ''
  const channel = 'general'
  const username = 'bot君'
  const icon_emoji = 'warning'

  const data = {
    channel,
    username,
    icon_emoji,
    'text': message
  }
  const payload = JSON.stringify(data)
  const options = {
    "method": "post",
    "contentType": "application/json",
    "payload": payload
  }
  UrlFetchApp.fetch(slackWebhookUrl, options);
}
