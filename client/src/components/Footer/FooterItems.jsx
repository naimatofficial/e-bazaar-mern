/* eslint-disable react/prop-types */

const FooterItems = ({ title, links, content }) => {
	return (
		<div>
			<h4 className="text-lg mb-4 border-white text-left">{title}</h4>
			{links ? (
				<ul>
					{links.map((link, index) => (
						<li key={index}>
							<a href={link.url} className="pl-4 hover:text-primary-100">
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

export default FooterItems;
