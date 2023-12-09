"use client";
import Footer from "@/components/subcomps/Footer";
import NavigationBar from "@/components/subcomps/NavigationBar";
import React from "react";
import Slides from "./subcomps/Slides";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const LandingComponent = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div>
      <NavigationBar />

      <div className="w-full m-auto bg-black">
        <Slides />{" "}
      </div>

      <motion.div
        className="wrapper fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150"
        style={{
          opacity: scrollYProgress, // Use the scroll progress for opacity or other animations
        }}
      >
        <div className="container w-full h-full overflow-hidden bg-opacity-20 bg-white rounded-full">
          <div className="item w-full h-full bg-white transform-origin-center scaleY-scrollYProgress" />
        </div>
      </motion.div>

      <div className="flex flex-col">
        <div className="w-1/2 h-14"></div>
        <div className="w-1/2"></div>
      </div>
      <Footer />
    </div>
  );
}
export default LandingComponent;