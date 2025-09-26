import React from "react";


const FeatureCard = ({card,idx}) => {
  return (
    <div
      key={card.title}
      className={`
                flex flex-col items-center text-center bg-white/10
                backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg
                transition-transform transform hover:scale-105 hover:shadow-2xl duration-200
                ${idx === 1 ? "md:mt-0" : "md:mt-8"}
                w-full md:w-80 mx-auto
                `}
    >
      {card.icon}
      <h4 className="text-white text-xl font-semibold mb-1">{card.title}</h4>
      <p className="text-white/80 text-md">{card.desc}</p>
    </div>
  );
};

export default FeatureCard;
