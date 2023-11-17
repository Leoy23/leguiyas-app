import SocialMedia from "./SocialMedia";
import Image from "next/image";
import leguiyaMobile from "@/public/leguiya-mobile.png";
import leguiyaDesktop from "@/public/leguiya-clouds.png";
import logoText2 from "@/public/logo-text.png";

const HomeSection = () => {
  return (
    <section className="max-w-full">
      <div className="flex justify-between">
        <div className="w-full flex justify-center">
          <Image
            src={logoText2}
            alt=""
            className="flex-shrink-0 md:static md:w-full"
            height={300}
            priority
          />
        </div>
        <div className="flex justify-center">
          <SocialMedia />
        </div>
      </div>
      <div>
        {" "}
        <Image
          src={leguiyaMobile}
          alt="leguiya mobile"
          className="min-[426px]:hidden"
          priority
        />
        <Image
          src={leguiyaDesktop}
          alt="leguiya desktop image"
          priority
          className="hidden min-[426px]:block min-[426px]:w-full"
        />
      </div>
      <div className="w-full h-44 bg-gradient-to-b from-darkPink via-darkerPink to-black text-center p-10 font-extrabold text-xl md:text-5xl">
        <h1 className="">NEW SINGLE OUT NOW</h1>
      </div>
    </section>
  );
};

export default HomeSection;
