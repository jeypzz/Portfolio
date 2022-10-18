import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow } from "swiper";

import type { NextPage } from "next";
import projects from "../data/projects";
import Image from "next/image";
import Heading2 from "./heading2";
import Link from "next/link";
import Seo from "./seo";

interface Props {}

const ProjectSlider: NextPage<Props> = () => {
  return (
    <>
        <Swiper
            style={{ width: "75vw", marginTop: "28px" }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            //must use auto to get rid from false render issue
            loop={true}
            autoplay={{
            delay: 2000,
            }}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            breakpoints={{
            739: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                centeredSlides: false,
            },
            1200: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                centeredSlides: false,
            },
            }}
            modules={[EffectCoverflow, Autoplay]}
            className='mySwiper'
        >
            {projects.map((el) => (
            <SwiperSlide key={el.id}>
                {({ isNext }) => (
                <div className='max-w-sm mx-auto bg-gray-800 bg-opacity-10 shadow-lg p-4 rounded-xl'>
                    <div className='overflow-hidden h-56 rounded-xl'>
                    {/* <Seo /> */}
                    <Image
                        objectFit='cover'
                        src={el.src}
                        layout='responsive'
                        alt=''
                    />
                    </div>
                    <Heading2 color={`text-white my-5 text-left`}>
                    {el.title}
                    </Heading2>
                    <div className='space-x-4'>
                    <Link href={el.github}>
                        <a className={buttonClass + " " + " bg-gray-800"}>Github</a>
                    </Link>
                    <Link href={el.link}>
                        <a 
                        className={buttonClass + " " + "border border-gray-800 "}
                        >
                        Live Website
                        </a>
                    </Link>
                    </div>
                </div>
                )}
            </SwiperSlide>
            ))}
        </Swiper>
    </>
  );
};

export default ProjectSlider;

const buttonClass =
  " text-gray-400 px-5 py-2 hover:bg-gray-700 hover:text-gray-100 rounded-md shadow-md uppercase font-semibold hover:ring ring-gray-800 ring-1";
