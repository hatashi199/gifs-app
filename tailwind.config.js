/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			backgroundColor: {
				darkSidebar: '#374151',
				lightSidebar: '#f4f4f4',
				darkHome: '#1f2937'
			},
			textColor: {
				mainBlack: '#1f2937'
			}
		}
	},
	plugins: []
};
