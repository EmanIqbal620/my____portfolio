import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import React from "react";

const Footer = () => {
    return (
        <div>
            <>
                <footer className="text-gray-600 body-font bg-gray-200">
                    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                <div className="w-6 h-6 bg-white rounded-full"></div>
                            </div>
                            <span className="ml-3 text-xl">Eman Iqbal</span>
                        </a>
                        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                            © 2024 —
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a className="text-gray-500">
                                <FaFacebookF className="w-6 h-6" />
                            </a>
                            <a className="ml-3 text-gray-500">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a className="ml-3 text-gray-500">
                                <FaTwitter className="w-6 h-6" />
                            </a>
                        </span>
                    </div>
                </footer>
            </>
        </div>
    );
};

export default Footer;
