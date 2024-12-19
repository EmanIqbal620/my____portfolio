import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className="bg-white z-50 sticky top-0 shadow-md">
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-2 flex-row items-center justify-between">
                
                    <a className="flex title-font font-medium items-center text-gray-900">
                        <span className="text-xl font-bold ml-2">MY Portfolio</span>
                    </a>

                    <nav className="flex items-center space-x-6">
                        <Link href={"/"} className="hover:text-gray-900">
                            Home
                        </Link>
                        <Link href={"#about"} className="hover:text-blue-600">
                            About
                        </Link>
                        <Link href={"#contact"} className="hover:text-blue-600">
                            Contact
                        </Link>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
