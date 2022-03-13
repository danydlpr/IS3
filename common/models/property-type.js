'use strict';

module.exports = function(Propertytype) {
    Propertytype.sendEmail = (message, subject, emailAddresses, cb) => {
        Propertytype.app.models.Email.send({
          to: emailAddresses,
          from: 'you@gmail.com',
          subject: subject,
          text: message,
          html: message
        }, function (err, mail) {
          console.log('email sent!');
          if (err) return err;
        });
        cb(null, 'message sent:  ' + message)
      }
    
      Propertytype.remoteMethod(
        'sendEmail', {
        http: {
          path: '/sendEmail', verb: 'get'
        },
        description: [
          "Api to send email messages."
        ],
        accepts: [
          {
            arg: 'message',
            type: 'string',
            required: true
          },
          {
            arg: 'subject',
            type: 'string',
            required: true
          },
          {
            arg: 'emailAddresses',
            type: 'string',
            required: true
          }
        ],
        returns: { arg: 'response', type: 'string' }
    
      }
      )
};
