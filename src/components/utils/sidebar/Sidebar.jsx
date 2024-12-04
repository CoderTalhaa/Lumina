import React, { useState } from "react";
import Scene from "./Scene";

export default function Sidebar() {
  return (
    <div className="relative z-10 hidden lg:block ">
      <nav className="sticky top-0 h-svh min-w-[260px] w-[16vw] p-[1.25vw] lg:p-[24px] flex flex-col">
        <h1 className="font-primary text-6xl text-primary mb-8 hidden lg:block">
          TALHA
        </h1>

        <CanvasLink />
        <div className="mt-auto lg:flex flex-col gap-5 hidden">
          <div className=" relative pl-4 heading">
            <ul>
              <li className="mb-2">LEGAL</li>
              <li className="link ">EULA</li>
            </ul>
          </div>
          <div className=" relative pl-4 heading">
            <ul>
              <li className="mb-2">SOCIALS</li>
              <li className="link mb-2">TWITTER</li>
              <li className="link mb-2">GITHUB</li>
              <li className="link mb-2">FIVERR</li>
              <li className="link mb-2">LINKEDIN</li>
            </ul>
          </div>
          <div className=" relative pl-4 heading">
            <ul>
              <li className="mb-2">SUPPORT</li>
              <li className="link mb-2">talhacust7@gamil.com</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

const link = [
  {
    name: "Adhesion_A",
    node: "Adhesion_A",
  },
  {
    name: "BUNKER_e",
    node: "BUNKER_e",
  },
  {
    name: "Basement_B",
    node: "Basement_B",
  },
  {
    name: "Caniche_C",
    node: "Caniche_C",
  },
  {
    name: "Carpenter_C",
    node: "Carpenter_C",
  },
  {
    name: "Curia_A",
    node: "Curia_A",
  },
  {
    name: "Ffflauta_F",
    node: "Ffflauta_F",
  },
  {
    name: "Trovador_T",
    node: "Trovador_T",
  },
  {
    name: "XERO_X",
    node: "XERO_X",
  },
];
const CanvasLink = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <ul className="relative heading pl-4 hidden lg:block">
      <li className="mb-4">Typefaces</li>
      <div className="absolute top-[-200px] left-[-200px] right-[-350px] bottom-[-300px] z-[-1] pointer-events-none ">
        <div className="relative w-full h-full pointer-events-auto   ">
          <div className="w-full h-full ">
            <Scene hoveredNode={hoveredNode} />
          </div>
        </div>
      </div>

      {link.map((li, i) => (
        <li
          key={i}
          className="linkButton"
          onMouseEnter={() => setHoveredNode(li.node)}
          onMouseLeave={() => setHoveredNode(false)}
        >
          {li.name}
        </li>
      ))}
    </ul>
  );
};
