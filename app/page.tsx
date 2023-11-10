"use client";

import React from 'react';
import { useEffect, useState } from 'react';
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

const Home = () => {


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


// const artist: ArtistData = [{
//   name: "Leguiya",
//   title: "Leguiya's World",
//   bio: "Music has the power to transport us to another time and place. Leguiya harnesses that power with music and melodies that appeal to audiences of music lovers and fellow professionals alike. Since a young age, they have found great joy and satisfaction in making music and sharing it with their dedicated fans. Find out more about them Below."
// }]

// useEffect(() => {
//   fetch("http://localhost:8080/api/artist")
//     .then((res) => res.json())
//     .then((data) => {
//       setData(data.name)
//     })
// }, [])