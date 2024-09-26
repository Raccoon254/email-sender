import nodemailer from 'nodemailer';
import { USER_EMAIL, USER_PASSWORD } from '$env/static/private';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: USER_EMAIL,
    pass: USER_PASSWORD
  }
});

export async function sendEmail(to, subject, html) {
  const mailOptions = {
    from: USER_EMAIL,
    to,
    subject,
    html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email' };
  }
}