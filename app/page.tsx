import Bio from './components/Bio';
import Contact from './components/Contact';
import Music from './components/Music';
import Navbar from './components/Navbar';
import Merch from './components/Merch';
import Videos from './components/Videos';
import Footer from './components/Footer';
import SocialMedia from './components/SocialMedia';
import Image from 'next/image';
import leguiyaHome from "@/public/leguiya-home.png";
import smoke from "@/public/pink-cloud-transparent.png";


const Home = async () => {

  return (
    <main>
      <Navbar />
      <section className=''>
        <div className='flex justify-end'>
          <SocialMedia />
        </div>
        <div className='relative'>
          <Image src={leguiyaHome} alt='photo of leguiya' priority className='w-72 right-10' />
          <Image src={smoke} alt='photo of leguiya' priority className='w-3/4 absolute -bottom-[130%] -z-50' />
        </div>
      </section>
      <section>
        <Bio />
        <Music />
        <Videos />
        <Merch />
        <Contact />
        <Footer />
      </section>
    </main>
  )
}

export default Home;
