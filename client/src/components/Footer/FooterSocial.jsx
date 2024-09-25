import { FaTwitter, FaLinkedin, FaGoogle, FaPinterestP, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const socialIcons = [
    { icon: FaTwitter, url: '#' },
    { icon: FaLinkedin, url: '#' },
    { icon: FaGoogle, url: '#' },
    { icon: FaPinterestP, url: '#' },
    { icon: FaInstagram, url: '#' },
    { icon: FaFacebookF, url: '#' },
];

const FooterSocial = () => {
    return (
        <div className="flex lg:flex-row flex-col items-center lg:items-start lg:justify-around p-2 bg-primary-700">
            <div>
                <h2 className="text-sm text-white">
                    Copyright LightHouse@2021
                </h2>
            </div>
            <div className="flex space-x-4 my-4 md:my-0">
                {socialIcons.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                        <div
                            key={index}
                            className="group bg-primary-600 rounded-full p-2 transition-colors duration-300 hover:bg-white"
                        >
                            <Link to={social.url} className="block no-underline">
                                <IconComponent className="w-4 h-4 hover:text-green transition-colors duration-300 hover:text-green-500" />
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className="text-white space-x-4">
                <Link to="#" className="no-underline">Terms & Conditions</Link>
                <Link to="#" className="no-underline">Privacy Policy</Link>
            </div>
        </div>
    );
};

export default FooterSocial;
