import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <nav class="sticky bg-gradient-to-r from-transparent
        via-white to-transparent background-animate border-b lg:py-3 md:py-2 py-0 top-0 z-50">
            <div class="flex justify-between items-center">
                <div class="font-semibold ml-10 text-xl">
                    
                </div>
                <div class="mx-auto flex space-x-4 ">
                    <Link to="/" class="inline-flex mx-auto text-white rounded-lg">
                        <div class="font-semibold lg:text-4xl md:text-3xl text-2xl ">
                            Ara Ara
                        </div>
                    </Link>
                </div>
                <Link to="/project" class=" text-white mr-6 rounded-lg hover:animate-pulse">
                    <div class="font-semibold lg:text-4xl md:text-3xl text-xl" >
                        <svg
                            class="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 mx-1 text-white dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path
                                d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                        </svg>
                    </div>
                </Link>
            </div>

        </nav >
    )
}

export default Navbar;