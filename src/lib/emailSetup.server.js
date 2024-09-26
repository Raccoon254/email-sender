import nodemailer from 'nodemailer';
import { USER_EMAIL, USER_PASSWORD } from '$env/static/private';

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: USER_EMAIL,
    pass: USER_PASSWORD
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

export default transporter;