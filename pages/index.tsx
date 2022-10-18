import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about";
import Contact from "../components/contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/projects";
import Seo from "../components/seo";
import Skills from "../components/skills";
import StickyIcon from "../components/sticky-icon";

const Home: NextPage = () => {
  return (
    <div className='bg-gray-900 overflow-x-hidden h-screen snap-y snap-mandatory overflow-scroll z-0  scrollbar-thumb-gray-800 scrollbar-track-gray-700 scrollbar-thin'>
        <Head>
            <title>Portfolio</title>
            <meta name='description' content="Jp Ruelo's portfolio" />
            <link rel="shortcut icon" href="/logo.png" type="image/x-icon"/>
        </Head>

        <main>
            <Seo />
            <section className='snap-start'>
            {/* bug: header */}
            <Header /> <Seo />
            {/* todo: hero */}
            <Hero /> <Seo />
            </section>
            {/* todo: about */}
            <About /> <Seo />
            {/* todo: skills */}
            <Skills /> <Seo />
            {/* bug: projects */}
            <Projects /> <Seo />
            {/* todo: contact me */}
            <Contact /> <Seo />
            {/* todo: sticky icon */}
            <StickyIcon />
        </main>
    </div>
  );
};

export default Home;
