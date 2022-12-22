import { Button, Card } from "antd";
import React from "react";

import { AiFillBehanceCircle } from "react-icons/ai";
import { SlGraph } from "react-icons/sl";
import { Link } from "react-router-dom";
import DiscoverSection from "./sections/DiscoverSection";
import FactiblitySection from "./sections/FactiblitySection";
import FeaturedSection from "./sections/FeaturedSection";
import HeroSection from "./sections/HeroSection";
function Home() {
  return (
    <div>
      {" "}
      <HeroSection />
      <FeaturedSection />
      <main className="max-w-[1100px] mx-auto ">
        <DiscoverSection />
      </main>
      <FactiblitySection />
    </div>
  );
}


export default Home;
