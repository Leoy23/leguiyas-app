import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-transparent.png";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
    return (
        <div className="w-full border-b-8 border-pink text-center font-thin text-xs md:text-base pb-4">
            <div className="flex items-center justify-center flex-col">
                <Image src={logo} alt="logo" priority className="w-44 my-6" />
                <Link href={"/"} className="underline mb-8 scroll-smooth">BACK TO THE TOP</Link>
            </div>
            <NewsletterForm />
        </div>
    )
}

export default Footer;
