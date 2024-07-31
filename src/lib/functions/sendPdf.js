import { json } from '@sveltejs/kit';
import { invokeLambda } from '$lib/aws';

export async function POST({ request }) {
    const data = await request.json();

    try {
        const response = await invokeLambda(data);
        return json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        return json({ success: false, message: 'Error sending email' });
    }
}