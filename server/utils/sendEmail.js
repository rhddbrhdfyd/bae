const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(to, content) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: '임시 비밀번호 발급',
    text: content,
  });
}

module.exports = sendEmail;