import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: () => {
		return {
			status: 200,
			headers: {
				'Content-Type': 'text/html'
			},
			body: '<h1>Report</h1>'
		};
	}
};
