/* eslint-disable react/prop-types */

const FooterItems = ({ title, links, content }) => {
    return (
        <div>
            <h4 className="text-lg mb-4 text-center pl-4 border-white">{title}</h4>
            {links ? (
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} className="flex items-center justify-center hover:text-primary-100">
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
