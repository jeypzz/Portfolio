import type { NextPage } from "next";
import { motion } from "framer-motion";
interface Props {}

const BackgroundCircle: NextPage<Props> = () => {
    return (
        <motion.div
        initial={{scale: 2,}}
        animate={{scale: [1.5, 0.2, 1],}}
        transition={{duration: 1,}}
        className='relative  flex justify-center items-center'
        >
            <div className='absolute opacity-30 h-32 w-32 border rounded-full animate-ping' />
            <div className='absolute opacity-5 h-64 w-64 border rounded-full ' />
            <div className='absolute opacity-10 border-rose-300  h-96 w-96 border rounded-full animate-pulse' />
        </motion.div>
    );
};

export default BackgroundCircle;
