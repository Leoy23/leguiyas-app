"use client";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoPatreon } from "react-icons/bi";
import { BiLogoSpotify } from "react-icons/bi";
import { BiLogoApple } from "react-icons/bi";


const SocialMedia = () => {
    return (
        <div className="p-6 hidden md:flex md:flex-col md:gap-4">
            <BiLogoInstagram className="text-darkPink w-6 h-6" />
            <BiLogoFacebookSquare className="text-darkPink w-6 h-6" />
            <BiLogoTiktok className="text-darkPink w-6 h-6" />
            <BiLogoYoutube className="text-darkPink w-6 h-6" />
            <BiLogoPatreon className="text-darkPink w-6 h-6" />
            <BiLogoSpotify className="text-darkPink w-6 h-6" />
            <BiLogoApple className="text-darkPink w-6 h-6" />
        </div>
    )
}

export default SocialMedia;
