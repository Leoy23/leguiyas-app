import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-transparent.png";
import { NavLinks } from "../models";
import { navlinks } from "../utils";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
    const navigationLinks: NavLinks = navlinks;
    return (
        <div className="border-b-8 border-pink text-center font-thin text-xs md:text-base p-4">
            <div className="flex items-center justify-center flex-col">
                <Image src={logo} alt="logo" width={150} height={150} priority className="my-6" />
                <ul className="flex justify-center gap-6 p-4">
                    {navigationLinks.map((link, index) => {
                        return (
                            <li key={index} className="hover:underline">{link}</li>
                        )
                    })}
                </ul>
                <Link href={"/"} className="underline mb-8">BACK TO THE TOP</Link>
            </div>
            <NewsletterForm />
        </div>
    )
}

export default Footer;
