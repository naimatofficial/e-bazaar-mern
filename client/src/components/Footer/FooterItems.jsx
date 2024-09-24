/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

const FooterItems = ({ title, links, content }) => {
    return (
        <div>
            <h4 className="text-lg mb-4 border-white text-left">{title}</h4>
            {links ? (
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.url}
                                className="pl-4 hover:text-primary-100"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                content
            )}
        </div>
    )
}

export default FooterItems
