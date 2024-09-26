import { sendEmail } from '$lib/emailSetup.server.js';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const emails = data.get('emails').split(',').map(email => email.trim());
    const subject = 'Test our Android App!';
    const html = `
  <div
			style="
				font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
				color: #333;
				max-width: 600px;
				margin: 0 auto;
				border: 1px solid #ddd;
				border-radius: 10px;
				overflow: hidden;
			"
		>
			<div
				style="
					text-align: center;
					height: 250px;
					width: 1000px;
					top: -50px;
					left: 0px;
					transform: rotate(20deg);
					position: relative;
					background: #8e7b10;
				"
			></div>
			<div style="position: absolute; top: 50px; left: 50%; transform: translateX(-50%)">
				<img
					src="https://status-saver.vercel.app/logo.png"
					alt="App Logo"
					style="width: 150px; margin: 20px 0; border-radius: 100%"
				/>
			</div>
			<div style="padding: 20px">
				<h1 style="text-align: center; color: #322c06">Help Us Test Our Android App!</h1>
				<p style="font-size: 16px; line-height: 1.6">
					Hello, we invite you to join our testing group to try out our new
					<strong>Status Saver</strong> Android app.
				</p>
                <p style="font-size: 16px; line-height: 1.6">Get the app on Google Play Store or join our testing program here:</p>
				<div style="display: grid; background: #d6e3e4; border-radius: 10px; grid-template-columns: 1fr 1fr">
					<div style="display: flex; flex-direction: column; justify-content: center">
						<div style="text-align: center; margin: 10px 0;">
							<a
								href="https://play.google.com/store/apps/details?id=com.kentom.saver"
								style="
									display: inline-block;
									color: white;
									border-radius: 5px;
									text-decoration: none;
									font-size: 18px;
									margin: 10px;
								"
							>
								<img
									src="https://storage.googleapis.com/pe-portal-consumer-prod-wagtail-static/images/visual-identity_badges_880x57.max-1920x1070.format-webp.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=wagtail%40pe-portal-consumer-prod.iam.gserviceaccount.com%2F20240926%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240926T053007Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=c2546d566c9f650db5037061e2a6f007d2d9e56389b1fc497b42ef3ad1ae7a6446beacf48d2bb8a96eba44ae1c7219ba73a4d677e388e461949f305812aec960e7bbf8ba7c02db8c8214c9bb3b26fc2ff07e6ba4061e70af5c59a437ea516a1d3bbc2b70a45a6e7245408dc9c8773db9a5f25da90a6510bcea3dbb29eff049ea886ebb9e64d8cebc05c9509236182448bab93f92aded6530aab7d651ea9516868ebc4e13d4a0796466b81205541487c20cb558c75e7cbc3addb6a1e46a64bf70dc2b2d3053167412ccef84cf34e19dbd9b99eae62d99ce98bf57c4e367bea0a8930564f10a78cfed57ca26f02f61afdaa53d2e6ec92d0ac4efe2d92eac8c443c"
									alt="Get it on Google Play"
									style="width: 200px;"
								/>
							</a>
						</div>
					</div>
					<div style="display: flex; flex-direction: column; justify-content: center">
						<div style="text-align: center; margin: 20px 0">
							<a
								href="https://play.google.com/apps/testing/com.kentom.saver"
								style="
									display: flex;
                                    align-items: center;
                                    justify-content: center;
									text-decoration: none;
								"
							>
								<img
									src="https://storage.googleapis.com/pe-portal-consumer-prod-wagtail-static/images/visual-identity_logos_880x572.max-1920x1070.format-webp.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=wagtail%40pe-portal-consumer-prod.iam.gserviceaccount.com%2F20240926%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240926T053008Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=68d2d5435a763f89542ef89776bcea4279bf23390e102c06edbea0285fb69f27ef296f9e8b6d1e3a0e38800a8d4d11342e5231082b71eef97a50f084b1436296d561787ab42227e32528d895ed41b57584179e722f2677c6ce3934920492828f58df42b15a531321c73bc5c3d661c27f108599371000683db00357451dc253359b1c6f3a83a28ce56b0bc60d03693337da46332efb5f46fc0d7b5671f1d2af338d4fa21c9ee149a4a7960918269c1a8e0230b6649de0814e8940d3e8cbfcef1396fb4df3d2992983bad06636093e3f438c6723feeafecd25637551b84fe811876320a10d649cac124c936373822498c9ac9d4553f15d98fd5ede222d07f03e0b"
									alt="Join the beta"
                                    style="width: 200px;"
								/>
							</a>
						</div>
					</div>
				</div>
				<p style="font-size: 16px; line-height: 1.6">
					As a token of appreciation, you will be <strong>financially compensated</strong> for your
					feedback. To claim your payment, please reach out to the app developer using the link
					below.
				</p>
				<div style="display: flex; justify-content: center; margin: 20px 0">
					<a
						href="https://wa.me/15551234567"
						style="
							display: inline-block;
							background-color: #25d366;
							color: white;
							padding: 15px 25px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 10px;
                            max-width: 200px;
							border-radius: 5px;
							text-decoration: none;
							font-size: 18px;
						"
					>
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="WhatsApp Logo" style="width: 20px" />
                        Contact Developer
					</a>
				</div>
				<section style="text-align: center; display: flex; align-items: center; justify-content: center; margin-top: 10px">
					<div style="padding: 20px; border-radius: 100%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center">
                        <img
						src="https://kentom.vercel.app/logo-light.png"
						alt="Developer Logo"
						style="width: 100px; height: 100px; filter: invert(1)"
					/>
                    </div>
				</section>
				<p style="text-align: center; font-size: 16px; line-height: 1.6">
					<strong>Kentom</strong> - Android Developer & Innovator<br />
					Visit our website:
					<a href="https://kentom.vercel.app/" style="color: #00adb5; text-decoration: none"
						>kentom.vercel.app</a
					>
				</p>
				<hr style="border: 0; border-top: 1px solid #ddd; margin: 40px 0" />
				<p style="text-align: center; font-size: 12px; color: #666">
					If you did not request to join the test group, please disregard this email.
				</p>
			</div>
		</div>
`;


    const results = await Promise.all(emails.map(email => sendEmail(email, subject, html)));
    const success = results.every(result => result.success);
    const message = success ? 'All emails sent successfully' : 'Some emails failed to send';

    return { success, message };
  }
};