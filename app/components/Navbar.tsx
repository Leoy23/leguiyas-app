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
        <nav className="w-full md:p-6 md:flex md:justify-center md:items-center">
            <header className={`flex justify-end items-center text-xs md:text-base gap-7 md:gap-6 lg:gap-32 ${open ? "p-4 flex-col bg-darkPink" : null}`}>
                <div className={`static flex justify-end items-center md:hidden ${open && "bg-darkPink"}`}>
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
                <ul className={`md:flex md:justify-center md:items-center md:gap-24 lg:gap-32 transition-all duration-500 ease-in ${open ? 'flex flex-col text-center gap-2' : 'hidden'}`} onScroll={handleRouteChange}>
                    {navlinks.map((link, index) => (
                        <li key={index} className={`${link.toUpperCase() === 'CONTACT' ? "rounded-full bg-pink py-2 px-2" : null}`} onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                        }}>
                            <Link href={`/#${link.toLowerCase()}`} className="text-white mb-2">
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