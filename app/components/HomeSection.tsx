import SocialMedia from './SocialMedia';
import Image from 'next/image';
import leguiyaHome from "@/public/leguiya-home.png";
import smoke from "@/public/pink-smoke.png";
import logoText from "@/public/leguiya-name.png";

const HomeSection = () => {
    return (
        <section className='w-full'>
            <div className='flex justify-end'>
                <SocialMedia />
            </div>
            <div className='relative'>
                <Image src={logoText} alt="" className='w-full' priority />
                <Image src={leguiyaHome} alt="" className=' w-2/4' priority />
                <div className='mb-20'>
                    <Image src={smoke} alt="" className='-z-30' priority />
                </div>
            </div>
            <div className='w-full h-52 bg-gradient-to-b from-darkPink via-darkerPink to-black text-center flex justify-center items-center font-extrabold align-text-top text-xl md:text-5xl'>
                <h1 className=''>NEW SINGLE OUT NOW</h1>
            </div>
            {/* <div className=''>
                <div className='flex justify-center'>
                    <Image src={logoText} alt='leguiya heading' priority className='w-1/2 h-72 md:w-2/4 md:h-2/4 -z-20 mb-24' />
                </div>
                <div className='flex justify-end'>
                    <SocialMedia />
                </div>
            </div>
            <div className='relative mt-32'>
                <Image src={leguiyaHome} alt='photo of leguiya' priority className='w-52 left-11 absolute -bottom-24' />
                <Image src={smoke} alt='photo of leguiya' priority className='w-full absolute -z-30 -top-24 left-24' />
                <Image src={smoke} alt='photo of leguiya' priority className='w-full absolute -z-30 -top-24' />
                <Image src={smoke} alt='photo of leguiya' priority className='w-full absolute -z-30 -top-24 right-24' />
            </div> */}
        </section>
    )
}

export default HomeSection;
