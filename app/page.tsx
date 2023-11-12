import Bio from './components/Bio';
import Contact from './components/Contact';
import Music from './components/Music';
import Navbar from './components/Navbar';
import Merch from './components/Merch';
import Videos from './components/Videos';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';


const Home = async () => {

  return (
    <main className='w-full h-screen'>
      <Navbar />
      <HomeSection />
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
