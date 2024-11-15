import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experiences from '../components/Experiences';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Skills from '../components/Skills/Skills';
// import Education from '../components/Education/Education';

export default function Home() {
  return (
    <div className="p-2">
      <Head>
        <title>Sumanth Reddy Bekkem - Software Developer</title>
        <meta 
          name="description" 
          content="Software developer portfolio using Next.js & tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl m-auto">
        <Navbar />
        <Hero />
        {/* <Education /> */}
        <Experiences />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
