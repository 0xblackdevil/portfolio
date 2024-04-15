import Image from "next/image";
import Link from "next/link";
import { socials } from "../utils/social.utils";

export default function AboutComponent() {
  return (
    <div className="lg:w-[800px] w-screen max-h-screen grid grid-cols-1 gap-12 p-10 bg-white ">
      <div className="about_top-row flex justify-between items-center ">
        <Image
          src="/IMG_2546.jpg"
          alt="Meet Zinzuvadiya"
          width={200}
          height={200}
          className=" h-20 w-20 rounded-full bg-black object-cover grayscale"
        />
        <Link
          href="#"
          className="border border-black rounded-full px-8 py-3 text-lg lg:text-2xl"
        >
          close
        </Link>
      </div>
      <div className=" text-3xl">
        <p className="">
          As a full-stack blockchain developer based in Pune, I&apos;ve built my
          career around remote work, which I thoroughly enjoy.
          <br />
          <br />
          The flexibility and productivity it enables are essential to my
          approach, providing me with the perfect environment to innovate and
          succeed.
        </p>
      </div>
      <div className="about_text-block">
        <h3>Creating Delightful Experiences</h3>
        <p>
          I thrive on creating designs that make a difference. Whether it&apos;s
          collaborating with teams or working solo, my goal is to make user
          experiences seamless, beautiful and enjoyable.
        </p>
      </div>
      <div className="about_text-block">
        <h3>Working Remotely</h3>
        <p>
          Remote work is my lifestyle. I&apos;ve honed my skills working with
          teams from all over, proving that distance is no barrier to great
          collaboration.
        </p>
      </div>
      <div className="about_text-block">
        <h3>On the Hunt for Exciting Opportunities</h3>
        <p>
          I&apos;m on the lookout for new challenges that push my limits and let
          me bring my best to the table. If you have an exciting product that
          needs a creative touch, count me in!
          <br />
          <br />
          Let&apos;s connect and make something awesome together!
        </p>
      </div>
      <div className="wrapper">
        <Link
          href="#"
          className="border border-black rounded-full px-8 py-3 text-lg lg:text-2xl"
        >
          Book a call
        </Link>
      </div>
      <div className="about_link-list">
        <div className="flex flex-col lg:flex-row gap-5 text-lg lg:text-2xl">
          {socials.map((social, index) => (
            <div className="flex lg:block" key={index}>
              <Link
                href={social.url}
                className=" border-b border-b-white/30 hover:border-b-white duration-300 pb-2"
              >
                {social.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
