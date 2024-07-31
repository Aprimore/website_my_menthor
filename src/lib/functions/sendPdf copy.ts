// //@ts-nocheck
// // export const prerender = false;
// import transporter from '$lib/emailSetup.js';
// import 'dotenv/config';

// export const sendPdf = async (formData) => {
// 	console.log(formData);
// 	try {
// 		const email = formData.get('to');
// 		const subject = 'Form Submission from MyMentor Landing Page';
// 		// formData.get('subject');
// 		const body = formData.get('body');
// 		console.log(body);
// 		let html = `<h2>Hi!</h2><pre>${body}</pre>`;

// 		const message = {
// 			from: `emailUser`,
// 			to: email,
// 			bcc: `emailUser`,
// 			subject: subject,
// 			text: body,
// 			html: html
// 		};

// 		const sendEmail = async (message) => {
// 			await new Promise((resolve, reject) => {
// 				transporter.sendMail(message, (err, info) => {
// 					if (err) {
// 						console.error(err);
// 						reject(err);
// 					} else {
// 						resolve(info);
// 					}
// 				});
// 			});
// 		};

// 		await sendEmail(message);

// 		return {
// 			success: 'Email is sent'
// 		};
// 	} catch (error) {
// 		console.error(error);
// 	}
// };
