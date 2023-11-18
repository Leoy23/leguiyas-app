import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Music from "./components/Music";
import Merch from "./components/Merch";
import Videos from "./components/Videos";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import Nav from "./components/Nav";

const Home = () => {
  return (
    <main>
      <Nav />
      <HomeSection />
      <Bio />
      <Music />
      <Videos />
      <Merch />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
