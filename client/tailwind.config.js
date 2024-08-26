/* eslint-disable no-undef */
import withMT from "@material-tailwind/react/utils/withMT";

const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
	...defaultColors,
	...{
		primary: {
			700: "#60792a",
			600: "#708e31",
			500: "#a1cb46",
			400: "#90b63f",
			300: "#c6e198",
			200: "#e2f0cc",
			100: "#e2efc7",
		},
	},
};

export default withMT({
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./node_modules/react-phone-input-2/lib/style.css",
	],
	theme: {
		extend: {},
		colors: colors,
	},

	plugins: [],
});
