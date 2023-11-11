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
        <div className="p-8">
            <BiLogoInstagram className="text-darkPink" size={30} />
            <BiLogoFacebookSquare className="text-darkPink" size={30} />
            <BiLogoTiktok className="text-darkPink" size={30} />
            <BiLogoYoutube className="text-darkPink" size={30} />
            <BiLogoPatreon className="text-darkPink" size={30} />
            <BiLogoSpotify className="text-darkPink" size={30} />
            <BiLogoApple className="text-darkPink" size={30} />
        </div>
    )
}

export default SocialMedia;
