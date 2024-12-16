function sendEmail() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();
  var cell = sheet.getRange("Y" + lastRow);
  var serviceProvider = cell.getValue();
  var cell2 = sheet.getRange("B" + lastRow); 
  var submitter = cell2.getValue();
  var cellValue = cell.getValue();
  
  if (cellValue != 'N/A') {
    var email = "rhonda.george@nisd.net, yvonne.larralde@nisd.net, alvaro.gomez@nisd.net";
    var subject = "Referral Form with Related Service Counselor";
    var message = "A referral form was submitted by " + submitter + " that indicated "  + serviceProvider + " was the related services counselor currently involved in the referral. Here is the link to the NISD Social Services Referral Form: https://docs.google.com/spreadsheets/d/1GBsg40_DTRNEEo3C7rziWUiBbELQ8SRnG8IEXn7Rm_Y/edit?resourcekey#gid=913572678" ;
    MailApp.sendEmail(email, subject, message);
  }
}
