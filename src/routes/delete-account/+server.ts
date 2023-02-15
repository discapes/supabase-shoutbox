import { auth, db } from '$lib/firebase.server';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { idToken } = await request.json();
	const { uid } = await auth.verifyIdToken(idToken);
	await db.collection('users').doc(uid).delete();
	await auth.deleteUser(uid);
	return new Response(null);
};
