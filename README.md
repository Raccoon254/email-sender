# Email Sender for Android App Testers

This SvelteKit application is designed to send HTML-formatted emails to a list of testers for an Android app. It uses SMTP to send emails and provides a simple interface for managing the email list and sending process.

## Features

- Send beautifully formatted HTML emails to multiple recipients
- Easy-to-use interface for entering email addresses
- Secure email sending using SMTP
- Responsive email template optimized for various email clients

## Prerequisites

- Node.js (v14 or later recommended)
- pnpm package manager
- SMTP server access (e.g., Gmail SMTP)

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/raccoon254/email-sender.git
   cd email-sender
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   USER_EMAIL=your-email@example.com
   USER_PASSWORD=your-email-password
   ```
   Replace `your-email@example.com` and `your-email-password` with your SMTP server credentials.

4. Start the development server:
   ```
   pnpm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the port shown in your console).

## Usage

1. Enter the email addresses of your testers in the provided textarea, separated by commas.
2. Click the "Send Emails" button to send the invitation emails to all entered addresses.
3. The application will display a success or error message after attempting to send the emails.

## Customization

- To modify the email template, edit the HTML string in the `+page.server.js` file.
- To change the email subject or other sending options, modify the relevant parts of the `+page.server.js` file.

## License

[MIT License](LICENSE)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Support

If you encounter any problems or have any questions, please open an issue in the GitHub repository.