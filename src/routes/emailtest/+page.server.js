//@ts-nocheck
import transporter from '$lib/emailSetup.server.js';
import 'dotenv/config';
import Imap from 'imap';
import { simpleParser } from 'mailparser';
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
			return new Promise((resolve, reject) => {
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

		const appendToSentFolder = async (message) => {
			return new Promise((resolve, reject) => {
				const imap = new Imap({
					user: process.env.EMAIL_USER,
					password: process.env.EMAIL_PASS,
					host: 'imap.titan.email',
					port: 993,
					tls: true
				});

				imap.once('ready', () => {
					imap.openBox('Sent', true, (err) => {
						if (err) {
							reject(err);
							imap.end();
							return;
						}

						const emailMessage = `From: ${message.from}\r\nTo: ${message.to}\r\nSubject: ${message.subject}\r\n\r\n${message.text}`;

						imap.append(emailMessage, { mailbox: 'Sent' }, (appendErr) => {
							if (appendErr) {
								reject(appendErr);
							} else {
								resolve('Email appended to "Sent" folder.');
							}
							imap.end();
						});
					});
				});

				imap.once('error', (imapErr) => {
					reject(imapErr);
				});

				imap.connect();
			});
		};

		await sendEmail(message);
		await appendToSentFolder(message);

		return {
			success: 'Email is sent'
		};
		// } catch (error) {
		// 	console.log(`ERRO: `, error);
		// 	console.error(error);
		// }
	}
};
