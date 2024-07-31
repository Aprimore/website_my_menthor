//@ts-nocheck
import 'dotenv/config';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

let transporter = nodemailer.createTransport(
	smtpTransport({
		name: 'hostgator',
		// host: 'mail.mymenthor.com',
		host: 'mail.mymenthor.com',
		port: 587,
		secure: false,
		ignoreTLS: true,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS
		}
	})
);

transporter.verify(function (error, success) {
	if (error) {
		console.log('Error:');
		console.error(error);
	} else {
		console.log('Server is ready to take our messages');
	}
});

export default transporter;
