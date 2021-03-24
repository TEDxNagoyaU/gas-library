/**
 * 
 * @param {String} email 
 * @param {String} subject メールのタイトル
 * @param {String} body 
 */
const sendEmail = (email, subject, body) => {
  GmailApp.sendEmail(email, subject, body)
}
