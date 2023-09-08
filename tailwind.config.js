/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	resolve: {
		safelist: [
			{
				pattern: /col-(span|start|end)-\d+/,
			},
			{
				pattern:
					/^(bg|text|border)-(slate|gray|zinc|neutral|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-)?(100|200|300|400|500|600|700|800|900)?$/,
			},
		],
	},
	theme: {
		extend: {
			colors: {
				primary: '#06b6d4',
				secondary: '#e11d48',
				dark: '#101010',
				success: '#3bb273',
				info: '#5438dc',
				warning: '#ef7b45',
				danger: '#ef233c',
			},
		},
	},
	plugins: [],
};
