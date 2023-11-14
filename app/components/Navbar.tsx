"use client";

import Link from "next/link";
import { navlinks } from "../utils";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleRouteChange = () => {
        setOpen(false);
    }

    return (
        <nav className={`w-full md:p-6 md:flex md:justify-center`}>
            <header className={`flex justify-end items-center text-xs md:text-base`}>
                <div className={`flex justify-end items-center md:hidden`}>
                    {open ? (
                        <AiOutlineClose
                            className="w-8 h-8 text-white cursor-pointer"
                            onClick={() => setOpen(false)}
                        />
                    ) : (
                        <BiMenu
                            className="w-8 h-8 text-darkPink cursor-pointer"
                            onClick={() => setOpen(true)}
                        />
                    )}
                </div>
                <ul className={`text-center md:flex md:justify-center md:items-center md:gap-24 lg:gap-32 fixed md:static transition-all duration-500 ease-in-out ${open ? 'bg-darkPink top-16 opacity-100 gap-2 p-6' : '-top-[490px] md:opacity-100 opacity-0'}`} onScroll={handleRouteChange}>
                    {navlinks.map((link, index) => (
                        <li key={index} className={`pb-2 ${link.toUpperCase() === 'CONTACT' && "rounded-full bg-pink py-2 px-2"}`} onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                        }}>
                            <Link href={`/#${link.toLowerCase()}`} className="text-white">
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </header>
        </nav>
    );
}
export default Navbar;


// set up navlinks using the api route created in express