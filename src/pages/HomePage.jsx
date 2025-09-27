import React from "react";
import LiquidEther from "../components/home/LiquidEther";
import { FaUsers, FaBolt, FaHandshake } from "react-icons/fa";
import FeatureCard from "../components/home/FeatureCard";
import SectionOne from "../components/home/SectionOne";
import HowItWorksSection from "../components/home/HowItWorksStep";

const HomePage = () => (
  <div className="w-full h-screen relative overflow-auto bg-gradient-to-br from-[#1F1F47] via-[#5227FF] to-[#FF80DF]">
    {/* <LiquidEther
      colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
      mouseForce={20}
      cursorSize={100}
      isViscous={false}
      viscous={30}
      iterationsViscous={32}
      iterationsPoisson={32}
      resolution={0.5}
      isBounce={false}
      autoDemo={true}
      autoSpeed={0.5}
      autoIntensity={2.2}
      takeoverDuration={0.25}
      autoResumeDelay={3000}
      autoRampDuration={0.6}
    /> */}

    <div className="absolute inset-0 h-full flex flex-col items-center justify-center z-10 px-4">
      <h1 className="text-white mt-56 text-4xl md:text-6xl font-bold drop-shadow-2xl mb-1 text-center">
        Connect With Developers
      </h1>
      <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-xl mb-3 text-center">
        Build. Collaborate. Grow.
      </h2>
      <p className="text-white/80 text-lg md:text-xl font-medium text-center mb-4 max-w-2xl">
        Find your next project partner or collaborator within our community of
        developers.
        <br />
        Start building something amazing today.
      </p>

      <div className="mt-2 flex gap-4 justify-center">
        <button
          className="px-6 py-2 rounded-lg font-bold text-white bg-gradient-to-r
          from-[#EC3DA0] via-[#B19EEF] to-[#8639F5] hover:from-[#da3791] hover:to-[#6b28bc]
          shadow-xl transition duration-200 border-0 outline-none backdrop-blur-md"
        >
          Start Matching
        </button>
        <button
          className="px-6 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/20
          transition duration-200 font-medium border border-white/10 backdrop-blur-md"
        >
          I have an Account
        </button>
      </div>
      <SectionOne />

    <HowItWorksSection/>
     
    </div>
  </div>
);

export default HomePage;
