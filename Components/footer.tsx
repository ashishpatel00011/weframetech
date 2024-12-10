import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Install react-icons
import logo from "./logo.png"; // Adjust the path as per your folder structure
import Image from 'next/image'; // Optimized image handling

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 py-6 border-t-2 border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between">

                    {/* Logo and Links Container */}
                    <div className="flex flex-col lg:flex-row lg:space-x-10 mb-6 lg:mb-0">
                        {/* Logo */}
                        <div className="flex items-center  justify-start mb-4 lg:mb-0">
                            <Image
                                src={logo} // Update the path based on your logo's location
                                alt="WeFrameTech Logo"
                                width={100}
                                height={70}
                                className="object-contain"
                            />
                        </div>

                        {/* Links Sections */}
                        <div className="flex flex-col md:flex-row lg:space-x-10 md:space-x-20">
                            {/* Infos Pratiques */}
                            <div className="mb-4 lg:mb-0">
                                <h5 className="font-bold text-lg">INFOS PRATIQUES</h5>
                                <ul className="space-y-2 text-sm">
                                    <li>À propos</li>
                                    <li>Livraisons & Reprises</li>
                                    <li>Mode d'emploi</li>
                                    <li>F.A.Q</li>
                                </ul>
                            </div>

                            {/* Légal */}
                            <div className="mb-4 lg:mb-0">
                                <h5 className="font-bold text-lg">LÉGAL</h5>
                                <ul className="space-y-2 text-sm">
                                    <li>Mentions légales</li>
                                    <li>CGU</li>
                                    <li>CGV</li>
                                    <li>Politique de confidentialité</li>
                                </ul>
                            </div>

                            {/* Mon Compte */}
                            <div className="mb-4 lg:mb-0">
                                <h5 className="font-bold text-lg">MON COMPTE</h5>
                                <ul className="space-y-2 text-sm">
                                    <li>Accéder à mon compte</li>
                                    <li>Ma liste d'envie</li>
                                    <li>Créer un compte</li>
                                    <li>Mot de passe oublié</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="mb-4 lg:mb-0">
                        <h5 className="font-bold text-lg">NOUS SUIVRE</h5>
                        <div className="flex space-x-4 justify-center lg:justify-start">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-gray-700 hover:text-teal-500 text-xl" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-gray-700 hover:text-teal-500 text-xl" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-gray-700 hover:text-teal-500 text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
