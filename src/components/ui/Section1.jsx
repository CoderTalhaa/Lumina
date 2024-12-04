import useTalhaStore from "@/store/useStore";
import { motion } from "framer-motion";
import React, { lazy, Suspense } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { SiEpicgames } from "react-icons/si";
import { FaFantasyFlightGames } from "react-icons/fa6";
import { RiGameFill } from "react-icons/ri";
import { SiGamejolt } from "react-icons/si";
import { SiRepublicofgamers } from "react-icons/si";
import { SiNintendogamecube } from "react-icons/si";
import { SiRockstargames } from "react-icons/si";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const DotLottieReact = lazy(() =>
  import("@lottiefiles/dotlottie-react").then((module) => ({
    default: module.DotLottieReact,
  }))
);

export default function Section1({ id }) {
  const { isLoading } = useTalhaStore();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      gsap.set(".perspective", { perspective: 1000 });

      gsap.set(".line1", {
        rotateX: 90,
        translateY: 80,
        translateX: -20,
        opacity: 0,
      });

      if (isLoading === false) {
        tl.to(".line1", {
          rotateX: 0,
          translateY: 0,
          translateX: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.2,
        }),
          "<";
      }
    },
    { dependencies: [isLoading] }
  );

  return (
    <div
      id={id}
      className="nav-section container  flex flex-col min-h-svh mb-5 relative"
    >
      <div className="relative mt-32 lg:mt-10 z-10">
        <Suspense fallback={<Loader />}>
          <DotLottieReact src="/img/faceLottie.lottie" loop autoplay />
        </Suspense>
      </div>

      <div className="flex flex-col mt-5 lg:mt-0  flex-wrap perspective">
        <div className="flex items-center gap-x-3 ~text-3xl/7xl font-secondary font-bold line1 overflow-clip">
          <span>Elevate</span>
          <motion.div
            className="overflow-clip rounded-full"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="lg:w-[90px] w-10 h-auto aspect-auto object-contain  ">
              <Image alt="a" src={"/img/demo.jpg"} width={100} height={100} />
            </div>
          </motion.div>
          <span>your</span>
          <span className="text-primary font-primary">Digital</span>
        </div>

        <div className="flex flex-wrap ~text-3xl/7xl gap-x-3 font-secondary font-bold line1 overflow-clip">
          <span>Impact,</span>
          <span>turn your</span>
        </div>

        <div className="flex flex-wrap ~text-3xl/7xl gap-x-3 font-secondary font-bold line1 overflow-clip ">
          <span className="text-primary font-primary">Ideas</span>
          <motion.div
            className=" overflow-clip rounded-full"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="lg:w-[90px] w-10 h-auto aspect-auto object-contain  ">
              <Image alt="a" src={"/img/demo.jpg"} width={100} height={100} />
            </div>
          </motion.div>
          <span>into Reality</span>
        </div>
      </div>
      <div className="lg:mt-20 flex flex-wrap mt-5 w-[70vw] ">
        <p className="font-secondary lg:leading-normal leading-none text-2xl/4">
          In a world driven by innovation and creativity, we transform your
          vision into captivating digital experiences. From intuitive design to
          seamless functionality, our team specializes in crafting solutions
          that connect with your audience
        </p>
      </div>
      {/* <MarqueeLane /> */}
    </div>
  );
}

const MarqueeLane = () => {
  const icons = [
    {
      name: <SiEpicgames size={40} />,
      dir: "left",
    },
    {
      name: <FaFantasyFlightGames size={40} />,
      dir: "right",
    },
    {
      name: <SiRepublicofgamers size={40} />,
      dir: "left",
    },
    {
      name: <RiGameFill size={40} />,
      dir: "right",
    },
    {
      name: <SiGamejolt size={40} />,
      dir: "right",
    },
    {
      name: <SiNintendogamecube size={40} />,
      dir: "left",
    },
    {
      name: <SiRockstargames size={40} />,
      dir: "right",
    },
  ];
  return (
    <div className="relative min-w-[60vw] w-[20vw]  h-fit border z-10 overflow-clip">
      <Marquee speed={50}>
        <div className="flex justify-around w-svw overflow-clip">
          {icons.map((icon, i) => (
            <motion.div
              key={i}
              className="z-10 text-primary/80"
              whileHover={{
                scale: icon.dir === "right" ? 1.2 : 2,
                rotate: icon.dir === "right" ? 10 : -10,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {icon.name}
            </motion.div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

function Loader() {
  return (
    <div className="flex justify-center items-center ~text-2xl/6xl font-primary text-primary">
      <p>Loading...</p>
    </div>
  );
}
