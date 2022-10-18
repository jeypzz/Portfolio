import type { NextPage } from "next";
import { motion } from "framer-motion";
interface Props {
  children: string;
}

const Heading: NextPage<Props> = ({ children }: Props) => {
  return (
    <>
      {" "}
      <motion.h1
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className='tracking-[10px]  font-semibold uppercase text-gray-400 text-2xl lg:3xl text-center mb-10'
      >
        {children}
      </motion.h1>
    </>
  );
};

export default Heading;
