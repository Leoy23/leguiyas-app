"use client";

import Link from "next/link";
import { navlinks } from "../utils";

const Navbar = () => {
    return (
        <nav className="p-6">
            <header className="flex justify-center items-center text-xs md:text-base gap-3 md:gap-16">
                <ul className="flex justify-center gap-3 md:gap-16">
                    {navlinks.map((link, index) => {
                        return (
                            <li key={index} className="">{link}</li>
                        )
                    })}
                </ul>
                <Link href={"/#contact"}>
                    <button className="rounded-full bg-pink py-2 px-2">CONTACT</button>
                </Link>
            </header>
        </nav>
    )
}

export default Navbar;
