import React from 'react'
import Image from 'next/image';
import table from './table.png'
import Link from 'next/link';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';

const Bigcard = () => {
  return (
    <div className='mt-5'>
            <div className="flex justify-between  py-4 lg:space-y-4 space-y-2">
                <h2 className="md:text-3xl text-xl text-center mt-2 md:mt-0 font-bold">Ces produits pourraient vous intéresser</h2>
                <Link href="#" className="underline text-slate-500 text-xs md:text-lg pb-3">
                    Voir toute la collection
                </Link>
            </div>
                <div className="flex md:space-x-5 space-x-0 relative w-full md:flex-row flex-col">
                    <div className="lg:w-1/3 w-full" >
                        <div className="relative w-full h-96 border rounded-lg shadow-md p-4 bg-white">
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
                                    className="rounded pt-10"
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
                    <div className="lg:w-1/3 w-full" >
                        <div className="relative w-full h-96 border rounded-lg shadow-md p-4 bg-white">
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
                                    className="rounded pt-10"
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
                    <div className="lg:w-1/3 w-full" >
                        <div className="relative w-full h-96 border rounded-lg shadow-md p-4 bg-white">
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
                                    className="rounded pt-10"
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
            </div>
  )
}

export default Bigcard
