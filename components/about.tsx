import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "./heading";
interface Props {}

const About: NextPage<Props> = () => {
  return (
    <div
      id='about'
      className='h-screen grid text-gray-400 place-content-center snap-start'
    >
      <div>
        {/* Content will be here */}
        <Heading>About me</Heading>
        <div className='flex flex-col gap-10 md:flex-row justify-center items-center md:w-3/4 mx-auto'>
            <motion.div
                initial={{
                x: -100,
                opacity: 0,
                }}
                whileInView={{
                x: 0,
                opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                delay: 0.2,
                duration: 1,
                }}
                className='basis-1/2 w-56 h-56 md:w-72 md:h-72 mx-auto rounded-full   md:rounded-lg overflow-hidden'
            >
                <Image
                objectFit='cover'
                height={"500px"}
                width={"500px"}
                src='/DSC00096.JPG'
                alt='About Image'
                />
            </motion.div>
            <motion.article
                initial={{
                x: 100,
                opacity: 0,
                }}
                whileInView={{
                x: 0,
                opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                duration: 1,
                }}
                className='basis-1/2 text-justify px-5'
            >
                <h4 className='font-semibold text-xl pb-4 text-center text-white'>
                Software Engineer.
                </h4>
                <p className='text-gray-200'>
                I am <b>John Paolo Ruelo</b>. I am a software engineer from Philippines. Growing up, 
                I have done different kind of job, teaching me to be adaptive with my environments 
                and surroundings. I always enjoyed making new friends and facing the new challenges 
                every place would bring me.
                </p>
                <p className='text-gray-200'>
                I grew up constantly playing different games which is where I developed 
                a love for collaborating with a team to obtain a common goal. Originally, 
                I wanted to work in medicine because I thought it was the perfect place to 
                learn and to solve problems. With medicine, however, there is very little 
                room for mistakes. Software engineering, on the other hand, embraces the mistakes: 
                bugs are a big part of the field. It provides the best landscape for me to learn 
                and solve problems.
                </p>
            </motion.article>
        </div>
      </div>
    </div>
  );
};

export default About;
