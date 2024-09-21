import { Link } from 'react-router-dom'
import AppStore from '../../assets/socials-icons/apple_app.png'
import GoogleApp from '../../assets/socials-icons/google_app.png'
import FooterItems from './FooterItems'
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhone,
    FaTicketAlt,
} from 'react-icons/fa'

import logo from './../../assets/app-logo/vista-app-logo.png'

const footerSpecial = [
    {
        title: 'SPECIAL',
        links: [
            { name: 'Flash Deal', url: '#' },
            { name: 'Featured Products', url: '#' },
            { name: 'Latest Products', url: '#' },
            { name: 'Best Selling Products', url: '#' },
            { name: 'Top Rated Products', url: '#' },
        ],
    },
]

const footerInfo = [
    {
        title: 'ACCOUNT & SHIPPING INFO',
        links: [
            { name: 'Profile Info', url: '#' },
            { name: 'Wish List', url: '#' },
            { name: 'Track Order', url: '#' },
            { name: 'Refund Policy', url: '#' },
            { name: 'Return Policy', url: '#' },
            { name: 'Cancellation Policy', url: '#' },
        ],
    },
]

const footerNews = [
    {
        title: 'NEWSLETTER',
        content: (
            <div className="flex flex-col gap-4 ">
                <p className="text-left">
                    Subscribe to our new channel to get latest updates
                </p>
                <div className="relative flex items-center">
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        className="pl-4 py-2 rounded text-black w-full focus:outline-none focus:ring-2 focus:ring-primary-700 "
                    />
                    <div className="absolute right-2 bg-primary-600 top-1/2 p-1 transform -translate-y-1/2 rounded text-white font-bold hover:bg-primary-700">
                        Subscribe
                    </div>
                </div>
            </div>
        ),
    },
]
const FooterMainSection = () => {
    return (
        <div className="bg-primary-600">
            <div className="lg:w-[80%] w-full bg-primary-10 mx-auto flex lg:flex-row flex-col items-center  min-h-[50vh] gap-4 text-white">
                <div className="lg:w-[25%] flex flex-col gap-4 px-4 items-center ">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-48 h-30 object-contain"
                    />

                    <h4 className=" text-lg mb-2">DOWNLOAD OUR APP</h4>
                    <div className="flex justify-center gap-2">
                        <Link to="/">
                            <img
                                src={GoogleApp}
                                alt="App Store"
                                className="w-36"
                            />
                        </Link>
                        <Link to="/">
                            <img
                                src={AppStore}
                                alt="Google Play"
                                className="w-36"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col lg:w-[75%] w-[90%] justify-around">
                    <div className="flex lg:flex-row flex-col-reverse w-full gap-4 ">
                        <div className="lg:w-[30%]">
                            {footerSpecial.map((section, index) => (
                                <div
                                    className={`flex w-full g ${
                                        section.title === 'NEWSLETTER'
                                            ? 'order-1 md:order-3 text-center'
                                            : 'order-2 md:order-1 '
                                    }`}
                                    key={index}
                                >
                                    <FooterItems
                                        title={section.title}
                                        links={section.links}
                                        content={section.content}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="lg:w-[40%]">
                            {footerInfo.map((section, index) => (
                                <div
                                    className={`flex w-full g ${
                                        section.title === 'NEWSLETTER'
                                            ? 'order-1 md:order-3 text-center'
                                            : 'order-2 md:order-1 '
                                    }`}
                                    key={index}
                                >
                                    <FooterItems
                                        title={section.title}
                                        links={section.links}
                                        content={section.content}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="lg:w-[30%]">
                            {footerNews.map((section, index) => (
                                <div
                                    className={`flex w-full g ${
                                        section.title === 'NEWSLETTER'
                                            ? 'order-1 md:order-3 text-center'
                                            : 'order-2 md:order-1 '
                                    }`}
                                    key={index}
                                >
                                    <FooterItems
                                        title={section.title}
                                        links={section.links}
                                        content={section.content}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col w-full">
                        <div className="lg:w-[70%]">
                            <div className="flex lg:flex-row flex-col w-full mt-4">
                                <h1 className="lg:w-[40%] w-full text-lg font-bold">
                                    Start a Conversation
                                </h1>
                                <hr className="border-white lg:w-[55%] lg:my-4" />
                            </div>
                            <div className="flex flex-wrap justify-around">
                                <div className="flex items-center">
                                    <FaEnvelope className="mr-2" />
                                    <span className="">
                                        contact@example.com
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <FaPhone className="mr-2" />
                                    <span className="">+123 456 7890</span>
                                </div>
                                <div className="flex items-center">
                                    <FaTicketAlt className="mr-2" />
                                    <span className="">Support Ticket</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-[30%] mt-4">
                            <div className="flex lg:flex-row flex-col w-full">
                                <div className="lg:w-[40%] text-lg font-bold">
                                    Address
                                </div>
                                <hr className="border-white lg:w-[60%] lg:my-4" />
                            </div>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="mr-2" />
                                <span className="">
                                    1234 Random St, City, Country
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMainSection
