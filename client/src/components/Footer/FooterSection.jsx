/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import logo from '../../assets/app-logo/app-logo-background.jpg'
const FooterSection = ({ title, links, content }) => {
    return (
        <div>
            <div className="flex flex-col items-center lg:items-start gap-2">
                <img
                    src={logo}
                    alt="logo"
                    className="w-44 h-28 object-contain "
                />
                <h4 className=" text-lg mb-2">DOWNLOAD OUR APP</h4>
                {/* <div className="flex gap-2">
                    <Link to="/">
                        <img src={GoogleApp} alt="App Store" className="w-36" />
                    </Link>
                    <Link to="/">
                        <img
                            src={AppStore}
                            alt="Google Play"
                            className="w-36"
                        />
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default FooterSection
