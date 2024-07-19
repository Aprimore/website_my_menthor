//@ts-nocheck
import transporter from '$lib/emailSetup.server.js';
import 'dotenv/config';
export const prerender = false;

export const actions = {
	default: async ({ request }) => {
		// try {
		const formData = await request.formData();
		const email = formData.get('to');
		const subject = formData.get('subject');
		const body = formData.get('body');
		console.log(body);
		let html = `<h2>Hi!</h2><pre>${body}</pre>`;

		// const message = {
		// 	from: process.env.EMAIL_USER,
		// 	to: email,
		// 	// bcc: process.env.EMAIL_USER,
		// 	subject: subject,
		// 	text: body,
		// 	html: html
		// };

		const message = {
			from: process.env.EMAIL_USER,
			to: 'gabrielchristomarques@gmail.com',
			subject: 'Test Email',
			text: 'This is a test email sent using SSL over TLS.',
			html: '<p>This is a test email sent using <strong>SSL over TLS</strong>.</p>'
		};

		const sendEmail = async (message) => {
			await new Promise((resolve, reject) => {
				transporter.sendMail(message, (err, info) => {
					if (err) {
						console.log(`ERROOOO`);
						console.error(err);
						reject(err);
					} else {
						console.log(`REsolve Info`);
						resolve(info);
					}
				});
			});
		};
		console.log(message);
		await sendEmail(message);

		return {
			success: 'Email is sent'
		};
		// } catch (error) {
		// 	console.log(`ERRO: `, error);
		// 	console.error(error);
		// }
	}
};
