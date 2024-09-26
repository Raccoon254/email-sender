import { sendEmail } from '$lib/emailSetup.server.js';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const emails = data.get('emails').split(',').map(email => email.trim());
    const subject = 'Android App Testing';
    const html = 
    `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Invitation</title>
  </head>
  <body style="font-family: Arial, sans-serif; color: #333; margin: 0; padding: 20px; background-color: #f7f7f7;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
      <!-- Header with Background and Logo -->
      <div style="text-align: center; background-color: #8e7b10; padding: 50px;">
        <img src="https://status-saver.vercel.app/logo.png" alt="App Logo" style="width: 120px; border-radius: 50%;" />
      </div>
      
      <!-- Main Content -->
      <div style="padding: 20px;">
        <h1 style="text-align: center; color: #322c06;">Help Us Test Our Android App!</h1>
        <p style="font-size: 16px; line-height: 1.6;">Hello, we invite you to join our testing group to try out our new <strong>Status Saver</strong> Android app.</p>
        <p style="font-size: 16px; line-height: 1.6;">Get the app on Google Play Store or join our testing program here:</p>
        
        <!-- Call to Action Buttons -->
        <div style="display: flex; justify-content: space-around; align-items: center; margin: 20px 0; height: 80px;">
          <!-- Google Play Store Button -->
          <a href="https://play.google.com/store/apps/details?id=com.kentom.saver" style="display: inline-block; text-decoration: none;">
            <img src="https://status-saver.vercel.app/store.png" alt="Get it on Google Play" style="width: 180px;" />
          </a>
        </div>
        
        <!-- Compensation Note -->
        <p style="font-size: 16px; line-height: 1.6;">As a token of appreciation, you will be <strong>financially compensated</strong> for your feedback. To claim your payment, please reach out to the app developer using the link below.</p>
        
        <!-- WhatsApp Contact Button -->
        <div style="text-align: center; margin: 20px 0;">
          <a href="https://wa.me/15551234567" style="display: inline-block; background-color: ; color: black; padding: 10px 25px; border-radius: 100px; text-decoration: none; font-size: 18px;
          border: 2px solid #25d366; transition: background-color 0.3s; cursor: pointer; text-align: center; margin: 10px 0; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          ">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="WhatsApp Logo" style="width: 30px; vertical-align: middle; margin-right: 10px;" /> Contact Developer
          </a>
        </div>
        
    </div>

        <!-- Developer Section -->
        <div style="text-align: center; margin-top: 10px; background: #8e7b10; padding: 10px;">
          <img src="https://kentom.vercel.app/logo-light.png" alt="Developer Logo" style=" margin-top: 20px; width: 100px;" />
          <p style="font-size: 16px; line-height: 1.6; color: white; margin: 20px 0;">
            <strong>Kentom</strong> - Android Developer & Innovator<br />
            Visit our website: <a href="https://kentom.vercel.app/" style="color: #00adb5; text-decoration: none;">kentom.vercel.app</a>
          </p>
        
        <!-- Footer Disclaimer -->
        <hr style="border: 0; border-top: 1px solid #ddd; margin: 40px 0;" />
        <p style="text-align: center; font-size: 12px; color: #111010;">If you did not request to join the test group, please disregard this email.</p>
      </div>
    </div>
  </body>
</html>

    `;


    const results = await Promise.all(emails.map(email => sendEmail(email, subject, html)));
    const success = results.every(result => result.success);
    const message = success ? 'All emails sent successfully' : 'Some emails failed to send';

    return { success, message };
  }
};