// components/TableCard.js
import Image from 'next/image';
import table from './table.png'
import Link from 'next/link';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TableCard = () => {
    return (
        <div>
            <div className="flex justify-between  py-4 lg:space-y-4 space-y-2">
                <h2 className="md:text-3xl text-xl text-center mt-2 md:mt-0 font-bold">Articles similaires</h2>
                <Link href="#" className="underline text-slate-500 text-xs md:text-lg pb-3">
                    Voir toute la collection
                </Link>
            </div>

            <div className="relative">
                <button
                    className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md z-50"
                >
                    <ArrowBackIcon className="text-gray-700 h-6 w-6" />
                </button>
                <div className="flex space-x-3 relative w-full  overflow-x-auto  hide-scrollbar">
                    <div className="w-72" >
                        <div className="relative w-72 h-80 border rounded-lg shadow-md p-4 bg-white">
                            {/* Category */}
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                                Art de la Table
                            </div>
                            <FavoriteIcon className="absolute top-2 right-2 text-gray-500" />
                            {/* Image */}
                            <div className="flex justify-center items-center mb-4">
                                <Image
                                    src={table}// Replace with your image path
                                    alt="Table"
                                    width={200}
                                    height={200}
                                    className="rounded"
                                />
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className="flex justify-between">
                                <h3 className="text-lg font-medium mb-2">Title</h3>
                                <span className="text-2xl font-bold text-gray-800">0€</span>
                            </div>
                            {/* Price Section */}
                            <div className="flex justify-between">
                                <p className="text-xs text-gray-500 ">
                                    0,35€/Pièce · REF : VABGN5
                                </p>
                                <span className="text-xs text-gray-500 bg-slate-100 rounded-lg px-2 ">20 pièces</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-72" >
                        <div className="relative w-72 h-80 border rounded-lg shadow-md p-4 bg-white">
                            {/* Category */}
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                                Art de la Table
                            </div>
                            <FavoriteIcon className="absolute top-2 right-2 text-gray-500" />
                            {/* Image */}
                            <div className="flex justify-center items-center mb-4">
                                <Image
                                    src={table}// Replace with your image path
                                    alt="Table"
                                    width={200}
                                    height={200}
                                    className="rounded"
                                />
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className="flex justify-between">
                                <h3 className="text-lg font-medium mb-2">Title</h3>
                                <span className="text-2xl font-bold text-gray-800">0€</span>
                            </div>
                            {/* Price Section */}
                            <div className="flex justify-between">
                                <p className="text-xs text-gray-500 ">
                                    0,35€/Pièce · REF : VABGN5
                                </p>
                                <span className="text-xs text-gray-500 bg-slate-100 rounded-lg px-2 ">20 pièces</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-72" >
                        <div className="relative w-72 h-80 border rounded-lg shadow-md p-4 bg-white">
                            {/* Category */}
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                                Art de la Table
                            </div>
                            <FavoriteIcon className="absolute top-2 right-2 text-gray-500" />
                            {/* Image */}
                            <div className="flex justify-center items-center mb-4">
                                <Image
                                    src={table}// Replace with your image path
                                    alt="Table"
                                    width={200}
                                    height={200}
                                    className="rounded"
                                />
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className="flex justify-between">
                                <h3 className="text-lg font-medium mb-2">Title</h3>
                                <span className="text-2xl font-bold text-gray-800">0€</span>
                            </div>
                            {/* Price Section */}
                            <div className="flex justify-between">
                                <p className="text-xs text-gray-500 ">
                                    0,35€/Pièce · REF : VABGN5
                                </p>
                                <span className="text-xs text-gray-500 bg-slate-100 rounded-lg px-2 ">20 pièces</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-72" >
                        <div className="relative w-72 h-80 border rounded-lg shadow-md p-4 bg-white">
                            {/* Category */}
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                                Art de la Table
                            </div>
                            <FavoriteIcon className="absolute top-2 right-2 text-gray-500" />
                            {/* Image */}
                            <div className="flex justify-center items-center mb-4">
                                <Image
                                    src={table}// Replace with your image path
                                    alt="Table"
                                    width={200}
                                    height={200}
                                    className="rounded"
                                />
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className="flex justify-between">
                                <h3 className="text-lg font-medium mb-2">Title</h3>
                                <span className="text-2xl font-bold text-gray-800">0€</span>
                            </div>
                            {/* Price Section */}
                            <div className="flex justify-between">
                                <p className="text-xs text-gray-500 ">
                                    0,35€/Pièce · REF : VABGN5
                                </p>
                                <span className="text-xs text-gray-500 bg-slate-100 rounded-lg px-2 ">20 pièces</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-72" >
                        <div className="relative w-72 h-80 border rounded-lg shadow-md p-4 bg-white">
                            {/* Category */}
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                                Art de la Table
                            </div>
                            <FavoriteIcon className="absolute top-2 right-2 text-gray-500" />
                            {/* Image */}
                            <div className="flex justify-center items-center mb-4">
                                <Image
                                    src={table}// Replace with your image path
                                    alt="Table"
                                    width={200}
                                    height={200}
                                    className="rounded"
                                />
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className="flex justify-between">
                                <h3 className="text-lg font-medium mb-2">Title</h3>
                                <span className="text-2xl font-bold text-gray-800">0€</span>
                            </div>
                            {/* Price Section */}
                            <div className="flex justify-between">
                                <p className="text-xs text-gray-500 ">
                                    0,35€/Pièce · REF : VABGN5
                                </p>
                                <span className="text-xs text-gray-500 bg-slate-100 rounded-lg px-2 ">20 pièces</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-72" >
                        <div className="relative w-72 h-80 border rounded-lg shadow-md p-4 bg-white">
                            {/* Category */}
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                                Art de la Table
                            </div>
                            <FavoriteIcon className="absolute top-2 right-2 text-gray-500" />
                            {/* Image */}
                            <div className="flex justify-center items-center mb-4">
                                <Image
                                    src={table}// Replace with your image path
                                    alt="Table"
                                    width={200}
                                    height={200}
                                    className="rounded"
                                />
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className="flex justify-between">
                                <h3 className="text-lg font-medium mb-2">Title</h3>
                                <span className="text-2xl font-bold text-gray-800">0€</span>
                            </div>
                            {/* Price Section */}
                            <div className="flex justify-between">
                                <p className="text-xs text-gray-500 ">
                                    0,35€/Pièce · REF : VABGN5
                                </p>
                                <span className="text-xs text-gray-500 bg-slate-100 rounded-lg px-2 ">20 pièces</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-72" >
                        <div className="relative w-72 h-80 border rounded-lg shadow-md p-4 bg-white">
                            {/* Category */}
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                                Art de la Table
                            </div>
                            <FavoriteIcon className="absolute top-2 right-2 text-gray-500" />
                            {/* Image */}
                            <div className="flex justify-center items-center mb-4">
                                <Image
                                    src={table}// Replace with your image path
                                    alt="Table"
                                    width={200}
                                    height={200}
                                    className="rounded"
                                />
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className="flex justify-between">
                                <h3 className="text-lg font-medium mb-2">Title</h3>
                                <span className="text-2xl font-bold text-gray-800">0€</span>
                            </div>
                            {/* Price Section */}
                            <div className="flex justify-between">
                                <p className="text-xs text-gray-500 ">
                                    0,35€/Pièce · REF : VABGN5
                                </p>
                                <span className="text-xs text-gray-500 bg-slate-100 rounded-lg px-2 ">20 pièces</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-72" >
                        <div className="relative w-72 h-80 border rounded-lg shadow-md p-4 bg-white">
                            {/* Category */}
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                                Art de la Table
                            </div>
                            <FavoriteIcon className="absolute top-2 right-2 text-gray-500" />
                            {/* Image */}
                            <div className="flex justify-center items-center mb-4">
                                <Image
                                    src={table}// Replace with your image path
                                    alt="Table"
                                    width={200}
                                    height={200}
                                    className="rounded"
                                />
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className="flex justify-between">
                                <h3 className="text-lg font-medium mb-2">Title</h3>
                                <span className="text-2xl font-bold text-gray-800">0€</span>
                            </div>
                            {/* Price Section */}
                            <div className="flex justify-between">
                                <p className="text-xs text-gray-500 ">
                                    0,35€/Pièce · REF : VABGN5
                                </p>
                                <span className="text-xs text-gray-500 bg-slate-100 rounded-lg px-2 ">20 pièces</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-72" >
                        <div className="relative w-72 h-80 border rounded-lg shadow-md p-4 bg-white">
                            {/* Category */}
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                                Art de la Table
                            </div>
                            <FavoriteIcon className="absolute top-2 right-2 text-gray-500" />
                            {/* Image */}
                            <div className="flex justify-center items-center mb-4">
                                <Image
                                    src={table}// Replace with your image path
                                    alt="Table"
                                    width={200}
                                    height={200}
                                    className="rounded"
                                />
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className="flex justify-between">
                                <h3 className="text-lg font-medium mb-2">Title</h3>
                                <span className="text-2xl font-bold text-gray-800">0€</span>
                            </div>
                            {/* Price Section */}
                            <div className="flex justify-between">
                                <p className="text-xs text-gray-500 ">
                                    0,35€/Pièce · REF : VABGN5
                                </p>
                                <span className="text-xs text-gray-500 bg-slate-100 rounded-lg px-2 ">20 pièces</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-72" >
                        <div className="relative w-72 h-80 border rounded-lg shadow-md p-4 bg-white">
                            {/* Category */}
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                                Art de la Table
                            </div>
                            <FavoriteIcon className="absolute top-2 right-2 text-gray-500" />
                            {/* Image */}
                            <div className="flex justify-center items-center mb-4">
                                <Image
                                    src={table}// Replace with your image path
                                    alt="Table"
                                    width={200}
                                    height={200}
                                    className="rounded"
                                />
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className="flex justify-between">
                                <h3 className="text-lg font-medium mb-2">Title</h3>
                                <span className="text-2xl font-bold text-gray-800">0€</span>
                            </div>
                            {/* Price Section */}
                            <div className="flex justify-between">
                                <p className="text-xs text-gray-500 ">
                                    0,35€/Pièce · REF : VABGN5
                                </p>
                                <span className="text-xs text-gray-500 bg-slate-100 rounded-lg px-2 ">20 pièces</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md"
                >
                    <ArrowForwardIcon  className="text-gray-700 h-6 w-6" />
                </button>
            </div>
        </div>
    );

};

export default TableCard;


