"use client";

import React, { useState } from "react";
import Image from "next/image";
import item from "./item1.png";
import table from "./table.png";
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

const Content = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

    return (
        <div>
            <div className="top m-2 my-4 mb-16">
                <h1>
                    Home
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-500">Art de la table</span>
                </h1>
                <div className="flex md:space-x-3 space-x-0 flex-col md:flex-row ">
                    <div className="bg-neutral-100 md:w-1/2 w-full flex">
                        <div className="flex flex-col items-start space-y-2">
                            <Image
                                src={table}
                                alt="Table"
                                width={40}
                                height={40}
                                className="rounded"
                            />
                            <Image
                                src={table}
                                alt="Table"
                                width={40}
                                height={40}
                                className="rounded"
                            />
                            <Image
                                src={table}
                                alt="Table"
                                width={40}
                                height={40}
                                className="rounded"
                            />
                            <Image
                                src={table}
                                alt="Table"
                                width={40}
                                height={40}
                                className="rounded"
                            />
                        </div>
                        <div className="">
                            <Image
                                src={item}
                                alt="Table"
                                className="rounded pt-10"
                            />
                        </div>
                    </div>

                    <div className="md:p-6 p-2 max-w-4xl mx-auto rounded-md md:w-1/2 w-full">
                        {/* Title and Favorite Icon */}
                        <div className="flex justify-between items-start ">
                            <h1 className="text-2xl font-bold text-gray-800"> Cheese – appareil à raclette 1/2 roue</h1>
                            <FavoriteIcon className="text-gray-500" />
                        </div>

                        {/* Price */}
                        <div className="mt-2 text-xl text-black  border-b-2 border-gray-200 pb-2">
                            39,50€<span className="text-sm"> / pièce</span>
                        </div>

                        {/* Dimensions */}

                        <div className="mt-4 flex space-x-4 text-gray-600 justify-between border-b-2 border-gray-200 pb-2">
                            <div className="flex" >
                                <div className="flex items-center space-x-1">
                                    <AutoFixNormalIcon className="h-6 w-8" />
                                    <span className="text-sm">20</span>
                                    <span className="text-xs">cm</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <DoDisturbIcon className="h-6 w-8" />
                                    <span className="text-sm">50</span>
                                    <span className="text-xs">cm</span>
                                </div>
                            </div>

                            <div>
                                <span>RÉF : VABGN5</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="text-xs mt-4 text-gray-700 space-y-2 border-b-2 border-gray-200 lg:pb-64 ">
                            <p>Location appareil à raclette - Raclette traditionnelle 1/2 roue</p>
                            <p>Réglable en hauteur</p>
                            <p>Appareil à raclette professionnel</p>
                            <p>Boîtier de chauffe horizontal réglable en hauteur</p>
                            <p>220V</p>
                            <p>900W</p>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="mt-6 flex items-center justify-between">
                            {/* Quantity */}
                            <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                    className="px-3 py-1 text-gray-500 hover:text-gray-800"
                                    onClick={decreaseQuantity}
                                >
                                    -
                                </button>
                                <span className="px-4 py-1">{quantity}</span>
                                <button
                                    className="px-3 py-1 text-gray-500 hover:text-gray-800"
                                    onClick={increaseQuantity}
                                >
                                    +
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <button className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 text-sm ">
                                AJOUTER AU PANIER
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:space-x-5 flex m-2 lg:flex-row flex-col my-20">
                <div className="lg:w-1/2 w-full flex flex-col">
                    <h1 className="font-bold lg:text-3xl text-xl">Description produit</h1>
                    <p className="text-xs">
                        Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre
                        évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête
                        d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse
                        par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous
                        sommes à votre disposition pour que les événements de nos clients, même en
                        last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre
                        produit à louer de ce type dans la catégorie "Art de la Table".
                    </p>
                </div>
                <div className="lg:w-1/2 w-full flex flex-col space-y-0.5 mt-4 lg:mt-0">
                    <div className="1 bg-pink-50 flex justify-between p-2">
                        <h1>Livraisons</h1>
                        <button className="flex items-center justify-center w-10 h-10 text-black">
                            <AddIcon className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="2 bg-pink-50 flex justify-between p-2">
                        <h1>Questions</h1>
                        <button className="flex items-center justify-center w-10 h-10 text-black">
                            <AddIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
