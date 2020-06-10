 
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const main=async function main(value) {
    try{

    
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
   

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'devilcyber360@gmail.com', // generated ethereal user
      pass: 'googlesummerofcode', // generated ethereal password
    },
  });
console.log(value.message);
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from:`${value.input_email}`, // sender address
    to: `mani2474695@gmail.com`,
    subject: "Hello Manikant✔", // Subject line
    html:  `
    <h2>${value.name}</h2>
    <b>${value.input_email}</b><br>
    <b>${value.message}</b>

    ` // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}catch(e){
    console.log('Error in sending mail:',e);
}
}

 
module.exports=main;
