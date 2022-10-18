import type { NextPage } from "next";
import Heading from "./heading";
import Heading2 from "./heading2";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
interface Inputs {
  email: string;
  name: string;
  subject: string;
  message: string;
}
interface Props {}

const Contact: NextPage<Props> = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hzirwc5",
        "template_2uskmzj",
        form.current,
        "A3d_L3wl_qezwX6S6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id='contact' className='h-screen snap-start grid place-content-center max-w-md mx-auto'>
        <div>
            <Heading>Contact</Heading>
            <Heading2 color=''>Connect with me</Heading2>
            <section className='text-gray-400 my-4 flex flex-col font-semibold  gap-x-5 justify-center items-center gap-y-2'>
            {contact.map((el) => (
                <div className='flex items-center gap-1' key={el.data}>
                <span>{el.icon}</span> <p>{el.data}</p>
                </div>
            ))}
            </section>
            <form
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col gap-3 mt-6'
            >
            <div className='space-x-3'>
                <input
                name='from_name'
                placeholder='Name'
                className={inputstyle}
                type='text'
                />
                <input
                placeholder='Email'
                className={inputstyle}
                name='from_email'
                type='email'
                />
            </div>
            <input
                placeholder='Subject'
                className={inputstyle}
                name='subject'
                type='text'
            />
            <textarea
                name='message'
                placeholder='Message'
                className={inputstyle}
            />
            <button
                type='submit'
                className={
                inputstyle +
                " !p-4 !bg-gray-400 text-gray-900 font-semibold active:scale-95 cursor-pointer transition-transform duration-300 hover:!bg-gray-300"
                }
            >
            Send
            </button>
            </form>
        </div>
    </section>
  );
};

export default Contact;

const inputstyle =
  "placeholder:text-gray-600 placeholder:font-semibold bg-gray-800 p-2 outline-none rounded-md text-gray-400";
const contact = [
  {
    icon: <BsTelephoneFill />,
    data: " +63 9675 617 583",
  },
  {
    icon: <HiMail />,
    data: "jeypiruelo@gmail.com",
  }
];
