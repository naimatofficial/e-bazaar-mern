import { useState } from "react";

const CountryLanguageSelector = () => {
	const [selectedCountry, setSelectedCountry] = useState("us");
	const [selectedLanguage, setSelectedLanguage] = useState("us");
	const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

	const countries = [
		{
			code: "us",
			name: "USD$",
			value: "usa",
			img: "https://flagcdn.com/w320/us.png",
		},
		{
			code: "pk",
			name: "PKR₨",
			value: "pakistan",
			img: "https://flagcdn.com/w320/pk.png",
		},
		{
			code: "in",
			name: "INR₹",
			value: "india",
			img: "https://flagcdn.com/w320/in.png",
		},
		{
			code: "sa",
			name: "SAR﷼",
			value: "saudi_arabia",
			img: "https://flagcdn.com/w320/sa.png",
		},
	];

	const languages = [
		{
			code: "us",
			name: "English",
			value: "english",
			img: "https://flagcdn.com/w320/us.png",
		},
		{
			code: "pk",
			name: "Urdu",
			value: "urdu",
			img: "https://flagcdn.com/w320/pk.png",
		},
		{
			code: "in",
			name: "Hindi",
			value: "hindi",
			img: "https://flagcdn.com/w320/in.png",
		},
		{
			code: "sa",
			name: "Arabic",
			value: "arabic",
			img: "https://flagcdn.com/w320/sa.png",
		},
	];

	const handleLanguageSelect = (code) => {
		setSelectedLanguage(code);
		setSelectedCountry(code);
		setIsLanguageDropdownOpen(false);
	};

	const toggleLanguageDropdown = () => {
		setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
	};

	return (
		<div className="flex gap-5 items-center">
			<div className="border px-2 py-1 w-24">
				<span>
					{countries.find((country) => country.code === selectedCountry)?.name}
				</span>
			</div>

			<div className="relative">
				<button
					className="flex items-center bg-transparent border w-24 px-2 py-1"
					onClick={toggleLanguageDropdown}
				>
					<img
						src={
							languages.find((language) => language.code === selectedLanguage)
								?.img
						}
						alt="Selected language flag"
						className="w-5 h-5 object-contain mr-2"
					/>
					<span>
						{
							languages.find((language) => language.code === selectedLanguage)
								?.name
						}
					</span>
				</button>
				{isLanguageDropdownOpen && (
					<ul className="absolute left-0 mt-1 bg-white border border-gray-300 shadow-lg z-50">
						{languages.map((language) => (
							<li
								key={language.value}
								className="flex items-center cursor-pointer px-2 py-1 hover:bg-gray-100"
								onClick={() => handleLanguageSelect(language.code)}
							>
								<img
									src={language.img}
									alt={`${language.name} flag`}
									className="w-5 object-contain mr-2"
								/>
								<span>{language.name}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default CountryLanguageSelector;
