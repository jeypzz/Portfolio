import type { NextPage } from "next";
import { SocialIcon } from "react-social-icons";
interface Props {}
import { motion } from "framer-motion";
import Link from "next/link";

const Header: NextPage<Props> = () => {
  return (
    <div id='header' className='flex justify-between max-w-7xl  mx-auto p-5 '>
        <motion.div
            initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
            }}
            animate={{
            x: 0,
            opacity: 1,
            scale: 1,
            }}
            transition={{ duration: 1.5 }}
        >
            {socialLinks.map((i) => (
            <SocialIcon key={i} url={i} bgColor='transparent' fgColor='gray' />
            ))}
        </motion.div>
        <motion.div
            initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
            }}
            animate={{
            x: 0,
            opacity: 1,
            scale: 1,
            }}
            transition={{ duration: 1.5 }}
        >
            <Link href='#contact'>
            <span className='flex items-center'>
                <SocialIcon network='email' bgColor='transparent' fgColor='gray' />
                <p className='hidden sm:block text-gray-400'>Keep in touch</p>
            </span>
            </Link>
        </motion.div>
    </div>
  );
};

export default Header;
const u = "jeyps";
const socialLinks = [
  `https://github.com/jeypzz`,
  `https://www.linkedin.com/in/john-paolo-ruelo/`
];
