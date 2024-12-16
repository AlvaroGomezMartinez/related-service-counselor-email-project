/**
 * Sends an email notification when a referral from is submitted with a related service counselor.
 * A trigger is set to run this function on form submit.
 * 
 * @author Alvaro Gomez
 *         Academic Technology Coach
 *         Office: 210-397-9408
 *         Cell: 210-363-1577
 */
function sendEmail() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();

  if (lastRow === 0) return; // Exit if the sheet is empty
  var serviceProvider = sheet.getRange("Y" + lastRow).getValue();
  var submitter = sheet.getRange("B" + lastRow).getValue();

  if (serviceProvider !== "N/A") {
    const emailRecipients = "rhonda.george@nisd.net, yvonne.larralde@nisd.net, alvaro.gomez@nisd.net";
    const subject = "Referral Form with Related Service Counselor";
    const referralFormLink =
      "https://docs.google.com/spreadsheets/d/1GBsg40_DTRNEEo3C7rziWUiBbELQ8SRnG8IEXn7Rm_Y/edit?resourcekey#gid=913572678";

    const message = `A referral form was submitted by ${submitter} that indicated ${serviceProvider} was the related services counselor currently involved in the referral. Here is the link to the NISD Social Services Referral Form: ${referralFormLink}`;

    MailApp.sendEmail(emailRecipients, subject, message);
  }
}
