import { useEffect, useState } from 'react'
import { Collapse, Typography, IconButton } from '@material-tailwind/react'
import { MdArrowDropDown } from 'react-icons/md'
import { BiSolidCategory } from 'react-icons/bi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import NavList from './NavList'
import CategoryDropDown from '../Categories/CategoryDropDown'

const BottomNavbar = () => {
    const [openMenu3, setOpenMenu3] = useState(false)
    const [openNav, setOpenNav] = useState(false)
    const [navControl, setNavControl] = useState(false)
    const location = useLocation() // Get current location

    // Handle window resize to automatically close the nav on large screens
    const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false)

    // Run when the window resizes
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    // Check if the current path is the homepage
    const isHomePage = location.pathname === '/'

    // Reset the dropdown state when navigating to the homepage
    useEffect(() => {
        if (isHomePage) {
            setOpenMenu3(false) // Close the dropdown on homepage
        }
    }, [location.pathname, isHomePage])

    // Handle opening dropdown on hover or click only when not on the homepage
    const handleCategoryMouseOver = () => {
        if (!isHomePage) {
            setOpenMenu3(true)
        }
    }

    const handleCategoryClick = () => {
        if (!isHomePage) {
            setOpenMenu3(!openMenu3)
        }
    }

    const handleCategoryMouseLeave = () => {
        if(navControl === false){
            setOpenMenu3(!openMenu3)
        }
    }

    const handleCategory2MouseLeave =()=>{
        setNavControl(!navControl)
        setOpenMenu3(!openMenu3)
    }

    return (
        <div className="w-full py-3 border-none shadow-none bg-primary-400 hidden md:block">
            <div className="flex items-center gap-5 mx-16">
                {/* Always show Categories */}
                <div className="w-[250px] bg-white items-center relative">
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-2 font-medium"
                        onMouseOver={handleCategoryMouseOver}  // Handle hover
                        onClick={handleCategoryClick}           // Handle click
                        onMouseLeave={handleCategoryMouseLeave}
                    >
                        <p className={`flex items-center ${!isHomePage ? 'hover:text-primary-500' : 'text-gray-400'} text-primary-400 transition-all duration-300 ease-in justify-between cursor-pointer`}>
                            <BiSolidCategory className="w-6 h-6 mr-2" />
                            <span className="text-xl">Categories</span>
                            <MdArrowDropDown className="w-6 h-6 ml-2" />
                        </p>
                    </Typography>

                    {/* Conditionally render the CategoryDropDown based on the current path */}
                    {!isHomePage && openMenu3 && (
                        <div
                            className="Box absolute top-[105%]"
                            onMouseLeave={handleCategory2MouseLeave}
                            onMouseOver={() => setNavControl(true)}
                        >
                            <CategoryDropDown />
                        </div>
                    )}
                </div>

                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <FaTimes className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <FaBars className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>

            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </div>
    )
}

export default BottomNavbar
