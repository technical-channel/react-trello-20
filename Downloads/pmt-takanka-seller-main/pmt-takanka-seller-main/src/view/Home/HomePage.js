import React,{useEffect} from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import FeaturedSection from "./components/FeaturedSection";
import HeroSection from './components/HeroSection';
import PlanSection from "./components/PlanSection";
import Reviews from "./components/Reviews";
import WhyChoose from "./components/WhyChoose";

import Testimonial from "./components/Testimonial";



const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection/>
      <WhyChoose/>
      <FeaturedSection/>
      
      <PlanSection/>
  
 
 <Testimonial/> 
    </div>
  );
};

export default HomePage;
