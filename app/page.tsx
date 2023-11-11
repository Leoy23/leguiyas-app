import Bio from './components/Bio';
import Contact from './components/Contact';
import Music from './components/Music';
import Navbar from './components/Navbar';
import Merch from './components/Merch';
import Videos from './components/Videos';
import Footer from './components/Footer';
import Image from 'next/image';
import leguiyaHome from "@/public/leguiya-home.png";
import smoke from "@/public/smoke-lg.png";



// type ArtistData = Array<{
//   name: string,
//   title: string,
//   bio: string,
// }>;

const Home = async () => {

  const res = await fetch("http://localhost:8080/api/artist")
  const data = await res.json();

  console.log(data.data, "here")

  return (
    <main>
      <Navbar />
      <section className='relative'>
        <Image src={leguiyaHome} alt='photo of leguiya' priority className='w-52' />
        <Image src={smoke} alt='photo of leguiya' priority className='z-10 w-full' />
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
