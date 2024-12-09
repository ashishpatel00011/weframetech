"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image'; // Optimized image handling
import logo from './logo.png'; // Adjust the path as per your folder structure
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu'; // Import the hamburger menu icon
import CloseIcon from '@mui/icons-material/Close'; // Close icon for the mobile menu

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    // Close the menu when the screen size changes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setIsMenuOpen(false); // Close menu on larger screens
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="header">
            {/* Top Header with shadow for small screens */}
            <header className="flex items-center justify-between md:px-4 md:py-1">
                {/* Hamburger Menu for Mobile */}
                <div className="sm:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <CloseIcon className="text-gray-700" />
                        ) : (
                            <MenuIcon className="text-gray-700" />
                        )}
                    </button>
                </div>
                {/* Left Side - Logo */}
                <div className="flex items-center space-x-4">
                    <Image
                        src={logo} // Update the path based on your logo's location
                        alt="WeFrameTech Logo"
                        width={100}
                        height={70}
                        className="object-contain"
                    />
                </div>

                {/* Search Bar */}
                <div className="flex-grow max-w-2xl mx-8 relative pl-0 hidden sm:block">
                    <input
                        type="text"
                        placeholder="Rechercher"
                        className="w-full px-4 py-2 text-sm border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>

                {/* Right Side - Navigation for Large Screens */}
                <div className="flex lg:items-center space-x-1 md:space-x-8 md:text-xs">
                    <Link href="#" className="flex items-center text-gray-700 text-sm hover:text-teal-500">
                        <LightbulbIcon className="text-gray-700" />
                        <p className='hidden lg:block'>Inspirations</p>
                    </Link>
                    <Link href="#" className="flex items-center text-gray-700 text-sm hover:text-teal-500">
                        <FavoriteIcon className="text-gray-700" />
                        <p className='hidden lg:block'> Mes favoris <span className="ml-1 text-xs bg-gray-300 text-gray-700 px-2 py-0.5 rounded-full">24</span></p>
                    </Link>
                    <Link href="#" className="flex items-center text-white bg-teal-500 px-4 py-2 rounded-md hover:bg-teal-600">
                        <ShoppingCartIcon />
                        <p className='hidden lg:block'>Panier</p>
                    </Link>
                    <Link href="#" className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-300 hidden lg:block" ></div>
                        <span className="text-gray-700 text-sm ">FR</span>
                        <ArrowDropDownIcon className="text-gray-700 hidden lg:block" />
                    </Link>
                </div>
            </header>
            <div className=" relative mt-6 md:hidden z-0">
                    <input
                        type="text"
                        placeholder="Rechercher"
                        className="w-full px-4 py-2 text-sm border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
            {/* Mobile Menu (will appear when isMenuOpen is true) */}
            {isMenuOpen && (
                <div className="sm:hidden bg-white shadow-md p-4 z-50">
                    <nav className="flex flex-col space-y-2">
                        <Link href="#" className="text-gray-700 hover:text-teal-500">
                            ART DE LA TABLE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500">
                            MOBILIER
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500">
                            NAPPAGE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500">
                            MATÉRIEL DE SALLE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500">
                            CUISINE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500">
                            BARBECUE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500">
                            TENTE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500">
                            CHAUFFAGE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500">
                            PODIUM-PISTE DE DANSE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500">
                            SON ET LUMIÈRE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500">
                            PACKS
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500">
                            CONSOMMABLES
                        </Link>
                    </nav>
                </div>
            )}

            {/* Bottom Header (Always Visible) */}
            <div className="hidden sm:flex items-center justify-between px-4 py-2 border-b-2 border-gray-200">
                <div className="relative w-full overflow-x-auto scrollbar-hide">
                    {/* Left and Right arrows for slider */}
                    <div className="flex space-x-8 py-2 text-xs whitespace-nowrap">
                        <Link href="#" className="text-gray-700 hover:text-teal-500 cursor-pointer">
                            ART DE LA TABLE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500 cursor-pointer">
                            MOBILIER
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500 cursor-pointer">
                            NAPPAGE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500 cursor-pointer">
                            MATÉRIEL DE SALLE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500 cursor-pointer">
                            CUISINE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500 cursor-pointer">
                            BARBECUE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500 cursor-pointer">
                            TENTE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500 cursor-pointer">
                            CHAUFFAGE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500 cursor-pointer">
                            PODIUM-PISTE DE DANSE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500 cursor-pointer">
                            SON ET LUMIÈRE
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500 cursor-pointer">
                            PACKS
                        </Link>
                        <Link href="#" className="text-gray-700 hover:text-teal-500 cursor-pointer">
                            CONSOMMABLES
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
