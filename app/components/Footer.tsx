import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-transparent.png";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full text-center font-thin text-xs md:text-base">
      <div className="flex items-center justify-center flex-col">
        <Image src={logo} alt="logo" priority className="w-44 my-6" />
        <Link href={"/"} className="underline mb-8 scroll-smooth">
          BACK TO THE TOP
        </Link>
      </div>
      <NewsletterForm />
      <div className="w-full h-4 bg-gradient-to-r from-pink to-darkerPink"></div>
    </div>
  );
};

export default Footer;
