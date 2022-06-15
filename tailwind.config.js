module.exports = {
	content: [
		'./pages/**/*.js',
		'./components/**/*.js',
		'./modules/**/*.{jsx,js}',
	],
	theme: {
		colors: {
			primary: '#e74423',
			secondary: '#f1f0de',
			white: '#ffffff',
			blue: '#0081bd',
			red: '#d20000',
			green: '#4caf50',
			'gray-dark': '#595959',
			gray: '#c5c5c5',
			'gray-light': '#e6e6e6',
			facebook: '#3b5998',
			yellow: 'rgb(250 204 21)',
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		extend: {
			boxShadow: {
				fab: '0px 0px 5px 1px rgba(0, 0, 0, 0.25)',
				button: '0px 4px 5px rgba(0, 0, 0, 0.3)',
			},
		},
		plugins: [],
	},
};
