import Bio from './components/Bio';
import Contact from './components/Contact';
import Music from './components/Music';
import Navbar from './components/Navbar';
import Merch from './components/Merch';
import Videos from './components/Videos';
import Footer from './components/Footer';



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
    <div>
      <Navbar />
      <Bio />
      <Music />
      <Videos />
      <Merch />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;
