/* eslint-disable react/prop-types */

const FooterSection = ({ title, links, content }) => {
	return (
		<div>
			<h4 className="text-lg mb-4">{title}</h4>
			{links ? (
				<ul>
					{links.map((link, index) => (
						<li key={index}>
							<a href={link.url} className="hover:underline">
								{link.name}
							</a>
						</li>
					))}
				</ul>
			) : (
				content
			)}
		</div>
	);
};

export default FooterSection;
