'use client';

import Link from 'next/link';
import { useState, useEffect, Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import logo from './logo.png'; // Adjust the path
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menu icon
import CloseIcon from '@mui/icons-material/Close'; // Close icon
import Search, { SearchSkeleton } from './maincontent/search';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMobileMenu = () => setIsMenuOpen(true);
    const closeMobileMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 660) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="header">
            {/* Top Header */}
            <header className="flex items-center justify-between px-4 py-1">
                {/* Hamburger Menu */}
                <button
                    onClick={openMobileMenu}
                    aria-label="Open mobile menu"
                    className="sm:hidden flex items-center"
                >
                    <MenuIcon className="text-gray-700" />
                </button>
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <Image src={logo} alt="WeFrameTech Logo" width={100} height={70} className="object-contain" />
                </div>
                {/* Search */}
                <Search />
                {/* Right Side - Navigation for Large Screens */}
                <div className="flex items-center space-x-2 md:space-x-8 md:text-xs ml-16">
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
                    <Link href="#" className="md:flex items-center space-x-2 hidden">
                        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                        <span className="text-gray-700 text-sm hidden lg:block">FR</span>
                        <ArrowDropDownIcon className="text-gray-700 hidden lg:block" />
                    </Link>
                </div>
            </header>
            <SearchSkeleton />
            {/* Mobile Menu using Dialog */}
            <Transition show={isMenuOpen} as={Fragment}>
                <Dialog onClose={closeMobileMenu} className="relative z-50">
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/30" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-transform duration-300"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-transform duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel className="fixed inset-0 bg-white dark:bg-black p-4 w-1/2">
                            <button
                                onClick={closeMobileMenu}
                                aria-label="Close mobile menu"
                                className="flex items-center justify-center mb-4"
                            >
                                <CloseIcon className="text-gray-700" />
                            </button>
                            <div className="sm:hidden  p-4">
                                <nav className="flex flex-col space-y-3 ">
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
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>

            {/* Bottom Header (Always Visible) */}
            <div className="hidden sm:flex items-center justify-around px-4 py-2 border-b-2 border-gray-200">
                <div className="relative w-full overflow-x-auto xl:scrollbar-hide">
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
