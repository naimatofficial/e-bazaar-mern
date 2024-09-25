import { useEffect, useState } from 'react'
import { Collapse, Typography, IconButton } from '@material-tailwind/react'
import { MdArrowDropDown } from 'react-icons/md'
import { BiSolidCategory } from 'react-icons/bi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'  // Import useLocation hook
import NavList from './NavList'
import CategoryDropDown from '../Categories/CategoryDropDown'

const BottomNavbar = () => {
    const [openMenu3, setOpenMenu3] = useState(false)
    const [openNav, setOpenNav] = useState(false)
    const location = useLocation(); // Get current location

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false)

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return (
        <div className="w-full py-3 border-none shadow-none bg-primary-400 hidden md:block ">
            <div className="flex items-center gap-5 mx-16">
                {/* Always show Categories */}
                <div className="w-[250px] bg-white items-center relative">
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-2 font-medium"
                        onMouseOver={() => setOpenMenu3(true)}
                    >
                        <p className="flex items-center hover:text-primary-500 text-primary-400 transition-all duration-300 ease-in justify-between cursor-pointer">
                            <BiSolidCategory className="w-6 h-6 mr-2" />
                            <span className="text-xl">Categories</span>
                            <MdArrowDropDown className="w-6 h-6 ml-2" />
                        </p>
                    </Typography>

                    {/* Conditionally render the CategoryDropDown based on the current path */}
                    {location.pathname !== '/' && openMenu3 ? (
                        <div
                            className="Box absolute top-[8vh]  "
                            onMouseLeave={() => setOpenMenu3(false)}
                        >
                            <CategoryDropDown />
                        </div>
                    ) : (
                        openMenu3 && (
                          ""
                        )
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
