import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GiIronCross } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);

export default function Section3() {
  const contentData = [
    {
      title: "Growth and ROI",
      text: "Expect a team that looks at problems holistically. A team that designs solutions directly contributing to your revenue growth and business success - not just pretty pictures.",
    },
    {
      title: "Top tier designers",
      text: "Expect the 1% only. Recruited from a global talent pool you’ll have access to some truly talented designers. Heavily vetted - we’ve hired the best to serve the great.",
    },
    {
      title: "Stress free design",
      text: "Expect no extra charge if things need changing. It’s all about you. It’ll be iterated on until you are 100% happy. Once done expect design you and your mom can be proud of.",
    },
    {
      title: "Flexible and scalable",
      text: "Expect flexibility and fluidity. Pause or cancel anytime. Need more resources? No problem. You’ve just found your elastic design on demand team.",
    },
  ];
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".part3",
          start: "50% 50%",
          end: "200% 50%",
          scrub: 1,
          pin: true,
        },
      });
      tl.to(
        ".content1",
        {
          marginTop: "-50%",
          opacity: 1,
        },
        "sct1"
      );
      tl.to(
        ".circle",
        {
          rotate: "180deg",
        },
        "sct1"
      );
      tl.to(
        ".content2",
        {
          opacity: 1,
        },
        "sct2"
      );
      tl.to(
        ".content1",
        {
          marginTop: "-100%",
          opacity: 0,
        },
        "sct2"
      );
      tl.to(
        ".circle",
        {
          rotate: "360deg",
        },
        "sct2"
      );
      tl.to(
        ".content3",
        {
          opacity: 1,
        },
        "sct3"
      );
      tl.to(
        ".content2",
        {
          opacity: 0,
        },
        "sct3"
      );
      tl.to(
        ".content1",
        {
          marginTop: "-145%",
        },
        "sct3"
      );
      tl.to(
        ".circle",
        {
          rotate: "540deg",
        },
        "sct3"
      );
      tl.to(
        ".content4",
        {
          opacity: 1,
        },
        "sct4"
      );
      tl.to(
        ".content3",
        {
          opacity: 0,
        },
        "sct4"
      );
      tl.to(
        ".content1",
        {
          marginTop: "-190%",
        },
        "sct4"
      );
      tl.to(
        ".circle",
        {
          rotate: "720deg",
        },
        "sct4"
      );
      tl.to(
        ".content4",
        {
          opacity: 0,
        },
        "sct5"
      );
      tl.to(
        ".content1",
        {
          marginTop: "-230%",
        },
        "sct5"
      );
      tl.to(
        ".circle",
        {
          rotate: "900deg",
        },
        "sct5"
      );
    },
    { dependencies: [] }
  );
  return (
    <div className="part3 w-full h-svh font-secondary  px-[5vw] sm:px-[2.5vw] relative flex flex-col pt-[4vw] sm:mt-0 sm:flex sm:flex-row sm:justify-between overflow-hidden sm:overflow-hidden">
      <div className="leftDiv sm:w-1/2 sm:h-[100%] py-[16vw] sm:py-0 flex flex-col gap-[6vw] sm:gap-0 sm:justify-center">
        <div className="flex gap-[2vw] sm:gap-0 sm:flex-col">
          <div className="text-[9vw] sm:text-[7vw] font-zentry leading-[8vw]">
            <h2>Services</h2>
          </div>
          <div className="text-[9vw] sm:text-[7vw] font-zentry leading-[8vw]">
            <h2>We Provide</h2>
          </div>
        </div>
        <div className="outerCircle mt-[2vw] w-[14vw] h-[14vw] sm:w-[6.5vw]  sm:h-[6.5vw] bg-primary rounded-full flex items-center justify-center">
          <GiIronCross className="circle" size={60} />
        </div>
      </div>

      <div className="w-full sm:w-2/5 sm:h-[200%]  rghtDiv flex flex-col gap-[18vw] sm:gap-[7vw] mt-[24vw] sm:mt-[32%]">
        {contentData.map((content, index) => (
          <div
            key={index}
            className={`content${
              index + 1
            } flex flex-col gap-[4vw] sm:gap-[2vw] opacity-0`}
          >
            <h4 className="text-[7vw] font-primary text-primary sm:text-[2vw] tracking-tighter">
              {content.title}
            </h4>
            <p className="text-[4vw] sm:text-[1.2vw] sm:leading-[2vw] text-third">
              {content.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
