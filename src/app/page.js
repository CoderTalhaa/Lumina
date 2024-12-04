"use client";
import Section1 from "@/components/ui/Section1";
import Section2 from "@/components/ui/Section2";
import Section3 from "@/components/ui/Section3";
import Cursor from "@/components/utils/Cursor";
import LoadingScreen from "@/components/utils/loadingScreen/LoadingScreen";
import { ScrollNav, SectionId } from "@/components/utils/ScrollNav";
import Sidebar from "@/components/utils/sidebar/Sidebar";
import useTalhaStore from "@/store/useStore";
import Lenis from "lenis";
import React, { useEffect, useState } from "react";

export default function Home() {
  const { isLoading, setIsLoading } = useTalhaStore();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
    });

    lenis.stop();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const handleLoadingCompletion = () => {
      setIsLoading(false);
      lenis.scrollTo(0, { immediate: true });
      lenis.start();
    };

    if (!isLoading) handleLoadingCompletion();

    return () => {
      lenis.stop();
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen setIsLoading={setIsLoading} />}
      {/* <Cursor /> */}
      <main className="relative grid grid-cols-auto-1fr  ">
        <Sidebar />
        <div className="relative  container">
          <Section1 id={SectionId.Section1} />
          <Section2 id={SectionId.Section2} />
          <Section3 id={SectionId.Section3} />
        </div>
      </main>
    </>
  );
}
