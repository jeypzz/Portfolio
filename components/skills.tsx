import type { NextPage } from "next";
import Image from "next/image";
import skills from "../data/skills";
import Heading from "./heading";
import Heading2 from "./heading2";
import { motion } from "framer-motion";
import Seo from "./seo";
interface Props {}

const Skills: NextPage<Props> = () => {
  return (
    <div
      id='skills'
      className='relative h-screen snap-start grid place-content-center'
    >
      <div className='w-[calc(100vw-100px)] z-10  mx-auto'>
        <Heading>Skills</Heading>
        <Heading2 color=''>Hover to see the progress</Heading2>
        <div
          className='grid grid-cols-4 my-10
        gap-5 justify-between mx-auto justify-items-center max-w-xs md:max-w-sm lg:max-w-md'
        >
          {skills.map((el, index) => (
            <Skill key={el.id} index={index} progress='85' src={el.src} />
          ))}
        </div>
      </div>
      <div className='h-52 absolute top-1/2 bg-gray-800 w-full -rotate-12 -skew-x-12' />
    </div>
  );
};

export default Skills;

const Skill = ({ progress, src, index }: any) => {
  return (
    <motion.div
      initial={{
        x: index > 3 && index < 8 ? 120 : -120,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.2,
        ease: "easeOut",
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className='relative group overflow-hidden'
    >
      <div className='overflow-hidden md:w-16 md:h-16 w-12 border rounded-full p-1 h-12 hover:grayscale '>
        <Image objectFit='cover' src={src} layout='responsive' alt='' />
      </div>
      {/* <p className='absolute text-center overflow-hidden opacity-0 top-0 grid place left-1/2 -translate-x-1/2 w-12 md:w-16  md:text-xl  group-hover:opacity-100 pointer-events-none  font-bold bg-black bg-opacity-60 text-white rounded-full py-3 md:py-[18px]'>
        <Seo />
        {progress}%
      </p> */}
      {/* make pointer event none to destroy hover effect disturb */}
    </motion.div>
  );
};
