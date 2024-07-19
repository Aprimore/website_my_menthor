// //@ts-nocheck
// export const prerender = false;
// import transporter from '$lib/emailSetup.server.js';
// import 'dotenv/config';

// export const actions = {
// 	default: async ({ request }) => {
// 		try {
// 			const formData = await request.formData();
// 			const email = formData.get('to');
// 			const subject = formData.get('subject');
// 			const body = formData.get('body');
// 			console.log(body);
// 			let html = `<h2>Hi!</h2><pre>${body}</pre>`;

// 			const message = {
// 				from: process.env.EMAIL_USER,
// 				to: email,
// 				bcc: process.env.EMAIL_USER,
// 				subject: subject,
// 				text: body,
// 				html: html
// 			};

// 			const sendEmail = async (message) => {
// 				await new Promise((resolve, reject) => {
// 					transporter.sendMail(message, (err, info) => {
// 						if (err) {
// 							console.error(err);
// 							reject(err);
// 						} else {
// 							resolve(info);
// 						}
// 					});
// 				});
// 			};

// 			await sendEmail(message);

// 			return {
// 				success: 'Email is sent'
// 			};
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}
// };
