import validator from 'validator';

const freeEmailDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];

export function isProfessionalEmail(email: string): boolean {
	if (!validator.isEmail(email)) {
		return false;
	}
	const domain = email.split('@')[1];
	return !freeEmailDomains.includes(domain);
}
