'use client';

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Typewriter from 'typewriter-effect';

// Static Import
import heroImage from "../../../public/image.webp";

const Hero = () => {
    return (
        <div>
            <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image bg-red-100 h-screen w-full">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            I am
                            <br className="hidden lg:inline-block" />
                            <Typewriter
                                options={{
                                    strings: ['Web developer', 'UI/UX Designer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <div className="w-[100px] h-[2px] bg-blue-700"></div>
                        <p className="mb-8 leading-relaxed">
                            Hi, I’m Eman Iqbal, a passionate web developer from Karachi, Pakistan. Currently, I’m focused on honing my skills to become a successful full-stack developer. Creativity drives me, and I enjoy building unique projects, especially in the e-commerce space. My goal is to push the boundaries of what I can create while delivering high-quality and innovative solutions.
                        </p>
                        <div className="flex justify-center">
                            <Link href={"#Contact"}>
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
                        <Image
                            className="object-cover object-center rounded-full border-4 border-gray-500 h-[400px] w-[400px]" 
                            alt="hero"
                            width={400}  
                            height={400}  
                            src={heroImage} // Use static import here
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;
