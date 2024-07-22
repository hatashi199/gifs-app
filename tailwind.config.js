/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			backgroundColor: {
				darkSecondary: '#374151',
				lightSecondary: '#f4f4f4',
				darkPrimary: '#1f2937',
				lightPrimary: '#ffffff'
			},
			textColor: {
				mainBlack: '#1f2937',
				mainWhite: '#ffffff'
			}
		}
	},
	plugins: []
};
