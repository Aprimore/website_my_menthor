//@ts-nocheck
import 'dotenv/config';
import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
	host: 'mail.mymenthor.com',
	// host: 'smtp.titan.email',
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS
	},
	timeout: 10000
});

transporter.verify(function (error, success) {
	if (error) {
		console.log('Error:');
		console.error(error);
	} else {
		console.log('Server is ready to take our messages');
	}
});

export default transporter;
