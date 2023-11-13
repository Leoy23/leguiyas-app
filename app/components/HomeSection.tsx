import SocialMedia from './SocialMedia';
import Image from 'next/image';
import leguiyaHome from "@/public/leguiya-home.png";
import smoke from "@/public/pink-cloud-transparent.png";
import logoText from "@/public/leguiya-name.png";

const HomeSection = () => {
    return (
        <section className=''>
            <div className='flex justify-between'>
                <div className='w-full flex justify-center'>
                    <Image src={logoText} alt="" className='md:static w-full md:w-[60%] lg:w-[44%] lg:-mb-20' priority />
                </div>
                <div className='flex justify-end'>
                    <SocialMedia />
                </div>
            </div>
            <div className='relative'>
                <Image src={leguiyaHome} alt="" className='static ml-24 md:ml-60 w-2/4 md:w-1/4 lg:ml-96 lg:w-[35%]' priority />
                <Image src={smoke} alt="" className='w-full absolute -bottom-20 -z-20 md:-bottom-3/4' priority />
            </div>
            <div className='w-full h-44 bg-gradient-to-b from-darkPink via-darkerPink to-black text-center flex justify-center items-center font-extrabold text-xl md:text-5xl'>
                <h1 className=''>NEW SINGLE OUT NOW</h1>
            </div>
        </section>
    )
}

export default HomeSection;
