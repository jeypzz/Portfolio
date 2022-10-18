import type { NextPage } from "next";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./background-circle";
import { motion } from "framer-motion";
interface Props {}

import Image from "next/image";
import Link from "next/link";
const Hero: NextPage<Props> = () => {
    const [word] = useTypewriter({
        words: ["I am a Jp Ruelo.","I am a Hiker.", "I am a Gamer.", "I am a Front-End Developer.", "I am funny."],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen relative flex flex-col justify-center items-center text-center'>
            <BackgroundCircle />
            <div className=' -mt-16 '>
                <img
                src='https://avatars.githubusercontent.com/u/28097005?s=400&u=2b88d189d554b303e9f94ab3c04aa7ffd5e06d34&v=4'
                height={128}
                width={128}
                alt="Jeyps's Image"
                />
            </div>
            <div className=' text-gray-200 p-2'>
                <h1 className='text-sm lg:text-4xl tracking-[10px] text-gray-400 pb-2'>
                {" "}
                Hello there
                </h1>
                <h3 className='font-semibold px-10 text-3xl lg:text-4xl inline-block lg:pt-4'>
                {word} <Cursor />
                </h3>
            </div>
            <Link href='/resume.pdf'>
                    <a 
                    className={buttonClass + " " + "border border-gray-800 "}
                    >
                    View CV
                    </a>
                </Link>
            {/* note: link section */}
            <motion.div
                initial={{
                y: 500,
                scale: 2,
                opacity: 0,
                }}
                animate={{
                y: 0,
                scale: 1,
                opacity: 1,
                }}
                transition={{
                duration: 0.75,
                }}
                className='absolute bottom-32'
            >
                {links.map((el) => (
                <Link key={el} href={`#${el}`}>
                    <a className='text-gray-500 px-3 hover:text-gray-400 hover:border-gray-700 rounded-full border border-gray-800 mx-1 uppercase  text-xs md:text-sm '>
                    {el}
                    </a>
                </Link>
                ))}
            </motion.div>
        </div>
);
};

export default Hero;

const links = ["about", "skills", "projects"];
const buttonClass =
  " text-gray-400 px-5 py-2 hover:bg-gray-700 hover:text-gray-100 rounded-md shadow-md uppercase font-semibold hover:ring ring-gray-800 ring-1";