import { sendEmail } from '$lib/emailSetup.server.js';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const emails = data.get('emails').split(',').map(email => email.trim());
    const subject = 'Test our Android App!';
    const html = `
      <h1>Help us test our Android app!</h1>
      <p>We invite you to join our test group and try out our new Android app.</p>
      <p>You can download the app from the Google Play Store:</p>
      <a href="https://play.google.com/store/apps/details?id=com.kentom.saver">Download the app</a>
      <p>Or join our testing program:</p>
      <a href="https://play.google.com/apps/testing/com.kentom.saver">Join the test</a>
      <p>Thank you for your support!</p>
    `;

    const results = await Promise.all(emails.map(email => sendEmail(email, subject, html)));
    const success = results.every(result => result.success);
    const message = success ? 'All emails sent successfully' : 'Some emails failed to send';

    return { success, message };
  }
};