'use strict';

// importing AWS sdk
import AWS from 'aws-sdk';
import request from 'request';
// importing config file which contains AWS key
// Best practice: to use a config.copy.json when pushing to github
// Coz exposing the AWS keys to public is not good
import config from './config.json';

AWS.config.update({
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  region: config.aws.region
});

// Instatiating the SES from AWS SDK
let ses = new AWS.SES();

// Structure of sendMail params structure:
/*
var params = {
  Destination: {  / required /
    BccAddresses: [
      'STRING_VALUE',
      / more items /
    ],
    CcAddresses: [
      'STRING_VALUE',
      / more items /
    ],
    ToAddresses: [
      'STRING_VALUE',
      / more items /
    ]
  },
  Message: { / required /
    Body: { / required /
      Html: {
        Data: 'STRING_VALUE', / required /
        Charset: 'STRING_VALUE'
      },
      Text: {
        Data: 'STRING_VALUE', / required /
        Charset: 'STRING_VALUE'
      }
    },
    Subject: { / required /
      Data: 'STRING_VALUE', / required /
      Charset: 'STRING_VALUE'
    }
  },
  Source: 'STRING_VALUE', / required /
  ConfigurationSetName: 'STRING_VALUE',
  ReplyToAddresses: [
    'STRING_VALUE',
    / more items /
  ],
  ReturnPath: 'STRING_VALUE',
  ReturnPathArn: 'STRING_VALUE',
  SourceArn: 'STRING_VALUE',
  Tags: [
    {
      Name: 'STRING_VALUE', / required /
      Value: 'STRING_VALUE' / required /
    },
    / more items /
  ]
};

ses.sendEmail(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

*/

const recipient = ['gurcan.yves@gmail.com']

// The function to send SES email message
module.exports.sendMail = (event, context, callback) => {

  const {
    email,
    name,
    subject,
    message,
  } = event.body

// The parameters for sending mail using ses.sendEmail()
  let emailParams = {
    Destination: {
      ToAddresses: recipient
    },
    Message: {
      Body: {
        Text: {
          Data: message + ";" + name,
          Charset: 'UTF-8',
        }
      },
      Subject: {
        Data: subject,
        Charset: 'UTF-8',
      }
    },
    Source: email,
    ReplyToAddresses: [email]
  };

// the response to send back after email success.
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Mail sent successfully'
    }),
  };

// The sendEmail function taking the emailParams and sends the email requests.
  ses.sendEmail(emailParams, function (err, data) {
      if (err) {
          console.log(err, err.stack);
          callback(err);
      } else {
        console.log("SES successful");
        console.log(data);
      }
  })
}