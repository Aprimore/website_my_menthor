//@ts-nocheck
import transporter from '$lib/emailSetup.js';
import 'dotenv/config';
import path from 'path';
// export const prerender = false;

export const actions = {
	default: async ({ request }) => {
		try {
			// const formData = await request.formData();
			// const name = formData.get('Last Name');
			// const email = formData.get('Email');
			// const country = formData.get('Country');
			// const phone = formData.get('Mobile');
			// const company = formData.get('Company');
			// // const ebookPath = path.resolve('src/lib/assets/Ebook_EN.pdf');
			// const subject = 'Your Free E-book from My Menthor';
			// const body = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
			// let html = `
			// 	<html>
			// 		<body style="font-family: Arial, sans-serif; line-height: 1.6;">
			// 		<div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
			// 			<h1 style="text-align: center; color: #333;">Hello!</h1>
			// 			<p>Dear ${name},</p>
			// 			<p>Attached to this email, you will find your free E-book from the My Menthor website. We hope you enjoy reading it!</p>
			// 			<br>
			// 			<p>Best regards, </p>
			// 			<p><strong><a href="https://www.mymenthor.com/" style="color: #1a73e8; text-decoration: none;">The My Menthor Team</a></strong></p>
			// 		</div>
			// 		</body>
			// 	</html>`;

			const formData = await request.formData();
			const email = formData.get('to');
			const subject = formData.get('subject');
			const body = formData.get('body');
			let html = `<h2>Hi!</h2><pre>${body}</pre>`;

			const message = {
				from: process.env.EMAIL_USER,
				to: email,
				bcc: 'contact@mymenthor.com',
				subject: subject,
				text: body,
				html: html
				// attachments: [
				// 	{
				// 		filename: 'Ebook_EN.pdf',
				// 		path: ebookPath,
				// 		contentType: 'application/pdf',
				// 		contentDisposition: 'attachment'
				// 	}
				// ]
			};

			// console.log(email);

			// console.log(`FORMDATA CORRETO: \n`, formData);

			// const message = {
			// 	from: process.env.EMAIL_USER,
			// 	to: email,
			// 	bcc: 'contact@mymenthor.com',
			// 	subject: 'Hello, World',
			// 	text: 'Test message 123',
			// 	html: html
			// };

			const sendEmail = async (message) => {
				await new Promise((resolve, reject) => {
					transporter.sendMail(message, (err, info) => {
						if (err) {
							console.error(err);
							reject(err);
						} else {
							resolve(info);
						}
					});
				});
			};

			console.log('MENSAGEM: \n', message);
			await sendEmail(message);

			return {
				success: 'Email is sent'
			};
		} catch (error) {
			console.error(error);
		}
	}
};
