import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const StickyIcon: NextPage<Props> = () => {
  return (
    <div className='sticky bottom-4 '>
      <Link href='#header'>
        <a>
          <div className='flex justify-end m-6'>
            <div className='w-7 h-7 grayscale hover:sepia rounded-full overflow-hidden '>
              <Image
                objectFit='cover'
                src='https://avatars.githubusercontent.com/u/28097005?s=400&u=2b88d189d554b303e9f94ab3c04aa7ffd5e06d34&v=4'
                layout='fill'
                /* note: use fill for link and fixed for local file */
                alt=''
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default StickyIcon;
