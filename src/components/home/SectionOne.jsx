import React from 'react'
import FeatureCard from './FeatureCard'

import { FaUsers, FaBolt, FaHandshake } from "react-icons/fa";


const SectionOne = () => {
    const FeatureCards = [
      {
        title: "Skill-Based Matching",
        icon: <FaBolt className="text-3xl text-[#EC3DA0] mb-3" />,
        desc:
          "Advanced algorithms match you with developers who complement your skillset and project interests.",
      },
      {
        title: "Team Building",
        icon: <FaUsers className="text-3xl text-[#7C7BCF] mb-3" />,
        desc:
          "Form development teams for hackathons, side projects, or your next startup venture.",
      },
      {
        title: "Instant Collaboration",
        icon: <FaHandshake className="text-3xl text-[#FFD36C] mb-3" />,
        desc:
          "Integrated chat and project management tools let you start building together immediately.",
      },
    ];
  return (
       <section className="mt-32 w-full">
        <h3 className="text-white text-2xl font-bold text-center mb-2">Why Developers Love devTinder</h3>
        <p className="text-white/80 text-base md:text-lg text-center mb-6">
          Built by developers, for developers. Find your tribe in the tech community.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center px-0 md:px-24">
          {FeatureCards.map((card, idx) => (
        <div key={idx}>
              <FeatureCard card={card} idx={idx}/>
        </div>
          ))}
        </div>
      </section>
  )
}

export default SectionOne