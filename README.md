# Related Service Counselor Email Project
## Northside Independent School District<br>Academic Technology
Automates the process of sending email notifications to the district social workers when a referral form is submitted by a counselor who indicated that they are a related service counselor.<br><br>Built with Google Apps Script for seamless integration with Google Workspace.

## Features
- Sends email notifications to designated recipients when a referral form is submitted.
- Checks for the presence of a related service counselor before sending emails.
- Easy to deploy and customize for your organization.

## How It Works
1. The script is triggered when a Google Sheet form is submitted.
2. It checks the last row for a related service counselor.
3. If a counselor is specified, an email is sent to the appropriate recipients.

## Files
- `Code.js`: Main script containing the email notification logic.
- `appsscript.json`: Project manifest for Google Apps Script.

## Setup
1. Clone or download this repository.
2. Use [clasp](https://github.com/google/clasp) to push the code to your Google Apps Script project, or copy the contents into the Apps Script editor.
3. Set up a trigger for the `sendEmail` function to run on form submission.

## Author
Alvaro Gomez  
Academic Technology Coach  
Office: 210-397-9408  
Cell: 210-363-1577
