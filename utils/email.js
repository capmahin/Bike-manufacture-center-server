const emailSenderOptions = {
  auth: {
    api_key: process.env.EMAIL_SENDER_KEY,
  },
};
const emailClient = nodemailer.createTransport(sgTransport(emailSenderOptions));

function sendManufactureEmail(booking) {
  const { buyer, buyerName, fixing, date } = booking;
  var email = {
    from: process.env.EMAIL_SENDER,
    to: buyer,
    subject: `Your fixing for ${fixing} is on ${date} is confirmed`,
    text: `Your fixing for ${fixing} is on ${date} is confirmed`,
    html: `
      <div>
      <p> Hello ${buyerName}, </p>
      <h3> Your booking For fixing ${fixing} is confirmed</h3>
      <p>Looking forward to seeing you on ${date}</p>
  
      
      </div>
      
      
      `,
  };

  emailClient.sendMail(email, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Message sent: ", info);
    }
  });
}

module.exports = sendManufactureEmail;
