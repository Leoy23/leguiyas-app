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
    <main className=''>
      <Navbar />
      <HomeSection />
      <Bio />
      <Music />
      <Videos />
      <Merch />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home;
