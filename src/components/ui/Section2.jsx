import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Section2({ id }) {
  const textRef1 = useRef();
  const textRef2 = useRef();
  const container = useRef();

  useGSAP(
    () => {
      const line1 = new SplitType(textRef1.current, {
        types: "lines",
      });
      const line2 = new SplitType(textRef2.current, {
        types: "lines",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "30% 30%",
          scrub: true,
          pin: true,
          toggleActions: "play none reverse none",
        },
        defaults: {
          duration: 0.5,
          ease: "power2.inOut",
          stagger: 0.1,
        },
      });

      tl.fromTo(
        line1.lines,
        {
          clipPath: "inset(0 0 0 0)",
          yPercent: 0,
        },
        {
          clipPath: "inset(100% 0 0 0)",
          yPercent: -50,
        }
      )
        .to(".menuNoise", { opacity: 1 }, "-=0.5")
        .set(textRef2.current, { opacity: 1 }, "-=0.5")
        .fromTo(
          line2.lines,
          {
            clipPath: "inset(0 0 100% 0)",
            yPercent: 0,
          },
          {
            clipPath: "inset(0 0 0% 0)",
            yPercent: -50,
          },
          "<"
        );
    },
    { dependencies: [] }
  );
  return (
    <div
      ref={container}
      id={id}
      className="nav-section relative container  h-svh flex items-center justify-center text-center px-2"
    >
      <div className="menuNoise opacity-0"></div>
      <h2 className="~text-2xl/6xl font-secondary" ref={textRef1}>
        Elevate your brand with creativity, strategy, and innovation that
        deliver transformative results and lasting success. Our team combines
        passion and expertise to craft solutions that resonate with your
        audience. Together, we shape ideas into powerful narratives that drive
        meaningful change.
      </h2>
      <h2
        ref={textRef2}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] opacity-0 ~text-2xl/6xl z-10 font-secondary"
      >
        Our commitment to delivering tailored, impactful solutions consistently
        drives growth and builds lasting partnerships. Let’s create meaningful
        experiences that define your vision and amplify your impact. Your
        success is our ultimate measure of achievement and inspiration for
        what’s next.
      </h2>
    </div>
  );
}
