/**
 * Constants for email recipients and referral form link.
 */
const EMAIL_RECIPIENTS = "rhonda.george@nisd.net, yvonne.larralde@nisd.net, alvaro.gomez@nisd.net";
const REFERRAL_FORM_LINK = "https://docs.google.com/spreadsheets/d/1GBsg40_DTRNEEo3C7rziWUiBbELQ8SRnG8IEXn7Rm_Y/edit?resourcekey#gid=913572678";

/**
 * Sends an email notification when a referral form is submitted with a related service counselor.
 * This function is intended to be triggered on form submission.
 *
 * Retrieves the last row of the active sheet, checks if a related service counselor is specified,
 * and sends an email notification to designated recipients if applicable.
 *
 * @function
 * @author Alvaro Gomez
 * @contact Academic Technology Coach, Office: 210-397-9408, Cell: 210-363-1577
 * @returns {void}
 */
function sendEmail() {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const lastRow = sheet.getLastRow();

    if (lastRow === 0) return; // Exit if the sheet is empty
    const serviceProvider = sheet.getRange("Y" + lastRow).getValue();
    const submitter = sheet.getRange("B" + lastRow).getValue();

    if (serviceProvider !== "N/A") {
      const subject = "Referral Form with Related Service Counselor";
      const message = `A referral form was submitted by ${submitter} that indicated ${serviceProvider} was the related services counselor currently involved in the referral. Here is the link to the NISD Social Services Referral Form: ${REFERRAL_FORM_LINK}`;
      MailApp.sendEmail(EMAIL_RECIPIENTS, subject, message);
    }
  } catch (error) {
    Logger.log("Error in sendEmail: " + error);
    throw error;
  }
}
